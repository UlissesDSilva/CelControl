import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 15px;

  img{
      width: 100px;
      height: 100px;
      margin-bottom: 10px;
  }

  h1{
      font-size: 1.6em;
  }
`;