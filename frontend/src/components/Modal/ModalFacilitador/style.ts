import styled from 'styled-components';

export const Container = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #00AFEF;
    padding: 10px;
    color: #fff;
    font-size: 1em;

    img {
      width: 25px;
      height: 25px;
    }
    
    img.closeModal {
      cursor: pointer;
      transition: filter 0.7s;

      &:hover {
        filter: brightness(0.9);
      }
    }
    

  }

`;
