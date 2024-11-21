import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


const locals = {
	
	h1: "",
	fullName: "",
	nameLength: 0,

};

app.get("/", (req, res) => {

	locals.nameLength = 0;
	res.render("index.ejs", locals);
});

app.post("/submit", (req, res) => {
	
	locals.fullName = req.body.fName + req.body.lName;
	locals.nameLength = locals.fullName.length;
	locals.h1 = `There are ${locals.nameLength} letters in your name`;

	res.render("index.ejs", locals);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
