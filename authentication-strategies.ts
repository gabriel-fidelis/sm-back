import { compare, hash } from "bcrypt";
import { JsonWebTokenError, sign, verify } from "jsonwebtoken";
import passport from "passport";
import { Strategy } from "passport-local";
import {Strategy as BearerStrategy}  from "passport-http-bearer";
import { StudentDAO } from "./dao/studentDAO";

export class Authentication {
  _studentDAO: StudentDAO = new StudentDAO();

  generateStrategy() {
    passport.use(
      "local",
      new Strategy(
        {
          usernameField: "username",
          passwordField: "password",
          session: false,
        },
        async (username, password, done) => {
          try { 
            const foundUser = await this._studentDAO.getStudentByUsername(username);
            if (!foundUser) { 
              throw new Error("Usuário não encontrado.");
            }
            const userObject = JSON.parse(JSON.stringify(foundUser)); //this takes off the metadatas from the object, leaving only the useful data (I'm not crazy I swear)
            const value = await this.checkPassword(password, userObject);
            if (!value) { 
              throw new Error("Senha Inválida.");
            }
            done(null, userObject);
           }
          catch (err) { 
            done(err);
          }
        }
      )
      );

    passport.use(
      "bearer",
      new BearerStrategy( async (token, done) => { 
        try { 
          console.log(token);
          const payload:any = verify(token, process.env.TOKEN_PASSWORD);
          const user = await (await this._studentDAO.getStudentById(payload.id));
          const userObject = JSON.parse(JSON.stringify(user));
          done(null, userObject);
        }
        catch (err) { 
          done(err);
        }
      })
    )
  }



  //Token
  static createToken(user) {
    const payload = { 
      id: user.id
    } 

    const token = sign(payload, process.env.TOKEN_PASSWORD);
    return token;
  }

  //Password
  async checkPassword(password, user) {
    return compare(password, user.password);
  }

  static async generatePassword(password: string) {
    if (password.length < 8 || password.length > 18) {
      throw new Error("Password must be between 8 and 18 characters.");
    }
    return hash(password, 12);
  }
}
