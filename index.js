let http = require("http");
let fs = require("fs");
let indexPage = "index.html";
let aboutPage = "about.html";
let contactPage = "contact-me.html";
let notFoundPage = "404.html";

http.createServer((req, res) => {
    const loadPage = (page) => {
        fs.readFile(page, function (err, data) {
            if (err) throw err;
            res.writeHead(200, { "Content-type": "text/html" });
            res.write(data);
            return res.end();
        });
    };

    switch (req.url) {
        case "/":
            loadPage(indexPage);
            break;
        case "/about":
            loadPage(aboutPage);
            break;
        case "/contact-me":
            loadPage(contactPage);
            break;
        default:
            loadPage(notFoundPage);
    }
}).listen(8080, () => {
    console.log("listening on port 8080");
});
