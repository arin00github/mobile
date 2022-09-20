import {AppRegistry} from '../types';
import {Server, Response} from 'miragejs';

export const routes = (server: Server<AppRegistry>) => {
  server.post('/api/login', (schema, request) => {
    const form = JSON.parse(request.requestBody);
    const {username} = form;
    if (username === 'teru') {
      return new Response(200);
    } else {
      return new Response(500, {}, {errorMessage: 'username is not correct'});
    }
  });
  server.get('/api/logout', () => {
    return new Response(200);
  });
  server.get('/api/users', schema => {
    const users = schema.all('user');
    return users;
  });

  server.post('/api/user', (schema, request) => {
    const newUser = JSON.parse(request.requestBody);
    return schema.create('user', newUser);
  });
  server.delete('/api/user/:id', (schema, request) => {
    let id = request.params.id;
    const target = schema.find('user', id);
    if (target) {
      target.destroy();
      return new Response(200);
    }
    return new Response(501);
  });

  server.get('/api/lists/:id/reminders', (schema, request) => {
    let listId = request.params.id;
    let list = schema.find('list', listId);
    console.log('list', list);

    return new Response(200);
  });
};
