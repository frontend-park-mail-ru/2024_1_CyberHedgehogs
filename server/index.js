import express from "express";
import os from "os";
import { makeFinalPage } from "./parser.js";

const DEV_PORT = 3030;
const BUILD_PORT = 8080;

const DEV_HOST = "localhost";
const BUILD_HOST = Object.values(os.networkInterfaces())
    .flat()
    .find((iface) => iface.family === "IPv4" && !iface.internal).address;

const PORT =
    process.argv[2] && process.argv[2] === "-b" ? BUILD_PORT : DEV_PORT;
const HOST =
    process.argv[2] && process.argv[2] === "-b" ? BUILD_HOST : DEV_HOST;

const app = express();
app.use(express.static("src"));

app.get("/*", (request, response) => {
    response.setHeader("Content-Type", "text/html");
    response.send(makeFinalPage());
});

app.listen(PORT, HOST, () => {
    console.log(`Frontend server runs on: http://${HOST}:${PORT}`);
});
