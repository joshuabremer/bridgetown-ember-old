App.ApplicationView = Ember.View.extend({
  didInsertElement: function() {

    // Twitter show
    var js,
      fjs = document.getElementsByTagName("script")[0],
      p = /^http:/.test(document.location) ? 'http' : 'https';
    if (!document.getElementById("twitter-wjs")) {
      js = document.createElement("script");
      js.id = "twitter-wjs";
      js.src = p + "://platform.twitter.com/widgets.js?" + new Date().getTime();
      fjs.parentNode.insertBefore(js, fjs);
    }

    $('.navbar .nav a').on('click', function(){
      if ($(window).width() <= 768) {
        $(".navbar-toggle").click();
      }
    });

  }
});