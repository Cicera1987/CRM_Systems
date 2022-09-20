import React from 'react'

import { Main, Section } from './style'

export function ContainerStyle(props) {
  return (
    <Main>
      <Section>
        {props.children}
      </Section>
    </Main>
  )
}
