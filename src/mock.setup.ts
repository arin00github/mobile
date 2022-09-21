import {server} from './mocks/server';

beforeAll(() => {
  //console.log('server listen');
  server.listen({
    onUnhandledRequest(req) {
      console.log('found unhandle request', req.url.href, req.method);
    },
  });
});

afterEach(() => {
  // console.log('server resetHandler');
  server.resetHandlers();
});

afterAll(() => server.close());

export {server};
