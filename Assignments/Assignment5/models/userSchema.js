const  mongoose = require("mongoose");
const userData = new mongoose.Schema({
    name: {
        type : String,
        require : true,
    },
    age: {
        type : Number,
        require : true,
    },
    city: {
        type : String,
        require :true,
    },
    landmark: {
        type : String,
        require : true,
    },
    pincode : {
        type : Number,
        require : true,
    },
});
module.exports = mongoose.model("Data", userData);
