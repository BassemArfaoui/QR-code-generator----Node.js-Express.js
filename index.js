import express from "express";
import bodyParser from "body-parser";
import qr from "qr-image";
import fs from "fs";



const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({  extended: true}));

app.get("/", (req, res) => {
 

    res.render("index.ejs");
  });


app.post("/submit", (req, res) => {
    console.log(req.body);
    let url=req.body.url;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("public/images/qr-code.png"));
    res.render("index.ejs",{pic:"images/qr-code.png"})
});


app.listen(port, () => {
console.log(`Server running on port ${port}`);
});