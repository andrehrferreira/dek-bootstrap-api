//Application controller

import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import { $, plugins, controllers } from "@dekproject/scope";
import routes from "@dekproject/routes";

(async () => {
    dotenv.config(); //Load .env

    $.set("app", express());
    $.app.use(bodyParser.urlencoded({ extended: false }));
    $.app.use(bodyParser.json());

    await plugins(process.env.PLUGIN_PATH || "src/plugins");

    const PORT = process.env.PORT || 5555;

    $.wait("mongoose").then(async () => {
        $.app.use("/api", await routes(process.env.ROUTES_PATH || "src/routes"));

        $.app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}!`);
        });
    });
})();
