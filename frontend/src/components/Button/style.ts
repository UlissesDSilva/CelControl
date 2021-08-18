import styled from 'styled-components';

export const Container = styled.button `
    background: #00AFEF;
    
    border-radius: 50px;

    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    border: 0;
    padding: 5px 10px;
    width: 150px;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    cursor: pointer;
    transition: filter 0.7s;

    &:hover {
        filter: brightness(0.9);
    }
`