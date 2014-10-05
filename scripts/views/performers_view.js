App.PerformersView = Ember.View.extend({
  templateName: 'performers_gallery',
  didInsertElement:function(){
    $("img.lazy").lazyload({
      effect : "fadeIn"
    });
  }
});