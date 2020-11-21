import { getRoutes } from "../routes/routes";
import { App } from "./app";


const PORT = 3000;
export const app:App = new App();
app.expressApp.listen(PORT, () => { 
    console.log("Express server listening on port:" + PORT);
});

getRoutes(app.expressApp);
