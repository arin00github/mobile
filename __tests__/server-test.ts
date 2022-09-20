import {makeServer} from '../src/mirage';
import {waitFor, screen} from '@testing-library/react-native';
import {Server} from 'miragejs';
import {AppRegistry} from '../src/mirage/types';

let server: Server<AppRegistry>;

beforeEach(() => {
  server = makeServer('test');
});

afterEach(() => {
  server.shutdown();
});

test('it shows a message when there are no reminder', async () => {
  server.create('user', {
    username: 'teru',
    userId: 'user01',
    phone: '01022341123',
    email: 'teru000@gmail.com',
  });

  await waitFor(() => screen.getByText('Main screen'));
  expect(screen.getByText('Main screen')).toBeTruthy();
});
