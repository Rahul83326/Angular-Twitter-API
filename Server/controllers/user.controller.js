const mongoose = require('mongoose');
const passport = require('passport');
const User = require("../model/User");



module.exports.register = (req, res, next) => {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://rahulthangamani:rahulT@83326@cluster0.g1cnm.mongodb.net/TWITTERLOGIN?retryWrites=true&w=majority";
    
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("TWITTERLOGIN");
      var myobj = req.body
      dbo.collection("users").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("document inserted");
        db.close();
      });
    });
}

// module.exports.authenticate = (req, res, next) => {
//     // call for passport authentication
//     passport.authenticate('local', (err, user, info) => {
//         // error from passport middleware
//         if (err) return res.status(400).json(err);
//         // registered user
//         else if (user) return res.status(200).json({ "token": user.generateJwt() });
//         // unknown user or wrong lastName
//         else return res.status(404).json(info);
//     })(req, res);
// }

module.exports.appComponent = (req, res, next) =>{
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user : _.pick(user,['fullName','email']) });
        }
    );
}
