import express from "express";
import { makeFinalPage } from "./parser.js";

const DEV_PORT = 3030;
const BUILD_PORT = 8080;

const PORT =
    process.argv[2] && process.argv[2] === "-b" ? BUILD_PORT : DEV_PORT;
const HOST = "127.0.0.1";

const app = express();
app.use(express.static("src"));

app.get("/*", (request, response) => {
    response.setHeader("Content-Type", "text/html");
    response.send(makeFinalPage());
});

app.listen(PORT, HOST, () => {
    console.log(`Frontend server runs on: http://${HOST}:${PORT}`);
});
