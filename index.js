const express = require("express");
//const graphqlHTTP = require("express-graphql");
const { graphqlHTTP } = require("express-graphql");
//const graphql = require("graphql");
const { graphql } = require("graphql");
const schema = require("./schema/schema");
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT;
const app = express();

const corsOptions = {
  origin: [process.env.ORIGIN, process.env.ORIGIN_DEV],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://swapkam:Esc-F1F2F3@swapkam.swqrcq0.mongodb.net/db?retryWrites=true&w=majority");
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.get("/", (req, res) => {
  res.send("swapkam api is working");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
