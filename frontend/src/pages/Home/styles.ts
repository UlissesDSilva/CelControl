import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px;
`;

export const TopContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 0;
  gap: 20px;

  span{
    font-size: 2rem;
    text-transform: uppercase;
  }
`