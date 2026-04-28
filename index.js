const express = require("express");
const app = express();
const cors = require("cors"); // Import cors
app.use(cors());

const router = require("./src/routes/index");
require("./startup/config")(app, express);
// یه فانکشن برمیگردونه پس باید کال بشه
require("./startup/db")();
// هر درخواستی که سمت سرور بیاد و اولش آرگومان اولی زیر باشد
// به فایل روترمون هدایت می شویم
app.use("/api", router);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}`));
