const express = require('express')
var bodyParser = require('body-parser')
// const User = require('./models/user')
const {sequelize,User} = require('./models')

const app = express()

app.use(bodyParser.json())


User.sync({ force: true });
// // User.sync();
// User.drop()
app.post('/user', async (req, res) => {
    const { firstName, lastName, email, comments, password } = req.body;

    try {
        const user = await User.create({ firstName, lastName, email, comments, password });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () =>{
    console.log(`Successfully connected: http://localhost:3000`)
})