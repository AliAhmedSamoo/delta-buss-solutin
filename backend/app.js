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




app.post('/upload', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
  
    const uploadedFile = req.files.file;
  
    // Move the file to a location on your server
    uploadedFile.mv('/path/to/destination/folder/' + uploadedFile.name, (err) => {
      if (err) {
        return res.status(500).send(err);
      }
  
      res.send('File uploaded!');
    });
  });







const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt')
};


https.createServer(options, app).listen(1337, () => {
  console.log(`Server running on port 1337`);
});



// app.listen(1337, () => console.log("running on 1337"));

