const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
const fs = require('fs')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
var firebase = require("firebase");

// Firebase account setup
var config = {
  apiKey: "AIzaSyAw3DA7G37Tk7FBcFiJpcSrNx8HS5Zmk4s",
  authDomain: "ynalliance-221903.firebaseapp.com",
  databaseURL: "https://ynalliance-221903.firebaseio.com",
  projectId: "ynalliance-221903",
  storageBucket: "ynalliance-221903.appspot.com",
  messagingSenderId: "237369762242"
};
firebase.initializeApp(config);
//State change
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("Auth state changed: logged in");
  } else {
    console.log("Auth state changed: signed out");
  }
});

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.json({limit: '50mb'}))
  .use(bodyParser.urlencoded({extended: true}))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/login', (req, res) => res.render('pages/login'))
  .get('/vue', (req, res) => res.sendFile(__dirname + '/yna/dist/index.html'))
  .post('/login', (req, res) => {
    // console.log(req.body.email);
    // console.log(req.body.password);
    // Login
    firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password).then(function(user){
      if (user){
        console.log("login success");
        res.send("success");
      }
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("login failure:");
      console.log(errorMessage);
      res.send("error");
    });
  })
  .post('/signup', (req, res) => {
    // Signup
    firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password).then(function(user){
      if(user){
        var ref = firebase.database().ref('users')
        var newUsr = ref.child(firebase.auth().currentUser.uid);
        newUsr.set({
          first_name: req.body.first,
          last_name: req.body.last,
          email: req.body.email,
          phone_number: req.body.phone,
          birthday: req.body.birthday,
          school: req.body.school,
          tier: 'volunteer'
        }).then(function() {
          console.log("signup success");
          res.send("success");
        }).catch(function(error){
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("signup failure");
          console.log(errorMessage);
          res.send("error");
        });
      }
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("signup failure");
      console.log(errorMessage);
      res.send("error");
    });
  })
  .post('/logout', (req, res) => {
    // Logout
    firebase.auth().signOut().then(function() {
      console.log("logout success");
      res.send("success");
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("logout failure:");
    });
  })
  .post('/getUserInfo', (req, res) => {
    //Returns the user's information
    var ref = firebase.database().ref('users/' + firebase.auth().currentUser.uid);
    ref.once('value').then(function(snapshot) {
      res.send({
        first: (snapshot.val().first_name) || 'Anonymous',
        last: snapshot.val().last_name,
        email: snapshot.val().email,
        phone: snapshot.val().phone_number,
        birthday: snapshot.val().birthday,
        school: snapshot.val().school
      });
    }).catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("user data retrieval failure");
      console.log(errorMessage);
      res.send("error");
    });
  })
  .post('/updateTier', (req, res) => {

    var ref = firebase.database().ref('users/' + firebase.auth().currentUser.uid);
    ref.once('value').then(function(snapshot) {
      var tier = snapshot.val().tier;

      if (tier === 'admin' || tier === 'coordinator') {

        firebase.database().ref('users/' + req.body.userId).set({
          tier: req.body.newTier
        });

        });
      } else {
        res.sendCode(404);
      }
    })

  })

  .use(serveStatic(__dirname + "/yna/dist"))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
