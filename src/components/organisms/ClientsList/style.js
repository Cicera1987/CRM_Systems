import styled from "styled-components";

export const LisContainer = styled.div`
    max-width: 100%;
    height: 30px;
    background-color: #778899;
    border-radius: 8px;
    display: flex;
    align-items: center;
    margin-top: 2em;
    `

export const ListName = styled.div`
    display: flex;
    align-items: center;
    width: 18%;
    padding-left: 5em;
`
export const ListCPF = styled.div`
    display: flex;
    align-items: center;
    width: 18%;
    padding-left: 5em;
`
export const ListEmail = styled.div`
    display: flex;
    align-items: center;
    width: 18%;
    padding-left: 5em;
`
export const ListStatus = styled.div`
    display: flex;
    align-items: center;
    width: 18%;
    padding-left: 5em;
`
export const ListPhoneNumbers = styled.div`
    display: flex;
    align-items: center;
    width: 15%;
    padding-left: 5em;
`
export const LisTitle = styled.h4`
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: black;
    margin-left: ${props => props.margin ? props.margin : '3em'};
    width: ${props => props.width};
    cursor: pointer;
`
export const ListJob = styled.div`
    display: flex;
    align-items: center;
    width: 20%;
    padding-left: 5em;
`
