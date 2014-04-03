App.Event = DS.Model.extend({

  performers: DS.hasMany('performer', {embedded: 'always', async: true}),

  venue: DS.belongsTo('venue', {async: true}),

  Name: DS.attr('string'),

  start_time: DS.attr('string'),

  price: DS.attr('string'),

  duration: DS.attr('string'),

  weekday: function() {
    return moment(this.get("start_time")).format('dddd').toLowerCase();
  }.property("start_time"),

  getPerformers: function() {
    return this.get("performers").get('content');
  }.property(),

  getPerformerCount: function() {
    return this.get("performers");
  }.property()

});
