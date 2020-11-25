import { getRoutes } from "../routes/routes";
import { App } from "./app";


export const app:App = new App();
app.expressApp.listen(3000);

getRoutes(app.expressApp);
