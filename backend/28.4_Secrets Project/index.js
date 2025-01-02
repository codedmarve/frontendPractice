// HINTS:
// 1. Import express and axios

import axios from "axios";
import ejs from "ejs";
import express from "express";

const port = 3001;
const app = express();
app.use(express.static("public"));
 
// 2. Create an express app and set the port number.
app.get("/", async (req, res) => {

	try {
		const response = await axios.get("https://secrets-api.appbrewery.com/random");
		const result = response.data;
		res.render("index.ejs", {secret: result.secret, user: result.username } );
	  } catch (error) {
		console.error(error);
	  }
	
	// res.render("index.ejs", { secret: response.body.secret, user: response.body.username } );
});

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
