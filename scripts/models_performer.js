App.Performer = DS.Model.extend({

  categories: DS.hasMany('category'),

  name: DS.attr('string'),

  headshot: DS.attr('string'),

  urlId: DS.attr('string'),

  bio: DS.attr('string'),

  headshot300: function() {
    return this.get('headshot') + '?format=300w';
  }.property('headshot'),

  backgroundImageCSS: function() {
    return "background-image:url('" + this.get("headshot") + "?format=300w')";
  }.property("headshot")

});


App.PerformerSerializer = DS.RESTSerializer.extend({
  normalizeHash: {
    name: function(hash) {
      //debugger;
      hash.lastName = hash.lastNameOfPerson;
      delete hash.lastNameOfPerson;
      return hash;
    }
  }
});
