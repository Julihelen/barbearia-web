import React, { useState } from "react";
import { Form, Button, Grid, Icon, Dropdown, Image } from "semantic-ui-react";
import MenuSistema from "../../components/MenuAdmin";
import axios from "axios";
import TopMenu from "../../components/TopMenu";

const servicosOptions = [
  { key: "corte", text: "Corte de Cabelo", value: "Corte de Cabelo" },
  { key: "barba", text: "Barba", value: "Barba" },
  { key: "sobrancelha", text: "Sobrancelha", value: "Sobrancelha" },
  { key: "corte+Barba", text: "corte+Barba", value: "corte+Barba" },
  { key: "Barba+sobrancelha", text: "Barba+sobrancelha", value: "Barba+sobrancelha" },


];


function Agendamento() {
  const [servico, setServico] = useState();
  const [observacoes, setObservacoes] = useState();

  function salvar() {
    const ServicosRequest = {
      servico,
      observacoes,
    };

if (!servico || !observacoes) {
   alert("Preencha com suas informações");

}


    
    alert("Serviço cadastrado com Sucesso !")
   

    axios
      .post("http://localhost:8080/api/servicos", ServicosRequest)
      .then(() => {
        console.log("Serviço cadastrado com sucesso.");
      })
      .catch((error) => {
        console.error(
          "Erro ao incluir um Serviço:",
          error.response?.data || error.message
        );
      });
  }

  

  return (
    <>
    <TopMenu />
      <MenuSistema tela="cadastroServico" />
      <div style={styles.container}>
        {/* <div id="botao" style={styles.botoes}>
          <Button onClick={logar} primary>Login</Button>
          <Button onClick={cadastrar} secondary>Cadastrar</Button>
        </div> */}


        <Grid stackable centered>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={8}>

                
              <h3 style={styles.title}>Cadastrar Serviço</h3>
              <Form style={styles.form}>
                
               

                <Form.Field>
                  <label>Serviço</label>
                  <Dropdown
                    placeholder="Selecione um serviço"
                    fluid
                    selection
                    name="servico"
                    options={servicosOptions}
                    value={servico}
                    onChange={(e, data) => setServico(data.value)}
                  />
                </Form.Field>

                

              
                <Form.Field>
                  <label>Observações</label>
                  <textarea
                    name="observacoes"
                    value={observacoes}
                    onChange={(e) => setObservacoes(e.target.value)}
                  />
                </Form.Field>

                <Button
                  className="ui button"
                  inverted
                  circular
                  icon
                  labelPosition="left"
                  color="blue"
                  floated="right"
                  onClick={salvar}
                >
                  <Icon name="save" />
                  Salvar
                </Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
}

export default Agendamento;

const styles = {
  container: {
    minHeight: "50vh",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "200px",
    justifyContent: "center",
  },
  title: {
    fontSize: "30px",
    marginBottom: "60px",
    textAlign: "center",
  },
  form: {
    backgroundColor: "#bb872e",
    padding: "10px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "1000px",
    width: "400%",
  },
  foto: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  botoes: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    position: "relative",
    top: "-200px",
    width: "118%",
    borderRadius: "20px",
  },
};