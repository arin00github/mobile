import {rest} from 'msw';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    AsyncStorage.setItem('is-authenticated', 'true');
    return res(ctx.status(200));
  }),
  rest.get('/logout', (req, res, ctx) => {
    const isAuthenticated = AsyncStorage.getItem('is-authenticated');
    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    );
  }),
];
