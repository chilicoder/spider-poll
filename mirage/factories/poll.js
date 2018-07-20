import { Factory, trait } from 'ember-cli-mirage';

export default Factory.extend({
  question() {
    return 'Where in the world is Carmen San Diego?'
  },
  isAnswered(){
    return false;
  },
  withAnswers: trait({
    afterCreate(poll, server) {
      server.createList('answer', 4, { poll });
    }
  })
});
