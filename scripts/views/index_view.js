(function(){
  "use strict";

  App.IndexView = Ember.View.extend({
    didInsertElement: function() {
      var js,
        fjs = document.getElementsByTagName("script")[0],
        p = /^http:/.test(document.location) ? 'http' : 'https';
      //if (!document.getElementById("twitter-wjs")) {
        js = document.createElement("script");
        js.id = "twitter-wjs";
        js.src = p + "://platform.twitter.com/widgets.js?" + new Date().getTime();
        fjs.parentNode.insertBefore(js, fjs);
      //}

      $("img.lazy").lazyload({
        effect : "fadeIn"
      });
    }
  });
}());