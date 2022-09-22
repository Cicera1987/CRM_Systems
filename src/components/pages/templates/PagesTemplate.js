import React from "react";
import {Navigate} from 'react-router-dom'
import DarkButton from '../../atoms/Bottons/DarkButton/style'

import {
    SectionTitle,
    SectionTitleContainer,
    SectionTitleIcon,
} from '../../atoms/PageTitle/style'

import PagesContainer from "../../organisms/PagesContainer/styled";
import { ContainerTemplates } from "./style";

export const PagesTemplate = (props) => {
    const navigate = Navigate(props);
    const { name, icon, hasButton, buttonText, buttonPath, isRegisterPage } =
        props.template;

    if (!isRegisterPage)
        return (
            <PagesContainer>
                <ContainerTemplates>
                    <SectionTitleContainer>
                        <SectionTitleIcon>{icon}</SectionTitleIcon>
                        <SectionTitle>{name}</SectionTitle>
                    </SectionTitleContainer>

                    {hasButton ? (
                        <DarkButton
                            onClick={() => navigate.push(buttonPath)}
                            width="200px"
                            height="42px"
                            margin="0 5% 0 0"
                        >
                            {buttonText}
                        </DarkButton>
                    ) : (
                        <></>
                    )}
                </ContainerTemplates>
                {props.children}
            </PagesContainer>
        );

    return (
        <PagesContainer>
            {props.children}
        </PagesContainer>
    );
};

export default PagesTemplate;