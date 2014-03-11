if (window.history && window.history.pushState && isProduction()) {
    App.Router.reopen({
      location: 'history'
    });
}

function isProduction() {
  return location.hostname.match('bridgetown');
}

App.Router.map(function() {

  // generated by ember-generate --scaffold
  this.resource('events');
  this.resource('events', {path: '/events/:events_id'});
  // end generated routes


  // generated by ember-generate --scaffold
  // this.resource('newsposts');
  // this.resource('newspost', {path: '/newspost/:urlId'});
  // end generated routes


  // generated by ember-generate --scaffold
  this.resource('performers');
  this.resource('performer', {path: '/performer/:id'});
  this.resource('shows');
  this.resource('show', {path: '/show/:id'});
  // this.route('edit_performer', {path: '/performers/:performer_id/edit'});
  // this.route('new_performer', {path: '/performers/new'});
  // end generated routes

  this.route('schedule');
  this.route('venues');
  this.route('history');
  this.route('press');
  this.route('contact');

  this.route('fourOhFour', { path: '*path' });


});

Ember.Route.reopen({
  render: function(controller, model) {
    this._super();
    window.scrollTo(0, 0);
  },
  activate: function() {
    this._super();
    console.log(this.get('title'));
    if (this.get('title')) {
      document.title = this.get('title') + ' | Bridgetown Comedy Festival';
    } else {
      document.title = 'Bridgetown Comedy Festival';
    }

  }
});

App.VenuesRoute = Ember.Route.extend({
    // renderTemplate: function() {this.render('catch_all');},
    model: function() {return _retrievePageJSON('venues');},
    title: 'Venues'
});

App.ShowsRoute = Ember.Route.extend({
    // renderTemplate: function() {this.render('catch_all');},
    model: function() {return _retrievePageJSON('shows');},
    title: 'Shows'
});

App.HistoryRoute = Ember.Route.extend({
    // renderTemplate: function() {this.render('catch_all');},
    model: function() {return _retrievePageJSON('history');},
    title: 'History'
});

App.PressRoute = Ember.Route.extend({
    // renderTemplate: function() {this.render('catch_all');},
    model: function() {return _retrievePageJSON('press');},
    title: 'Press'
});

App.ContactRoute = Ember.Route.extend({
    // renderTemplate: function() {this.render('catch_all');},
    model: function() {return _retrievePageJSON('contact');},
    title: 'Contact'
});

App.fourOhFourRoute = Ember.Route.extend({
  renderTemplate: function() {this.render('fourOhFour');},
});


function _retrievePageJSON(page) {
  host = 'https://bridgetown-dev.squarespace.com/';
  return Ember.$.ajax({
    url: host + page + '?format=json-pretty',
    dataType: 'JSONP'
  }).then(function(data) {
    return data;
  });
}
