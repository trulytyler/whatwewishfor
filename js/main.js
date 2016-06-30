//init firebase app 
// Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyDukY4vwsg3rqecCtDVkiPKB_-ntM_M5KY",
  //   authDomain: "whatwewishfor-cc766.firebaseapp.com",
  //   databaseURL: "https://whatwewishfor-cc766.firebaseio.com",
  //   storageBucket: "whatwewishfor-cc766.appspot.com",
  // };

  // firebase.initializeApp(config);


var lock = new Auth0Lock('EQSZ7Mqp22Be0l7YCXgHHDBCLlpPn1QK', 'tylerharrisdesign.auth0.com');

document.getElementById('btn-login').addEventListener('click', function() {
  lock.show({ authParams: { scope: 'openid' } }); //Details: https://auth0.com/docs/scopes
});
var hash = lock.parseHash(window.location.hash);
if (hash) {
  if (hash.error) {
    console.log("There was an error logging in", hash.error);
    alert('There was an error: ' + hash.error + '\n' + hash.error_description);
  } else {
    //save the token in the session:
    localStorage.setItem('id_token', hash.id_token);
  }
}
//retrieve the profile:
var id_token = localStorage.getItem('id_token');
if (id_token) {
  lock.getProfile(id_token, function (err, profile) {
    if (err) {
      return alert('There was an error getting the profile: ' + err.message);
    }
    document.getElementById('name').textContent = profile.name;
  });
}

firebase.auth().signInWithCustomToken(token).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
// var getFoos = fetch('/api/foo', {
//   headers: {
//     'Authorization': 'Bearer ' + localStorage.getItem('id_token')
//   },
//   method: 'GET',
//   cache: false
// });

// getFoos.then(function (response) {
//   response.json().then(function (foos) {
//     console.log('the foos:', foos);
//   });
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
        deleteMessage(messageId);
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

})
///my code is below

//New background onlick
$bgColor = $('#home');

 $("#submitWish").click(function() {
   $bgColor.css({"background": "url(https://media.giphy.com/media/IJTCcELAbVgHK/giphy-tumblr.gif)", "background-size" : "100% 120%"});
});

