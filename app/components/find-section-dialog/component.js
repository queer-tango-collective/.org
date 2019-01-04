import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  classNames: ['find-section-dialog'],
  store: service(),

  sort: 'title',
  q: '',

  query() {
    return this.store.query('channel', {
      sort: this.sort,
      page: {
        limit: 50
      },
      filter: {
        text: this.q
      }
    }).then((results) => {
      this.set('results', results);
    });
  },

  init() {
    this._super();
    this.query();
  },

  actions: {
    query(query) {
      this.set('q', query);
      this.query();
    },
    sort(sort) {
      this.set('sort', sort);
      this.query();
    }
  }
});
