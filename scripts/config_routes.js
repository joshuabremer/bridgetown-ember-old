App.Router.map(function() {

  // generated by ember-generate --scaffold
  this.resource('events');
  this.resource('events', {path: '/events/:events_id'});
  // end generated routes


  // generated by ember-generate --scaffold
  this.resource('newsposts');
  this.resource('newspost', {path: '/newspost/:urlId'});
  // end generated routes


  // generated by ember-generate --scaffold
  this.resource('performers');
  this.resource('performer', {path: '/performer/:urlId'});
  // this.route('edit_performer', {path: '/performers/:performer_id/edit'});
  // this.route('new_performer', {path: '/performers/new'});
  // end generated routes

  this.route('venues');
  this.route('shows');
  this.route('history');
  this.route('press');
  this.route('contact');

  this.route('catch_all', { path: '*:' });


});

App.VenuesRoute = Ember.Route.extend({
    // renderTemplate: function() {this.render('catch_all');},
    model: function() {return _retrievePageJSON('venues');}
});

App.ShowsRoute = Ember.Route.extend({
    // renderTemplate: function() {this.render('catch_all');},
    model: function() {return _retrievePageJSON('shows');}
});

App.HistoryRoute = Ember.Route.extend({
    // renderTemplate: function() {this.render('catch_all');},
    model: function() {return _retrievePageJSON('history');}
});

App.PressRoute = Ember.Route.extend({
    // renderTemplate: function() {this.render('catch_all');},
    model: function() {return _retrievePageJSON('press');}
});

App.ContactRoute = Ember.Route.extend({
    // renderTemplate: function() {this.render('catch_all');},
    model: function() {return _retrievePageJSON('contact');}
});

function _retrievePageJSON(page) {
  host = 'http://bridgetown-dev.squarespace.com/';
  return Ember.$.ajax({
    url: host + page + '?format=json-pretty',
    dataType: 'JSONP'
  }).then(function(data) {
    return data;
  })
}


