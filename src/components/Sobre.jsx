
import React from 'react';
import Footer from './Footer';

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

const styles = {
    page: {
        backgroundColor: '#0a0803',
        color: '#ffffff',
        padding: '2em 0',
    },
    header: {
        color: '#bb872e',
        marginBottom: '1.5em',
    },
    segment: {
        backgroundColor: '#14120c',
        border: '1px solid rgba(187, 135, 46, 0.3)',
        color: '#ffffff',
        boxShadow: 'none',
    },
    listItem: {
        color: '#ffffff',
    },
    card: {
        backgroundColor: '#1a180f',
        border: '1px solid rgba(187, 135, 46, 0.3)',
        color: '#ffffff',
    },
    cardHeader: {
        color: '#bb872e',
    },
    cardMeta: {
        color: 'rgba(255, 255, 255, 0.7)',
    },
    commentAuthor: {
        color: '#bb872e',
    },
    commentText: {
        color: '#ffffff',
    },
    iframe: {
        border: 0,
        width: '100%',
        height: 300,
    },
};

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
        { id: 1, nome: 'João', funcao: 'Barbeiro', foto: 'https://via.placeholder.com/150?text=Lucas' },
        { id: 2, nome: 'Maria', funcao: 'Barbeira e estilista', foto: 'https://via.placeholder.com/150?text=Fernanda' },
        { id: 3, nome: 'Carlos', funcao: 'Barbeiro', foto: 'https://via.placeholder.com/150?text=Rafael' },
    ];

return (
    <div style={styles.page}>
        <Header as="h1" textAlign="center" style={styles.header}>
            <Header.Content style={{ fontFamily: 'Palatino, serif' }}>
                Barbearia Chefe
            </Header.Content>
        </Header>

        <Container>
            <Segment style={styles.segment}>
                <Image
                    src="https://via.placeholder.com/300x200?text=Barbearia+Chefe"
                    size="medium"
                    floated="right"
                    rounded
                    alt="Barbearia Chefe"
                />
                <p>
                    Bem-vindo à Barbearia Chefe, o lugar onde tradição e modernidade se encontram para oferecer o melhor em cortes, barbas e estilo.
                    Nossa equipe de profissionais é dedicada a cuidar do seu visual com atenção e qualidade, aqui, te tratamos como um verdadeiro chefe.
                </p>
                <p>
                    Fundada em 2025, nossa missão é proporcionar uma experiência única e personalizada a cada cliente, num ambiente acolhedor e descontraído.
                </p>
            </Segment>

            <Segment style={styles.segment}>
                <Header as="h3" style={styles.header}>Nossos Diferenciais</Header>
                <List bulleted>
                    <List.Item style={styles.listItem}>Cortes modernos</List.Item>
                    <List.Item style={styles.listItem}>Atendimento personalizado</List.Item>
                    <List.Item style={styles.listItem}>Ambiente confortável e limpo</List.Item>
                    <List.Item style={styles.listItem}>Produtos de alta qualidade</List.Item>
                    <List.Item style={styles.listItem}>Reserva online fácil e rápida</List.Item>
                </List>
            </Segment>
            <Segment style={styles.segment}>
                <Header as="h3" style={styles.header}>Depoimentos</Header>
                <Comment.Group>
                    {depoimentos.map(dep => (
                        <Comment key={dep.id}>
                            <Comment.Avatar src="https://via.placeholder.com/48" alt={`Foto de ${dep.nome}`} />
                            <Comment.Content>
                                <Comment.Author style={styles.commentAuthor}>{dep.nome}</Comment.Author>
                                <Comment.Text style={styles.commentText}>{dep.texto}</Comment.Text>
                            </Comment.Content>
                        </Comment>
                    ))}
                </Comment.Group>
            </Segment>

            <Segment style={styles.segment}>
                <Header as="h3" style={styles.header}>Nossa Equipe</Header>
                <Card.Group itemsPerRow={3} stackable>
                    {equipe.map(membro => (
                        <Card
                            key={membro.id}
                            image={membro.foto}
                            header={<span style={styles.cardHeader}>{membro.nome}</span>}
                            meta={<span style={styles.cardMeta}>{membro.funcao}</span>}
                            style={styles.card}
                        />
                    ))}
                </Card.Group>
            </Segment>

            <Segment style={styles.segment}>
                <Header as="h3" style={styles.header}>Localização</Header>
                <iframe
                    title="Localização Barbearia"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.316178257518!2d-35.05589348477683!3d-8.123739290020168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab19de4c557c73%3A0xb32b22e05a188f38!2sEstrada%20de%20Bulh%C3%B5es%2C%20Bulh%C3%B5es%20-%20Jaboat%C3%A3o%20dos%20Guararapes%20-%20PE%2C%2054080-000!5e0!3m2!1spt-BR!2sbr!4v1689482736589!5m2!1spt-BR!2sbr"
                    allowFullScreen=""
                    loading="lazy"
                    style={styles.iframe}
                ></iframe>
            </Segment>
        </Container>
        <Footer />
    </div>
);
};

export default Sobre;
