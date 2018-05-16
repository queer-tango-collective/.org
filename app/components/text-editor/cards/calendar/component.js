import Component from '@ember/component';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  init() {
    this._super();
    RSVP.all(
      this.get('payload.events').map(id => this.store.findRecord('event', id))
    ).then((events) => {
      debugger;
      if (this.isDestroyed) return;
      this.set('events', events);
    });
  }
});