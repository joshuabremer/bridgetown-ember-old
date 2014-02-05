App.Event = DS.Model.extend({

  name: DS.attr('string'),

  start_time: DS.attr('date'),

  end_time: DS.attr('date'),

  price: DS.attr('number')

});

