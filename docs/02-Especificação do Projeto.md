# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

As personas levantadas para o entendimento do problema são apresentadas na tabela a seguir:

|Foto                | Nome                               |Descrição                       | Motivações          | Frustações | Hobbies, Histórias |
|--------------------|------------------------------------|--------------------------------| ------------------- | ---------- | ------------------ |
|![bruno](https://user-images.githubusercontent.com/101216578/158676080-0fc2210c-dbf1-44b7-9dab-7948eb461467.jpg)             | Bruno                              | • Têm 55 anos.<br>• É casado com sua esposa Luiza e é padrasto de um adulto de 28 anos de idade.<br>• Utiliza o Whatsapp, Facebook e Instagram.<br>• É apreciador de motos.           | Como admirador de motos, ele tem frequente interesse em vender sua moto para comprar uma mais atualizada, ele faz melhores vendas dependendo da revisão e o estado geral do veículo.| Não ter o histórico de revisões de sua moto gravados dificulta na hora de encontrar bons compradores |  • Ama fazer churrasco com os amigos nos finais de semana e participar de encontros para motoqueiros gosta de rock e sertanejo.<br>• Sua cerveja favorita é a Brahma.                 | 
|![natalia](https://user-images.githubusercontent.com/101216578/158676154-c2688be3-c1e9-455a-9628-7717c26bc6a5.jpg)              | Natália                            | • Têm 35 anos de idade.<br>• É secretária e utiliza a sua moto todos os dias para ir para o trabalho.<br>• Utiliza o Instagram, Whatsapp, Waze, Uber, iFood.<br>• Não possui muitos conhecimentos em mecânica.| Natalia sonha com sua independência financeira e ela está trabalhando duro e estudando muito para alcançar esse objetivo.               |    Um dia sua moto parou de funcionar quando ela estava indo trabalhar. Ela acabou chegando atrasada no trabalho e teve que acordar mais cedo por alguns dias para pegar o transporte público e ir trabalhar.<br>O episódio gerou muito estresse, desgaste físico e mental para ela, porque ela chegava em casa tarde e tinha que acordar cedo. Isso fez com que ela não dormisse o suficiente o que acabou afetando no seu humor e produtividade também.        |  • Gosta de festas.<br>• Ama sair com os amigos.<br>• Gosta de estudar finanças e planejamento financeiro.                   |
|![leoncio](https://user-images.githubusercontent.com/100882909/158489429-c12db4a9-f0d7-4eae-809a-e13e7b70beb9.jpg)            | Leôncio                            | • 23 anos de idade.<br> • Estudante do SENAI de mecânica que entende bem de motocicletas.<br> • Trabalha de entregador de aplicativos (iFood, UberEats, Rappi, Loggy). | Quer se tornar engenheiro mecânico e trabalha duro para continuar estudando.                | Desorganizado e sente falta de ter um controle melhor da manutenção da sua moto.<br> Apesar de entender do assunto, ele é desorganizado com o gerenciamento de veículos.       |     • Gosta de sair com os amigos com a namorada<br> • Jogar futebol.               |
|<img src="https://user-images.githubusercontent.com/85751689/161864369-28a11450-4c0a-4f15-899c-16b1112c093b.png" width="100%" />| Ana| • Gerente de oficina <br> • Tem 27 anos, solteira, utiliza o whatsapp, instagram, tinder, tik tok, ifood.<br> • Formada em administração e possui uma pós em gestão de pessoas| • Trabalha muito e almeja mais liberdade financeira e de tempo<br> • Adora a profissão deseja ser uma profissional melhor| Tem pouco tempo livre, seu trabalho ocupa muito espaço em sua agenda|Adora ir para festivais sertanejos, faz aulas de dança e quando têm tempo gosta de aprender coisas novas
|<img src="https://user-images.githubusercontent.com/85751689/161864390-2ca1a6e9-678a-4db8-9b87-47b8705f8393.png" width="100%" />| Igor                       | • Mecânico <br> •  Tem 25 anos, solteiro. <br> • Utiliza o Whatsapp, instagram, tinder, twitter, spotify e youtube no seu tempo livre.  |• Quer sair da casa dos pais <br> • Comprar um carro <br> • Ter mais dinheiro no bolso <br>               | • Tem pouco dinheiro no bolso. <br> • Sente muita pressão no trabalho <br>      |     • Gosta de tomar apreciar bebidas alcoólicas <br> • Praticar esportes <br> • Gosta de ir para festival eletrônicas <br> • Participar de resenha com os amigos <br>   
|<img src="https://user-images.githubusercontent.com/85751689/161864408-346b5621-2053-4664-ad5f-794ecd55530a.png" width="100%" />| Geraldo                       | • Dono de Mecânica <br> • Tem 60 anos, casado a 40 anos e pai de 5 filhos, utiliza o facebook, whatsapp Ama o seu trabalho e tem uma paixão profunda por veículos  |  Quer expandir seu negócio para várias regiões do Brasil e deixar seu legado para os filhos e netos  | Nenhum dos filhos quis tocar os negócios da família Muita dor de cabeça na empresa  |     • Gosta de colecionar carros e motocicletas, fazer churrasco com a família, apreciar cachaça<br> • Ama jogar sinuca e truco com os amigos



## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|1- Entregador de aplicativo| Saber as datas previstas para as manutenções preventivas |Preciso cuidar do meu veículo, por segurança e mantê-lo funcionando adequadamente com o objetivo de não perder dias de trabalho caso a moto venha a apresentar problemas. |
|2- Entregador de aplicativo| Saber quanto tempo minha moto ficará na oficina para o serviço de manutenção |Saber data e horário para buscar minha moto é importante, visto que, é meu meio de sustento e preciso dela para trabalhar todos os dias.|
|3- Entregador de aplicativo| Me comunicar rápido e de forma eficiente com o gerente da oficina responsável por meu veículo| Me manter a par da situação e saber se houver qualquer imprevisto que atrase a entrega|
|4 - Motociclista por hobby | Ter acesso ao histórico do meu veículo|Porque é importante caso queira vendê-lo em algum momento para poder comprar uma motocicleta mais atualizada. Ter o histórico com manutenções em dia em mãos passa mais credibilidade ao comprado|
|5- Proprietário de uma oficina|Que o cliente possa responder uma pesquisa de satisfação do serviço|Para ter um feedback e um melhor controle da qualidade do serviço prestado|
|6 - Proprietário de uma oficina|Que o cliente possa compartilhar sua experiência deixando um comentário sobre o serviço prestado|Para mostrar para os outros usuários sua experiência com o serviço|
|7 - Proprietário de uma oficina|Que o cliente possa avaliar sua experiência com o serviço prestado com uma nota de 1 a 5|Para mostrar para os outros usuários sua satisfação com o serviço|
|8- Usuário com dificuldades em usar a tecnologia|Uma página de ajuda| Para me orientar a utilizar o aplicativo|               |
|9 - Usuário que usa a moto para ir ao serviço| Verificar se a manutenção do veículo está em dia| Evitar situações inesperadas com o veículo durante o uso do mesmo|
|10 - Entregador de encomendas | Acompanhar o histórico das datas das revisões da minha moto | Gerenciar melhor meus gastos e ter um controle das revisões futuras|
|11- Gerente de oficina mecânica  | Registrar os dados da manutenção dos veículos dos meus clientes | Melhor gerir as revisões feitas nos veículos dos clientes|
|12 - Dono da oficina  | Registrar a quantidade de clientes e me mostre seus perfis  | Envio de promoções ou informações que mantenham a fidelidade |
|13 - Gerente da oficina  | Ver os relatórios com as seguintes informações:  Quantidade diária de motocicletas que serão recebidas na oficina, quais clientes serão atendidos, o tempo total em que cada uma ficará aos cuidados do mecânico e os orçamentos | Organizar a empresa de forma que todos os clientes sejam atendidos com eficácia, evitar que os mecânicos não fiquem sobrecarregados e ter um maior controle financeiro  |
|14 - Gerente da oficina  | Ter acesso a um calendário com datas e horários disponíveis | Receber e agendar horários com novos clientes  |
|15 - Dono de moto  | Ter acesso a uma tabela com informações sobre valores, serviços e estimativa do tempo de serviço  | Para melhor organização do meu tempo e do meu dinheiro |
|16 - Gerente de uma oficina  | Quero um sistema de registro que peça poucas informações | Para que eu não tenha muita dificuldade ou gaste muito tempo em registrar meu negócio |
|17 - Mecânico  | Quero um relatório que me mostre as informações das revisões passadas do veículo | Para saber quais procedimentos devem ser feitos com maior efetividade |
|18 - Gerente da oficina  | Quero uma funcionalidade que registre novas informações coletadas no último atendimento | Para manter sempre o histórico das motocicletas atualizado |
|19 - Gerente da oficina  | Quero uma funcionalidade que me ajude a me comunicar com o cliente | Para avisar qualquer imprevisto, solucionar dúvidas, informar procedimentos e combinar horários |



Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Cadastro de perfil do cliente. Nome, veículos, endereço, data de nascimento, telefone, senha, email | ALTA | 
|RF-002| Cadastro de veículos: modelo (cor, ano, marca, cilindrada), placa, quilometragem| MÉDIA |
|RF-003| Cadastro de serviço não permitindo quilometragem e data inferior registrada no último serviço.|ALTA|
|RF-004| Listar/ exibir histórico das revisões indicando data, custos, veículo e cliente.|ALTA|
|RF-005| Notificar o usuário quanto ao prazo de revisão preventiva por quilometragem ou tempo do último serviço.|ALTA|


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Design responsivo | MÉDIA | 
|RNF-003| Design de interface simples e intuitivo |  MÉDIA | 
|RNF-004| Formulário com poucos campos para serem preenchidos | MÉDIA |
|RNF-005| Segurança dos dados do usuário | ESSENCIAL |


Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

