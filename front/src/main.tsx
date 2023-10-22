import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';

import App from './App.tsx';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    margin-top: 24px;
  }

  input {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    outline: none;
  }  

  ul {
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <GlobalStyle />
    <App />
  </>,
);
