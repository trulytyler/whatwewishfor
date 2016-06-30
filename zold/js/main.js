//init firebase app 
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDukY4vwsg3rqecCtDVkiPKB_-ntM_M5KY",
    authDomain: "whatwewishfor-cc766.firebaseapp.com",
    databaseURL: "https://whatwewishfor-cc766.firebaseio.com",
    storageBucket: "whatwewishfor-cc766.appspot.com",
  };
  firebase.initializeApp(config);


// user.firebase_data = {
//   user_id: new Buffer(user.email).toString('base64'),
//   company: !user.isSocial ? context.connection.replace(/\./g, '-') : null,
//   foo: 'bar'
// };
// //oauth with firebase
// var provider = new firebase.auth.TwitterAuthProvider();

// firebase.auth().signInWithRedirect(provider).then(function(result) {
//   // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
//   // You can use these server side with your app's credentials to access the Twitter API.
//   var token = result.credential.accessToken;
//   var secret = result.credential.secret;
//   // The signed-in user info.
//   var user = result.user;
//   // ...
// }).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
//   // ...
// });
// //get info
// firebase.auth().getRedirectResult().then(function(result) {
//   if (result.credential) {
//     // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
//     // You can use these server side with your app's credentials to access the Twitter API.
//     var token = result.credential.accessToken;
//     var secret = result.credential.secret;
//     // ...
//   }
//   // The signed-in user info.
//   var user = result.user;
// }).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
//   // ...
// });


//functionality
$(document).ready(function() {
  // create object instance of my Firebase database
  var myDBReference = new Firebase('https://whatwewishfor-cc766.firebaseio.com/');

  var sourceTemplate = $('#list-template').html();
  var template = Handlebars.compile(sourceTemplate);

  // define submit event listener/handler
  $('#message-form').submit(function(event) {
    // prevents page refresh
    event.preventDefault();

    // grab user input
    var message = $('#message').val();
    var messagesReference = myDBReference.child('messages');
    messagesReference.push({
      message: message
    });
  });

  // Read functionality
  myDBReference.child('messages').on('child_added', function(results) {
    results.forEach(function(message) {

      var data = {
        message: message.val(),
        id: results.key()
      };

      var templateHTML = template(data);

      var $templateHTML = $(templateHTML);

      $templateHTML.click(function() {
        var messageId = $(this).data('id');
        updateMessage(messageId);
      })
      $('#messages-list').append($templateHTML);
    });
  });

  // Update Functionality
  function updateMessage(id, message) {
    var messageReference = new Firebase('https://whatwewishfor-cc766.firebaseio.com/' + id);

    messageReference.update({
      message: 'fu man shu'
    });

  }

  // Delete functionality
  function deleteMessage(id) {
    var messageReference = new Firebase('https://whatwewishfor-cc766.firebaseio.com/' + id);

    messageReference.remove();
  }

});


///my code is below

//New background onlick
$bgColor = $('#home');

 $("#submitWish").click(function() {
   $bgColor.css({"background": "url(https://media.giphy.com/media/IJTCcELAbVgHK/giphy-tumblr.gif)", "background-size" : "100% 120%"});
});

