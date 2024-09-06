import styled from "styled-components"

export const Container = styled.div`

    //2
    background-color: #181f36;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    height: 100vh;
`
export const Title = styled.h2`

    //3
    color: #fff;
    text-align: center;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
`
export const TopBackground = styled.div` 
    
    //1
    background: linear-gradient(to right, #fe7e5d, #7f3841);
    height: 30vh;
    width: 90vw;
    max-width: 800px;
    border-radius: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        max-width: 100%;
        max-height: 100%;
    }
`
export const Form = styled.form`

    //4
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 500px;
`
export const ContainerInputs = styled.div`
    display: flex;
    gap: 20px;
`
export const Input = styled.input`
    border-radius: 10px;
    border: 1px solid #d2eae2;
    background-color: #fff;
    padding: 12px 20px;
    outline: none;
    width: 100%;
    margin-top: 10px;
`
export const Button = styled.button`
    border: none;
    background: linear-gradient(180deg, #fe7e5d, #ff6378 100%);
    font-size: 16px;
    color: #fff;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 30px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`
export const InputLabel = styled.label`
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    margin-left: 10px;

    span {
        color: #ef4f45;
        font-weight: bold;
    }
`