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
  { nome: 'Camila Costa', profissao: 'Engenheira de Software', foto: 'caminho/para/imagem13.jpg' },
  { nome: 'Rodrigo Mendonça', profissao: 'Chef de Cozinha', foto: 'caminho/para/imagem14.jpg' },
  { nome: 'Aline Oliveira', profissao: 'Jornalista', foto: 'caminho/para/imagem15.jpg' },
  { nome: 'Gustavo Pereira', profissao: 'Contador', foto: 'caminho/para/imagem16.jpg' },
  { nome: 'Juliana Souza', profissao: 'Psiquiatra', foto: 'caminho/para/imagem17.jpg' },
  { nome: 'Bruno Almeida', profissao: 'Engenheiro Eletricista', foto: 'caminho/para/imagem18.jpg' },
  { nome: 'Vanessa Lima', profissao: 'Economista', foto: 'caminho/para/imagem19.jpg' },
  { nome: 'Leonardo Oliveira', profissao: 'Fotógrafo', foto: 'caminho/para/imagem20.jpg' },
  { nome: 'Mariana Silva', profissao: 'Bióloga', foto: 'caminho/para/imagem21.jpg' },
  { nome: 'Felipe Mendes', profissao: 'Engenheiro Mecânico', foto: 'caminho/para/imagem22.jpg' },
  { nome: 'Amanda Costa', profissao: 'Psicóloga', foto: 'caminho/para/imagem23.jpg' },
  { nome: 'Thiago Oliveira', profissao: 'Desenvolvedor Front-end', foto: 'caminho/para/imagem24.jpg' },
  { nome: 'Patrícia Santos', profissao: 'Advogada Trabalhista', foto: 'caminho/para/imagem25.jpg' },
  { nome: 'Eduardo Lima', profissao: 'Professor de Matemática', foto: 'caminho/para/imagem26.jpg' },
  { nome: 'Carla Almeida', profissao: 'Arquiteta de Interiores', foto: 'caminho/para/imagem27.jpg' },
  { nome: 'Vinícius Pereira', profissao: 'Analista de Sistemas', foto: 'caminho/para/imagem28.jpg' },
  { nome: 'Renata Souza', profissao: 'Nutricionista Esportiva', foto: 'caminho/para/imagem29.jpg' },
  { nome: 'Daniel Santos', profissao: 'Artista Visual', foto: 'caminho/para/imagem30.jpg' },
  { nome: 'Larissa Oliveira', profissao: 'Engenheira Química', foto: 'caminho/para/imagem31.jpg' },
  { nome: 'Ricardo Lima', profissao: 'Designer de Experiência do Usuário', foto: 'caminho/para/imagem32.jpg' },
  { nome: 'Fernando Santos', profissao: 'Médico Veterinário', foto: 'caminho/para/imagem33.jpg' },
  { nome: 'Cristiane Almeida', profissao: 'Contadora', foto: 'caminho/para/imagem34.jpg' },
  { nome: 'Luciano Pereira', profissao: 'Desenvolvedor Full-stack', foto: 'caminho/para/imagem35.jpg' },
  { nome: 'Gabriela Souza', profissao: 'Nutricionista Clínica', foto: 'caminho/para/imagem36.jpg' },
  { nome: 'Anderson Costa', profissao: 'Psicoterapeuta', foto: 'caminho/para/imagem37.jpg' },
  { nome: 'Aline Mendonça', profissao: 'Especialista em Marketing Digital', foto: 'caminho/para/imagem38.jpg' },
  { nome: 'Márcio Silva', profissao: 'Engenheiro de Produção', foto: 'caminho/para/imagem39.jpg' },
  { nome: 'Natália Oliveira', profissao: 'Advogada Criminalista', foto: 'caminho/para/imagem40.jpg' },
  { nome: 'Guilherme Almeida', profissao: 'Professor de História', foto: 'caminho/para/imagem41.jpg' },
  { nome: 'Fátima Santos', profissao: 'Arquiteta Paisagista', foto: 'caminho/para/imagem42.jpg' },
  { nome: 'Eduarda Lima', profissao: 'Analista de Marketing', foto: 'caminho/para/imagem43.jpg' },
  { nome: 'Rafael Oliveira', profissao: 'Programador Python', foto: 'caminho/para/imagem44.jpg' },
  { nome: 'Bianca Mendes', profissao: 'Fisioterapeuta', foto: 'caminho/para/imagem45.jpg' },
  { nome: 'Roberto Costa', profissao: 'Engenheiro Aeroespacial', foto: 'caminho/para/imagem46.jpg' },
  { nome: 'Daniela Pereira', profissao: 'Terapeuta Ocupacional', foto: 'caminho/para/imagem47.jpg' },
  { nome: 'Leonardo Almeida', profissao: 'Cientista de Dados', foto: 'caminho/para/imagem48.jpg' },
  { nome: 'Camila Souza', profissao: 'Psicóloga Organizacional', foto: 'caminho/para/imagem49.jpg' },
  { nome: 'Gustavo Santos', profissao: 'Engenheiro de Telecomunicações', foto: 'caminho/para/imagem50.jpg' },
];

const Perfil = ({ nome, profissao, foto }) => (
  <div className="perfil-container col-md-2 mb-4 mt-3 mx-2">
    <img src={foto} alt={`Foto do Perfil ${nome}`} className="foto" />
    <div className="info">
      <h4>{nome}</h4>
      <h5>{profissao}</h5>
    </div>
  </div>
);

function Home() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4"></h1>

      <div className="row">
        {perfis.map((perfil, index) => (
          <Perfil key={index} {...perfil} />
        ))}

        <p>
          {/* Seu texto aqui */}
        </p>
      </div>
    </div>
  );
}

export default Home;
