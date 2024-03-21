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
const User = require("./modules/user");
const Apblogs = require("./modules/apblogs");
const Blogs = require("./modules/blogs");

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
            const ali = await newUser.save()

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


app.get("/user", async (req, res) => {



    try {

        await User.find().sort({ timestamp: -1 })
            .then(Modules => res.json(Modules))

    } catch (error) {
        console.error(error);

    }



})

app.get("/apblog", async (req, res) => {



    try {

        await Apblogs.find().sort({ timestamp: -1 })
            .then(Modules => res.json(Modules))

    } catch (error) {
        console.error(error);

    }



})


app.post("/dtluser", async (req, res) => {

    try {


        await User.deleteOne(req.body)

        await User.find().sort({ timestamp: -1 })
            .then(Modules => res.json(Modules))


    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }


});

app.post("/dtlapblog", async (req, res) => {

    try {


        await Apblogs.deleteOne(req.body)

        await Apblogs.find().sort({ timestamp: -1 })
            .then(Modules => res.json(Modules))


    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }


});

app.post("/dtlblog", async (req, res) => {

    try {


        await Blogs.deleteOne(req.body)

        await Blogs.find().sort({ timestamp: -1 })
            .then(Modules => res.json(Modules))


    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }


});

app.post("/uploadblog", async (req, res) => {

    try {


        const { category, title, description, authorName, authoremail, cover, authorid,_id } = req.body



        await Apblogs.deleteOne({ _id: _id });




        const apblogs = await new Blogs({ category, title, description, authorName, authoremail, cover, authorid });
        await apblogs.save()

        console.log("blog posted.")
    

        await Apblogs.find().sort({ timestamp: -1 })
            .then(Modules => res.json(Modules))


    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }


});





app.post('/upload', async (req, res) => {


    console.log(req.body)
    try {



        const { category, title, description, authorName, authoremail, cover, authorid } = req.body








        const apblogs = await new Apblogs({ category, title, description, authorName, authoremail, cover, authorid });
        await apblogs.save()

        console.log("blog posted.")
        res.json("Blog Has been posted, you can see your blog After Admin Approval")


    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }

});


app.get("/blog", async (req, res) => {



    try {

        await Blogs.find().sort({ timestamp: -1 })
            .then(Modules => res.json(Modules))

    } catch (error) {
        console.error(error);

    }



})





const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt')
};


https.createServer(options, app).listen(1337, () => {
    console.log(`Server running on port 1337`);
});



// app.listen(1337, () => console.log("running on 1337"));

