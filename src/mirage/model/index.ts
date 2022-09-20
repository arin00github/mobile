import {Model, belongsTo, hasMany} from 'miragejs';
import {ModelDefinition} from 'miragejs/-types';
import {Reminder, User, ListGroup} from '../types';

const UserModel: ModelDefinition<User> = Model.extend({});

const remiderModel: ModelDefinition<Reminder> = Model.extend({
  list: belongsTo(),
});

const ListModel: ModelDefinition<ListGroup> = Model.extend({
  reminder: hasMany(),
});

export const models = {
  user: UserModel,
  reminder: remiderModel,
  list: ListModel,
};
