import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import LogIn from '../pages/LogIn';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('LogIn', () => {
  test('should call login function and submit the form', () => {
    // Create mock login function
    const loginMock = jest.fn();

    // Set the mock navigate function to do nothing
    useNavigate.mockImplementation(() => jest.fn());

    // Render the component with mocked functions and MemoryRouter
    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <LogIn login={loginMock} />
      </MemoryRouter>
    );

    // Fill in the form inputs
    const emailInput = getByPlaceholderText('supermariobros@pipeville.com');
    const passwordInput = getByPlaceholderText('PeachyDaisy123');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Submit the form
    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);

    // Check if login function was called
    expect(loginMock).toHaveBeenCalledTimes(1);

    // Additional assertions for form reset, etc. can be added if needed
  });
});
