import React from 'react'
import { ButtonCancel } from '../../atoms/Bottons/ButtonCancel/style.js';
import { ButtonLogin } from '../../atoms/Bottons/ButtonLogin/style.js';
import { ContainerStyle } from '../../atoms/Container/index.js';
import {
  UniversalFooter,
  ModalTitle,
  StyleStart
}
  from "./style.js";


const Footer = () => {
  return (
    <ContainerStyle>
      <UniversalFooter>
        <ButtonCancel>Cancelar</ButtonCancel>
        <ButtonLogin>Cadastrar</ButtonLogin>
      </UniversalFooter>
      
    </ContainerStyle>
  )
}

export default Footer