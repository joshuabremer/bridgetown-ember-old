App.Performer = DS.Model.extend({

  events: DS.hasMany('event', {async: true}),

  Name: DS.attr('string'),

  PhotoUrl: DS.attr('string'),

  SortOrder: DS.attr('number'),

  slug: function() {
    return sluggify(this.get('Name'));
  }.property('Name'),

  Bio: DS.attr('string'),

  pageUrl: DS.attr('string'),

  headshot300: function() {
    return '/assets/performer-' + cleanStr(this.get('Name')) + '-300x300.jpg';
  }.property('Name'),

  backgroundImageCSS: function() {
    return "background-image:url('" + this.get("PhotoUrl") + "?format=300w')";
  }.property("PhotoUrl")

});

function sluggify(string) {
  return string.replace(/\W/g, '-').toLowerCase();
}

function cleanStr(string) {
  string = string || "";
  return string.replace(/\W/g, '').toLowerCase();
}
