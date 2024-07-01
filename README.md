## Sumário

1. Contexto (Problema, Objetivos, Público-alvo, Justificativa, Artefatos de Design Thinking)

2. Projeto da Solução (Requisitos, projeto de interface/wireframes/protótipo, tecnologias)

3. Metodologia de Trabalho (processo, atribuições, ferramentas)

4. Solução Implementada (funcionalidades de software) 

## Contexto

A crescente demanda por transporte seguro, confiável e acessível para estudantes e profissionais é um desafio constante. Muitos dependem de transportes públicos lotados ou opções caras como táxis e serviços de carona, o que pode comprometer a segurança e o conforto durante os deslocamentos diários.

Nosso projeto visa fornecer soluções de transporte eficientes e econômicas para estudantes e profissionais, facilitar o deslocamento diário com serviços seguros e confortáveis, criar oportunidade de renda para motoristas e promover serviços de transporte já em operação para atrair novos passageiros.

O público-alvo inclui estudantes de diversos níveis de ensino que precisam de transporte confiável e acessível, profissionais que buscam alternativas ao transporte público e serviços pagos de carona compartilhada e motoristas interessados em oportunidades de negócios e renda estável.

A justificativa para implementação deste serviço é que, além de proporcionar oportunidades adicionais de renda aos motoristas, promover os serviços existentes e atrair novos passageiros, estudantes e profissionais também precisam de transporte seguro e econômico. Os benefícios econômicos e a segurança nas viagens são os principais valores que justificam a adoção desta solução.

Os artefatos de design thinking incluem a criação de perfis detalhados de usuários finais (personas), mapeamento da experiência do usuário desde o acesso a um serviço até a conclusão da jornada (jornada do usuário), sessões colaborativas para a geração de ideias (brainstorming), desenvolvimento de protótipos funcionais para testar as soluções propostas com os usuários (Prototipagem) e a coleta e análise contínua de feedback dos usuários para refinar e melhorar o serviço (Feed back Loop).

## Projeto de Solução

## Metodologia de Trabalho

A metodologia que nós abordamos e usamos durante todo esse semestre foi a metodologia chamada **Scrum**, sendo um framework para fazer trabalho Agile.
As verificações de garantia de qualidade são integradas ao framework Scrum, as equipes definem os requisitos no início de cada Sprint, também avaliam todo o ciclo de vida do software ou do produto enquanto estabelecem uma visão coletiva da conclusão.
Toda equipe prioriza os requisitos com base no valor do cliente e na análise de riscos, os membros têm a flexibilidade de organizar o trabalho de acordo com seu estilo de trabalho, personalidade e objetivos pessoais. 
Como resultado, o Scrum cria um ambiente de apoio e confiança, aumentando a motivação e a moral das pessoas como um todo.
As equipes Scrum escolhem suas próprias métricas para medir a performance do projeto. As equipes obtêm mais suporte no início do projeto e aceleram naturalmente com o passar do tempo.

**Guilherme Ladislau:** Scrum Master

**Gustavo Horta:** Product Owner

**Bruna Pereira:** Desenvolvedora

**Kaio Vidigal:** Desenvolvedor

**Raphael Bustamante:** Desenvolvedor

Todos os integrantes do grupo ajudaram e desenvolveram o código, assim como foi passado pelo nosso Professor Wesley Dias Maciel, teríamos o Scrum Master e o PO com as suas funções, mas eles também ajudaram no desenvolvimento do projeto.

## Solução Implementada

**Cadastro/Atualização de dados dos Usuários:** O Aluno na tela de cadastro possui os campos a serem preenchidos e nessa tela possui uma API chamada ViaCEP, onde ele colocava o seu CEP e preencha os campos de cidade, bairro e rua a partir dele, o mesmo era usado na tela de atualização. Na parte do proprietário ele preenche colocando seus dados, nome, sobrenome, nome de usuário…e informações da Van, placa, modelo e marca.

