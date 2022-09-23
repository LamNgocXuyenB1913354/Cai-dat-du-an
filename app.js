const express = require("express")
const cors = require("cors");
const ApiError = require("./app/api-error");
const app = express();
const contactRouter = require("./app/routes/contact.route");
const { error } = require("console");

app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactRouter);

app.get("/",(req, res) => {
    res.json({message: "Welcome to contact book application."});
});

app.use((req, res, next)=> {
    return next(new ApiError(404, "resource not found"));
});

app.use((err, req, res, next) => {
    return res.status(errorCode || 500).json({
        message: error.message || "internal Server Error",
    });
});
app.use("/api/contacts", contactRouter);

module.exports = app;