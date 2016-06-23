//firebase connection & submit to db
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


//test
$(document).ready(function () {
     
    createButton();
   document.getElementById('dbutton').addEventListener("click",    createButton);

    function createButton() {

        // Remove Whatever is in the tweeetbox div if theres somethign 
        //there to avoid adding multiple tweetbuttons

        
        var elem = document.getElementById('twitterbutton');
        if (elem != null) {
            elem.parentNode.removeChild(elem);
        }

        // Create a New Tweet Element
        msg  =  document.getElementById('msg').value;
        var link = document.createElement('a');
        link.setAttribute('href', 'https://twitter.com/share');
        link.setAttribute('class', 'twitter-share-button');
        link.setAttribute('style', 'margin-top:5px;');
        link.setAttribute('id', 'twitterbutton');
        link.setAttribute("data-text", "" + msg + "");
        link.setAttribute("data-via", "denvycom");
        link.setAttribute("data-size", "large");

       // Put it inside the twtbox div
        tweetdiv  =  document.getElementById('twtbox');
        tweetdiv.appendChild(link);

        twttr.widgets.load();
    }
});
//end test

$(document).ready(function(){

  //Preloader
  $(window).load(function() {
    $("#loader").fadeOut();
    $("#mask").delay(1000).fadeOut("slow");
  });