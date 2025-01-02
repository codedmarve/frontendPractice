import express from "express";
import axios from "axios";

const app = express();
const port = 3001;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "marve";
const yourPassword = "marve";
const yourAPIKey = "1c2c87e4-f4f1-45d4-8ca6-34eae2cc606f";
const yourBearerToken = "4fe6e64e-2d64-4eeb-8f15-eb9857cdc955";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  try {
    const response = await axios.get(`${API_URL}random`);
	const data = JSON.stringify(response.data);
    res.render("index.ejs", { content: data });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", { content: "Try again in few minutes!" });
  }
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
	try {
		const response = await axios.get(`${API_URL}all?page=2`, {
			auth: {
				username: yourUsername,
				password: yourPassword,
			  },
		});
		const data = JSON.stringify(response.data);
		res.render("index.ejs", { content: data });
	} catch (error) {
		console.error("Failed to make request:", error.message);
		res.render("index.ejs", { content: "Try again in few minutes!" });
	  }
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.

  	try {
		const response = await axios.get(`${API_URL}filter`, {
			params: {
				apiKey: yourAPIKey,
				score: '5'
			},
		});
		const data = JSON.stringify(response.data);
		res.render("index.ejs", { content: data });
	} catch (error) {
		console.error("Failed to make request:", error.message);
		res.render("index.ejs", { content: error.message });
	}
});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
	try {
		const response = await axios.get(`${API_URL}secrets/1`, {
			headers: { 
				Authorization: `Bearer ${yourBearerToken}`
			},
		});

		const data = JSON.stringify(response.data);

		res.render("index.ejs", { content: data });
	} catch (error) {
		console.error("Failed to make request:", error.message);
		res.render("index.ejs", { content: "Try again in few minutes!" });
	}
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
