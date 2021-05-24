import express, { Application } from "express";
import * as bodyParser from "body-parser"
import passport from "passport";
import { Authentication } from "../authentication-strategies";
import { setAuthMiddlewares } from "../middlewares/authentication-middlewares";

export class App {
    expressApp:Application;

    constructor() { 
        this.expressApp = express();
        this.expressApp.use(bodyParser.json()); 
        this.expressApp.use(bodyParser.urlencoded({ extended: true }));
        this.expressApp.use(passport.initialize());
        this.expressApp.use(passport.session());
        new Authentication().generateStrategy();
        //setting middlewares
        setAuthMiddlewares(this.expressApp);
    }   
}
