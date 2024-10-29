//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming


import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
var match = false;

app.use(bodyParser.urlencoded({ extended: true}));

function passwordCheck(req, res , next) {

	if (req.body.password === "ILoveProgramming")
		match = true;
	next();
}

app.use(passwordCheck);

app.post("/check", (req, res) => {

	console.log(req.body);
	if (match)
		res.sendFile(__dirname + "/public/secret.html");
	match = false;
});

app.get("/", (req, res) => {

	res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});