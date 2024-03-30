# 3mtt node js

- api calls

Initialize project by typing `npm init`

accept the defaults for most of the items

then create a `index.js` file in the root of your project if this is not done automatically when creating the project via `npm init`

modify the package.json to resemble by adding start in the scripts part of `package.json`

# ![package](assets\package-json-scripts.PNG)

add express as a dependency in the project
by running `npm install express`

then in the `index.js` type the following

```js
const express = require("express");
const app = express();

// Parse JSON bodies for this app. Make sure you put
// `app.use(express.json())` **before** your route handlers!
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

// to make it a post request
app.post("/short-message", (req, res) => {
  const body = req.body;

  // to signify that you are sending json, for the receiver
  res.json({
    message: `You are awesome ${body?.name} for reaching here 🎉🎉🎉🎺🎺🎺`,
  });
});

// to set the port number this can be changed to suit your needs
const port = 3000;

// to initialize the app
app.listen(port, () => {
  console.log(`skill-canvas-BE app listening on port http://localhost:${port}`);
});
```

<!-- ![index.js source code](assets\index-js.PNG) -->

Note: before you make the following a git repo add and `.env` file to include the following to prevent the unneeded files from being pushed to git

```env

node_modules
.env
.env.*
```
