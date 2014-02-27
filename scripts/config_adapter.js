DS.LocalAdapter = DS.RESTAdapter.extend({
  host: 'http://bridgetown.festivalthing.com/export',
  //host: '127.0.0.1:8000/',
  // namespace: 'fixtures',

  buildURL: function(type, id, params) {
    var url = [],
        host = Ember.get(this, 'host'),
        prefix = this.urlPrefix();

    if (type) { url.push(this.pathForType(type)); }
    if (id) { url.push(id); }

    if (prefix) { url.unshift(prefix); }

    url = url.join('/');
    if (!host && url) { url = '/' + url; }
    url += '/json/';
    //url += '.json?format=json-pretty';
    return url;
  },
  ajaxOptions: function(url, type, hash) {
    hash = this._super(url, type, hash);
    if (window.location.hostname != "bridgetown.festivalthing.com") {
      hash.dataType = 'jsonp';
    }
    return hash;
  }
});