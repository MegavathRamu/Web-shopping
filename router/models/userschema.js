const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');

const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    
    password: {
        type: String, 
        required: true
    },
    confirmPassword: {
        type: String, 
        required: true
    },
    tokens:[
        {
            token:{
                type: String, 
        required: true

            }
        }
    ]
});

userschema.pre('save', async function(next) { 
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12); 
        this.confirmPassword = await bcrypt.hash(this.confirmPassword, 12); 
    }
    next();
});
userschema.methods.generateAuthToken = async function() {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch(err) {
        console.log(err);
    }
}
userschema.statics.findByToken = async function(token) {
    try {
  
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const userId = decoded._id;

        
        const user = await this.findById(userId);
        return user;
    } catch (error) {
        throw new Error("Unauthorized");
    }
};



const User = mongoose.model('ramus', userschema);
module.exports = User;
