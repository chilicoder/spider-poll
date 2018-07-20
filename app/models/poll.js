import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr('string'),
  isAnswered: DS.attr('boolean'),
  answers: DS.hasMany()
});
