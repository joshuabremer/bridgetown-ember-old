App.Router.map(function() {

  // generated by ember-generate --scaffold
  this.resource('events');
  this.resource('events', {path: '/events/:events_id'});
  this.route('edit_events', {path: '/events/:events_id/edit'});
  this.route('new_events', {path: '/events/new'});
  // end generated routes


  // generated by ember-generate --scaffold
  this.resource('newsposts');
  this.resource('newspost', {path: '/newsposts/:newspost_id'});
  this.route('edit_newspost', {path: '/newsposts/:newspost_id/edit'});
  this.route('new_newspost', {path: '/newsposts/new'});
  // end generated routes


  // generated by ember-generate --scaffold
  this.resource('newsposts');
  this.resource('newspost', {path: '/newsposts/:newspost_id'});
  this.route('edit_newspost', {path: '/newsposts/:newspost_id/edit'});
  this.route('new_newspost', {path: '/newsposts/new'});
  // end generated routes


  // generated by ember-generate --scaffold

  this.resource('performers');
  this.resource('performer', {path: '/performers/:name'});
  // this.route('edit_performer', {path: '/performers/:performer_id/edit'});
  // this.route('new_performer', {path: '/performers/new'});
  // end generated routes


});


