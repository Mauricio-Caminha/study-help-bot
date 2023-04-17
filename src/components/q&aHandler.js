
const semesterTips = {
  'Tem alguma sugestão de estudos para o primeiro semestre?': 'Sim, para as disciplinas de Algoritmos e Programação, Fundamentos para Computação e Sistemas Digitais, sugiro que você comece pelos conceitos básicos de programação, tais como variáveis, tipos de dados, estruturas de controle de fluxo (condicionais e loops) e funções.Para a disciplina de Matemática, sugiro que você comece pelos conceitos básicos de álgebra, geometria e cálculo.',
  'Onde posso encontrar materiais para o primeiro semestre?': 'Aqui tenho algumas sugestões de plataformas:\n\nKhan Academy: oferece uma série de cursos online gratuitos sobre programação, incluindo Algoritmos e Estruturas de Dados, JavaScript e Python. Também oferece cursos sobre matemática, incluindo álgebra, geometria e cálculo.\n\nCoursera: plataforma de cursos online que oferece cursos gratuitos e pagos sobre programação e ciência da computação.\n\nedX: outra plataforma de cursos online que oferece cursos gratuitos e pagos sobre uma ampla variedade de tópicos relacionados à programação e ciência da computação.\n\nLeetCode: um site que oferece problemas de algoritmos e estruturas de dados para você praticar.',
  'Tem alguma sugestão de estudos para o segundo semestre?': 'Sim, para Arquitetura e Organização de Computadores, eu recomendaria que você estudasse os princípios fundamentais da arquitetura de computadores, como a organização e o funcionamento dos componentes de hardware, a estrutura de memória, os sistemas de entrada e saída, e os princípios de programação de baixo nível.\n\nPara Interface Humano-Computador, você deve estudar os conceitos básicos de design de interface, como usabilidade, experiência do usuário, acessibilidade e design responsivo. \n\nPara Sistemas Operacionais, é importante estudar os conceitos fundamentais de gerenciamento de recursos em um sistema operacional, como processos, threads, memória, entrada e saída, e sistemas de arquivos. Também é importante conhecer os diferentes tipos de sistemas operacionais, como Windows, Linux, e entender as diferenças entre eles.\n\nPara Técnicas de Programação, você deve estudar os conceitos fundamentais da programação, como algoritmos, estruturas de dados, paradigmas de programação, e padrões de projeto. Além disso, é importante se familiarizar com as linguagens de programação de baixo nível.',
  'Onde posso encontrar materiais para o segundo semestre?': 'Aqui tenho algumas sugestões de plataformas:\n\nCanal no YouTube "@bosontreinamentos", que possui vários vídeos explicando conceitos de arquitetura e diversas áreas da computação.\n\nFerramenta de prototipagem de interfaces "Figma", que possui uma versão gratuita.\n\nLivro "Sistemas Operacionais Modernos", de Andrew S. Tanenbaum;\n\nSistema operacional "Ubuntu", que possui uma versão gratuita.\n\nLivro "Clean Code: A Handbook of Agile Software Craftsmanship", de Robert C. Martin;\n\nFerramenta de desenvolvimento "Visual Studio Code", que possui uma versão gratuita.',
  'Tem alguma sugestão de estudos para o terceiro semestre?':'Sim, para a disciplina de Banco de Dados, sugiro que você comece estudando os conceitos básicos de modelagem de dados, SQL, normalização e transações. Além disso, é importante entender as principais técnicas de otimização de desempenho e segurança.\n\nPara a disciplina de Cálculo Aplicado - Uma Variável, sugiro que você comece estudando os conceitos básicos de funções, limites, derivadas e integrais.\n\nPara a disciplina de Estrutura de Dados, sugiro que você comece estudando os conceitos básicos de listas, pilhas, filas, árvores e grafos. Além disso, é importante entender as principais técnicas de análise de algoritmos e implementação de estruturas de dados.\n\nPara a disciplina de Programação Orientada a Objetos, sugiro que você comece estudando os conceitos básicos de classes, objetos, encapsulamento, herança e polimorfismo.',
  'Onde posso encontrar materiais para o terceiro semestre?':'Aqui tenho algumas sugestões de plataformas:\n\nCurso online "Introduction to Databases", disponível no Coursera;\n\nSistema gerenciador de banco de dados "MySQL Workbench",  mariaDB, que possuem uma versão gratuita.\n\nFerramenta de cálculo simbólico "Wolfram Alpha", que possui uma versão gratuita.\n\nKhan Academy: oferece uma série de cursos online gratuitos sobre matemática, incluindo álgebra, geometria e cálculo.\n\nUdemy: oferece uma série de cursos online gratuitos sobre estrutura de dados.\n\nSites como VisualGo que permitem uma visualização mais ampla das estruturas.\n\nCurso online "Pensando orientado objetos na prática", disponível na Plataforma DIO;\n\nAmbiente de desenvolvimento integrado "Eclipse", que possui uma versão gratuita.',
  'Tem alguma sugestão de estudos para o sexto semestre?':'Sim, para a disciplina de Banco de Dados, sugiro que você comece estudando os conceitos básicos de modelagem de dados, SQL, normalização e transações. Além disso, é importante entender as principais técnicas de otimização de desempenho e segurança.\n\nPara a disciplina de Cálculo Aplicado - Uma Variável, sugiro que você comece estudando os conceitos básicos de funções, limites, derivadas e integrais.\n\nPara a disciplina de Estrutura de Dados, sugiro que você comece estudando os conceitos básicos de listas, pilhas, filas, árvores e grafos. Além disso, é importante entender as principais técnicas de análise de algoritmos e implementação de estruturas de dados.\n\nPara a disciplina de Programação Orientada a Objetos, sugiro que você comece estudando os conceitos básicos de classes, objetos, encapsulamento, herança e polimorfismo.',
  'Onde posso encontrar materiais para o sexto semestre?':'Aqui tenho algumas sugestões de plataformas:\n\nDesenvolvimento mobile, na Alura.\n\nTutoriais dos Indianos no youtube 🤗\n\nFinite State Machine Designer - by Evan Wallace (madebyevan.com) para montar autômatos\n\nhttps://automatonsimulator.com/ para testar autômatos\n\nFerramenta de detecção de intrusão "Snort"',
};

module.exports = {

  verifyWhoSendAndSendAnswerForQuestion(message) {
    if (!message.author.bot) {
      if (message.content) {
        if (message.content.includes('<@1096534059469000724>')) {
          const question = message.content.slice(23);
          const response = semesterTips.hasOwnProperty(question);
          if (response) {
            return semesterTips[question];
          } else {
            return 'Desculpe, ainda não sei a resposta para está pergunta.';
          }
        }
      } else {
        console.log('Mensagem vazia recebida.');
      }
    }
  },


  buildResponseFromSelectedStringFromMenu(selected, response) {
    const commandsEmbed = new EmbedBuilder()
      .setColor('Red')
      .setTitle(`Pre-Requisitos 📖\n\ ${selected.toUpperCase()} `)
      .addFields(
        { name: '\u200B', value: '\u200B' },
        { name: response, value: ' ' },
        { name: '\u200B', value: '\u200B' },
      )
      .setTimestamp()
      .setFooter({ text: 'Bons estudos!', iconURL: 'https://www.uniritter.edu.br/wp-content/uploads/2022/06/imagem_2022-06-01_145619421-removebg-preview.png' });

    return commandsEmbed;
  },
}