export const quiz = [ //arry para questoes 
      {
        pergunta: "O que é um certificado digital?", // 25 perguntas feitas pela jennefer
        opcoes: [
          "Um registro eletrônico que identifica uma entidade e associa a ela uma chave pública, emitido por uma autoridade certificadora e com o prazo de validade obrigatório",
          "Registro eletrônico que identifica uma entidade e associa a ela uma chave privada, emitido por uma autoridade certificadora e com prazo de validade obrigatório",
          "Registro eletrônico que identifica uma entidade e associa a ela uma chave pública, emitido por uma autoridade não certificadora e com prazo de validade obrigatório",
          "Registro eletrônico que identifica uma entidade e associa a ela uma chave pública, emitido por uma autoridade certificadora e sem prazo de validade"
        ],
        resposta: 0,
        explicacao: "O certificado digital é emitido por Autoridade Certificadora (AC) credenciada e possui validade determinada, associando uma chave pública à entidade."
      },
      {
        pergunta: "O que é engenharia social no contexto de ataques cibernéticos?",
        opcoes: [
          "Uma técnica que intercepta dados em redes não criptografadas",
          "Técnica que mapea redes para identificar vulnerabilidades",
          "Técnica que altera o conteúdo das páginas Web",
          "Técnica que utiliza a persuasão para manipular pessoas"
        ],
        resposta: 3,
        explicacao: "Engenharia social explora a psicologia humana para obter informações confidenciais, não dependendo de vulnerabilidades técnicas."
      },
      {
        pergunta: "Qual é a principal função de criptografia simétrica?",
        opcoes: [
          "Autenticar a identidade dos usuários",
          "Garantir a disponibilidade de dados para acesso rápido",
          "Protege o sigilo das comunicações",
          "Verifica a integridade das transferências eletrônicas de fundos"
        ],
        resposta: 2,
        explicacao: "A criptografia simétrica usa uma única chave para cifrar e decifrar, protegendo principalmente a confidencialidade dos dados."
      },
      {
        pergunta: "Qual tipo de malware é colocado em programas ou arquivos se replica e se espalha por mais programas?",
        opcoes: [
          "Trojan",
          "Ransomware",
          "Keylogger",
          "Vírus"
        ],
        resposta: 3,
        explicacao: "Vírus são malwares que infectam arquivos legítimos e se replicam para outros programas, diferentemente de trojans ou ransomwares."
      },
      {
        pergunta: "Qual é a função do firewall na cibersegurança?",
        opcoes: [
          "Filtrar pacotes",
          "Filtrar antispam",
          "VPN",
          "Cifrar mensagens"
        ],
        resposta: 0,
        explicacao: "Firewalls atuam principalmente no filtro de pacotes de rede, decidindo quais tráfegos podem passar baseado em regras de segurança."
      },
      {
        pergunta: "Qual é o princípio que garante que a informação será acessível apenas a pessoas autorizadas?",
        opcoes: [
          "Autenticidade ",
          "Integridade ",
          "Confidencialidade ",
          "Disponibilidade " 
        ],
        resposta: 2,
        
      },
      {
        pergunta:"Qual a diferença entre confiabilidade e confidencialidade?",
        opcoes: [
            "A confidencialidade protege a integridade dos dados, enquanto a confiabilidade garante a disponibilidade dos sistemas.",
            "Ambos são sinônimos ",
            "A confidencialidade protege o sigilo das informações, enquanto a confiabilidade garante a previsibilidade e disponibilidade  dos sistemas.",
            "A confidencialidade se refere à credibilidade do sistema, enquanto a confiabilidade garante a segurança dos sistemas."
        ],
        resposta: 2,
      },
      {
        pergunta:"Um pequeno provedor de Internet em uma cidade enfrenta incidentes de ataques DDoS.Como esses ataques DDoS afetam a operação do provedor de Internet?",
        opcoes: [
            "Causam a interrupção do serviço, tornando-o inacessível aos clientes.",
            "Reduz a capacidade de armazenamento do servidor",
            "Impede o acesso não autorizado à rede",
            "Aumentam a velocidade da conexão para alguns usuários"
        ],
        resposta: 0,
      },
      {
        pergunta:"Porque a integridade de dados é fundamental para a segurança de um sistema?",
        opcoes: [
            "Porque garantimos que os dados sejam acessíveis apenas para usuários autorizados.",
            "Porque garante que as informações sejam armazenadas na nuvem.",
            "Porque permite a autenticação dos usuários que acessam o sistema.",
            "Porque previne alterações  não autorizadas nas informações."
        ],
        resposta: 3,
      },
      {
        pergunta:"Qual é a principal função do filtro antispam em um sistema de e-mail corporativo?",
        opcoes: [
            "Armazenar os e-mails em um único diretório.",
            "Separar e-mails maliciosos de mensagens legítimas.",
            "Encaminhar e-mails diretamente para a lixeira sem análise.",
            "Eliminar todos os e-mails recebidos automaticamente."
        ],
        resposta: 1,
      },
      {
        pergunta:"Como a criptografia contribui para a segurança dos dados armazenados em nuvem?",
        opcoes: [
            "Protege a integridade e confidencialidade das informações.",
            "Impede o acesso não autorizado aos servidores da nuvem.",
            "Facilita a recuperação de dados em caso de falha do sistema.",
            "Melhora a velocidade de transmissão de dados pela rede."
        ],
        resposta: 0,
      },
      {
        pergunta:"Como a criptografia simétrica protege a integridade das transferências eletrônicas de fundos?",
        opcoes: [
            "Ela cifra os dados apenas durante a transmissão, mas não é armazenada.",
            "Ela utiliza chaves diferentes para cada transação aumentando a segurança.",
            "Ela torna os dados ilegíveis apenas para usuários não autorizados.",
            "Ela usa a mesma chave para cifrar e decifrar garantindo acesso controlado."
        ],
        resposta: 3,
      },
      {
        pergunta:"Um banco online implementou criptografia para proteger transações financeiras. Eles utilizam criptografia simétrica para comunicação interna e criptografia assimétrica para autenticar clientes.Por que o banco escolheu usar criptografia assimétrica para autenticação de clientes?",
        opcoes: [
            "Por não requerer certificado digital",
            "Usa uma única chave para todas as operações.",
            "Permite verificar identidades sem revelar a chave privada.",
            "É mais rápida na transmissão de dados."
        ],
        resposta: 2,
      },
      {
        pergunta:"Como a criptografia ajuda na proteção dos dados de uma empresa?",
        opcoes: [
            "Remove completamente as ameaças cibernéticas.",
            "Criptografa dados em formato ilegível, protegendo o acesso não autorizado.",
            "Facilita o compartilhamento de dados entre usuários.",
            "Cifra dados, mas aumenta a lentidão sem acesso aos dados."
        ],
        resposta: 1,
      },
      {
        pergunta:" Por que a autenticação é crucial para garantir a confidencialidade das informações?",
        opcoes: [
            "Impede a entrada de usuários autorizados no sistema.",
            "Disponibiliza o acesso aos dados para todos os funcionários.",
            "A autenticação restringe o acesso a dados privados.",
            "Elimina a necessidade de senhas para maior conveniência."
        ],
        resposta: 2,
      },
      {
        pergunta:"Qual é a função do certificado digital?",
        opcoes: [
            "Proteger a privacidade das informações.",
            "Distinguir uma entidade e associar a ela uma chave pública.",
            "Criptografar informações.",
            "Bloquear tráfegos específicos."
        ],
        resposta: 1,
      },
      {
        pergunta:"O que é  um ataque DDoS ?",
        opcoes: [
            "Um tipo de malware.",
            "Uma técnica de engenharia social.",
            "Uma atividade maliciosa que tira um serviço do ar.",
            "Um método de criptografia."
        ],
        resposta: 2,
      },
      {
        pergunta:"Qual é a diferença entre assinatura digital e certificado digital?",
        opcoes: [
            "A assinatura digital garante a autenticidade, enquanto o certificado digital permite sua criação.",
            "A assinatura digital garante confidencialidade, enquanto o certificado digital garante confiabilidade.",
            "O certificado digital garante autenticidade, enquanto a assinatura digital permite sua criação.",
            "Ambos são iguais."
        ],
        resposta: 0,
      },
      {
        pergunta:"O que caracteriza um ataque phishing?",
        opcoes: [
            "Um tipo de malware que desfigura páginas Web.",
            "Um ataque que registra as teclas digitadas pelo usuário, como senhas e informações pessoais.",
            "Um ataque que utiliza engenharia social para roubar dados.",
            "Um tipo de malware que bloqueia o acesso a sistemas e arquivos."
        ],
        resposta: 2,
      },
      {
        pergunta:"Qual é o princípio que assegura que as informações são provenientes de fontes seguras?",
        opcoes: [
            "Confidencialidade",
            "Autenticidade",
            "Integridade ",
            "Confiabilidade "
        ],
        resposta: 1,
      },
      {
        pergunta:"Qual a diferença de Varredura de Redes (Network Scanning) e Escuta de Tráfego (Eavesdropping)?",
        opcoes: [
            "A escuta de tráfego atua fazendo a captura de dados sensíveis, enquanto a varredura de rede intercepta dados em trânsito.",
            "A escuta de tráfego é uma técnica para mapear a rede utilizada para reconhecimento de alvos, enquanto a varredura de rede é a técnica utilizada para capturar dados sensíveis.",
            "A varredura de rede é a técnica utilizada para capturar pacotes de dados mas pode ser usada para fins legítimos, já a escuta de tráfego é a técnica de capturar pacotes de dados para fins maliciosos.",
            "A varredura de redes é a técnica para mapear a rede utilizada para reconhecimento de alvos, enquanto a escuta de tráfego é a técnica utilizada para capturar dados sensíveis."
        ],
        resposta: 3,
      },
      {
        pergunta:" Qual é a principal função do princípio da disponibilidade na cibersegurança?",
        opcoes: [
            "Garantir o sigilo das informações.",
            "Assegurar que as informações estejam acessíveis de maneira confiável.",
            "Proteger contra acessos não autorizados.",
            "Validar a origem das informações."
        ],
        resposta: 1,
      },
      {
        pergunta:"Qual a técnica utilizada para interceptar dados em tráfego não criptografado?",
        opcoes: [
            "Varredura de Redes",
            "Farejamento de pacotes ",
            "Spyware",
            "Escuta de tráfego"
        ],
        resposta: 3,
      },
      {
        pergunta:"Qual das seguintes opções não é uma técnica de proteção contra malware?",
        opcoes: [
            "Antimalware",
            "Firewall ",
            "Criptografia assimétrica",
            "Filtro antispam"
        ],
        resposta: 2,
      },
      {
        pergunta:" O que pode ser considerado uma prática de prevenção contra phishing?",
        opcoes: [
            "Usar softwares antivírus apenas.",
            "Sempre clicar em links desconhecidos.",
            "Verificar a URL  de um e-mail antes de inserir informações.",
            "Ignorar e-mails não solicitados."
        ],
        resposta: 2,
      },
      {
        pergunta:"Qual dessas afirmações sobre autenticidade é verdadeira?", // 25 perguntas feitas pela jennefer
        opcoes: [
            "A autenticidade assegura que um documento foi modificado sem autorização.",
            "Autenticidade não é necessária na segurança da informação.",
            "Autenticidade permite verificar a origem e  autoria da informação.",
            "Autenticidade é sinônimo de criptografia."
        ],
        resposta: 2,
      },
      {
        pergunta:"Qual característica NÃO deve estar em uma senha forte?", //25 perguntas feitas pelo nicolas
        opcoes: [
            "Sequências simples como 123456",
            "Letras maiúsculas e minúsculas",
            "Números e símbolos",
            "Nome do seu animal de estimação"
        ],
        resposta: 3,
      },
      {
        pergunta:"Qual método de autenticação de dois fatores é MAIS seguro?",
        opcoes: [
            "Códigos por SMS",
            "Aplicativos como Google Authenticator",
            "E-mail de recuperação",
            "Perguntas de segurança"
        ],
        resposta: 1,
      },
      {
        pergunta:"Por que repetir a mesma senha em várias contas é perigoso?",
        opcoes: [
            "Hackers podem testá-la em outras plataformas",
            "Senhas repetidas são mais fáceis de esquecer",
            "A maioria dos sites exige senhas únicas",
            "Senhas repetidas são bloqueadas automaticamente"
        ],
        resposta: 0,
      },
      {
        pergunta:"Ao passar o mouse sobre um link suspeito, o que você deve verificar?",
        opcoes: [
            "Se o URL tem erros de digitação",
            "Se o link está em negrito",
            "Se a cor do link é azul",
            "Se o link tem um ícone de cadeado"
        ],
        resposta: 0,
      },
      {
        pergunta:"Qual ferramenta NÃO verifica segurança de links?",
        opcoes: [
            "VirusTotal",
            "Google Transparency Report",
            "Wikipedia",
            "URLVoid"
        ],
        resposta: 2,
      },
       {
        pergunta:"Um e-mail dizendo Urgente! Sua conta Netflix será bloqueada é:",
        opcoes: [
            "Promoção legítima",
            "Phishing",
            "Autenticação de dois fatores",
            "Mensagem automática do suporte"
        ],
        resposta: 1,
      },
       {
        pergunta:"No Romance Scam, qual é a tática principal?",
        opcoes: [
            "Oferecer prêmios em dinheiro",
            "Criar perfis falsos para ganhar confiança",
            "Instalar vírus por e-mail",
            "Clonar cartões de crédito"
        ],
        resposta: 1,
      },
       {
        pergunta:"Se alguém ligar dizendo ser do suporte da Microsoft:",
        opcoes: [
            "Fornecer os dados pedidos",
            "Desligar e bloquear o número",
            "Acreditar, pois a Microsoft faz isso",
            "Pedir número de protocolo"
        ],
        resposta: 1,
      },
       {
        pergunta:"Qual NÃO é sinal de golpe de falso sorteio?",
        opcoes: [
            "Você ganhou um iPhone! Clique para resgatar",
            "Pedido de dados pessoais antes do prêmio",
            "Link para site oficial (www.apple.com.br)",
            "Mensagem de perfil desconhecido"
        ],
        resposta: 2,
      },
       {
        pergunta:"Qual prática NÃO protege arquivos na nuvem?",
        opcoes: [
            "Usar criptografia",
            "Compartilhar pastas publicamente",
            "Criar links temporários",
            "Usar senhas fortes"
        ],
        resposta: 1,
      },
       {
        pergunta:"Por que backups offline são importantes?",
        opcoes: [
            "A nuvem nunca sofre ataques",
            "Serviços de nuvem podem ter vazamentos",
            "HDs são mais rápidos que a nuvem",
            "Backups offline não precisam de senha"
        ],
        resposta: 1,
      },
      {
        pergunta:"Qual NÃO é serviço de armazenamento em nuvem?",
        opcoes: [
            "Google Drive",
            "Dropbox",
            "Veracrypt",
            "iCloud"
        ],
        resposta: 2,
      },
      {
        pergunta:"Qual ação AUMENTA risco de invasão?",
        opcoes: [
            "Usar Wi-Fi público sem VPN",
            "Atualizar o sistema operacional",
            "Usar gerenciador de senhas",
            "Verificar vazamentos"
        ],
        resposta: 0,
      },
      {
        pergunta:"Qual frase é MENOS segura para senha?",
        opcoes: [
            "C@féComPão*2024!",
            "Maria123",
            "G4t0Pr3t0#",
            "XyZ!2024@AbC"
        ],
        resposta: 1,
      },
      {
        pergunta:"Para evitar golpes, o que ensinar a familiares?",
        opcoes: [
            "Empresas ligam pedindo senhas",
            "Links encurtados são confiáveis",
            "Ofertas imperdíveis são legítimas",
            "Nunca compartilhar códigos de verificação"
        ],
        resposta: 3,
      },
      {
        pergunta:"HTTPS no site do banco significa:",
        opcoes: [
            "É 100% seguro contra golpes",
            "A conexão é criptografada",
            "O banco é oficial",
            "Seus dados estão anônimos"
        ],
        resposta: 1,
      },
      {
        pergunta:"Se ativar 2FA por SMS e perder o celular:",
        opcoes: [
            "Perde o acesso à conta",
            "Pode recuperar com e-mail de backup",
            "O 2FA é desativado automaticamente",
            "Recebe códigos no novo celular"
        ],
        resposta: 3,
      },
      {
        pergunta:"Qual NÃO é sinal de e-mail de phishing?",
        opcoes: [
            "Remetente com domínio estranho",
            "Mensagem genérica",
            "Links para sites oficiais",
            "Ameaças"
        ],
        resposta: 2,
      },
      {
        pergunta:"Para proteger fotos íntimas no celular:",
        opcoes: [
            "Salvar apenas na galeria",
            "Usar apps com criptografia",
            "Postar em rede social privada",
            "Deletar após visualização"
        ],
        resposta: 1,
      },
      {
        pergunta:"Se suspeitar que clicou em link malicioso:",
        opcoes: [
            "Esperar para ver",
            "Trocar todas as senhas",
            "Reiniciar o roteador",
            "Desinstalar o antivírus"
        ],
        resposta: 1,
      },
      {
        pergunta:"Qual prática NÃO protege contra ransomware?",
        opcoes: [
            "Backups regulares",
            "Não abrir anexos suspeitos",
            "Pagar o resgate",
            "Atualizar o sistema"
        ],
        resposta: 2,
      },
       {
        pergunta:"Sua mãe pergunta por que não usar mesma senha no Netflix e banco:",
        opcoes: [
            "É mais fácil lembrar",
            "Se uma for vazada, outras estão seguras",
            "Bancos exigem senhas mais curtas",
            "Netflix não permite senhas repetidas"
        ],
        resposta: 1,
      },
       {
        pergunta:"O que fazer ao perder celular com apps bancários?",
        opcoes: [
            "Bloquear IMEI e cartões",
            "Esperar alguém devolver",
            "Postar nas redes sociais",
            "Comprar novo e ignorar"
        ],
        resposta: 0,
      },
       {
        pergunta:"Qual ferramenta verifica se e-mail vazou?",
        opcoes: [
            "VirusTotal",
            "Have I Been Pwned",
            "URLVoid",
            "Google Transparency"
        ],
        resposta: 1,
      },
       {
        pergunta:"Seu chefe pede para compartilhar arquivo confidencial. Qual opção é MAISsegura?", // 25 perguntas feitas pelo nicolas
        opcoes: [
            "Link público com senha fraca",
            "Apenas para e-mails corporativos",
            "Link temporário com senha forte",
            "Enviar por WhatsApp"
        ],
        resposta: 2,
      },
      
    ];
