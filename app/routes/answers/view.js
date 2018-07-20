import Route from '@ember/routing/route';

export default Route.extend({
  model({answer_id}){
    return this.store.findRecord('answer',answer_id);
  }
});
