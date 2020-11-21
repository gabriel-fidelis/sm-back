import express, { Application } from "express";
import * as bodyParser from "body-parser"

export class App {
    expressApp:Application;

    constructor() { 
        this.expressApp = express();
        this.expressApp.use(bodyParser.json());
    }   
}
