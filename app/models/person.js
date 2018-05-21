import DS from 'ember-data';
import Model from './application';

const { attr, belongsTo, hasMany } = DS;

export default Model.extend({
  name: attr('string'),
  email: attr('string'),
  biography: attr('string'),
  role: attr('string'),
  published: attr('boolean'),
  website: attr('string'),
  authorizations: hasMany('authorization'),
  group: belongsTo('group')
});
