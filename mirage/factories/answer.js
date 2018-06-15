import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  value() {
    return faker.name.firstName()
  },
  percents() {
    return faker.random.number({ min: 0, max: 100 })
  }
});
