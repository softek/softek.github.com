(function ($) {

   var key = "AIzaSyCB7pz46u4W-AKda9lSpUoXvGUwyhh94U8";
   var api = "https://www.googleapis.com/calendar/v3/calendars/";
   var calendarId = "1ti8jckegb5gp7bfquijpe3aoc%40group.calendar.google.com";
   var baseUrl = api + calendarId;

   var service = setup();

   service.getUpcomingEvents = function (number, callback) {
      if (arguments.length == 1) {
         callback = number;
         number = 5;
      }

      var url = baseUrl + "/events?maxResults=" + number + "&key=" + key;
      $.getJSON(url, callback);
   };

   function setup () {
      window.services = window.services || {};
      window.services.calendar = {};
      return window.services.calendar;
   };

})(window.jQuery);