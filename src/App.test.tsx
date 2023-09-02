import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'

// window.alertをモック化する
const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

afterEach(() => {
  // テストごとにモックをリセットする
  mockAlert.mockReset();
});

afterAll(() => {
  // モックを最終的にリストアする
  mockAlert.mockRestore();
});

test('renders learn react link', () => {
  render(<App />)
  const text = 'Add to Cart'
  const button = screen.getByRole('button')
  const alertMessage = 'Added to cart! ✅'
  expect(button).toHaveTextContent(text)
  // userEvent.click(button)
  // expect(window.alert).toHaveBeenCalledWith(alertMessage)
});
