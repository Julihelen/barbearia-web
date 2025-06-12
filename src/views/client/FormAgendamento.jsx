import { useState } from 'react';
import { Form, Button, Grid, Icon, Dropdown, Menu  } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';
import axios from "axios";

// Array para serviços - futuramente retirados direto do banco de acordo com a disponibilidade
const servicosOptions = [
  { key: 'corte', text: 'Corte de Cabelo', value: 'Corte de Cabelo' },
  { key: 'barba', text: 'Barba', value: 'Barba' },
  { key: 'sobrancelha', text: 'Sobrancelha', value: 'Sobrancelha' },
];
// Array para barbeiros
const barbeirosOptions = [
  { key: 'joao', text: 'João', value: 'João' },
  { key: 'maria', text: 'Maria', value: 'Maria' },
  { key: 'carlos', text: 'Carlos', value: 'Carlos' },
];

// Função para salvar os dados
function Agendamento() {
  const [nome, setNome] = useState(); // futuramente pegar nome a partir do cookies de login
  const [servico, setServico] = useState();
  const [dataAtendimento, setDataAtendimento] = useState();
  const [horario, setHorario] = useState();
  const [barbeiro, setBarbeiro] = useState();
  const [observacoes, setObservacoes] = useState();



  function salvar() {

    let AgendamentoRequest = {
        nome: nome,
        servico: servico,
        dataAtendimento: dataAtendimento,
        horario: horario,
        barbeiro: barbeiro,
        observacoes: observacoes,
    }
    
    //faz o post para o banco
    axios.post("http://localhost:8080/api/agendamento", AgendamentoRequest)
    // exceção caso não funcione
    .then((response) => {
         console.log('Agendado com sucesso.')
    })
    .catch((error) => {
      console.error('Erro ao incluir o agendamento:', error.response?.data || error.message);
    })
  }

  return (
    <>
      <MenuSistema tela={'agendamento'} />
      <div className="ui container">
        <Grid stackable centered>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <h3> Agendamento de Atendimento </h3>
              <Form className="ui form" widths='equal'>
                <Form.Field>
                  <label>Nome Completo</label>
                  <input
                    type="text"
                    name="nome"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    placeholder="Nome do Cliente"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Data de atendimento</label>
                  <input
                    type="date"
                    name="dataAtendimento"
                    value={dataAtendimento}  // A data é mantida no formato yyyy-MM-dd
                    onChange={e => setDataAtendimento(e.target.value)}  // A data é salva diretamente no formato correto
                  />
                </Form.Field>
                <Form.Field>
                  <label>Serviço</label>
                  <Dropdown
                    placeholder='Selecione um serviço'
                    fluid
                    selection
                    name="servico"
                    options={servicosOptions}
                    value={servico}
                    onChange={(e, data) => setServico(data.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Barbeiro</label>
                  <Dropdown
                    placeholder='Selecione um barbeiro'
                    fluid
                    selection
                    name="barbeiro"
                    options={barbeirosOptions}
                    value={barbeiro}
                    onChange={(e, data) => setBarbeiro(data.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Horário</label>
                  <input
                    type="time"
                    name="horario"
                    value={horario}
                    onChange={e => setHorario(e.target.value)}
                    placeholder="Selecione o horário"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Observacoes</label>
                  <textarea
                    type="text"
                    name="observacoes"
                    value={observacoes}
                    onChange={e => setObservacoes(e.target.value)}
                    placeholder="Alergias, preferências, detalhes"
                  />
                </Form.Field>

                <Button
                  className="ui button"
                  inverted
                  circular
                  icon
                  labelPosition='left'
                  color='blue'
                  floated='right'
                  onClick={() => salvar()}
                >
                  <Icon name='save' />
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
