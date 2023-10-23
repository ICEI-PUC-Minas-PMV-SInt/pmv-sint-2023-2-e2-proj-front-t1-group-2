import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JavaScript and Popper.js

function About(props) {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Sobre</h1>
            <p>
                A questão da divulgação e venda de serviços de profissionais autônomos em suas próprias páginas é um desafio comum enfrentado por muitos indivíduos talentosos.
                Ter um portfólio online é apenas o primeiro passo; o próximo é atrair a atenção do público-alvo. Para superar essa dificuldade, é essencial adotar estratégias
                eficazes de marketing digital, como otimização de mecanismos de busca (SEO), presença ativa nas redes sociais e o uso inteligente de conteúdo de qualidade para envolver e educar potenciais clientes.
                Além disso, estabelecer parcerias com outras empresas locais e participar de eventos da comunidade pode ser uma maneira poderosa de construir uma presença sólida e conquistar a confiança do público. O sucesso na divulgação e venda de serviços depende não apenas da qualidade do trabalho,
                mas também da habilidade em promovê-lo de forma eficaz no mundo digital em constante evolução.
            </p>
        </div>
    );
}

export default About;
