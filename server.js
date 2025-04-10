const express = require('express');
const app = express();
const router = express.Router();
const userRouter = require("./routes/user.route");
// Configure express for form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 5000;
//  for static file
app.use(express.static('public'));
app.use("/users", userRouter)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
app.listen(port, () => {
    console.log(`Express Server is started at : ${port}`);
});