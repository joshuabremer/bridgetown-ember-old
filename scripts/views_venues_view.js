App.VenuesView = Ember.View.extend({
  didInsertElement:function(){
    $('[data-src]').each(function() {
      $(this).attr('src',$(this).attr('data-src'))
      $(this).parent().css('padding','');

    });
  }
});