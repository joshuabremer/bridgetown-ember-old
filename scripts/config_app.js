var App = Ember.Application.create({
  LOG_TRANSITIONS: true,
  rootElement: '#ember-app'
});

App.FixtureAdapter = DS.FixtureAdapter.extend({
  queryFixtures: function(records, query, type) {
    return records.filter(function(record) {
        for(var key in query) {
            if (!query.hasOwnProperty(key)) { continue; }
            var value = query[key];
            console.log(record[key]);
            if (record[key] !== value) { return false; }
        }
        return true;
    });
  }
});

App.Store = DS.Store.extend({
  revision: 11,
  //adapter: DS.RESTAdapter.create()
  //adapter: DS.LSAdapter.create()
  adapter: 'Fixture'
});




 // delete if you don't want ember-data

// if (window.location.hostname != "bridgetowncomedy.com") {
//   Ember.$.ajaxSetup({
//     dataType: "JSONP",
//     crossDomain: true
//   });
// }

