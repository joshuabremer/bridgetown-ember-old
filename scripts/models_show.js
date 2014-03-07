App.Show = DS.Model.extend({

  Name: DS.attr('string'),

  PhotoUrl: DS.attr('string'),

  Tier: function() {
    return Math.random();
  },

  slug: function() {
    return sluggify(this.get('Name'));
  }.property('Name'),

  Bio: DS.attr('string'),

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
  return string.replace(/\W/g, '').toLowerCase();
}
