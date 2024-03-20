const express = require("express");
const https = require("https");
const fs = require("fs");
const app = express();
require('./db/connection');

const cors = require('cors');
app.use(cors());




app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require("./modules/user")

app.get('/', (req, res) => {
    const date = Date.now();
    res.send("Server is running " + date);
});


app.post('/signup', async (req, res) => {


    try {



        const { name, email, password, phone } = req.body

        const salt = await bcrypt.genSalt(saltRounds);


        const hashedPassword = await bcrypt.hash(password, salt);
        console.log(hashedPassword)

        const user2 = await User.findOne({ email: email })

        // console.log(user)

        if (user2) {
            console.log("user found")
            res.json("The email address provided is already in use. Please try a different one.")
        } else {



            

            const newUser = await new User({ name, email, password: hashedPassword, phone });
            const ali =  await newUser.save()

            console.log("Registration complete. Please log in to proceed.")
            res.json("Registration complete. Please log in to proceed.")
        }

    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }


});


app.post("/login", async (req, res) => {

    const { email, password } = req.body;

    try {
        const user2 = await User.findOne({ email: email })

        if (user2) {
            const enteredPassword = password;

        
            const passwordMatch = await bcrypt.compare(enteredPassword, user2.password);


            if (passwordMatch) {

                console.log("Password is correct.");
                res.json(user2);

            } else {

                console.log("Password is incorrect.");
                res.json("Password is incorrect.");
            }
        } else {



            console.log("user not found")
            res.json("user not found")


        }

    } catch (error) {
        console.error(error);

    }



})


const PORT = 1337;
const SSL_KEY_PATH = '/etc/letsencrypt/live/deltabusiness.io/privkey.pem';
const SSL_CERT_PATH = '/etc/letsencrypt/live/deltabusiness.io/fullchain.pem';

const httpsOptions = {
  key: fs.readFileSync(SSL_KEY_PATH),
  cert: fs.readFileSync(SSL_CERT_PATH)
};

https.createServer(httpsOptions, app).listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});