define(['jquery'], function($) {

    var messages = function(){
        
        var ary = [];

        ary.push($('#message').text());
        ary.push("required!");

        for(var i = ary.length; i--;){
          alert(ary[i]);
        }
    };

  return {
    "messages": messages
  }
});
