import {rest} from 'msw';
//import AsyncStorage from '@react-native-async-storage/async-storage';

export function makeUrl(path: string) {
  return `https://localhost:8080${path}`;
}

export const handlers = [
  rest.post(makeUrl('/login'), (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.get(makeUrl('/logout'), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    );
  }),
];
