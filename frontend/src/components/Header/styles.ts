import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 80px;
  background: #00AFEF;

  padding: 0 40px;

  span {
    color: #FFF;
    font-size: 18px;

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
