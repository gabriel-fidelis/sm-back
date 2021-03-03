import { compare, hash } from "bcrypt";
import passport from "passport";
import { Strategy } from "passport-local";
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
          let foundUser;
          this._studentDAO.getStudentByUsername(username).then(
            async (found) => {
              try {
                if (!found) {
                  throw new Error("Usuário não encontrado.");
                }
                foundUser = JSON.parse(JSON.stringify(found));

                const value = await this.checkPassword(password, foundUser);

                if (!value) { 
                    throw new Error("Senha Inválida.");
                }

                done(null, foundUser);
              } catch (err) {
                done(err);
              }
            },
            (err) => done(err)
          );
        }
      )
    );
  }

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
