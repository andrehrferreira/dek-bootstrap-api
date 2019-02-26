//Application controller

import express from "express";
import dotenv from "dotenv";

import { $, plugins, controllers } from "@dekproject/scope";
import routes from "@dekproject/routes";

(async () => {
    dotenv.config(); //Load .env

    $.set("app", express());
    await plugins(process.env.PLUGIN_PATH || "src/plugins");
    await controllers(process.env.CONTROLLERS_PATH || "src/controllers");

    //Import proxy if exists
    try{
        const proxy = require("./proxy");

        if(typeof proxy.default == "function" && process.env.BACKEND_ALIAS){
            $.app.use(process.env.BACKEND_ALIAS, await routes(process.env.ROUTES_PATH || "src/routes"));
            $.app.use(await proxy.default());
        }
        else{
            $.app.use(await routes(process.env.ROUTES_PATH || "src/routes"));
        }
    } catch(e){
        $.app.use(await routes(process.env.ROUTES_PATH || "src/routes"));
    }

    const PORT = process.env.PORT || 5555;

    $.app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    });
})();
