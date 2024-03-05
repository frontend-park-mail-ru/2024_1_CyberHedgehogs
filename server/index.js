import express from "express";
import { makeFinalPage } from "./parser.js";

const PORT = 3030;
const HOST = "localhost";

const app = express();
app.use(express.static('src'));

app.get("/*", (request, response) => {
    response.setHeader("Content-Type", "text/html")
    response.send(makeFinalPage());
});


app.listen(PORT, HOST, () => {
    console.log(`Frontend server runs on: http://${HOST}:${PORT}`);
});
