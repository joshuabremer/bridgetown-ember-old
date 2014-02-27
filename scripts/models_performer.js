App.Performer = DS.Model.extend({

  categories: DS.hasMany('category'),

  name: DS.attr('string'),

  headshot: DS.attr('string'),

  //urlId: DS.attr('string'),

  slug: function() {
    return sluggify(this.get('name'));
  }.property('name'),

  bio: DS.attr('string'),

  headshot300: function() {
    return '/assets/performer-' + cleanStr(this.get('name')) + '-300x300.jpg';
  }.property('name'),

  backgroundImageCSS: function() {
    return "background-image:url('" + this.get("headshot") + "?format=300w')";
  }.property("headshot")

});

function sluggify(string) {
  return string.replace(/\W/g, '-').toLowerCase();
}

function cleanStr(string) {
  return string.replace(/\W/g, '').toLowerCase();
}