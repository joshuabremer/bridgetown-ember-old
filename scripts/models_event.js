App.Event = DS.Model.extend({

  performers: DS.hasMany('performer', {embedded: 'always', async: true}),

  venue: DS.belongsTo('venue', {async: true}),

  Name: DS.attr('string'),

  getPerformers: function() {
    return this.get("performers").get('content');
  }.property(),

  getPerformerCount: function() {
    return this.get("performers");
  }.property()

});
