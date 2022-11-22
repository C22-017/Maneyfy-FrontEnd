const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
<<<<<<< HEAD
    return this.urlSplitter(url);
  },

  urlSplitter(url) {
=======
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
>>>>>>> tips-page
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null,
    };
  },

<<<<<<< HEAD
  urlCombiner(splitedUrl) {
=======
  _urlCombiner(splitedUrl) {
>>>>>>> tips-page
    return (
      (splitedUrl.resource ? `/${splitedUrl.resource}` : '/') +
      (splitedUrl.id ? '/:id' : '') +
      (splitedUrl.verb ? `/${splitedUrl.verb}` : '')
    );
  },
};

export default UrlParser;
