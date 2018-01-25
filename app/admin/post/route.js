import { set } from '@ember/object';
import Resource from '../../routes/resource';

export default Resource.extend({
  actions: {
    save(model, changes) {
      if (changes.coverPhoto) {
        let change = changes.coverPhoto;
        if (change.blob) {
          change.data = { tags: ['cover-photo'] };
        }
        changes.photos = changes.photos || [];
        changes.photos.push(change);
        delete changes.coverPhoto;
      }

      return this.save(model, changes);
    },
    publish(model) {
      set(model, 'published', true);
      set(model, 'publishedAt', new Date());
      return model.save();
    },
    unpublish(model) {
      set(model, 'published', false);
      set(model, 'publishedAt', null);
      return model.save();
    }
  }
});
