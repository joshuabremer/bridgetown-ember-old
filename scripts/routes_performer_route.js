App.PerformerRoute = Ember.Route.extend({

  model: function(params) {
    // var url = 'https://bridgetown-dev.squarespace.com/performers/' + params.urlId + '?format=json-pretty';
    // return Ember.$.ajax({
    //   url: url,
    //   dataType: 'jsonp'
    // }).then(function(data) {
    //   data.item.name = data.item.title;
    //   data.item.bio = data.item.body;
    //   data.item.headshot = data.item.assetUrl;
    //   return data.item;
    // });
    var _this = this;
    //this.store.find('performer', {Name: params.Name});
    this.set('params_slug',params.slug);
    return this.store.find('performer');

    // .then(function() {

    //   return _this.store.find(App.Performer, params.id);
    // });
    // console.log(params);
    // this.store.find('performer');
    // return this.store.filter(App.Performer, function(record){
    //   console.log(record.get('Name') == 'Beth Stelling');
    //   return true;
    // });
  },

  setupController: function(controller, model) {
    for(var performer in b.content) {
      if (performer.get('slug') === performer.get('params_slug')) {
        controller.set('model', performer);
        return;
      }
    }
  }
  // model: function() {
  //   return $.ajax({
  //     url: 'https://bridgetown-dev.squarespace.com/performers/?format=json-pretty',
  //     crossDomain: true,
  //     dataType: 'JSONP'
  //   }).then(function(data) {
  //     return data.items;
  //   });
  // }

});

