var Event = DS.Model.extend({

  performers: DS.hasMany('performer'),

  name: DS.attr('string'),

  start_time: DS.attr('date'),

  end_time: DS.attr('date'),

  price: DS.attr('number')

});

module.exports = Event;

