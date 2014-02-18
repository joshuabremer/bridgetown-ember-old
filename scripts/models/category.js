App.Category = DS.Model.extend({

  performer: DS.belongsTo('performer'),

  newspost: DS.belongsTo('newspost'),

  name: DS.attr('string')

});

