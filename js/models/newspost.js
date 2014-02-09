App.Newspost = DS.Model.extend({

  performers: DS.hasMany('performer'),

  name: DS.attr('string'),

  bio: DS.attr('string'),

  publishOn: DS.attr('string')

});

