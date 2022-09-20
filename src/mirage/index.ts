import {createServer, Server, Response} from 'miragejs';
import {factories} from './factories';
import {models} from './model';
import {AppRegistry} from './types';

export const makeServer = (environment = 'test'): Server<AppRegistry> => {
  return createServer({
    environment,
    models,
    factories,
    routes() {
      this.get('/api/users', schema => {
        const users = schema.all('user');
        return users;
      });

      this.post('/api/user', (schema, request) => {
        const newUser = JSON.parse(request.requestBody);
        return schema.create('user', newUser);
      });
      this.delete('/api/user/:id', (schema, request) => {
        let id = request.params.id;
        const target = schema.find('user', id);
        if (target) {
          target.destroy();
          return new Response(200);
        }
        return new Response(501);
      });

      this.get('/api/lists/:id/reminders', (schema, request) => {
        let listId = request.params.id;
        let list = schema.find('list', listId);
        console.log('list', list);

        return new Response(200);
      });
    },
  });
};
