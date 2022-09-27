import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { ContainerStyle } from '../../../atoms/Container'
import { ButtonLogin } from '../../../atoms/Bottons/ButtonLogin/style'
import { ContainerRegisterClientData, ContainerRow, RegisterForm, SecondaryText, LabelInput, InputTexto } from './style'
import NavBar from '../../NavBar/index'
import NavLink from '../../NavLink/Sidebar'

import axios from '../../../../services/axios'
import { toast } from 'react-toastify'
import { UniversalFooter } from '../../../organisms/Footer/style'
import { ButtonCancel } from '../../../atoms/Bottons/ButtonCancel/style'
import {useNavigate} from 'react-router-dom'



Modal.setAppElement('#root')

const initialValue = {
    title: '',
    cpf: '',
    email: '',
}

const ModelClients = () => {
    const [createClients, setCreateClients] = useState({ initialValue })
    const [modalIsOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()



    useEffect(() => {
        axios.get('/api/createClients')
            .then(res => setCreateClients(res.data.createClients))
    }, [])

    const onChange = (e) => {
        const { name, value } = e.target;
        setCreateClients({ ...createClients, [name]: value });
    }


    const handleClient = (e) => {
        e.preventDefault()
        axios.post('/api/createClients', createClients)
        .then((res)=>{
            navigate.push('/clients')

        })
    }
    

    function openModal() {
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
                        <RegisterForm onSubmit={handleClient}>
                            <ContainerRow>
                                <InputTexto
                                    id="title"
                                    onChange={onChange}
                                    placeholder="Nome"
                                    padding="0em 2em 0 0em"
                                    width="100%"
                                    widthContainer="60%"
                                    name="title"
                                    type="text"
                                />
                                <InputTexto
                                    id="cpf"
                                    onChange={onChange}
                                    placeholder="CPF"
                                    padding="0em 2em 0 0em"
                                    width="100%"
                                    widthContainer="40%"
                                    type="text"
                                    name="cpf"
                                />
                                <InputTexto
                                    id='email'
                                    type="email"
                                    onChange={onChange}
                                    placeholder="E-mail"
                                    padding="0em 2em 0 0em"
                                    width="100%"
                                    widthContainer="40%"
                                    name="email"
                                />

                            </ContainerRow>
                            <UniversalFooter>
                                <ButtonCancel>Cancelar</ButtonCancel>
                                <ButtonLogin type="submit">Cadastrar</ButtonLogin>
                            </UniversalFooter>
                        </RegisterForm>
                        <ButtonLogin onClick={closeModal}>Sair</ButtonLogin>

                    </ContainerRegisterClientData>
                </ContainerStyle>

            </Modal>
        </>
    )
}

export default ModelClients


//     if (clients.trim()) {
//         axios.post('/api/createClients',
//             { clients },
//             { cpf },
//             { email })
//             .then(res => {
//                 setCreateClients(oldClients => [...oldClients,
//                 res.data.clients,
//                 res.data.cpf,
//                 res.data.email,

//                 ])
//                 return toast.success("Dado criado com sucesso!")
//             })

//     }
// }
    // < ul >
    // { createClients.map(texto => <li key={texto.id}>{texto.name}</li>) }
    //                     </ul >