# Introdução

Milhões de brasileiros possuem motocicletas e a revisão e manutenção desses veículos é algo comum na vida dessas pessoas, mas, apesar disso, muitas enfrentam dificuldades com essa atividade, seja devido a desorganização ou a falta de tempo.

Com o objetivo de solucionar essa dor, desenvolvemos um aplicativo cujo objetivo é ajudar o motociclista a ter um controle melhor das revisões do seu veículo. Dessa forma, ele não precisará de se preocupar em lembrar quando foi a última revisão do automóvel e nem de quando deverá ser realizada a próxima. Tudo isso fica por conta do aplicativo que armazena o histórico das revisões e gera um lembrete com as datas futuras.

O sistema também mostra o histórico das peças trocadas e o preço pago pelo serviço prestado. Tudo isso com o objetivo de organizar e aumentar o controle que os motociclistas têm sob o seu veículo.


## Problema

Qual a importância das aplicações para web no controle de revisão de motocicletas atualmente?

Muitas pessoas possuem dificuldade em gerenciar a manutenção de suas motocicletas, seja por falta de tempo ou de conhecimento. Frequentemente elas esquecem as datas em que é preciso levar suas motos até uma oficina para fazer revisão, dificilmente lembram-se do histórico de manutenções em seus veículos ou valores gastos com isso e também podem não perceber notificações de mensagens da oficina que está prestando o serviço, visto que é comum que essas mensagens sejam enviadas por whatsapp, que atualmente é o meio de comunicação em comum mais utilizado para diversos assuntos entre as pessoas causando uma grande demanda de mensagens para se atentar. Isso gera problemas como: manutenções em atraso, dificuldade na comunicação entre o cliente e a oficina, falta de conhecimento sobre a situação atual do veículo por falta de histórico acessível, entre outros.  

Para tentar solucionar tais questões as pessoas recorrem a aplicativos que ajudam tanto na organização, como disponibilizando um histórico e prevendo datas em que haverá necessidade de revisões no veículo, quanto nos envios de lembretes e notificações sobre o assunto.

## Objetivos

 - Ajudar as pessoas a cuidar melhor dos seus veículos.
 
 - Diminuir a ansiedade do motorista de ter que lembrar quando será a próxima revisão.
 
 - Melhorar o controle que o motorista possui a respeito do próprio automóvel.
 
 - Ajudar a diminuir os acidentes de trânsito causados pela falta de manutenção preventiva.
 
 - Melhorar a comunicação entre o usuário e a oficina.
 


## Justificativa

As aplicações para web têm sido frequentemente utilizadas como fonte de ajuda, em diversas áreas, por grande parte da população. Devido ao aumento constante no número de usuários de motos, atualmente existem muitos aplicativos na área de mecânica desenvolvidos para auxiliar motociclistas e oficinas no gerenciamento desses veículos em variados assuntos. 

Ter uma moto conservada e em bom funcionamento hoje em dia significa segurança para o condutor, redução de custos e acima de tudo a redução no número de acidentes de trânsito causados por falhas mecânicas.

Observando o cenário atual e a alta demanda em busca de aplicativos de auxílio no gerenciamento de motocicletas, faz-se necessário o desenvolvimento de um sistema exclusivamente voltado para manutenções preventivas desses veículos, que agregue mais valor ao proprietário e a motocicleta, possibilitando que o usuário da moto tenha acesso um canal de contato rápido e prático com a oficina ou mecânico, e permitindo-lhe a organização necessária para que o esquecimento ou a falta de informação não impeçam que seu veículo esteja com as revisões sempre em dia.

Segundo dados do DataSUS, cerca de 32.879 pessoas morreram em decorrência de acidentes de trânsito no ano de 2019. Fonte: Agência Senado

https://www12.senado.leg.br/noticias/materias/2021/09/24/brasil-precisa-agir-para-reduzir-mortes-no-transito-alertam-participantes-de-sessao-especial#:~:text=Estat%C3%ADsticas%20com%20rosto,decorr%C3%AAncia%20de%20acidentes%20de%20tr%C3%A2nsito.

Uma das principais causas de colisões em rodovias federais foram os defeitos mecânicos. Fonte: Auto Papo - UOL

https://autopapo.uol.com.br/noticia/acidentes-transito-falta-manutencao/



## Público-Alvo
• Motociclistas de aplicativos que tem o habito de realizar apenas as manutenções corretivas e deixam em segundo plano as preventivas, devido a rotina constante de entregas, com isso sua segurança fica vulnerável e um controle através de aplicativo facilitaria esse domínio. <br>

