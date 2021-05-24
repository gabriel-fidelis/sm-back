import { Application } from "express";
import passport from "passport";
import { Authentication } from "../authentication-strategies";

export function setAuthMiddlewares(app:Application) { 
  //Login middleware
  app.use('/students/login', (req, res, next) => { 
    passport.authenticate('local', {session:false}, (err, user, info) => { 
      //Request Validation
      if (err && err.name === 'InvalidArgumentError') {
          return res.status(401).json({ erro: err.message });
        }

      else if (err) {
          return res.status(500).json({ erro: err.message });
        }

      else if (!user) {
          return res.status(401).json();
        }

        req.user = user;
        next();
  }) (req, res, next);
  })

  //Bearer token middleware
  app.use("/students", (req, res, next) => { 
    passport.authenticate('bearer', {session: false}, (err, user, info) => { 
      if (!user) { 
        res.status(401).send();
      }
      if (err) { 
        if (err.name == "TokenExpiredError") { 
          res.status(401).json({error:err.message, expiredIn:err.expiredAt});
        }
        else { 
          return res.status(401).json({err: err.message});
        }
      }
      req.user = user;
      next();
    }) (req, res, next);
  })
}