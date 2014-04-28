var App = Ember.Application.create({
  LOG_TRANSITIONS: true,
  rootElement: '#ember-app'
});

var FESTIVAL_START_TIMES = {};
FESTIVAL_START_TIMES.Thursday = "2014-05-08T23:30:00.000Z";
FESTIVAL_START_TIMES.Friday =   "2014-05-09T23:00:00.000Z";
FESTIVAL_START_TIMES.Saturday = "2014-05-10T20:00:00.000Z";
FESTIVAL_START_TIMES.Sunday =   "2014-05-11T20:00:00.000Z";

App.FixtureAdapter = DS.FixtureAdapter.extend({
  queryFixtures: function(records, query, type) {
    return records.filter(function(record) {
        for(var key in query) {
            if (!query.hasOwnProperty(key)) { continue; }
            var value = query[key];
            //console.log(record[key]);
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

