App.NewspostsRoute = Ember.Route.extend({

  model: function(params) {
    if (this.store.all('newspost').content.length) {
      return this.store.all('newspost');
    }
    return this.store.find('newspost');
  }

});
