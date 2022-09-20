import {Registry} from 'miragejs';
import {} from 'miragejs/-types';
import {models} from './model';
import {factories} from './factories';
import {ServerConfig} from 'miragejs/server';

export type AppRegistry = Registry<typeof models, typeof factories>;

export type AppConfig = ServerConfig<typeof models, typeof factories>;

export interface User {
  username: string;
  userId: string;
  email: string;
  phone: string;
}

export interface Reminder {
  text: string;
  done: boolean;
}

export interface ListGroup {
  name: string;
}
