const express = require("express");
const serveStatic = require("serve-static");
const { join } = require("path");

const app = express();
const port = process.env.PORT || 3333;

app.use(serveStatic(join(__dirname, "dist")));

app.listen(port);