•	Motociclistas e Motoqueiros de moto clubes que possuem uma moto para o dia a dia e também para o prazer de fazer viagens longas e curtas, necessitam  controlar constantemente as condições mecânicas da sua moto, assim um aplicativo interligado com a oficina mecânica e concessionária facilitaria essa interface.
<br>

• Pequenas concessionárias e Oficinas mecânicas que utilizam planilhas e softwares próprios de controle de manutenção e também de uso de whatsapp como interface de demonstrações e informações da moto com o cliente e necessitam de um aplicativo que facilite essa interação.  <br>
<h2>Grafico Stakeholders<h2/>
 <img src="../imagens/mapa-stakeholders.png" width="600px" />




## Estado da Arte
  - Moto Manutenção Programada - planilha para ajudar no controle de revisão da moto onde o proprietário alimenta o aplicativo.
   
   <p float="left">
   <img src="https://user-images.githubusercontent.com/101222207/158491539-32f74a14-1a64-4fc1-a186-f2db852078a6.jpg" width="150px" />
   <img src="https://user-images.githubusercontent.com/101222207/158491546-b6f07bcf-c200-4587-ab07-32354bff9230.jpg" width="150px" />
  </p> 
  
  - Carango - controle de revisão e gerenciamento do veículo onde o proprietário alimenta o aplicativo.
  
  <p float="left">
<img src="https://user-images.githubusercontent.com/101222207/158488167-2f95a81e-1299-449c-a24e-efe70de1837b.jpg" width="200px" />
<img src="https://user-images.githubusercontent.com/101222207/158489927-eca4e75f-1985-44dd-9c8b-ca8910659027.jpg" width="200px" />
<img src="https://user-images.githubusercontent.com/101222207/158490343-77a64b7a-abca-4d4a-a1ea-a80c2ba12076.jpg" width="200px" />
 </p>
 </div>
Nenhum deles possui um bom serviço de comunicação entre a oficina e o usuário.
    
# Questões Éticas

O aplicativo deverá respeitar e estar de acordo com a LGPD (Lei Geral de Proteção de Dados Pessoais), além de prezar sempre pela privacidade do usuário.

Referências:
http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm

   
# Impactos Socias

Atualmente, devido o aumento constante no consumo e circulação de motocicletas desde o início da pandemia, justificado pela expansão dos serviços de entrega (delivery), a maior acessibilidade financeira das motos, tanto no preço do veículo quanto na economia em gastos com combustível, atenuou-se também o número de acidentes de trânsito envolvendo motociclistas, assim como, em muitos casos, a preocupação dos condutores em preservar seus veículos por se tratarem de instrumentos de trabalho.  

Em virtude do cenário atual, é inegável que a manutenção preventiva e cuidados com o veículo são também importantes medidas de segurança no trânsito, pois diminui as possibilidades do condutor se envolver em um acidente devido ao desgaste natural dos componentes do seu veículo e, além disso,a manutenção preventiva é mais barata que a corretiva, sendo a melhor alternativa em termos de economia para o motociclista.  

Sabendo que, atuar preventivamente permite ao usuário programar sua agenda — vendo a sua disponibilidade e a do mecânico/oficina — e suas finanças, uma vez que todas as manutenções preventivas são preestabelecidas, e, por outro lado, entendendo que a gestão dos diversos sistemas do veículo devem ser acompanhadas rigorosamente para que o condutor da motocicleta não caia no erro de fazer uma manutenção preventiva sem programação, tendo como consequência substituir peças que ainda não estão no período de troca e, assim, ter prejuízo, pode-se afirmar que o uso de aplicações web que auxiliam na gestão de controle da manutenção e revisão de motocicletas tem um papel importante e essencial na vida de muitos condutores.  

Dado o exposto na pesquisa, conclui-se que, o projeto de Aplicação Web de assistência no controle de revisão de motocicletas ajudará a combater os acidentes de trânsito causados por falhas mecânicas por meio de manutenção preventiva realizada de forma adequada e também na redução de gastos para o usuário, oferecendo suporte na organização, enviando lembretes sobre datas previstas para novas manutenções, registrando o histórico do veículo e gastos com o mesmo, facilitando o acesso a informações sobre a motocicleta por parte do mecânico e condutor do veículo e oferecendo um meio prático e rápido de comunicação entre a oficina e o dono da moto, mantendo assim, o motociclista sempre atento aos cuidados necessários com seu veículo. 

 









