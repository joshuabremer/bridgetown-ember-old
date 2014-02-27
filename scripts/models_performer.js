App.Performer = DS.Model.extend({

  categories: DS.hasMany('category'),

  name: DS.attr('string'),

  headshot: DS.attr('string'),

  urlId: DS.attr('string'),

  bio: DS.attr('string'),

  headshot300: function() {
    return '/assets/' + cleanStr(this.get('name')) + '-300x300.jpg';
  }.property('name'),

  backgroundImageCSS: function() {
    return "background-image:url('" + this.get("headshot") + "?format=300w')";
  }.property("headshot")

});



function cleanStr(string) {
  return string.replace(/\W/g, '').toLowerCase();
}