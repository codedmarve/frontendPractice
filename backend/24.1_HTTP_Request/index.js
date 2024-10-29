
import express from "express"

const app = express();
const port = 3000;

app.get("/", (req, res) => {

	console.log(req);
	res.send("<h1>Hello World!!!</h1>")
})

app.get("/about", (req, res) => {

	console.log(req);
	res.send("<h1>About Me</h1><p>I am Marvellous Oduwole</p>")
})

app.get("/contact", (req, res) => {

	console.log(req);
	res.send("<h1>contact Me</h1><p>Phone: +4915257206912");
})


app.listen(3000, () => {
	
	console.log(`server is running on port ${port}`);
});