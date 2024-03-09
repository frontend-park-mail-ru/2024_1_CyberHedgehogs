import http from "http";
import crypto from "crypto";

let server = http.createServer((request, response) => {
    if (
        request.url === "/" ||
        request.url === "/register" ||
        request.url === "/login" ||
        request.url === "/profile"
    ) {
        const cookieHeaders = request.headers.cookie;
        if (cookieHeaders) {
            const cookies = cookieHeaders
                .split(";")
                .map((cookie) => cookie.trim().split("="));
            const cookieDict = {};
            for (const pair of cookies) {
                cookieDict[pair[0]] = pair[1];
            }
            // console.log(cookieDict)
        } else {
            console.log("message 1");
        }

        response.writeHead(200, {
            "Content-Type": "application/json",
            "Set-Cookie": `session_id=${crypto.randomUUID()}; max-age=60`,
            "Access-Control-Allow-Origin": "http://localhost:3030",
            "Access-Control-Allow-Methods": "GET,POST",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Credentials": true,
        });

        if (request.method === 'GET'){
            response.end(JSON.stringify({ data: "Get succes!" }));
        } else {
            response.end(JSON.stringify({ data: "Hello there" }));
        }
    } else {
        response.writeHead(404, {
            "Content-Type": "text/plain; charset=utf-8",
        });
        response.end("Page not found");
    }
});

const PORT = 3031;
const HOST = "localhost";

server.listen(PORT, HOST, () => {
    console.log(`Test server started on http://${HOST}:${PORT}`);
});
