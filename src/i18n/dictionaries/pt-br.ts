import type { Dictionary } from "../types.ts";

export const ptBr = {
  site: {
    name: "Bruno Ferreira",
    role: "Engenheiro de Software Sênior",
    location: "Brasil · Remoto",
    contactEmail: "brunoharry2009@gmail.com",
    contactAvailability: "Aberto a conversas sobre engenharia de software sênior",
    tagline:
      "Construo sistemas de software desde a descoberta do negócio até a entrega, com uma base sólida em backend, arquitetura, dados e integrações.",
    lead: "Da implementação hands-on à liderança de equipes de engenharia, priorizo trade-offs claros, fluxos confiáveis e entregas sustentadas por evidências — agora fortalecidas por desenvolvimento assistido por IA.",
    description:
      "Engenheiro de Software Sênior com base em backend, entregando sistemas de negócio em arquitetura, dados, APIs e integrações.",
    footerBlurb:
      "Engenheiro de Software Sênior construindo sistemas de negócio da descoberta à entrega confiável.",
    ogTitle: "Bruno Ferreira — Engenheiro de Software Sênior",
    ogImageAlt: "Bruno Ferreira — Portfólio de Engenharia de Software",
    social: {
      github: "https://github.com/Bruno2K",
      linkedin: "https://www.linkedin.com/in/bruno-patrick-a70a5115a/",
    },
    portrait: {
      src: "/images/portfolio/bruno-ferreira-portrait.jpg",
      alt: "Bruno Ferreira sorrindo em um deck de madeira ao ar livre, usando óculos e camiseta branca.",
    },
  },
  nav: [
    { label: "Sobre", href: "/#about" },
    { label: "Foco", href: "/#experience" },
    { label: "Projetos", href: "/#projects" },
  ],
  footerNav: [
    { label: "Sobre", href: "/#about" },
    { label: "Foco de engenharia", href: "/#experience" },
    { label: "Projetos", href: "/projects" },
    { label: "Contato", href: "/contact" },
  ],
  trustedBy: [
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "GitHub Actions",
    "OpenAPI",
    "Prisma",
    "k6",
    "Python",
    "Redis",
    "Linux",
    "Desenvolvimento assistido por IA",
  ],
  about: {
    index: "(01) Sobre",
    heading:
      "Engenharia de software end to end fundamentada no contexto de negócio, em sistemas backend e em entregas confiáveis.",
    paragraphs: [
      "Comecei minha carreira em engenharia de software em 2017, construindo sistemas de negócio entre frontend, backend, bancos de dados e integrações. Depois avancei para arquitetura de sistemas e liderança de engenharia, coordenando três equipes com até 15 desenvolvedores e gerenciando diretamente seus tech leads, sem deixar de participar da descoberta de produto e das decisões técnicas.",
      "Meu trabalho mais forte conecta restrições de negócio ao desenho técnico: modernização de fluxos legados de mensageria, construção de pipelines de automação, evolução de modelos de dados e entrega de software operacional end to end. Hoje me concentro em engenharia de software hands-on e uso desenvolvimento assistido por IA para acelerar a implementação, mantendo a responsabilidade por revisão, testes e julgamento arquitetural.",
    ],
    stats: [
      { value: "Desde 2017", label: "Engenharia de software" },
      { value: "End to end", label: "Escopo de entrega" },
      { value: "System Design", label: "Arquitetura" },
      { value: "Assistido por IA", label: "Fluxo de desenvolvimento" },
    ],
  },
  experience: [
    {
      period: "2024 — PRESENTE",
      title: "Engenharia de Software Hands-on e Manutenção de Sistemas",
      context: "Engenharia de Software no Setor Privado",
      summary:
        "Após uma reestruturação organizacional, retornei à entrega técnica individual, mantendo sistemas de negócio existentes e construindo projetos independentes. O trabalho atual enfatiza implementação end to end, confiabilidade de backend, integrações e desenvolvimento disciplinado assistido por IA, com revisão e testes mantidos como responsabilidades de engenharia.",
      focus: "Implementação · Manutenção · Confiabilidade · Assistido por IA",
    },
    {
      period: "2019 — 2024",
      title: "Liderança de Engenharia e Arquitetura",
      context: "Engenharia de Software no Setor Privado",
      summary:
        "Avancei para arquitetura de sistemas e liderança de desenvolvimento, coordenando três equipes com até 15 desenvolvedores e gerenciando diretamente seus tech leads. Trabalhei com stakeholders da descoberta à entrega e contribuí para contratação, mentoria, planejamento, estimativas e negociação de escopo, permanecendo hands-on em sistemas e integrações selecionados.",
      focus: "Arquitetura · Descoberta · Liderança de Equipes · Entrega",
    },
    {
      period: "2017 — 2019",
      title: "Engenharia Full-stack",
      context: "Engenharia de Software no Setor Privado",
      summary:
        "Comecei a atuar profissionalmente em engenharia de software entre frontend, backend, bancos de dados, APIs e integrações. Evoluí do trabalho de implementação para responsabilidades mais amplas sobre modelos de dados, modernização de legado, fluxos de automação e manutenção de software crítico para o negócio.",
      focus: "Frontend · Backend · Bancos de Dados · APIs · Integrações",
    },
  ],
  faq: [
    {
      question: "Que tipo de engenheiro você é?",
      answer:
        "Um engenheiro de software sênior com base em backend. Atuo entre descoberta de negócio, arquitetura, APIs, dados, integrações e entrega, com profundidade especial em correção e confiabilidade.",
    },
    {
      question: "O que você prioriza?",
      answer:
        "Primeiro correção; depois, manutenibilidade e operabilidade. Prefiro invariantes explícitos, evidências mensuráveis e arquiteturas simples que possam evoluir quando requisitos reais justificarem mais complexidade.",
    },
    {
      question: "Como você aborda sistemas distribuídos?",
      answer:
        "Com ceticismo. Filas, caches, event streams e fronteiras de serviços são ferramentas, não símbolos de senioridade. Eu os adiciono quando escala, isolamento, latência, ownership ou recuperação de falhas tornam o trade-off justificável.",
    },
    {
      question: "Como você usa IA em engenharia?",
      answer:
        "Como acelerador de implementação e revisão. Agentes podem escrever, investigar, testar e questionar ideias, mas requisitos, arquitetura, trade-offs, verificação e aceite final continuam sob responsabilidade humana.",
    },
    {
      question: "Qual projeto devo avaliar primeiro?",
      answer:
        "Comece pelo Neon Arsenal para correção de backend, pagamentos, recuperação de falhas, observabilidade e evidências de performance. O Team Scrapbook mostra amplitude em real-time e integrações; o Pokédex 98 Agent mostra integração de IA orientada a produto.",
    },
  ],
  professionalSystems: [
    {
      title: "Plataforma de Operações Industriais",
      domain: "Operações industriais",
      problem:
        "Uma operação rica em regras de domínio precisava de um único sistema para coordenar fluxos de produção, regras de negócio e dados entre módulos conectados.",
      role: "Implementei a aplicação end to end entre APIs backend, modelos relacionais de dados e a interface web operacional.",
      approach:
        "Modelei fluxos de produção e regras de negócio em um núcleo relacional, expus esses comportamentos por APIs e conectei o frontend entre os módulos da aplicação.",
      delivery:
        "A implementação reuniu dados, serviços e fluxos voltados aos operadores em uma única aplicação coesa.",
      evidenceBoundary:
        "Experiência profissional; a identidade do cliente e os artefatos de implementação permanecem privados.",
    },
    {
      title: "Plataforma de Mensageria Omnichannel",
      domain: "Mensageria e operações de atendimento",
      problem:
        "Uma plataforma legada de atendimento precisava separar integrações de canais dos fluxos centrais para evoluir com fronteiras mais claras.",
      role: "Liderei a reconstrução de uma plataforma legada de atendimento e, depois, orientei sua evolução arquitetural com equipes de engenharia.",
      approach:
        "Ao longo dessas fases, o trabalho estabeleceu fronteiras mais claras entre canais, modelos de dados e fluxos operacionais, mantendo integrações externas separadas do núcleo.",
      delivery:
        "A base reconstruída sustentou a evolução contínua entre canais de comunicação e fluxos operacionais.",
      evidenceBoundary:
        "Experiência profissional; a identidade do cliente e os artefatos de implementação permanecem privados.",
    },
    {
      title: "Automação de Feedback de Clientes",
      domain: "Automação operacional",
      problem:
        "Operações manuais de feedback exigiam ingestão repetível de dados, processamento agendado, rastreamento de estado e consolidação de resultados entre sistemas externos.",
      role: "Projetei e implementei o pipeline de automação, incluindo jobs em Python, integrações, estados persistidos e consolidação operacional dos resultados.",
      approach:
        "Ingeri arquivos e dados, agendei jobs de processamento, persisti transições de estado e usei retries conscientes do estado para evitar processamento duplicado.",
      delivery:
        "O sistema substituiu uma sequência manual por um fluxo automatizado que tornou o processamento e a recuperação explícitos.",
      evidenceBoundary:
        "Experiência profissional; a identidade do cliente e os artefatos de implementação permanecem privados.",
    },
  ],
  projects: [
    {
      slug: "neon-arsenal-market",
      category: "Sistemas Backend · Marketplace",
      title: "Neon Arsenal Market",
      summary:
        "Um marketplace de itens únicos projetado para evitar overselling e divergência de estado por meio de reservas transacionais, pedidos idempotentes, reconciliação de pagamentos e evidências documentadas de modos de falha.",
      stack: "TypeScript · Node.js · Express · PostgreSQL · Prisma · Docker · k6",
      liveUrl: "https://neon.brunoalgumacoisa.com/",
      year: "2026",
      role: "Arquitetura e implementação de backend",
      overview:
        "Neon Arsenal é meu principal case de engenharia backend. O produto é um marketplace de itens únicos de Counter-Strike 2, mas o tema real é correção: o que acontece quando dois compradores disputam o mesmo anúncio, um provedor de pagamento confirma enquanto o estado local falha, um webhook é duplicado ou um processo cai no meio de um fluxo.",
      architecture: {
        heading: "Arquitetura atual",
        intro:
          "O sistema atual é deliberadamente um monólito modular, não uma vitrine de microservices. Uma SPA Vite roda na Vercel, uma API Express roda como um único serviço Docker no Render e o PostgreSQL mantém o estado autoritativo do negócio. PayPal, Resend e um importador opcional de catálogo ficam fora do processo.",
        nodes: [
          {
            label: "Vercel · SPA Vite",
            detail:
              "Frontend estático e interação no navegador. Não é uma fronteira de segurança.",
          },
          {
            label: "Render · API Express",
            detail:
              "Único deployable Node.js com módulos HTTP e jobs idempotentes em processo para expiração, reconciliação de pagamentos, reconciliação do ledger e publicação do outbox.",
          },
          {
            label: "Render · PostgreSQL",
            detail:
              "Fonte da verdade para anúncios, pedidos, pagamentos, usuários, estado do ledger do vendedor, registros de idempotência, eventos de webhook e eventos de outbox.",
          },
          {
            label: "Fronteiras externas",
            detail:
              "PayPal para create/capture/GET/webhooks, Resend para email transacional e importação opcional do catálogo cs2.sh.",
          },
        ],
        note: "Redis, Kafka, SQS, um worker separado, ECS/Fargate, RDS e um ALB não são apresentados como arquitetura atual porque não estão ativos no deploy canônico do repositório.",
      },
      criticalFlows: [
        {
          title: "Compra concorrente de um anúncio único",
          steps: [
            "Dois compradores enviam POST /orders para o mesmo anúncio.",
            "Cada requisição tenta uma atualização condicional ACTIVE → RESERVED dentro do PostgreSQL.",
            "Somente uma atualização pode afetar a linha; a requisição perdedora observa um conflito de reserva.",
            "A transação vencedora persiste atomicamente o pedido, os itens, o registro de idempotência e os efeitos da reserva.",
          ],
          outcome:
            "O invariante vive no PostgreSQL, portanto o mesmo protocolo continua válido se múltiplas réplicas da API disputarem o item.",
        },
        {
          title: "Pagamento confirmado com caminho de entrega não confiável",
          steps: [
            "O PayPal é tratado como um ledger externo, nunca como um indicador de pagamento confiável vindo do cliente.",
            "Eventos de webhook têm assinatura verificada e são deduplicados por provedor + identificador externo do evento.",
            "Um webhook perdido é recuperado por reconciliação periódica via PayPal GET usando o mesmo fluxo confirmPayment.",
            "Se o valor é capturado, mas o fulfillment não pode ser concluído, o sistema registra uma obrigação durável de reembolso em vez de divergir silenciosamente.",
          ],
          outcome:
            "Retries, entrega duplicada e falhas parciais convergem para o estado persistido, em vez de depender de suposições ocultas em memória.",
        },
        {
          title: "Efeitos colaterais duráveis sem fingir que existe uma fila",
          steps: [
            "O estado de negócio e o OutboxEvent são commitados no PostgreSQL.",
            "Um job em processo reivindica linhas do outbox usando coordenação no banco de dados.",
            "A publicação é repetível e idempotente em relação aos registros duráveis.",
            "Um broker separado é adiado até que backlog, ordenação, replay ou throughput medidos justifiquem sua adoção.",
          ],
          outcome:
            "O desenho mantém a recuperação de falhas explícita sem adicionar infraestrutura distribuída apenas por aparência.",
        },
      ],
      sections: [
        {
          heading: "Correção sob concorrência",
          body: "Anúncios únicos são reservados por transações PostgreSQL e transições condicionais de estado para que compradores concorrentes não adquiram o mesmo item. A criação do pedido é idempotente e vinculada ao cliente, com chave, hash canônico da requisição, pedido e efeitos da reserva convergindo no banco de dados.",
        },
        {
          heading: "Fluxos financeiros conscientes de falhas",
          body: "O PayPal é tratado como uma fronteira externa não confiável. Captura, processamento de webhooks, reconciliação e compensação são projetados em torno de retries e falhas parciais. Quando o valor é capturado, mas o fulfillment não pode ser concluído, o sistema cria uma obrigação durável de reembolso; o histórico financeiro do vendedor permanece append-only por meio de lançamentos compensatórios.",
        },
        {
          heading: "Desenho operacional",
          body: "A API expõe probes de health e readiness, logs estruturados, IDs de requisição, OpenTelemetry opcional, runbooks, comportamento explícito de shutdown, jobs de reconciliação e invariantes apoiados pelo banco. O comportamento operacional é documentado junto ao comportamento da aplicação, não tratado como detalhe de deploy.",
        },
        {
          heading: "Evidência de performance, não marketing",
          body: "O repositório separa evidências de query plan de evidências de load testing. Hot paths do PostgreSQL são medidos com EXPLAIN ANALYZE e timing do serviço, enquanto execuções de capacidade com k6 usam ambientes isolados e descartáveis e registram carga oferecida, RPS alcançado, latência, falhas, iterações descartadas, uso de recursos e invariantes de domínio. Resultados controlados de CI não são apresentados como capacidade do Render ou de produção.",
        },
      ],
      evidence: [
        {
          label: "Arquitetura C4",
          href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/architecture/c4.md",
          description:
            "Deployables canônicos, componentes da API, fronteiras externas e o que explicitamente não está ativo.",
        },
        {
          label: "Diagramas de sequência",
          href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/architecture/sequences.md",
          description:
            "Fluxos de checkout, reserva concorrente, verificação de webhook e reconciliação alinhados ao código atual.",
        },
        {
          label: "Modos de falha",
          href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/architecture/failure-modes.md",
          description: "Cenários de falha documentados e comportamento de recuperação.",
        },
        {
          label: "Invariantes de domínio",
          href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/architecture/domain-invariants.md",
          description:
            "Invariantes que a implementação deve preservar sob retries, concorrência e falhas parciais.",
        },
        {
          label: "ADR de confiabilidade de pagamentos",
          href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/adr/0002-paypal-webhook-reliability.md",
          description:
            "Fronteira de confiança dos webhooks, duplicação e escolhas de recuperação.",
        },
        {
          label: "ADR de idempotência de pedidos",
          href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/adr/0003-order-creation-idempotency.md",
          description:
            "Estratégia de idempotência vinculada ao cliente e convergência de requisições.",
        },
        {
          label: "ADR de transactional outbox",
          href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/adr/0012-transactional-outbox.md",
          description:
            "Coordenação durável de efeitos colaterais sem alegar um broker inexistente.",
        },
        {
          label: "Observabilidade",
          href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/observability.md",
          description:
            "Logging, correlação de requisições, métricas, tracing e sinais operacionais.",
        },
        {
          label: "Runbook de operações",
          href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/operations/runbook.md",
          description: "Procedimentos de recuperação e operação do sistema implantado.",
        },
        {
          label: "Evidência de performance",
          href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/performance.md",
          description:
            "Query plans medidos do PostgreSQL, timings do serviço, gargalos e gatilhos de escala.",
        },
        {
          label: "Procedimento de load testing",
          href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/performance/load-testing.md",
          description:
            "Metodologia reproduzível com k6, requisitos de evidência e limites das afirmações.",
        },
        {
          label: "Workflow controlado de carga em CI",
          href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/.github/workflows/load-test-catalog-claim.yml",
          description:
            "Workflow inspecionável para evidência repetível e isolada de capacidade do catálogo.",
        },
      ],
      accent: "blue",
      cover: {
        src: "/images/portfolio/neon-arsenal-market.png",
        alt: "Grade do marketplace Neon Arsenal com itens únicos de Counter-Strike 2 e preços em reais.",
      },
      detail: {
        src: "/images/portfolio/neon-arsenal-checkout.png",
        alt: "Checkout do Neon Arsenal com cinco itens únicos de CS2 no carrinho e resumo do pagamento antes da captura pelo PayPal.",
      },
    },
    {
      slug: "team-scrapbook",
      category: "Sistemas Real-time · Plataforma Social",
      title: "Team Scrapbook",
      summary:
        "Uma plataforma social comunitária que combina APIs HTTP com mensageria real-time autenticada, contratos de eventos validados, persistência PostgreSQL e uma baseline de verificação inspecionável.",
      stack: "TypeScript · React · Express · Prisma · Socket.io · PostgreSQL",
      liveUrl: "https://scrapbook.brunoalgumacoisa.com/",
      year: "2026",
      role: "Arquitetura e implementação full-stack",
      overview:
        "Team Scrapbook modela um produto social em que identidade, comunidades, conversas e integrações externas compartilham um backend. O problema de engenharia é manter autorização e estado persistido coerentes enquanto requisições HTTP e conexões Socket.io de longa duração atendem os mesmos usuários. O repositório continua sendo um projeto em desenvolvimento, por isso este case se concentra em fronteiras inspecionáveis e verificação documentada, não em alegações de escala de produção.",
      architecture: {
        heading: "Fronteiras HTTP e real-time",
        intro:
          "Um cliente React usa uma API Express para fluxos request/response e Socket.io para mensageria ao vivo. Os dois caminhos convergem em módulos backend de identidade e mensagens, com Prisma e PostgreSQL armazenando usuários, conversas, mensagens, notificações e estado das comunidades.",
        nodes: [
          {
            label: "Cliente React",
            detail:
              "Usa APIs HTTP para fluxos do produto e um cliente Socket.io para mensagens, sinais de digitação e atualizações orientadas pela conexão.",
          },
          {
            label: "API Express",
            detail:
              "Detém endpoints REST, autenticação, validação, integrações e o lado request/response do produto.",
          },
          {
            label: "Gateway Socket.io",
            detail:
              "Autentica o handshake, autoriza acesso à conversa, valida eventos, aplica rate limits de mensagens, persiste mensagens e emite para salas vinculadas ao usuário.",
          },
          {
            label: "Prisma · PostgreSQL",
            detail:
              "Persiste identidade, sessões de refresh, relações sociais, conversas, mensagens, notificações, feeds e participação em comunidades.",
          },
        ],
        note: "A baseline de verificação versionada registra builds de produção e suítes de integração com banco aprovados, mas também documenta erros restantes de lint na raiz e quatro testes unitários de backend falhando no commit auditado. Esses limites não são apresentados como quality gates concluídos.",
      },
      criticalFlows: [
        {
          title: "Entrega autenticada de mensagens real-time",
          steps: [
            "O handshake do Socket.io resolve um access token e rejeita atores não autenticados ou gerenciados por IA.",
            "A conexão entra em uma sala vinculada ao usuário, em vez de confiar em um canal de destinatário fornecido pelo cliente.",
            "Cada mensagem passa por rate limit, validação de schema e checagem de participação na conversa.",
            "O backend persiste a mensagem antes de emitir sua representação serializada aos participantes.",
          ],
          outcome:
            "Autenticação, autorização, validação, persistência e entrega permanecem etapas explícitas, não um único evento confiado ao cliente.",
        },
        {
          title: "Sinais transitórios autorizados",
          steps: [
            "Um evento de digitação precisa incluir o identificador da conversa.",
            "O backend verifica se o ator pode enviar mensagens ou sinais naquela conversa.",
            "Somente a sala vinculada ao outro participante recebe o sinal de digitação.",
            "Desconexões atualizam o estado de presença e emitem um evento de observabilidade sem bloquear a limpeza do socket.",
          ],
          outcome:
            "Mesmo sinais real-time não persistidos atravessam uma fronteira de autorização, enquanto a desconexão continua tolerante a falhas.",
        },
      ],
      sections: [
        {
          heading: "Problema de negócio e fronteira do produto",
          body: "O produto reúne perfis, feeds, comunidades, amizades, scraps e conversas em um único sistema social. Endpoints HTTP tratam fluxos duráveis, enquanto Socket.io fica reservado à comunicação que se beneficia de uma conexão ao vivo, sem substituir a API da aplicação por uma camada indiferenciada de eventos.",
        },
        {
          heading: "Identidade, validação e persistência",
          body: "O backend resolve access tokens antes de aceitar um socket, valida payloads de mensagens, verifica a participação na conversa e persiste mensagens pelos mesmos serviços backend usados pelo produto. O Prisma modela as fronteiras relacionais de usuários, sessões de refresh, conversas, notificações, feeds e comunidades no PostgreSQL.",
        },
        {
          heading: "Verificação com limites explícitos",
          body: "O repositório define sequências fixadas de verificação para frontend e backend, testes unitários, testes de integração com PostgreSQL descartável, checagens de migração e builds de produção. A baseline registrada também nomeia falhas não resolvidas de lint e testes unitários, distinguindo comportamento implementado de um quality gate totalmente verde.",
        },
      ],
      evidence: [
        {
          label: "Gateway Socket.io",
          href: "https://github.com/Bruno2K/team-scrapbook/blob/main/backend/src/socket.ts",
          description:
            "Autenticação do handshake, salas de usuário, rate limits, validação de schema, autorização de conversa, persistência, entrega, digitação e tratamento de desconexão.",
        },
        {
          label: "Modelo de domínio PostgreSQL",
          href: "https://github.com/Bruno2K/team-scrapbook/blob/main/backend/prisma/schema.prisma",
          description:
            "Modelos Prisma para identidade, sessões, feeds, relações sociais, comunidades, conversas, mensagens e notificações.",
        },
        {
          label: "Baseline de verificação",
          href: "https://github.com/Bruno2K/team-scrapbook/blob/main/docs/operations/repository-baseline.md",
          description:
            "Comandos reproduzíveis e limites registrados de sucesso, falha e ambiente para builds, migrações, testes unitários e testes de integração.",
        },
        {
          label: "Documentação de API e runtime",
          href: "https://github.com/Bruno2K/team-scrapbook/blob/main/README.md",
          description:
            "Escopo do produto, endpoints HTTP, canal real-time, integrações, configuração local e comandos de teste documentados, incluindo metadados placeholder conhecidos.",
        },
      ],
      accent: "ink",
    },
    {
      slug: "pokedex-98-agent",
      category: "Produto com IA · Web Interativa",
      title: "Pokédex 98 Agent",
      summary:
        "Uma Pokédex interativa inspirada no Windows 98, combinando uma interface semelhante a desktop, dados tipados de Pokémon e um assistente Professor Oak com Gemini.",
      stack: "Next.js 16 · React 19 · TypeScript · Gemini · PokeAPI",
      liveUrl: "https://github.com/Bruno2K/pokedex-98-agent",
      year: "2026",
      role: "Engenharia de produto e integração de IA",
      overview:
        "Pokédex 98 Agent é um experimento para fazer a IA parecer parte de um produto, em vez de um chat anexado a uma página. A aplicação recria um desktop semelhante ao Windows 98, apresenta os 151 Pokémon originais por fluxos de dados tipados e posiciona um assistente de IA com personalidade dentro desse modelo de interação.",
      sections: [
        {
          heading: "Interface como sistema",
          body: "O desktop coordena janelas arrastáveis, redimensionáveis e minimizáveis, estado da taskbar, menus de contexto, sons e pequenos aplicativos. Hooks reutilizáveis isolam o movimento e o redimensionamento das janelas, em vez de incorporar a lógica de interação em cada superfície.",
        },
        {
          heading: "Dados tipados e estratégia de renderização",
          body: "As respostas da PokeAPI são normalizadas em modelos tipados da aplicação. O Next.js App Router é usado com geração estática para as 151 rotas de detalhes de Pokémon, enquanto dados externos em cache e janelas sob demanda mantêm a experiência responsiva.",
        },
        {
          heading: "IA como comportamento do produto",
          body: "Gemini alimenta a conversa com o Professor Oak e um navegador simulado por rotas de API server-side. Histórico de conversa e contexto do personagem são tratados como estado da aplicação, tornando o modelo um componente da experiência do produto, não o produto inteiro.",
        },
      ],
      accent: "wash",
      cover: {
        src: "/images/portfolio/pokedex-98-agent.png",
        alt: "Desktop do Pokédex 98 Agent inspirado no Windows 98, com chat do Professor Oak, Pac-Man, calendário e uma janela de batalha Pokémon.",
      },
    },
  ],
  sideProjects: [
    {
      slug: "pokedex-98-agent",
      title: "Pokédex 98 Agent",
      description:
        "Um experimento de produto inspirado no Windows 98 que combina dados tipados de Pokémon, comportamento interativo de desktop e um assistente Gemini com personalidade.",
      tech: "Experimento de produto · Next.js · Integração de IA",
      href: "/projects/pokedex-98-agent",
      linkLabel: "Ver experimento",
    },
    {
      slug: "neon-architecture-decisions",
      title: "ADRs do Neon Arsenal",
      description:
        "Decisões de arquitetura sobre idempotência de pedidos, confiabilidade de webhooks, OpenTelemetry, índices de hot paths, desenho do ledger do vendedor, transactional outbox, paginação e outras preocupações de produção.",
      tech: "Arquitetura · Confiabilidade · Consistência de dados",
      href: "https://github.com/Bruno2K/neon-arsenal-market/tree/main/docs/adr",
      linkLabel: "Inspecionar ADRs",
    },
    {
      slug: "neon-load-testing",
      title: "Evidência de load testing",
      description:
        "O workflow reproduzível de CI por trás da alegação de performance do catálogo do Neon Arsenal, incluindo topologia controlada de teste e execução repetida com k6.",
      tech: "k6 · GitHub Actions · Performance",
      href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/.github/workflows/load-test-catalog-claim.yml",
      linkLabel: "Inspecionar workflow",
    },
    {
      slug: "portfolio-decisions",
      title: "Decisões de engenharia do portfólio",
      description:
        "ADRs deste site sobre App Router, fronteiras server/client, módulos de conteúdo, design tokens, tratamento de imagens, estratégia de animação e fluxo de publicação.",
      tech: "Next.js · ADRs · Entrega assistida por IA",
      href: "https://github.com/Bruno2K/bruno-portfolio/tree/main/docs/decisions",
      linkLabel: "Inspecionar ADRs",
    },
  ],
  stackGroups: [
    { label: "Backend e Runtime", items: ["TypeScript", "Node.js", "Express"] },
    { label: "Dados e Consistência", items: ["PostgreSQL", "Prisma", "Redis"] },
    { label: "Sistemas Distribuídos", items: ["Mensageria", "Caching", "Idempotência"] },
    {
      label: "Engenharia de Produção",
      items: ["Linux", "Docker", "GitHub Actions", "OpenAPI", "k6"],
    },
  ],
  testimonials: [
    {
      quote:
        "Correção é uma funcionalidade. Concorrência, retries, requisições duplicadas e falhas parciais devem ser modelados antes que a produção imponha a lição.",
      name: "Correção primeiro",
      role: "Concorrência · Idempotência",
      company: "Backend",
    },
    {
      quote:
        "Sistemas externos falham de maneiras inconvenientes. Software confiável precisa de um caminho de volta a um estado válido, não apenas de um happy path bem-sucedido.",
      name: "Projetar para recuperação",
      role: "Retries · Reconciliação",
      company: "Confiabilidade",
    },
    {
      quote:
        "Uma afirmação técnica se torna útil quando outra pessoa consegue inspecioná-la ou reproduzi-la. Testes, contratos, traces, benchmarks e ADRs transformam confiança em evidência.",
      name: "Evidência acima de afirmações",
      role: "Testes · Observabilidade · Carga",
      company: "Operações",
    },
  ],
  ui: {
    skipLink: "Pular para o conteúdo",
    header: {
      primaryNavigation: "Navegação principal",
      mobileNavigation: "Navegação mobile",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      contact: "Contato",
      languageSelector: "Seletor de idioma",
      english: "EN",
      portuguese: "PT",
      switchToEnglish: "Switch to English",
      switchToPortuguese: "Mudar para português",
    },
    footer: {
      navigation: "Navegação",
      contact: "Contato",
      email: "Email",
      copyright: "© 2026 Bruno Ferreira. Todos os direitos reservados.",
    },
    home: {
      heroPrimary: "Ver trabalhos de engenharia",
      heroSecondary: "Falar com Bruno",
      trustedBy: "Stack principal e sistemas com que trabalho",
      trustedByAccessible: "Tecnologias e práticas",
      selectedWorkIndex: "(02) Cases de Engenharia",
      selectedWorkTitle: "Sistemas, trade-offs e evidências que você pode inspecionar.",
      professionalSystemsIndex: "Experiência Profissional",
      professionalSystemsTitle: "Sistemas Profissionais e Entrega",
      professionalSystemsIntro:
        "Uma seleção de sistemas profissionais que implementei ou ajudei a liderar. Identidades de clientes e artefatos de implementação permanecem privados; papéis e decisões técnicas são descritos sem exagerar resultados.",
      businessProblem: "Problema de negócio",
      myRole: "Meu papel",
      technicalApproach: "Abordagem técnica",
      delivery: "Entrega",
      experienceIndex: "(03) Experiência Profissional",
      experienceTitle:
        "Da engenharia full-stack à liderança — e de volta à entrega hands-on.",
      stackIndex: "(04) Superfície Técnica",
      stackTitle: "Capacidades primeiro. Ferramentas depois.",
      evidenceIndex: "(05) Evidências de Engenharia",
      evidenceTitle: "Cada afirmação deve estar a um clique da evidência.",
      allSideProjects: "Ver todos os side projects",
      principlesIndex: "(06) Princípios de Engenharia",
      faqIndex: "(07) FAQ",
      faqTitle: "Como penso sobre engenharia.",
    },
    projectCard: {
      readStoryPrefix: "Ler o case de",
      explore: "Explorar projeto",
      readStory: "Ler o case",
    },
    contact: {
      metadataTitle: "Contato",
      metadataDescription:
        "Entre em contato com Bruno Ferreira para conversar sobre engenharia de software sênior, arquitetura backend, APIs confiáveis, integrações e system design.",
      eyebrow: "Contato",
      title: "Vamos conversar sobre problemas difíceis de engenharia.",
      intro:
        "Arquitetura backend, confiabilidade, system design, desenvolvimento assistido por IA ou uma posição em que esses temas importem — os melhores pontos de partida são email, LinkedIn e GitHub.",
      form: {
        help: "Este formulário abre um rascunho preenchido no seu aplicativo de email. Nada é enviado automaticamente.",
        name: "Nome",
        namePlaceholder: "Maria Silva",
        email: "Email",
        emailPlaceholder: "maria@empresa.com",
        message: "Mensagem",
        messagePlaceholder: "Conte-me sobre o projeto.",
        submit: "Abrir rascunho de email",
        errorBeforeEmail:
          "Não foi possível abrir seu aplicativo de email. Escreva diretamente para",
        subjectPrefix: "Contato pelo portfólio de",
        bodyName: "Nome",
        bodyEmail: "Email",
      },
    },
    projectsIndex: {
      metadataTitle: "Projetos",
      metadataDescription:
        "Cases de engenharia backend de Bruno Ferreira, com decisões de arquitetura, trade-offs de confiabilidade e evidências inspecionáveis.",
      eyebrow: "Trabalhos",
      title: "Projetos e cases selecionados.",
      backHome: "Voltar ao início",
    },
    projectPage: {
      fallbackTitle: "Projeto",
      role: "Papel",
      year: "Ano",
      architecture: "Arquitetura",
      criticalFlows: "Fluxos críticos",
      criticalFlowsTitle: "Onde a correção é conquistada ou perdida.",
      evidence: "Evidências de engenharia",
      evidenceTitle: "Inspecione as afirmações.",
      evidenceIntro:
        "Estes links apontam para os artefatos do repositório que sustentam as afirmações de arquitetura e confiabilidade acima.",
      viewLiveProduct: "Ver produto online",
      exploreProject: "Explorar projeto",
      inspectSource: "Inspecionar código",
      exploreArchitecture: "Explorar arquitetura",
      allProjects: "Todos os projetos",
      liveProductNote:
        "O produto online mostra a experiência do cliente. O repositório e os links de arquitetura mostram as decisões de engenharia, o tratamento de falhas e as evidências por trás dele.",
      next: "Próximo",
    },
    sideProjectsIndex: {
      metadataTitle: "Evidências de engenharia",
      metadataDescription:
        "Decisões de arquitetura, evidências de performance e artefatos de implementação do trabalho de engenharia de software de Bruno Ferreira.",
      eyebrow: "Evidências de engenharia",
      title: "Afirmações sustentadas por artefatos inspecionáveis.",
      backHome: "Voltar ao início",
    },
    sideProjectPage: {
      fallbackTitle: "Evidências de engenharia",
      back: "Voltar às evidências de engenharia",
    },
    notFound: {
      eyebrow: "Ops",
      title: "O link pode estar quebrado.",
      description: "A página pode ter mudado. Vamos colocar você de volta no caminho.",
      backHome: "Voltar ao início",
    },
  },
  neonDossier: {
    overview90: {
      eyebrow: "Revisão rápida de engenharia",
      title: "Neon em 90 Segundos",
      intro:
        "Comece pelo contexto do produto, pelo problema de backend, pelas decisões sob minha responsabilidade e pelas evidências que as sustentam. O dossier técnico completo permanece disponível abaixo.",
      sections: [
        {
          label: "Contexto",
          body: "Um marketplace de itens digitais com propriedade individual, em que cada anúncio é único e não pode ser vendido a dois compradores.",
        },
        {
          label: "Desafio de engenharia",
          body: "Manter reservas, pedidos, estado no PayPal e efeitos assíncronos consistentes diante de concorrência, retentativas, atrasos do provedor e falhas parciais.",
        },
        {
          label: "Meu papel",
          body: "Projetei e implementei a arquitetura backend deste case de portfólio, assumindo as principais decisões de consistência, integração e recuperação de falhas.",
        },
        {
          label: "Resultado demonstrável",
          body: "Testes apoiados por PostgreSQL e evidências rastreadas demonstram um vencedor na reserva concorrente, retentativas idempotentes, tratamento seguro de pagamentos duplicados e trabalho assíncrono recuperável.",
        },
      ],
      decisions: {
        eyebrow: "Decisões principais",
        title: "Correção antes de amplitude arquitetural.",
        items: [
          "Manter o PostgreSQL como fonte autoritativa por meio de transações, constraints e transições condicionais de estado.",
          "Usar identidades duráveis, claims idempotentes e reconciliação para que retentativas e falhas parciais no PayPal convirjam para o estado persistido.",
          "Manter um monólito modular com jobs recuperáveis em processo e transactional outbox até que pressão medida justifique infraestrutura distribuída.",
        ],
      },
      limits: {
        label: "Limites conhecidos",
        body: "O resultado de 150 RPS vem de um teste controlado de catálogo no GitHub Actions, não de capacidade de produção. Vercel, Render e PostgreSQL descrevem a topologia canônica documentada no repositório; o domínio atual da prévia não comprova sozinho que todos os serviços foram migrados. Redis, Kafka, SQS, workers separados, HA e operação multi-region não são apresentados como implantados.",
      },
      evidence: {
        eyebrow: "Evidências diretas",
        title: "Três caminhos da afirmação até a prova.",
        intro:
          "Estes pontos de entrada levam aos invariantes, decisões, testes e evidências limitadas de performance que sustentam o resumo.",
        items: [
          {
            label: "Segurança sob concorrência",
            href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/domain/invariants.md#inv-listing-exclusive-reserve",
            description:
              "O invariante de reserva exclusiva e seus testes de concorrência com PostgreSQL.",
          },
          {
            label: "Confiabilidade de pagamentos",
            href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/adr/0002-paypal-webhook-reliability.md",
            description:
              "O registro de decisão sobre estado confiável do PayPal, entrega duplicada e recuperação.",
          },
          {
            label: "Performance e trade-offs",
            href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/performance/load-test-report-2026-09-10-catalog.md",
            description:
              "A carga controlada em CI, seus limites, repetibilidade e primeiro gargalo observado.",
          },
        ],
      },
      dossierLink: "Continuar para o dossier técnico completo",
    },
    evidenceGroups: [
      {
        title: "Arquitetura",
        labels: [
          "Arquitetura C4",
          "Diagramas de sequência",
          "Modos de falha",
          "Invariantes de domínio",
        ],
      },
      {
        title: "Confiabilidade",
        labels: [
          "ADR de confiabilidade de pagamentos",
          "ADR de idempotência de pedidos",
          "ADR de transactional outbox",
        ],
      },
      { title: "Operações", labels: ["Observabilidade", "Runbook de operações"] },
      {
        title: "Performance",
        labels: [
          "Evidência de performance",
          "Procedimento de load testing",
          "Workflow controlado de carga em CI",
        ],
      },
    ],
    reviewerProof: [
      {
        label: "Guia do reviewer",
        href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/portfolio/reviewer-guide.md",
        description:
          "Um percurso de 5 a 15 minutos para hiring managers e reviewers Senior/Staff/Principal.",
      },
      {
        label: "Case de backend",
        href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/portfolio/case-study.md",
        description:
          "O problema canônico, as decisões, os modos de falha mais difíceis, os trade-offs e o resultado final de engenharia.",
      },
      {
        label: "Índice de evidências",
        href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/portfolio/evidence-index.md",
        description:
          "Um mapa de afirmações para provas, conectando invariantes e decisões à implementação, testes e evidências operacionais.",
      },
      {
        label: "Auditoria final de Senior Backend",
        href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/verification/final-senior-backend-audit-2026-09-14.md",
        description:
          "Revisão adversarial em 28 dimensões e 34 achados; os sete achados P0 foram corrigidos e reverificados.",
      },
      {
        label: "Provas operacionais e de produção",
        href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/verification/production-operational-proof-2026-09-15.md",
        description:
          "Evidência limitada para topologia, probes, recuperação, metas de SLO, game days, runbooks e incógnitas explícitas.",
      },
    ],
    guarantees: [
      "Dois compradores concorrentes não podem adquirir o mesmo anúncio único.",
      "Repetir a mesma requisição válida de pedido não cria um segundo pedido.",
      "A entrega duplicada de um webhook PayPal verificado converge para no-op após a persistência do evento.",
      "Um webhook de pagamento perdido pode ser recuperado por reconciliação com o PayPal.",
      "Um valor capturado que não pode ser fulfilled se torna uma obrigação explícita de reembolso, não uma divergência oculta de estado.",
      "Efeitos colaterais em background são coordenados por registros duráveis no PostgreSQL antes que um broker seja justificado.",
    ],
    decisions: [
      {
        title: "PostgreSQL detém o invariante",
        decision:
          "Manter a correção do inventário único em transições condicionais de estado no banco.",
        why: "A memória do processo não coordena compradores concorrentes com segurança quando há mais de uma requisição ou réplica da API.",
      },
      {
        title: "Monólito modular antes de microservices",
        decision:
          "Manter uma única API implantável com fronteiras de domínio explícitas dentro do código.",
        why: "O produto atual não justifica o custo operacional de ownership distribuído, rede, deploy e recuperação.",
      },
      {
        title: "Reconciliação acima da confiança em webhooks",
        decision:
          "Tratar webhooks como um sinal não confiável, não como o único caminho para a verdade do pagamento.",
        why: "A entrega pode ser duplicada, atrasada ou perdida; a recuperação precisa convergir pelo estado persistido e pela reconciliação com o provedor.",
      },
      {
        title: "Outbox durável antes de um broker",
        decision:
          "Commitar estado de negócio e registros do outbox juntos e publicar por um job idempotente em processo.",
        why: "Uma fila deve chegar quando backlog, replay, ordenação, throughput ou requisitos de consumidores independentes medidos a tornarem necessária.",
      },
    ],
    frozenLimits: [
      {
        title: "Política de cancelamento de pedidos confirmados",
        detail:
          "A semântica de cancelamento/reembolso para pedidos já confirmados continua sendo uma decisão explícita de produto, não uma lacuna de implementação ocultada.",
      },
      {
        title: "Recuperação mais profunda de link e captura de pagamento",
        detail:
          "Duas melhorias legítimas de profundidade de recuperação permanecem congeladas porque não criam efeito econômico duplicado no sistema atual.",
      },
      {
        title: "Hardening contra abuso de reserva isolada",
        detail:
          "A reserva isolada autenticada ainda permite retenção abusiva do inventário limitada por TTL; fechá-la exige uma decisão explícita de produto/API.",
      },
      {
        title: "Limites das evidências de produção",
        detail:
          "Recepção OTLP em produção, backup/restore gerenciado, SLOs sustentados em produção, HA e capacidade multi-region não são alegados porque não foram comprovados.",
      },
    ],
    glance: {
      eyebrow: "Visão rápida",
      title: "O case em menos de um minuto.",
      status: "Portfólio concluído · Modo de manutenção",
      items: [
        { label: "Sistema", value: "Marketplace de inventário único" },
        {
          label: "Desafio central",
          value: "Evitar venda duplicada mantendo o estado de pagamento recuperável",
        },
        {
          label: "Arquitetura",
          value: "Monólito modular · PostgreSQL como fonte da verdade",
        },
        {
          label: "Foco de engenharia",
          value: "Concorrência · Idempotência · Pagamentos · Recuperação · Operabilidade",
        },
      ],
      description:
        "O roadmap funcional está encerrado. O projeto foi congelado intencionalmente como case de portfólio; trabalho arquitetural futuro exige um problema medido e uma nova decisão de engenharia, não uma stack maior.",
    },
    architecture: {
      eyebrow: "Arquitetura",
      title: "Sistema documentado, sem infraestrutura decorativa.",
      description:
        "A topologia canônica documentada no repositório é intencionalmente pequena: uma SPA Vite na Vercel chama uma API Express no Render, e o PostgreSQL detém a verdade do negócio. Provedores externos permanecem fora dessa fronteira de confiança.",
      client: "Cliente",
      browser: "Navegador",
      staticFrontend: "Frontend estático. Não é uma fronteira de segurança.",
      sourceOfTruth: "Fonte da verdade",
      databaseDetail:
        "Pedidos, anúncios, pagamentos, ledger, idempotência e estados de webhook e outbox.",
      externalBoundaries: "Fronteiras externas",
      integrationsDetail:
        "Integrações não confiáveis ao redor do estado autoritativo no banco.",
      limitation:
        "O domínio público da prévia não verifica de forma independente a hospedagem de todos os serviços. Redis, Kafka, SQS, um worker separado, ECS/Fargate, RDS e um ALB não são apresentados como arquitetura implantada porque o repositório não comprova que estejam ativos.",
    },
    guaranteeSection: {
      eyebrow: "O que o desenho garante",
      title: "Resultados de engenharia, não alegações de funcionalidades.",
    },
    flows: {
      eyebrow: "Fluxos críticos",
      title: "Onde a correção é conquistada ou perdida.",
      concurrency: {
        eyebrow: "01 · Concorrência",
        title: "Dois compradores. Um anúncio. Um vencedor.",
        buyerA: "Comprador A",
        buyerB: "Comprador B",
        sameListing: "mesmo anúncio",
        transition: "Transição condicional no PostgreSQL",
        winner: "Vencedor",
        winnerResult: "201 · pedido commitado",
        loser: "Perdedor",
        loserResult: "409 · conflito de reserva",
        outcome:
          "O invariante vive no PostgreSQL; a correção não depende de qual processo da API recebe a requisição.",
      },
      partialFailure: {
        eyebrow: "02 · Falha parcial",
        title: "O dinheiro foi movimentado. O fulfillment não.",
        captured: "Captura PayPal COMPLETED",
        failure: "O fluxo local de fulfillment falha",
        persist: "Persista, não esconda",
        obligation: "Obrigação durável de reembolso",
        recovery: "Reconciliação / compensação",
        outcome:
          "A verdade do pagamento é recuperável mesmo quando a entrega é duplicada, atrasada, perdida ou interrompida no meio do fluxo.",
      },
      durableEffects: "03 · Efeitos colaterais duráveis",
    },
    decisionsSection: {
      eyebrow: "Principais decisões de engenharia",
      title: "A parte importante é o que deliberadamente não foi adicionado.",
      decision: "Decisão",
      why: "Por quê",
    },
    scaling: {
      eyebrow: "Caminho de escala",
      title: "Escalar a partir de pressão medida, não de um checklist de tecnologias.",
      items: [
        {
          label: "Hoje",
          body: "Uma API em monólito modular, uma fonte da verdade PostgreSQL e jobs idempotentes em processo.",
        },
        {
          label: "Gatilhos",
          body: "Saturação do banco, pressão de conexões, necessidade compartilhada de rate limit, atraso sustentado de jobs ou backlog do outbox que exija escala independente.",
        },
        {
          label: "Próximos passos possíveis",
          body: "Redis para coordenação compartilhada comprovadamente necessária, um worker separado para throughput independente em background e um broker somente quando replay, ordenação, throughput ou múltiplos consumidores o justificarem.",
        },
      ],
    },
    unfinished: {
      eyebrow: "O que foi deixado incompleto de propósito",
      title: "Limites conhecidos estão congelados, não disfarçados.",
      description:
        "A auditoria final separa melhorias futuras plausíveis de teatro de portfólio. Esses limites permanecem visíveis porque fechá-los exigiria um requisito real de produto, operação ou escala.",
    },
    implementation: {
      eyebrow: "Notas de implementação",
      title: "Como o desenho é aplicado no código e nas operações.",
    },
    reviewer: {
      eyebrow: "Provas para reviewers",
      title: "Comece pelos artefatos de maior sinal.",
      description:
        "O projeto tem um percurso dedicado de revisão, um case canônico, um índice de afirmações para provas, uma auditoria adversarial de Senior Backend e uma fase limitada de provas operacionais.",
      audit:
        "Escopo da auditoria final: 28 dimensões, 34 achados, sete achados P0 corrigidos e reverificados, P0 não resolvidos = 0. As limitações P1 restantes estão documentadas e congeladas, não apresentadas como trabalho concluído.",
    },
    evidence: {
      eyebrow: "Evidências de engenharia",
      title: "Inspecione os detalhes da implementação.",
      description:
        "O percurso para reviewers acima é a rota rápida; estes artefatos do repositório expõem provas mais profundas de arquitetura, confiabilidade, operações e performance.",
    },
    finalNote:
      "Este projeto foi congelado intencionalmente. Novo trabalho arquitetural exige um problema medido, não uma stack maior.",
  },
} satisfies Dictionary;
