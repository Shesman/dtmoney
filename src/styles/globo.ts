import { createGlobalStyle } from "styled-components";

export const GobalStyle = createGlobalStyle`

  :root {
    --background: #F0F2F5;
    --red: #E52E4D;
    --blue: #5429CC;
    --blue-ligth: #6933ff;
    --green: #33cc95;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  //font-size: 16px;   -> 1 rem = 16px
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    
    @media (max-width: 720px) {
      font-size: 93.75%;
    }
  }
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  //parte externa do modal que fica opaca
  .react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  //parte interna do modal
  .react-modal-content{
    background: var(--background);
    width: 100%;
    max-width: 576px;
    padding: 3rem;
    position: relative;
    border-radius: 0.4rem;
  }

  .react-modal-close {
    border: 0;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

  }



`