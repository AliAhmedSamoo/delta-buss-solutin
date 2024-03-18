const  mongoose  = require("mongoose");

const url = "mongodb+srv://ali:ali@cluster0.vwtssnu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,


}).then(() => {
    console.log("connection is successfull with DataBase");
}).catch((err) => {
    console.log(err.message);
})

