import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

function logger(req, res, next) {

	console.log(`Request Method: ${req.method}\nRequest URL: ${req.url}`);
	next();
}

app.use(bodyParser.urlencoded({ extended: true}));

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
