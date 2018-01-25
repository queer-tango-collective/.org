import Component from '@ember/component';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  classNames: ['new-expense-dialog'],

  session: service(),

  data: computed({
    get() {
      return {
        paidAt: new Date(),
        paidBy: get(this, 'person')
      };
    }
  }),

  actions: {
    submit(model, changes) {
      changes.amount = Math.abs(changes.amount) * -1;
      return get(this, 'onsubmit')(Object.assign(changes, model)).then(get(this, 'dismiss'));
    }
  }
});

