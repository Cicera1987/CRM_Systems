import styled from "styled-components";

export const ContainerRegisterClientData = styled.div`
    padding: 1em 3em 0 3em;
    border-bottom: 1px solid rgba(145, 158, 171, 0.3); 
`

export const RegisterForm = styled.form`
   display: flex;
   flex-direction: column;
`

export const StyleContainer = styled.div`
    display:flex;
`

export const ContainerRadios = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    
`
export const ContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1.5em;

    &:last-child {
        margin-bottom: 3em;
    }
`
export const Matriz = styled.p`
    display: flex;
    flex-direction: row; 
    align-items: center;
`

export const ContainerInputRadio = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    width: 50%;

`
export const ContainerSituation = styled.div`
    padding: 1em 3em 0 3em;
    height:16em;
`
export const SecondaryText = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 800;
    color: black;
    opacity: 0.9;
    margin: ${props => props.margin};
`

export const ContainerButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #f4f6f8;
`