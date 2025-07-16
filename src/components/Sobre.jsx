import React from 'react';
import {
    Container,
    Header,
    Image,
    Segment,
    Icon,
    List,
    Card,
    Comment,
} from 'semantic-ui-react';

const Sobre = () => {
    const fotos = [
        { id: 1, src: 'https://via.placeholder.com/200x150?text=Corte+1', titulo: 'Corte Clássico' },
        { id: 2, src: 'https://via.placeholder.com/200x150?text=Corte+2', titulo: 'Estilo Moderno' },
        { id: 3, src: 'https://via.placeholder.com/200x150?text=Equipe', titulo: 'Nossa Equipe' },
        { id: 4, src: 'https://via.placeholder.com/200x150?text=Ambiente', titulo: 'Ambiente Aconchegante' },
    ];

    const depoimentos = [
        { id: 1, nome: 'João Silva', texto: 'Atendimento excelente! Recomendo muito.' },
        { id: 2, nome: 'Maria Santos', texto: 'Adorei o corte e o ambiente, muito profissional.' },
        { id: 3, nome: 'Carlos Pereira', texto: 'Equipe super atenciosa e cortes precisos.' },
    ];

    const equipe = [
        { id: 1, nome: 'Lucas', funcao: 'Barbeiro Chefe', foto: 'https://via.placeholder.com/150?text=Lucas' },
        { id: 2, nome: 'Fernanda', funcao: 'Barbeira', foto: 'https://via.placeholder.com/150?text=Fernanda' },
        { id: 3, nome: 'Rafael', funcao: 'Estilista', foto: 'https://via.placeholder.com/150?text=Rafael' },
    ];

    return (
        <Container style={{ marginTop: '2em', marginBottom: '2em' }}>
            {/* Cabeçalho */}
            <Header as="h1" icon textAlign="center" style={{ marginBottom: '1.5em' }}>
                <Icon name="cut" circular />
                <Header.Content>Barbearia Chefe </Header.Content>
            </Header>

            {/* Sobre */}
            <Segment>
                <Image
                    src="https://via.placeholder.com/300x200?text=Barbearia+Fictícia"
                    size="medium"
                    floated="right"
                    rounded
                    alt="Barbearia Fictícia"
                />
                <p>
                    Bem-vindo à Barbearia Chefe, o lugar onde tradição e modernidade se encontram para oferecer o melhor em cortes, barbas e estilo.
                    Nossa equipe de profissionais é dedicada a cuidar do seu visual com atenção e qualidade, aqui, te tratamos como um verdadeiro chefe.
                </p>
                <p>
                    Fundada em 2020, nossa missão é proporcionar uma experiência única e personalizada a cada cliente, num ambiente acolhedor e descontraído.
                </p>
            </Segment>

            {/* Diferenciais */}
            <Segment>
                <Header as="h3">Nossos Diferenciais</Header>
                <List bulleted>
                    <List.Item>Cortes clássicos e modernos</List.Item>
                    <List.Item>Atendimento personalizado</List.Item>
                    <List.Item>Ambiente confortável e limpo</List.Item>
                    <List.Item>Produtos de alta qualidade</List.Item>
                    <List.Item>Reserva online fácil e rápida</List.Item>
                </List>
            </Segment>

            {/* Galeria */}
            <Segment>
                <Header as="h3">Galeria de Fotos</Header>
                <Card.Group itemsPerRow={4} stackable>
                    {fotos.map(foto => (
                        <Card key={foto.id} image={foto.src} header={foto.titulo} />
                    ))}
                </Card.Group>
            </Segment>

            {/* Depoimentos */}
            <Segment>
                <Header as="h3">Depoimentos</Header>
                <Comment.Group>
                    {depoimentos.map(dep => (
                        <Comment key={dep.id}>
                            <Comment.Avatar src="https://via.placeholder.com/48" alt={`Foto de ${dep.nome}`} />
                            <Comment.Content>
                                <Comment.Author>{dep.nome}</Comment.Author>
                                <Comment.Text>{dep.texto}</Comment.Text>
                            </Comment.Content>
                        </Comment>
                    ))}
                </Comment.Group>
            </Segment>

            {/* Equipe */}
            <Segment>
                <Header as="h3">Nossa Equipe</Header>
                <Card.Group itemsPerRow={3} stackable>
                    {equipe.map(membro => (
                        <Card
                            key={membro.id}
                            image={membro.foto}
                            header={membro.nome}
                            meta={membro.funcao}
                        />
                    ))}
                </Card.Group>
            </Segment>

            {/* Localização */}
            <Segment>
                <Header as="h3">Localização</Header>
                <iframe
                    title="Localização Barbearia"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.316178257518!2d-35.05589348477683!3d-8.123739290020168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab19de4c557c73%3A0xb32b22e05a188f38!2sEstrada%20de%20Bulh%C3%B5es%2C%20Bulh%C3%B5es%20-%20Jaboat%C3%A3o%20dos%20Guararapes%20-%20PE%2C%2054080-000!5e0!3m2!1spt-BR!2sbr!4v1689482736589!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </Segment>
        </Container>
    );
};

export default Sobre;
