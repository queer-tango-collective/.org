import { computed } from '@ember/object';
import { camelize } from '@ember/string';

export default function (collectionPath, sortPath) {
  return computed(collectionPath + '.[]', sortPath, function () {
    let sort = this.get(sortPath);
    if (sort.indexOf('-') === 0) {
      return this.get(collectionPath).sortBy(camelize(sort.slice(1)) + ':desc');
    }
    return this.get(collectionPath).sortBy(camelize(sort));
  });
}