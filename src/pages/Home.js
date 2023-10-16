import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const perfis = [
    { nome: 'João da Silva', profissao: 'Psicólogo', foto: 'imagens/bruno.jpg' },
    { nome: 'Maria Oliveira', profissao: 'Engenheira Civil', foto: 'caminho/para/imagem2.jpg' },
    { nome: 'Carlos Santos', profissao: 'Web Developer', foto: 'caminho/para/imagem3.jpg' },
    { nome: 'Ana Costa', profissao: 'Advogada', foto: 'caminho/para/imagem4.jpg' },
    { nome: 'Pedro Almeida', profissao: 'Professor', foto: 'caminho/para/imagem5.jpg' },
    { nome: 'Laura Mendes', profissao: 'Designer Gráfico', foto: 'caminho/para/imagem6.jpg' },
    { nome: 'Rafael Lima', profissao: 'Médico', foto: 'caminho/para/imagem7.jpg' },
    { nome: 'Fernanda Oliveira', profissao: 'Arquiteta', foto: 'caminho/para/imagem8.jpg' },
    { nome: 'Lucas Pereira', profissao: 'Programador', foto: 'caminho/para/imagem9.jpg' },
    { nome: 'Beatriz Souza', profissao: 'Nutricionista', foto: 'caminho/para/imagem10.jpg' },
    { nome: 'Marcos Silva', profissao: 'Analista de Dados', foto: 'caminho/para/imagem11.jpg' },
    { nome: 'Isabel Santos', profissao: 'Artista Plástico', foto: 'caminho/para/imagem12.jpg' },
];

const Perfil = ({ nome, profissao, foto }) => (
  <div className="perfil-container col-md-6 mb-4 mt-3 mx-4">
    <img src={foto} alt={`Foto do Perfil ${nome}`} className="foto" />
    <div className="info">
      <h3>{nome}</h3>
      <h4>{profissao}</h4>
    </div>
  </div>
);

function Home() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4"> </h1>

      {perfis.map((perfil, index) => (
        <Perfil key={index} {...perfil} />
      ))}

      <p>
        {/* Seu texto aqui */}
      </p>
    </div>
  );
}

export default Home;
