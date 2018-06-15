import Route from '@ember/routing/route';

export default Route.extend({
  model({ poll_id }) {
    return this.store.query('answer', { poll: poll_id });
  }
});
