const url = "http://localhost:3031";

export class NetAPI {
    constructor(path, method) {
        this.path = path;
        this.method = method;
    }

    async send(body) {
        if (this.method === "GET") {
            alert("aaa");
        } else if (this.method === "POST") {
            try {
                const response = await fetch(url + this.path, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                    },
                    body,
                    credentials: "include",
                });
                const json = await response.json();
                return json;
            } catch (err) {
                console.log(err);
                throw err;
            }
        }
    }
}
