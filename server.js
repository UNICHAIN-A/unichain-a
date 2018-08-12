const express = require("express");
const app = express();

// serve the react app files
app.use(express.static(`${__dirname}/app/build`));

app.get("/api/Hello", (req, res) =>
  res.send({ message: "UNICHAIN - BLOCKCHAIN" })
);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
