//Application controller

import '@babel/polyfill/noConflict';

import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import { $, plugins, controllers } from "@dekproject/scope";
import routes from "@dekproject/routes";

(async () => {
    dotenv.config(); //Load .env

    $.set("app", express());
    $.set("dev", !(process.env.NODE_ENV === 'production'));

    $.app.use(bodyParser.urlencoded({ extended: false }));
    $.app.use(bodyParser.json());

    await plugins($.dev ? "src/plugins" : "build/plugins");

    const PORT = process.env.PORT || 5555;

    $.wait("mongoose").then(async () => {
        $.app.use("/api", await routes($.dev ? "src/routes" : "build/routes"));

        $.app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}!`);
        });
    });
})();
