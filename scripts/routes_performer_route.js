App.PerformerRoute = Ember.Route.extend({

  model: function(params) {
    // var url = 'http://bridgetown-dev.squarespace.com/performers/' + params.urlId + '?format=json-pretty';
    // return Ember.$.ajax({
    //   url: url,
    //   dataType: 'jsonp'
    // }).then(function(data) {
    //   data.item.name = data.item.title;
    //   data.item.bio = data.item.body;
    //   data.item.headshot = data.item.assetUrl;
    //   return data.item;
    // });
    return this.store.find('performer', params.urlId);
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
