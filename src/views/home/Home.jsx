
import React from "react";
import { Container, Grid, Image, Step,GridRow,GridColumn, Rating,Pagination } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';
import '../../theme.css'; 




function Home() {
  return (
    <div>
      <MenuSistema tela={'home'} />      
      <div style={{ marginTop: '5%' }}>

        








        <Container>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Image src='/logoprovisorio.png' size='medium' />
              </Grid.Column>
              <Grid.Column>
                <h2>Bem-vindo à Barbearia, <strong> Chefe! </strong> </h2>
                <p> Por onde começar? </p>
                
                <Step.Group vertical ordered>
                  <Step>
                    <Step.Content>
                      <Step.Title>Realize seu cadastro</Step.Title>
                      <Step.Description>
                        Informe seus dados num formulário simples.
                      </Step.Description>
                    </Step.Content>
                  </Step>
                  <Step>
                    <Step.Content>
                      <Step.Title>Agende um atendimento </Step.Title>
                      <Step.Description>
                        Oferecemos diversos serviços de beleza e estética.
                      </Step.Description>
                    </Step.Content>
                  </Step>

                  <Step>
                    <Step.Content>
                      <Step.Title> Faça-nos uma visita </Step.Title>
                      <Step.Description>
                        Aproveite nossos serviços como um verdadeiro <strong> Chefe </strong>.
                      </Step.Description>
                    </Step.Content>
                  </Step>
                </Step.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

          
         <Grid celled='internally'>
<GridRow>
  <GridColumn width={3}>
    <Image src='/barbearia.jpg' />
  </GridColumn>
  <GridColumn width={10}>
    <Image src='/corte.jpg' />
  </GridColumn>
  <GridColumn width={3}>
    <Image src='/corte2' />
  </GridColumn>
</GridRow>
<GridRow>
  <GridColumn width={3}>
    <Image src='/corte3.jpg' />
  </GridColumn>
  <GridColumn width={10}>
    <Image src='/images/wireframe/paragraph.png' />
  </GridColumn>
  <GridColumn width={3}>
    <Image src='/images/wireframe/image.png' />
  </GridColumn>
</GridRow>
</Grid>

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />



    <div>

    <h2/>Deixe sua avaliação pelo serviço Prestado<h2/>
    <Rating maxRating={5} defaultRating={3} icon='star' size='mini' />
    <br />
    <br />

    <Rating maxRating={5} defaultRating={3} icon='star' size='tiny' />
    <br />
    <br />

    <Rating maxRating={5} defaultRating={3} icon='star' size='small' />
    <br />
    <br />

    <Rating maxRating={5} defaultRating={3} icon='star' />
    <br />
    <br />

    <Rating maxRating={5} defaultRating={3} icon='star' size='large' />
    <br />
    <br />

    <Rating maxRating={5} defaultRating={3} icon='star' size='huge' />
    <br />
    <br />

    <Rating maxRating={5} defaultRating={3} icon='star' size='massive' />
    <br />
    <br />
  </div>


<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />





















<Pagination  style={{ display: 'flex', justifyContent: 'center' }}     defaultActivePage={5} totalPages={10} />

      </div>
    </div>
  );
}

export default Home;
