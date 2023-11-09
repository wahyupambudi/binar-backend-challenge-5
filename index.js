require("dotenv").config();

const express = require("express");
const app = express();
const router = require("./routes/route");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const swaggerDef = require("./helper/swagger_template.helper");
const port = process.env.PORT || 3000;

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Implementation Swagger to Backend Challenge 5",
      version: "1.0.0",
      description: "API MyBank for Users, Accounts, Transactions",
    },
    servers: [
      {
        url: "http://localhost:8080",
      },
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: [
    "./routes/user.route.js",
    "./routes/account.route.js",
    "./routes/transaction.route.js",
  ],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});