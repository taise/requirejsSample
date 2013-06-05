requirejs.config({
  paths: {
    'jquery': [
      '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
      //If the CDN location fails, load from this location
      'lib/jquery'
    ]
  }
});

require(['jquery', 'modules/alerts'], function($, alerts){
  $('#message').append("<p>appended</p>");
  window.App = new alerts.messages();
})
