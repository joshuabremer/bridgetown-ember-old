var App = Ember.Application.create({
  LOG_TRANSITIONS: true,
  rootElement: '#ember-app'
});
App.Store = DS.Store.extend({
  revision: 11,
  //adapter: DS.RESTAdapter.create()
  //adapter: DS.LSAdapter.create()
  adapter: DS.SquarespaceAdapter
});

 // delete if you don't want ember-data

if (window.location.hostname != "bridgetown-dev.squarespace.com") {
  Ember.$.ajaxSetup({
    dataType: "JSONP",
    crossDomain: true
  });
}

