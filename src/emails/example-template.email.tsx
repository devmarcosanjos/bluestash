import {
  Tailwind,
  Img,
  Html,
  Head,
  Body,
  Preview,
  Container,
  Section,
  Row,
  Column,
  Text,
  Link,
} from '@react-email/components'
import * as React from 'react'

import {APP_URL} from '@/config/env-client'

import {supportedLanguages} from '@/locales/config'

type Props = {
  name: string
  emailConfirmationUrl: string
  lang: (typeof supportedLanguages)[number]
}

const baseUrl = APP_URL ?? '/static'
const supportEmail = 'support@email.com'

export const ExampleEmailTemplate = ({name, emailConfirmationUrl, lang}: Props) => {
  return (
    <Html lang={lang}>
      <Head />

      {lang === 'pt-BR' && <Preview>Confirme seu e-mail</Preview>}
      {lang === 'en-US' && <Preview>Confirm your email</Preview>}

      <Tailwind>
        <Body className='mx-auto my-auto bg-white px-2 font-sans'>
          <Container className='mx-auto my-[40px] max-w-[600px]  text-black'>
            <Container className='box-border rounded border border-solid border-[#eaeaea] p-[20px]'>
              <Row>
                <Column className='mb-5 block text-center'>
                  <Img width={250} src={`${baseUrl}/logo.png`} className='inline' alt='Logo' />
                </Column>
              </Row>
              <Section className='text-base-300'>
                <Row>
                  <Text className='text-md mt-2'>
                    {lang === 'pt-BR' && `Olá ${name},`}
                    {lang === 'en-US' && `Hello {name},`}
                  </Text>

                  <Text className='text-md mt-2'>
                    {lang === 'pt-BR' && 'Estamos muito felizes em recebê-lo aqui na Company! 🎉'}
                    {lang === 'en-US' && 'We are very happy to welcome you here at Company! 🎉'}
                  </Text>

                  <Text className='text-md mt-2'>
                    {lang === 'pt-BR' && 'Clique no botão abaixo para confirmar seu email:'}
                    {lang === 'en-US' && 'Click the button below to confirm your email:'}
                  </Text>
                </Row>

                <Row>
                  <Column className='w-full pb-3 pt-3'>
                    <Link
                      href={emailConfirmationUrl}
                      className='box-border block w-full rounded-lg bg-[#000] px-8 py-3 text-center font-semibold text-white'>
                      <span>
                        {lang === 'pt-BR' && 'Confirmar meu e-mail'}
                        {lang === 'en-US' && 'Confirm my email'}
                      </span>
                    </Link>
                  </Column>
                </Row>

                <Row>
                  <Column>
                    <Text className='mb-0 mt-2 text-center text-xs'>
                      Dúvidas?: Não hesite em nos contatar pelo{' '}
                      <a href={`mailto:${supportEmail}`}>{supportEmail}</a>. Estamos aqui para
                      ajudar!
                    </Text>
                  </Column>
                </Row>
              </Section>
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

ExampleEmailTemplate.PreviewProps = {
  name: 'Josy Silva',
  confirmUrl: 'https://example.com/confirm-email',
  lang: 'en-US',
}

export default ExampleEmailTemplate
