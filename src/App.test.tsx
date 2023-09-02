import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
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

test('初期表示とボタンクリック確認', async () => {
  render(<App />)
  const alt = 'Abstract art'
  const image = screen.getByAltText(alt)
  expect(image).toBeInTheDocument()
  expect(image).toHaveAttribute('src', 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987')
  expect(image).toHaveAttribute('class', 'amplify-image')

  const headerTitle = 'Abstract art'
  const headding = screen.getByText(headerTitle)
  expect(headding).toBeInTheDocument()

  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat sed cras ornare arcu dui. Duis aute irure dolor in reprehenderit in voluptate velit esse.`
  const textElement = screen.getByText(content)
  expect(textElement).toBeInTheDocument()

  const alertMessage = 'Added item to cart!'
  const button = screen.getByText('Add to Cart')
  userEvent.click(button)
  await waitFor(() => {
    expect(mockAlert).toHaveBeenCalledWith(alertMessage)
  })

});
