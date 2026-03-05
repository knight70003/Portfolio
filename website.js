const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 9999;

http.createServer((req, res) => {

    let collectHeaderdata = fs.readFileSync("html/header.html", "utf-8");

    let file = "home";

    if (req.url !== "/") {
        file = req.url.replace("/", "");
    }

    // CSS handle
    if (req.url === "/style.css") {

        fs.readFile("html/style.css", "utf-8", (error, data) => {
            if (error) {
                res.writeHead(500, { "content-type": "text/plain" });
                res.end("CSS not found");
                return;
            }
            res.writeHead(200, { "content-type": "text/css" });
            res.end(data);
        });

    } else {

        fs.readFile(`html/${file}.html`, "utf-8", (error, data) => {
            if (error) {
                res.writeHead(404, { "content-type": "text/plain" });
                res.end("Page not found");
                return;
            }

            res.writeHead(200, { "content-type": "text/html" });
            res.end(collectHeaderdata + data);
        });

    }

}).listen(PORT, () => {
    console.log("Server running on port " + PORT);
});