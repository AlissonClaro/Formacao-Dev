import { useRef } from 'react'

import {
  Title,
  Container,
  TopBackground,
  Button,
  ContainerInputs,
  Input, InputLabel,
  Form
} from './styles'

import UsersImage from '../../assets/users.png'

function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  function registerNewUser(){
    console.log(inputName.current.value)
  }

  return (
    // <> Fragment - envolve todo mundo
    <Container>

      <TopBackground>
        <img src={UsersImage} />
      </TopBackground>

      <Form>
        <Title> Cadastrar Usuario </Title>

        <ContainerInputs>

          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type='text' placeholder='Nome do usuário' ref={inputName}/>
          </div>

          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type='number' placeholder='Idade do usuário' ref={inputAge}/>
          </div>

        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input type='email' placeholder='Email do usuário' ref={inputEmail}/>
        </div>


        <Button type='button' onClick={registerNewUser}>Cadastrar Usuário</Button>
      </Form>
    </Container>
  )
}

export default Home
























/* 
Exportar "Padrão" -> Uma coisa so por pagina
aepnas Exportar

*/

