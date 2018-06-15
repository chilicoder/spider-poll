import Route from '@ember/routing/route';
import { Promise } from 'rsvp';

export default Route.extend({
  model(){
    return this.store.findRecord('poll', 1, {include: 'answers'});

  }
});
