import React from 'react';
import {rest} from 'msw';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const handlers = [
  rest.post('/api/login', (req, res, ctx) => {
    //AsyncStorage.setItem('is-authenticated', 'true');
    return res(ctx.status(200));
  }),
  rest.get('/api/logout', (req, res, ctx) => {
    // const isAuthenticated = AsyncStorage.getItem('is-authenticated');
    // if (!isAuthenticated) {
    //   return res(
    //     ctx.status(403),
    //     ctx.json({
    //       errorMessage: 'Not authorized',
    //     }),
    //   );
    // }
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    );
  }),
];
