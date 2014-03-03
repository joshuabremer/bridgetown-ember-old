var App = Ember.Application.create({
  LOG_TRANSITIONS: true,
  rootElement: '#ember-app'
});
App.Store = DS.Store.extend({
  revision: 11,
  //adapter: DS.RESTAdapter.create()
  //adapter: DS.LSAdapter.create()
  adapter: DS.FixtureAdapter.extend({
    queryFixtures: function(fixtures, query, type) {
      console.log(query);
      console.log(type);
      return fixtures.filter(function(item) {
          for(var prop in query) {
            console.log(query[prop]);
              if( item[prop] != query[prop]) {
                  return false;
              }
          }
          return true;
      });
    }
  })
});


 // delete if you don't want ember-data

// if (window.location.hostname != "bridgetown-dev.squarespace.com") {
//   Ember.$.ajaxSetup({
//     dataType: "JSONP",
//     crossDomain: true
//   });
// }

