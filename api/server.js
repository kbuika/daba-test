const express = require("express");
const dotenv = require("dotenv");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");
const cors = require("cors");

const { connectDB } = require("./db");
const app = express();
app.use(cors());

dotenv.config();

connectDB();

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the API" });
});

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
