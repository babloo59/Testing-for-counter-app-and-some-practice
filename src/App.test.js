import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';
import User from './User';
import renderer from 'react-test-renderer';

// test('Class Component method testing', () => {
//   const componentData = renderer.create(<User />).getInstance();
//   console.log(componentData);
// });

test('input test case', () => {
  render(<App/>);
  const inputs = screen.getAllByLabelText('Username');
  for(let i=0; i<inputs.length; i++){
    expect(inputs[i]).toBeInTheDocument();
  }
})

test('checkboxes test case', () => {
  render(<App/>);
  const checkboxes = screen.getAllByLabelText('Skills');
  for(let i=0; i<checkboxes.length; i++){
    expect(checkboxes[i]).toBeInTheDocument();
  }
})

test('queryBy Test Case', async () => {
  render(<App />);

  const logoutButton = screen.getByText('Logout');
  expect(logoutButton).toBeInTheDocument();

  await userEvent.click(logoutButton);

  expect(screen.getByText('Login')).toBeInTheDocument();
});

// describe('App component', () => {
  
//   test('increments the count when the "+" button is clicked', () => {
//     render(<App />);

//     const incrementButton = screen.getByText('+');
//     const countDisplay = screen.getByText('0');

//     fireEvent.click(incrementButton);

//     // Assert count incremented
//     expect(screen.getByText('1')).toBeInTheDocument();
//   });

//   test('decrements the count when the "-" button is clicked', () => {
//     render(<App />);

//     const decrementButton = screen.getByText('-');
//     const countDisplay = screen.getByText('0');

//     fireEvent.click(decrementButton);

//     // Assert count decremented
//     expect(screen.getByText('-1')).toBeInTheDocument();
//   });

//   test('resets the count when the "Reset" button is clicked', () => {
//     render(<App />);

//     const incrementButton = screen.getByText('+');
//     const resetButton = screen.getByText(/reset/i);

//     fireEvent.click(incrementButton); // Increment to 1
//     fireEvent.click(resetButton);     // Reset to 0

//     // Assert reset to 0
//     expect(screen.getByText('0')).toBeInTheDocument();
//   });
// });

// // beforeAll( () => {
// //   console.log('**** before all hooks ****');
// // });

// beforeEach( () => {
//   console.log('**** before each hook ****');
// });

test('increments the count when the "+" button is clicked', () => {
  render(<App />);

  const incrementButton = screen.getByText('+');
  const countDisplay = screen.getByText('0');

  fireEvent.click(incrementButton);
  expect(screen.getByText('1')).toBeInTheDocument();
});

test('decrements the count when the "-" button is clicked', () => {
  render(<App />);

  const decrementButton = screen.getByText('-');
  const countDisplay = screen.getByText('0');

  fireEvent.click(decrementButton);
  expect(screen.getByText('-1')).toBeInTheDocument();
});

test('resets the count when the "Reset" button is clicked', () => {
  render(<App />);

  const incrementButton = screen.getByText('+');
  const resetButton = screen.getByText(/reset/i);

  fireEvent.click(incrementButton);
  fireEvent.click(resetButton);    

  expect(screen.getByText('0')).toBeInTheDocument();
});

// afterAll( () => {
//   console.log('........... after all ................');
// });

// afterEach( () => {
//   console.log('........... after each ............');
// })