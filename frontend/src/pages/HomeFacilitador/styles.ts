import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 300px;
    align-items: center;
    justify-content: center;
    padding: 10px;
    gap: 15px;
    margin-top: 40px;

    img {
        width: 150px;
        height: 150px;
        margin: 10px;
    }

    h1 { font-size: 1.8em }
    
    .contentRight {
        margin-right: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .contentLeft {
        margin-left: 100px;
        display: flex;
        flex-direction: column;

        Button {
            margin-bottom: 50px;
        }
    }
`