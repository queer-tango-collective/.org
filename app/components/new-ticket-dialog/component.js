import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  classNames: ['new-ticket-dialog'],

  actions: {
    submit(model, changes) {
      return get(this, 'onsubmit')(changes).then(get(this, 'dismiss'));
    }
  }
});

