import React, { useState } from 'react'
import Modal from 'react-modal'
import { ContainerStyle } from '../../../atoms/Container'
import { ButtonLogin } from '../../../atoms/Bottons/ButtonLogin/style'
import { ContainerRegisterClientData, ContainerRow, RegisterForm, SecondaryText } from './style'
import NavBar from '../../NavBar/index'
import NavLink from '../../NavLink/Sidebar'
import InputWithLabel from '../../../atoms/InputWithLabel'

Modal.setAppElement('#root')


const ModalUsers = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true)
    }
    function closeModal() {
        setIsOpen(false)
    }



    return (
        <>
            <ButtonLogin onClick={openModal}>Novo Usuario</ButtonLogin>
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
                        <SecondaryText margin="2.5em">Tipo de Usuario</SecondaryText>
                        <RegisterForm>
                            <ContainerRow>
                                <InputWithLabel
                                    value=""
                                    onChange={('')}
                                    label="Cargo"
                                    padding="0em 2em 0 0em"
                                    width="100%"
                                    widthContainer="60%"
                                    name="Cargo"
                                    type="text"
                                />

                                <InputWithLabel
                                    value=""
                                    onChange={('')}
                                    label="Tipo"
                                    padding="0em 2em 0 0em"
                                    width="100%"
                                    widthContainer="40%"
                                    type='date'
                                    name="Tipo"
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

export default ModalUsers