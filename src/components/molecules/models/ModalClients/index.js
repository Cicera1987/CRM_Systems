import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { ContainerStyle } from '../../../atoms/Container'
import { ButtonLogin } from '../../../atoms/Bottons/ButtonLogin/style'
import { ContainerRegisterClientData, ContainerRow, RegisterForm, SecondaryText } from './style'
import NavBar from '../../NavBar/index'
import NavLink from '../../NavLink/Sidebar'
import InputWithLabel from '../../../atoms/InputWithLabel'
import axios from '../../../../services/axios'
import { toast } from 'react-toastify'
import { UniversalFooter } from '../../../organisms/Footer/style'
import { ButtonCancel } from '../../../atoms/Bottons/ButtonCancel/style'



Modal.setAppElement('#root')


const ModelClients = () => {
    const [createClients, setCreateClients] = useState([])
    const [clients, setclents] = useState()
    const [birthDate, setBirthDate] = useState()
    const [cpf, setcpf] = useState()
    const [rg, setRg] = useState()
    const [telephoneNumber, setTelephoneNumber] = useState()
    const [email, setEmail] = useState()
    const [cep, setCep] = useState()
    const [compement, setComplement] = useState()
    const [number, setNumber] = useState()
    const [endereco, setEndereco] = useState()

    useEffect(() => {
        axios.get('/api/createClients')
            .then(res => setCreateClients(res.data.createClients))
    }, [])



    const handleClient = e => {
        e.preventDefault()

        if (clients.trim()) {
            axios.post('/api/createClients',
                { clients },
                { birthDate },
                { cpf }, { rg },
                { telephoneNumber },
                { email },
                { cep },
                { endereco },
                { compement })
                .then(res => {
                    setCreateClients(oldClients => [...oldClients,
                    res.data.clients,
                    res.data.birthDate,
                    res.data.cpf,
                    res.data.rg,
                    res.data.telephoneNumber,
                    res.data.email,
                    res.data.cep,
                    res.data.compement,
                    res.data.endereco])
                    toast.success("Dado criado com sucesso!")
                })
        }
    }
console.log(createClients)

    const [modalIsOpen, setIsOpen] = useState(false);

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
                        <RegisterForm onChange={handleClient}>
                            <ContainerRow>
                                <InputWithLabel
                                    value={clients}
                                    onChange={e => setclents(e.target.value)}
                                    label="Nome"
                                    padding="0em 2em 0 0em"
                                    width="100%"
                                    widthContainer="60%"
                                    name="name"
                                    type="text"
                                />

                                <InputWithLabel
                                    value={birthDate}
                                    onChange={e => setBirthDate(e.target.value)}
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
                                    value={cpf}
                                    onChange={e => setcpf(e.target.value)}
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
                                    value={rg}
                                    onChange={e => setRg(e.target.value)}
                                    label="RG"
                                    padding="0em 2em 0 0em"
                                    width="100%"
                                    widthContainer="40%"
                                    name="rg"
                                />
                                <InputWithLabel
                                    value={telephoneNumber}
                                    type="number"
                                    onChange={e => setTelephoneNumber(e.target.value)}
                                    label="Telefone"
                                    padding="0em 2em 0 0em"
                                    width="100%"
                                    widthContainer="40%"
                                    name="telephone_number"
                                />

                            </ContainerRow>
                            <ContainerRow>
                                <InputWithLabel
                                    value={cep}
                                    onChange={e => setCep(e.target.value)}
                                    label="CEP"
                                    padding="0em 2em 0 0em"
                                    width="100%"
                                    widthContainer="25%"
                                    name="cep"
                                />
                                <InputWithLabel
                                    value={endereco}
                                    type="text"
                                    onChange={e => setEndereco(e.target.value)}
                                    label="Endereço"
                                    padding="0em 2em 0 0em"
                                    width="100%"
                                    widthContainer="40%"
                                    name="endereco"
                                />
                                <InputWithLabel
                                    value={number}
                                    type="number"
                                    onChange={e => setNumber(e.target.value)}
                                    label="número"
                                    padding="0em 2em 0 0em"
                                    width="100%"
                                    widthContainer="25%"
                                    name="numero"
                                />
                                <InputWithLabel
                                    value={compement}
                                    type="text"
                                    onChange={e => setComplement(e.target.value)}
                                    label="Complemento"
                                    padding="0em 2em 0 0em"
                                    width="100%"
                                    widthContainer="25%"
                                    name="complemento"
                                />
                            </ContainerRow>
                            <ContainerRow>
                                <InputWithLabel
                                    value={email}
                                    type="email"
                                    onChange={e => setEmail(e.target.value)}
                                    label="E-mail"
                                    padding="0em 2em 0 0em"
                                    width="100%"
                                    widthContainer="40%"
                                    name="email"
                                />
                            </ContainerRow>
                            <UniversalFooter>
                                <ButtonCancel>Cancelar</ButtonCancel>
                                <ButtonLogin onSubmit="submit">Cadastrar</ButtonLogin>
                            </UniversalFooter>
                        </RegisterForm>
                        <ButtonLogin onClick={closeModal}>Sair</ButtonLogin>
                        <ul>
                            {createClients.map(texto => <li key={texto.value}>{texto.name}</li>)}
                        </ul>
                    </ContainerRegisterClientData>
                </ContainerStyle>

            </Modal>
        </>
    )
}

export default ModelClients