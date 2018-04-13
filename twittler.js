$(document).ready(function(){


  function displayTweets() {
    $('li.tweetClass').remove();
    for (var i = 0; i < streams.home.length; i++) {
      var tweet = streams.home[i];
      var userName = '@' + tweet.user;
      $('ul.tweets').prepend('<li class="tweetClass list-group-item">' + '<p id="author">' + '<strong class="filterValue">' + userName + '</strong>' + ' : ' + tweet.message + '</p>' + tweet.created_at + '</li>');
    }
  };

  function displayUserTweets(input) {
    $('li.tweetClass').remove();
    for (var i = 0; i < streams.home.length; i++) {
      var tweet = streams.home[i];
      var userName = '@' + tweet.user;
      if (input === userName) {
      $('ul.tweets').prepend('<li class="tweetClass list-group-item">' + '<p id="author">' + '<strong class="filterValue">' + userName + '</strong>' + ' : ' + tweet.message + '</p>' + tweet.created_at + '</li>');
      }
    }
  };

  var refreshSwitch = true;
  displayTweets();

  setInterval(function(){
    if (refreshSwitch === true) {
      displayTweets();
    }

  }, 3000);

  $(document).on('click','.filterValue', function() {
    refreshSwitch = false;
    displayUserTweets($(this).text());
    $('#back').show();
  });
  
  $('#back').on('click', function() {
    refreshSwitch = true;
    displayTweets();
    $('#back').hide();
    });

});

