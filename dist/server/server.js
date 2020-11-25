"use strict";
exports.__esModule = true;
exports.app = void 0;
var routes_1 = require("../routes/routes");
var app_1 = require("./app");
exports.app = new app_1.App();
exports.app.expressApp.listen();
routes_1.getRoutes(exports.app.expressApp);
