import { Title, Container, TopBackground, Button, ContainerInputs, Input, InputLabel, Form } from './styles'

function Home() {

  return (
    // <> Fragment - envolve todo mundo
    <Container>

      <TopBackground>
        <img />
      </TopBackground>

      <Form>
        <Title> Cadastrar Usuario </Title>

        <ContainerInputs>
          <div>
              <div>
                <InputLabel>
                  Nome<span>*</span>
                </InputLabel>
                <Input type='text' placeholder='Nome do usuário' />
              </div>

              <div>
                <InputLabel>
                  Idade<span>*</span>
                </InputLabel>
                <Input type='number' placeholder='Idade do usuário' />
              </div>
          </div>

          <div>
            <InputLabel>
              E-mail<span>*</span>
            </InputLabel>
            <Input type='email' placeholder='Email do usuário' />
          </div>

        </ContainerInputs>
        <Button> Cadastrar Usuario</Button>
      </Form>
    </Container>
  )
}

export default Home
























/* 
Exportar "Padrão" -> Uma coisa so por pagina
aepnas Exportar

*/

