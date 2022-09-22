import styled from "styled-components"

export const ContainerListClientsStyle = styled.section`
    padding: 1.5em 1.5em 0 1.5em;
    width: 91.2%;
    min-height: 70vh;
    background-color: white;
    border-radius: 20px;

    @media(min-width:1000px){
        width:95%;
    }
`
export const ContainerListItemClients = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 65px;
`
export const ContainerListItem = styled.div`
    display: flex;
    width: 20%;
    padding-left: 3em;
`