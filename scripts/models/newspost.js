App.Newspost = DS.Model.extend({

  performers: DS.hasMany('performer'),

  title: DS.attr('string'),

  htmlContent: DS.attr('string'),

  urlId: DS.attr('string'),

  publishOn: DS.attr('string')

});

