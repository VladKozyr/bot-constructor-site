const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");

require('dotenv').config();

const app = express();
const apiPort = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.use(bodyParser.urlencoded({
    extended: false
}));

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB connected!")
}).catch((err) => {
    console.error(err)
});

app.use(cors());
app.use(express.json());

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));