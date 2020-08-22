const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./client/"));

const apiRoutes = require("./routes/api_routes");
app.use(apiRoutes);

const clientRotes = require("./routes/client_routes");
app.use(apiRoutes);

app.listen(PORT, () => console.log(`Listening at: http://localhost:${PORT}`));
