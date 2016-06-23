//firebase connection & submit to databse
$(document).ready(function() {
var myFirebaseRef = new Firebase("https://whatwewishfor-cc766.firebaseio.com/");

var config = {
    apiKey: "AIzaSyDukY4vwsg3rqecCtDVkiPKB_-ntM_M5KY",
    authDomain: "whatwewishfor-cc766.firebaseapp.com",
    databaseURL: "https://whatwewishfor-cc766.firebaseio.com",
    storageBucket: "whatwewishfor-cc766.appspot.com",
  };
  firebase.initializeApp(config);

  $('#wishwell').submit(function(event){
    event.preventDefault();
    var wish = $('#wishes').val();
    var wishRef = myFirebaseRef.child('wishes');

    wishRef.push({
      wish: wish
    })


  })
});

//New background onlick
$bgColor = $('#home');

 $( "#submitWish" ).click(function() {
   $bgColor.css({"background": "url(https://media.giphy.com/media/IJTCcELAbVgHK/giphy-tumblr.gif)", "background-size" : "100% 120%"})
});

//share link (open in a new window?)
$shareButton = $('a#sharebutton')
$ogLink = 'http://twitter.com/share?text=This%20is%20so%20easy%20%23whatwewishfor', 'window name', 'width=500, height=475'
$wishButton = $('submitWish')
$wishes = $('wishes')

$shareButton.click(function(){
  window.open($ogLink);
  return true;
});
//on wish click update oglink with user input



//input goes in to
//text attricbute of share twitter 
//new window opens



//twitter api call show wish data 


$shareButton.on('click', function (event) {
event.preventDefault();
$wishes = $('wishes');

var Wish = function() {
$.ajax({
  url: 'https://api.twitter.com/1.1/search/tweets.jsonq=%23#whatwewishfor&since_id=24012619984051000&max_id=250126199840518145&result_type=mixed&count=4',
  type: 'GET',
  success: function info(response) {
    var tweets = (response.search.tweets);
//run your code here
//this is the message when its wrong
}
});
};
Wish();
});


  //Preloader
  $(window).load(function() {
    $("#loader").fadeOut();
    $("#mask").delay(1000).fadeOut("slow");
  });