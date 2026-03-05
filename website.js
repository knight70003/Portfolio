const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {



    let collectHeaderdata=fs.readFileSync("html/header.html", "utf-8")


    let file="/home";
    if(req.url!=="/"){
        file=req.url;
    }

    if (req.url != "/style.css") {
        fs.readFile("html"+file+".html", "utf-8", (error, data) => {
            if (error) {
                res.writeHead(500, { "content-type": "text/plain" })
                res.end("internal server error")
                return false
            }
console.log();
            res.write(collectHeaderdata+""+data);
            res.end();
        })
    } else if (req.url == "/style.css") {
        fs.readFile("html/style.css", "utf-8", (error, data) => {
            if (error) {
                res.writeHead(500, { "content-type": "text/plain" })
                res.end("css not found")
                return false
            }
            res.writeHead(200, { "content-type": "text/css" })

            res.end(data)
        })
    }





}).listen(9999)