**Chat:** Eu, Gustavo Horta, desenvolvi uma tela de chat para a empresa VanConnect, utilizando a tecnologia socket.io, com o objetivo de facilitar a comunicação em tempo real entre os usuários. Criei uma interface intuitiva e responsiva, com um layout limpo que destaca o campo de entrada de mensagem e a navegação entre várias salas de conversa. As mensagens são exibidas de forma clara, com o nome de quem enviou destacado, proporcionando uma experiência de uso fluida e eficiente. A integração com socket.io garante uma troca de mensagens rápida e sem interrupções, essencial para a coordenação eficaz dos serviços de vans na região.
Para que a tela de chat seja diretamente conectada ao site, é necessário atualizar os cabeçalhos assim que um novo link do Replit estiver disponível, tendo em vista que o servidor da ferramenta cai de tempos em tempos, gerando a necessidade de criar um novo.

**Avaliação e  Comentários:** Eu, Raphael Caracci, fiquei responsável pela parte de “avaliações e comentários” do projeto, que envolve a criação de uma plataforma para estudantes e motoristas compartilharem suas experiências e feedback sobre os serviços de transporte. A página contém depoimentos detalhados de usuários satisfeitos com estrelas, bem como um formulário para novos usuários adicionarem suas próprias avaliações. Esta secção não só aumenta a transparência e a confiança no serviço, mas também fornece informações valiosas para a melhoria contínua do transporte prestado.

**Página de suporte:** É uma plataforma dedicada para ajudar os usuários a resolverem seus problemas e esclarecerem suas dúvidas sobre o site. Nesta página, os usuários têm a oportunidade de enviar suas consultas preenchendo um formulário com os seguintes campos:
Nome: O usuário insere seu nome para que a equipe de suporte possa identificá-lo.
Email: O usuário fornece um endereço de email para receber respostas e atualizações sobre sua consulta.
Descrição do Problema/Dúvida: O usuário descreve detalhadamente a questão ou problema que está enfrentando.


Após o envio do formulário, a consulta do usuário é adicionada a uma lista visível na mesma página. Essa lista contém todas as questões e problemas enviados por outros usuários, permitindo que todos visualizem e consultem as dúvidas e soluções já apresentadas. Isso facilita a troca de informações e experiências entre os usuários, além de proporcionar uma base de conhecimento que pode ajudar na resolução de problemas similares.
Essa funcionalidade não só melhora a eficiência do suporte ao usuário, como também cria uma comunidade colaborativa onde os usuários podem se ajudar mutuamente, compartilhando suas experiências e soluções.

**Tela de Login:** Através da tela de login o usuário pode seguir três fluxos distintos. O primeiro e principal seria efetar a autenticação no site e caso a validação dos dados ocorra com sucesso o mesmo é redirecionado para a página inicial. Já o segundo fluxo seria iniciado a partir da ação do usuário de clicar no hyperlink de cadastro, disponibilizado abaixo do botão de entrar. Neste, o mesmo é redirecionado para a página de cadastro. O terceiro e último fluxo é o de alteração de senha, acionado a partir da ação do usuário de clicar no hyperlink "Esqueci a senha" disponível logo abaixo do hyperlink de cadastro. A página de login foi implementada utilizando html, css e javascript. A base de dados com as informações de autenticação está armazenada em json server do Replit e essas informações foram recuperadas a partir de uma requisição do tipo GET em um endpoint gerado pelo Replit.

**Tela de Consulta:** Na tela de consulta de transporte o usuário informa o endereço de origem, seleciona um campus/escola de destino e o turno desejado. A partir das informações recebidas e dos dados de transporte recuperados da base de dados, a página verifica quais motoristas atendem no turno, bairro origem, campus/escola e envia um e-mail para o usuário com o telefone de contato do motorista. A página foi implementada utilizando html, css e javascript. Para recuperação das informações foi feita uma requisição do tipo GET em um endpoint gerado pelo Replit e para envio do e-mail foi utilizado uma api do gmail.
