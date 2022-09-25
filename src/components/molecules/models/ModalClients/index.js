import React, { useState } from 'react'
import Modal from 'react-modal'
import { ContainerStyle } from '../../../atoms/Container'
import { ButtonLogin } from '../../../atoms/Bottons/ButtonLogin/style'
import { ContainerRegisterClientData, ContainerRow, RegisterForm, SecondaryText } from './style'
import NavBar from '../../NavBar/index'
import NavLink from '../../NavLink/Sidebar'
import InputWithLabel from '../../../atoms/InputWithLabel'

Modal.setAppElement('#root')


const ModelClients = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal(){
        setIsOpen(true)
    }
    function closeModal() {
        setIsOpen(false)
    }



    return (
        <>
        <ButtonLogin onClick={openModal}>Novo Cliente</ButtonLogin>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                overlayClassName="modal-overlay"
                contentLabel="Example Modal"
            >
                <NavBar />
                <NavLink />
                <ContainerStyle>
                    <ContainerRegisterClientData>
                        <SecondaryText margin="2.5em">Cadastro de Cliente</SecondaryText>
                        <RegisterForm>
                            <ContainerRow>
                                <InputWithLabel
                                    value=""
                                    onChange={('')}
                                    label="Nome"
                                    padding="0em 2em 0 0em"
                                    width="100%"
                                    widthContainer="60%"
                                    name="name"
                                    type="text"
                                />

                                <InputWithLabel
                                    value=""
                                    onChange={('')}
                                    label="Data de nascimento"
                                    padding="0em 2em 0 0em"
                                    width="100%"
                                    widthContainer="40%"
                                    type='date'
                                    name="birth_date"
                                />
                            </ContainerRow>
                            <ContainerRow>
                                <InputWithLabel
                                    id="cpf"
                                    value=""
                                    onChange={('')}
                                    label="CPF"
                                    mask={[
                                        /\d/,
                                        /\d/,
                                        /\d/,
                                        '.',
                                        /\d/,
                                        /\d/,
                                        /\d/,
                                        '.',
                                        /\d/,
                                        /\d/,
                                        /\d/,
                                        '-',
                                        /\d/,
                                        /\d/,
                                    ]}
                                    padding="0em 2em 0 0em"
                                    width="100%"
                                    widthContainer="40%"
                                    type="text"
                                    name="cpf"
                                />
                                <InputWithLabel
                                    value=""
                                    onChange={('')}
                                    label="RG"
                                    padding="0em 2em 0 0em"
                                    width="100%"
                                    widthContainer="40%"
                                    name="rg"
                                />
                                <InputWithLabel
                                    value=''
                                    type="number"
                                    onChange={('')}
                                    label="Telefone"
                                    padding="0em 2em 0 0em"
                                    width="100%"
                                    widthContainer="40%"
                                    name="telephone_number"
                                />

                            </ContainerRow>
                            <ContainerRow>
                                <InputWithLabel
                                    value=""
                                    onChange={('')}
                                    label="CEP"
                                    padding="0em 2em 0 0em"
                                    width="100%"
                                    widthContainer="25%"
                                    name="cep"
                                />
                                <InputWithLabel
                                    value=''
                                    type="text"
                                    onChange={('')}
                                    label="Rua"
                                    padding="0em 2em 0 0em"
                                    width="100%"
                                    widthContainer="40%"
                                    name="rua"
                                />
                                <InputWithLabel
                                    value=''
                                    type="number"
                                    onChange={('')}
                                    label="Telefone"
                                    padding="0em 2em 0 0em"
                                    width="100%"
                                    widthContainer="25%"
                                    name="numero"
                                />
                                <InputWithLabel
                                    value=''
                                    type="text"
                                    onChange={('')}
                                    label="Complemento"
                                    padding="0em 2em 0 0em"
                                    width="100%"
                                    widthContainer="25%"
                                    name="complemento"
                                />
                            </ContainerRow>
                            <ContainerRow>
                                <InputWithLabel
                                    value=''
                                    type="email"
                                    onChange={('')}
                                    label="E-mail"
                                    padding="0em 2em 0 0em"
                                    width="100%"
                                    widthContainer="40%"
                                    name="email"
                                />
                            </ContainerRow>
                        </RegisterForm>
                    </ContainerRegisterClientData>
                </ContainerStyle>
            <ButtonLogin onClick={closeModal}>Sair</ButtonLogin> 
            </Modal>
        </>
    )
}

export default ModelClients