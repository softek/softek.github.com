(function ($) {

   var key = "AIzaSyCB7pz46u4W-AKda9lSpUoXvGUwyhh94U8";
   var user = "softekinc";
   var baseUrl = "http://api.twitter.com/1";

   var service = setup();

   service.getRecentTweets = function (number, callback) {
      if (arguments.length == 1) {
         callback = number;
         number = 5;
      }

      var url = baseUrl + "/statuses/user_timeline.json?screen_name=" +
         user + "&count=" + number + "&include_rts=1&callback=?";
      $.getJSON(url, callback);
   };

   function setup () {
      window.services = window.services || {};
      window.services.twitter = {};
      return window.services.twitter;
   };

})(window.jQuery);