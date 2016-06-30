//init firebase app 
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDukY4vwsg3rqecCtDVkiPKB_-ntM_M5KY",
    authDomain: "whatwewishfor-cc766.firebaseapp.com",
    databaseURL: "https://whatwewishfor-cc766.firebaseio.com",
    storageBucket: "whatwewishfor-cc766.appspot.com",
  };

  firebase.initializeApp(config);




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

})
///my code is below

//New background onlick
$bgColor = $('#home');

 $("#submitWish").click(function() {
   $bgColor.css({"background": "url(https://media.giphy.com/media/IJTCcELAbVgHK/giphy-tumblr.gif)", "background-size" : "100% 120%"});
});

