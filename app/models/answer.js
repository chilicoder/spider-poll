import DS from 'ember-data';

export default DS.Model.extend({
  poll: DS.belongsTo(),
  value: DS.attr('string'),
  percents: DS.attr('string')
});
