//require('../vendor/localstorage_adapter');

DS.SquarespaceRESTSerializer = DS.RESTSerializer.extend({
  extractArray: function(store, primaryType, payload) {
    newPayload = {};
    newPayload[primaryType.typeKey + 's'] = payload.items;
    return this._super(store, primaryType, newPayload);
  },
  normalize: function(type, hash, prop) {
    this.normalizeId(hash);
    this.normalizeAttributes(type, hash);
    this.normalizeRelationships(type, hash);

    this.normalizeUsingDeclaredMapping(type, hash);

    if (this.normalizeHash && this.normalizeHash[prop]) {
      hash = this.normalizeHash[prop](hash);
    }

    return this._super(type, hash, prop);
  },
  normalizeHash: {
    performers: function(hash) {
      hash.name = hash.title;
      hash.bio = hash.body;
      hash.headshot = hash.assetUrl;
      return hash;
    },
    newsposts: function(hash) {
      hash.name = hash.title;
      hash.bio = hash.body;
      hash.headshot = hash.assetUrl;
      return hash;
    }
  }
});

DS.SquarespaceAdapter = DS.RESTAdapter.extend({
  //host: 'http://bridgetown-dev.squarespace.com',
  //host: '127.0.0.1:8000/',
  namespace: 'fixtures',
  buildURL: function(type, id) {
    var url = [],
        host = Ember.get(this, 'host'),
        prefix = this.urlPrefix();

    if (type) { url.push(this.pathForType(type)); }
    if (id) { url.push(id); }

    if (prefix) { url.unshift(prefix); }

    url = url.join('/');
    if (!host && url) { url = '/' + url; }
    url += '.json?format=json-pretty';
    return url;
  },
  ajaxOptions: function(url, type, hash) {
    hash = this._super(url, type, hash);
    //hash.dataType = 'jsonp';
    return hash;
  },
  normalize: function() {
      debugger;
  },
  defaultSerializer: "DS/SquarespaceREST"
});


module.exports = DS.SquarespaceAdapter;