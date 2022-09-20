import 'react-native';
import React from 'react';
import {
  render,
  fireEvent,
  waitFor,
  screen,
} from '@testing-library/react-native';
import {server} from '../src/mock.setup';
import {rest} from 'msw';
import LoginScreen from '../src/screen/LoginScreen';

//let server: Server<AppRegistry>;

// afterEach(() => {
//   server.shutdown();
// });

describe('Login Screen', () => {
  const navigate = jest.fn();
  const {getByText} = render(<LoginScreen navigation={{navigate}} />);
  const button = getByText('login');
  beforeEach(async () => {
    server.use(
      rest.post('/api/login', (req, res, ctx) => {
        return res.once(ctx.status(200), ctx.json({message: 'login success'}));
      }),
    );
  });

  it('로그인버튼 클릭 시 Main 스크린으로 이동', async () => {
    fireEvent.press(button);
    expect(navigate).toHaveBeenCalledWith('Main');
    await waitFor(() => screen.getByText('Main screen'));

    //await waitFor(() => screen.getByText('Main screen'));
  });
});
