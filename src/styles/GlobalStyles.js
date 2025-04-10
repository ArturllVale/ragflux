import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary-color: #4361ee;
    --primary-hover: #3a56d4;
    --secondary-color: #3f37c9;
    --text-color: #f8f9fa;
    --text-secondary: #ddd;
    --background-dark: #0f172a;
    --background-light: #1e293b;
    --error-color: #e63946;
    --success-color: #2ecc71;
    --warning-color: #f39c12;
    --border-color: rgba(255, 255, 255, 0.1);
  }

  body {
    font-family: 'Inter', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--background-dark);
    color: var(--text-color);
    line-height: 1.6;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: color 0.3s ease;
  }

  a:hover {
    color: var(--primary-hover);
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: var(--primary-color);
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    font-weight: 600;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }

  button:hover {
    background-color: var(--primary-hover);
    transform: translateY(-2px);
  }

  button:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
    transform: none;
  }

  input, select, textarea {
    width: 100%;
    padding: 0.8rem;
    border-radius: 4px;
    border: 1px solid var(--border-color);
    background-color: rgba(255, 255, 255, 0.05);
    color: var(--text-color);
    font-size: 1rem;
    transition: border-color 0.3s ease;
  }

  input:focus, select:focus, textarea:focus {
    outline: none;
    border-color: var(--primary-color);
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--text-color);
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  p {
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }
`;

export default GlobalStyles;