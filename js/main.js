$(document).ready(function() {
var myFirebaseRef = new Firebase("https://whatwewishfor-cc766.firebaseio.com/");
  
  var config = {
    apiKey: "AIzaSyDukY4vwsg3rqecCtDVkiPKB_-ntM_M5KY",
    authDomain: "whatwewishfor-cc766.firebaseapp.com",
    databaseURL: "https://whatwewishfor-cc766.firebaseio.com",
    storageBucket: "whatwewishfor-cc766.appspot.com",
  };
  firebase.initializeApp(config);

  $('#submitWish').submit(function(event){
    event.preventDefault();
    var wish = $('#wishes').val();
    var wishRef = myFirebaseRef.child('wishes');

    wishRef.push({
      wish: wish
    })


  })
});



///my code is above

// //New background onlick
// $bgColor = $('#home');

//  $( "#submitWish" ).click(function() {
//    $bgColor.css({"background": "url(https://media.giphy.com/media/IJTCcELAbVgHK/giphy-tumblr.gif)", "background-size" : "100% 120%"})
// });

// //share link (open in a new window?)
// $shareButton = $('a#sharebutton')
// $ogLink = 'http://twitter.com/share?text=This%20is%20so%20easy%20%23whatwewishfor', 'window name', 'width=500, height=475'
// $wishButton = $('#submitWish')
// $wishes = $('#wishes')

// $shareButton.click(function(){
//   window.open($ogLink);
//   return true;
// });
// //on wish click update oglink with user input



// //input goes in to
// //text attricbute of share twitter 
// //new window opens




// $wishButton = $('#submitWish')

// $wishButton.on('click', function (event) {
// event.preventDefault();
// function wish() {
// $.ajax({
//   url: 'https://omdbapi.com/?s=titanic',
//   type: 'GET',
//   dataType: 'json',
//   success: function info(response) {
//     console.log('yay it worked');
//     var titanic = (response.Year);
//     console.log('http://omdbapi.com/?s=titanic');
//         console.log(titanic);
// //run your code here
// //this is the message when its wrong
// }
// });
// }

// wish();
// });

//   