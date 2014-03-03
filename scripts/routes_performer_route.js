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
    return this.store.find('performer').then(function() {

    return this.store.find(App.Performer, {Name: params.Name});
    });
    // console.log(params);
    // this.store.find('performer');
    // return this.store.filter(App.Performer, function(record){
    //   console.log(record.get('Name') == 'Beth Stelling');
    //   return true;
    // });
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

