import  express from "express"
import  ejs from "ejs"

const port = 3000;
const app = express();

app.get("/", (req, res) => {

	const date = new Date();
	const today = date.getDay();

	if (today === 6 || today === 0)
		res.render("index.ejs", {name: "It's the weekend, its time to have fun!"});
	else
		res.render("index.ejs", {name: "It's a weekday, it's time to work hard!"});
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});