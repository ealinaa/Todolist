const express = require('express')
const morgan = require("morgan");
var bodyParser = require('body-parser')
require('dotenv').config();

// const User = require('./models/user')

const {sequelize,User} = require('./models')

const port = process.env.port ;
const app = express()

app.use(bodyParser.json())
app.use(morgan("dev"));

// User.sync();
// // User.sync();
// User.drop()
// app.post('/user', async (req, res) => {
//     const { firstName, lastName, email, comments, password } = req.body;

//     try {
//         const user = await User.create({ firstName, lastName, email, comments, password });
//         res.status(201).json(user);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

const UserRoute = require('./route/userRoute')
const TodoRoute = require('./route/todolistRoute')

app.use(UserRoute)
app.use(TodoRoute)

app.listen(port,async()=>{
    await sequelize.authenticate()
    console.log(`SERVER RUNNING SUCCESSFULLY IN PORT ${port}.` )
})