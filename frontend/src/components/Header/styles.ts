import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 80px;
  background: #00AFEF;

  padding: 0 20px 0 10px;

  span {
    display: flex;
    color: #FFF;
    font-size: 18px;
    align-items: center;

    svg{
      width: 24px;
      height: 24px;
      margin-right: 5px;
      cursor: pointer;
    }

    &.application-name {
      font-size: 24px;
    }
  }

  button {
    border: 0;
    background: transparent;

    outline: 0;
    cursor: pointer;
  }
`;
