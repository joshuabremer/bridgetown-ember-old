var App = require('./app');

App.Router.map(function() {

  // generated by ember-generate --scaffold
  this.resource('performers');
  this.resource('performer', {path: '/performers/:title'});
  // this.route('edit_performer', {path: '/performers/:performer_id/edit'});
  // this.route('new_performer', {path: '/performers/new'});
  // end generated routes


});


