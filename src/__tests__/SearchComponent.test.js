import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchComponent from '../components/SearchComponent';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
  }));
  
describe('SearchComponent', () => {
  test('renders without crashing', () => {
    render(
     <Router>
     <SearchComponent />;
     </Router>)
  });

  test('renders search button', () => {
    const { getByText } = render(<SearchComponent />);
    const searchButton = getByText('Search');
    expect(searchButton).toBeInTheDocument();
  });

  test('updates search query on input change', () => {
    const { getByPlaceholderText } = render(<SearchComponent />);
    const searchInput = getByPlaceholderText('Enter a game...');
    fireEvent.change(searchInput, { target: { value: 'Example Game' } });
    expect(searchInput.value).toBe('Example Game');
  });
  

  test('performs voice search on microphone click', async () => {
    const { getByAltText, getByPlaceholderText, getByText } = render(<SearchComponent />);
  
    if ('webkitSpeechRecognition' in window) {
      const mockStart = jest.fn();
      const mockStop = jest.fn();
      const mockOnResult = jest.fn();
      const mockSpeechRecognition = jest.fn().mockImplementation(() => ({
        start: mockStart,
        stop: mockStop,
        onresult: { listener: null },
        addEventListener: function (event, cb) {
          if (event === 'result') {
            this.onresult.listener = cb;
          }
        },
      }));
      window.webkitSpeechRecognition = mockSpeechRecognition;
  
     
      const microphoneImage = getByAltText('Voice Search');
      fireEvent.click(microphoneImage);
  
      const speechResult = 'Example Game';
      const mockEvent = { results: [[{ transcript: speechResult }]] };
      mockSpeechRecognition.onresult.listener(mockEvent);
  
      const searchInput = getByPlaceholderText('Enter a game...');
      expect(searchInput.value).toBe(speechResult);
  
      const searchButton = getByText('Search');
      fireEvent.click(searchButton);
  
    } else {
      console.log('webkitSpeechRecognition is not supported');
    }
  });
  
});