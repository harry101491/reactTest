import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  
  it('should match snapshot', () => {
    const element = render(<App />).baseElement;
    expect(element).toMatchSnapshot();
  });
});
