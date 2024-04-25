const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://edwincanto16:12345@cluster0.nv7w8kf.mongodb.net/NirBlogApp?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("db connected")
})
.catch((error)=>{
    console.log(error)
})