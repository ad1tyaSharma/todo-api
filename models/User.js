const mongoose = require('mongoose');
const Schema = mongoose.Schema;


userSchema = new Schema({

        email: {
            type: String,
            unique: true,
            required: true
        },
       
        password: {
            type: String,
            required: true
        },
        

    }),
    User = mongoose.model('User', userSchema);

module.exports = User;