import {Factory} from 'miragejs';
import {User} from '../types';

export const userFactory = Factory.extend<User>({
  userId(n) {
    return `User id is ${n}`;
  },
  username(n) {
    return `User name is ${n}`;
  },
  phone(n) {
    return `phone is ${n}`;
  },
  email(n) {
    return `email is ${n}`;
  },
});
