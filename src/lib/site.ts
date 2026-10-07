export const site = {
  name: "Bandoch Alves",
  legalName: "Bandoch Alves Escritório Contábil",
  tagline: "Escritório Contábil",
  responsible: "Simone Bandoch Alves",
  crcResponsible: "CRC-PR 074.178/O8",
  crcOffice: "CRC-PR 013.364/O",
  cnpj: "54.328.983/0001-19",
  phone: "(44) 3624-4599",
  phoneHref: "tel:+554436244599",
  whatsappDisplay: "+55 44 9999-4694",
  whatsappNumber: "554499994694",
  email: "bandoch.alvescontabil@gmail.com",
  address: {
    street: "Av. Ângelo Moreira da Fonseca, 4566",
    district: "Zona I-A",
    city: "Umuarama",
    state: "PR",
    zip: "87504-050",
    full: "Av. Ângelo Moreira da Fonseca, 4566 — Zona I-A, Umuarama – PR, CEP 87504-050",
  },
  hours: "Segunda a sexta, 08h às 12h e 13h30 às 18h",
  instagram: "https://www.instagram.com/bandoch.alvescontabilidade/",
  instagramHandle: "@bandoch.alvescontabilidade",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function whatsappMessageForPath(pathname: string) {
  const solution = solutions.find((s) => s.path === pathname);
  if (solution) {
    return `Olá! Vim pelo site da Bandoch Alves e gostaria de falar sobre ${solution.title}.`;
  }
  const city = cities.find((c) => c.path === pathname);
  if (city) {
    return `Olá! Sou de ${city.city} – ${city.state} e gostaria de falar com a Bandoch Alves sobre serviços contábeis.`;
  }
  const map: Record<string, string> = {
    "/contabilidade-empresarial":
      "Olá! Gostaria de informações sobre contabilidade empresarial com a Bandoch Alves.",
    "/segmentos": "Olá! Gostaria de saber como a Bandoch Alves atende o meu segmento.",
    "/contato": "Olá! Gostaria de agendar uma conversa com a Bandoch Alves.",
    "/sobre": "Olá! Conheci a Bandoch Alves pelo site e gostaria de conversar.",
    "/conteudos": "Olá! Li um conteúdo no site da Bandoch Alves e gostaria de falar com a equipe.",
  };
  return (
    map[pathname] ??
    "Olá! Vim pelo site da Bandoch Alves Escritório Contábil e gostaria de mais informações."
  );
}

export type Solution = {
  slug: string;
  path: string;
  title: string;
  short: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  deliverables: string[];
  forWhom: string[];
  process: { title: string; text: string }[];
};

export const solutions: Solution[] = [
  {
    slug: "recuperacao-de-creditos-tributarios",
    path: "/solucoes/recuperacao-de-creditos-tributarios",
    title: "Recuperação de Créditos Tributários",
    short: "Revisão técnica dos últimos cinco anos para identificar e reaver valores pagos a maior.",
    summary:
      "Auditoria retroativa de apurações, guias e obrigações acessórias para identificar tributos recolhidos indevidamente e conduzir a recuperação com segurança documental.",
    metaTitle: "Recuperação de Créditos Tributários | Bandoch Alves Contabilidade",
    metaDescription:
      "Revisão dos últimos cinco anos para identificar tributos pagos a maior e conduzir a recuperação de créditos com segurança técnica e documental. Umuarama – PR.",
    intro: [
      "Empresas em regime de Lucro Real, Lucro Presumido e Simples Nacional recolhem, com frequência, valores superiores ao devido — por classificação fiscal inadequada, base de cálculo incorreta ou ausência de aproveitamento de créditos previstos em lei.",
      "Nosso trabalho parte de uma auditoria retroativa dos últimos cinco anos. Cada apontamento é sustentado por memória de cálculo, documentação fiscal e fundamentação normativa antes de qualquer pedido ser protocolado.",
    ],
    deliverables: [
      "Diagnóstico de créditos com memória de cálculo por período",
      "Levantamento e organização do lastro documental",
      "Retificação de obrigações acessórias quando necessária",
      "Condução do pedido de restituição, ressarcimento ou compensação",
      "Acompanhamento até a homologação e ajuste das rotinas futuras",
    ],
    forWhom: [
      "Indústrias e distribuidoras com alto volume de notas fiscais",
      "Comércio varejista e atacadista com produtos monofásicos ou substituição tributária",
      "Prestadores de serviços com folha relevante",
      "Empresas que passaram por mudança de regime tributário",
    ],
    process: [
      { title: "Coleta", text: "Reunimos arquivos fiscais, contábeis e obrigações acessórias do período analisado." },
      { title: "Auditoria", text: "Cruzamos apurações e documentos para identificar recolhimentos indevidos." },
      { title: "Fundamentação", text: "Cada crédito recebe memória de cálculo e base normativa própria." },
      { title: "Execução", text: "Retificações, pedidos e compensações são conduzidos e acompanhados até o desfecho." },
    ],
  },
  {
    slug: "planejamento-tributario",
    path: "/solucoes/planejamento-tributario",
    title: "Planejamento Tributário",
    short: "Escolha e desenho do regime e da estrutura que reduzem a carga de forma lícita e sustentável.",
    summary:
      "Estudo comparativo de regimes, cenários e estruturas societárias para definir o modelo tributário mais eficiente para o negócio, com projeção de resultados e plano de implantação.",
    metaTitle: "Planejamento Tributário Empresarial | Bandoch Alves Contabilidade",
    metaDescription:
      "Estudo comparativo de regimes e cenários para reduzir a carga tributária de forma lícita, com projeções, plano de implantação e acompanhamento contínuo.",
    intro: [
      "Planejamento tributário não é uma decisão anual isolada: é a leitura permanente da operação, do faturamento, da margem e da estrutura societária à luz da legislação vigente.",
      "Construímos cenários comparativos entre Simples Nacional, Lucro Presumido e Lucro Real, considerando ainda a possibilidade de segregação de atividades e reorganização societária, sempre dentro dos limites legais.",
    ],
    deliverables: [
      "Estudo comparativo de regimes com projeção de 12 a 36 meses",
      "Análise de margem, folha, faturamento e composição de receitas",
      "Avaliação de segregação de atividades e estruturas societárias",
      "Plano de implantação com cronograma e responsáveis",
      "Revisões periódicas conforme a evolução do negócio",
    ],
    forWhom: [
      "Empresas em crescimento acelerado ou próximas do limite de faturamento",
      "Grupos com mais de um CNPJ ou várias atividades",
      "Negócios com margens pressionadas pela carga tributária",
      "Empresas em processo de sucessão ou entrada de sócios",
    ],
    process: [
      { title: "Diagnóstico", text: "Mapeamento da operação, das receitas e da estrutura atual." },
      { title: "Cenários", text: "Simulações comparativas com projeção de carga e caixa." },
      { title: "Decisão", text: "Apresentação técnica dos cenários e escolha conjunta do modelo." },
      { title: "Implantação", text: "Execução das mudanças e monitoramento dos resultados." },
    ],
  },
  {
    slug: "holding-patrimonial-familiar",
    path: "/solucoes/holding-patrimonial-familiar",
    title: "Holding Patrimonial e Familiar",
    short: "Organização do patrimônio da família em estrutura societária, com sucessão planejada.",
    summary:
      "Constituição e administração de holdings para proteger o patrimônio familiar, organizar a sucessão e reduzir custos e conflitos em processos de transmissão.",
    metaTitle: "Holding Patrimonial e Familiar | Bandoch Alves Contabilidade",
    metaDescription:
      "Constituição de holding patrimonial e familiar para organizar bens, planejar a sucessão e reduzir custos e conflitos na transmissão do patrimônio.",
    intro: [
      "A holding transforma bens dispersos em participação societária organizada. Com isso, a família passa a discutir regras — e não apenas bens — em um ambiente jurídico e contábil previsível.",
      "O desenho considera o perfil do patrimônio, a atividade das empresas operacionais, o regime de bens dos sócios e os objetivos de longo prazo de cada núcleo familiar.",
    ],
    deliverables: [
      "Levantamento e avaliação do patrimônio familiar",
      "Desenho societário da holding e das participações",
      "Integralização de bens e definição de cláusulas de proteção",
      "Planejamento da sucessão com doação de quotas e usufruto",
      "Contabilidade e obrigações permanentes da holding",
    ],
    forWhom: [
      "Famílias com imóveis, participações societárias e investimentos",
      "Empresários que desejam separar patrimônio pessoal e operacional",
      "Grupos familiares planejando a sucessão da segunda geração",
      "Sócios que buscam regras claras de entrada e saída",
    ],
    process: [
      { title: "Mapeamento", text: "Inventário do patrimônio, das empresas e do arranjo familiar." },
      { title: "Modelagem", text: "Definição da estrutura, das cláusulas e dos efeitos tributários." },
      { title: "Constituição", text: "Registros, integralizações e ajustes contábeis." },
      { title: "Gestão", text: "Acompanhamento contábil e revisões conforme a família evolui." },
    ],
  },
  {
    slug: "inteligencia-tributaria",
    path: "/solucoes/inteligencia-tributaria",
    title: "Inteligência Tributária",
    short: "Monitoramento contínuo de dados fiscais para antecipar riscos e oportunidades.",
    summary:
      "Rotina permanente de análise de dados fiscais e contábeis, com indicadores, alertas e relatórios que transformam obrigação acessória em informação de decisão.",
    metaTitle: "Inteligência Tributária e Indicadores Fiscais | Bandoch Alves",
    metaDescription:
      "Monitoramento contínuo de dados fiscais e contábeis com indicadores, alertas e relatórios gerenciais para antecipar riscos e oportunidades tributárias.",
    intro: [
      "As informações que a empresa já envia ao fisco contêm o retrato mais fiel da sua operação. Tratadas com método, elas revelam desvios de classificação, oportunidades de crédito e riscos antes que se tornem autuações.",
      "Estruturamos uma rotina de leitura desses dados, com indicadores acompanhados mês a mês e relatórios objetivos para a direção da empresa.",
    ],
    deliverables: [
      "Painel de indicadores fiscais e contábeis mensais",
      "Conferência cruzada entre escrituração, notas e apurações",
      "Alertas de divergência e risco de autuação",
      "Relatório gerencial com recomendações práticas",
      "Reuniões periódicas de análise com a direção",
    ],
    forWhom: [
      "Empresas com volume alto de notas e múltiplas filiais",
      "Negócios sujeitos a substituição tributária e regimes especiais",
      "Direções que precisam de números confiáveis para decidir",
      "Empresas em preparação para auditoria, crédito ou venda",
    ],
    process: [
      { title: "Estruturação", text: "Definição de indicadores e fontes de dados." },
      { title: "Integração", text: "Organização dos arquivos fiscais e contábeis." },
      { title: "Monitoramento", text: "Leitura mensal com alertas de divergência." },
      { title: "Decisão", text: "Relatórios e reuniões que orientam ajustes de rota." },
    ],
  },
  {
    slug: "estruturacao-societaria",
    path: "/solucoes/estruturacao-societaria",
    title: "Estruturação Societária",
    short: "Desenho, reorganização e formalização de sociedades, filiais e grupos econômicos.",
    summary:
      "Constituição, reorganização, cisão, fusão e ajustes contratuais conduzidos com o olhar contábil e tributário sobre cada decisão societária.",
    metaTitle: "Estruturação e Reorganização Societária | Bandoch Alves",
    metaDescription:
      "Constituição, reorganização, cisão e fusão de sociedades com análise contábil e tributária dos efeitos de cada decisão societária.",
    intro: [
      "Cada linha do contrato social tem efeito contábil, tributário e sucessório. Estruturar bem uma sociedade é decidir antecipadamente como lucros, responsabilidades e saídas serão tratados.",
      "Atuamos desde a constituição até reorganizações complexas, sempre avaliando o impacto de cada alternativa sobre a carga tributária e o patrimônio dos sócios.",
    ],
    deliverables: [
      "Constituição de sociedades e abertura de filiais",
      "Reorganizações: cisão, fusão, incorporação e transformação",
      "Revisão de contrato social e acordo de sócios sob a ótica contábil",
      "Segregação de atividades com avaliação tributária",
      "Regularização societária e cadastral",
    ],
    forWhom: [
      "Sócios formalizando uma nova operação",
      "Grupos que precisam separar ou unificar atividades",
      "Empresas preparando entrada de investidor ou novo sócio",
      "Negócios familiares em transição de gestão",
    ],
    process: [
      { title: "Análise", text: "Leitura da estrutura atual e dos objetivos dos sócios." },
      { title: "Desenho", text: "Alternativas societárias com efeitos tributários mensurados." },
      { title: "Formalização", text: "Documentos, registros e adequações cadastrais." },
      { title: "Consolidação", text: "Ajuste da contabilidade e das rotinas à nova estrutura." },
    ],
  },
  {
    slug: "planejamento-patrimonial",
    path: "/solucoes/planejamento-patrimonial",
    title: "Planejamento Patrimonial",
    short: "Separação e proteção do patrimônio pessoal em relação ao risco da atividade empresarial.",
    summary:
      "Organização do patrimônio pessoal e empresarial, com definição de titularidade, política de retiradas e estratégia de longo prazo para preservação de valor.",
    metaTitle: "Planejamento Patrimonial para Empresários | Bandoch Alves",
    metaDescription:
      "Organização do patrimônio pessoal e empresarial, política de retiradas e estratégias de proteção e preservação de valor no longo prazo.",
    intro: [
      "Patrimônio construído ao longo de décadas costuma estar exposto a riscos que não têm relação com a sua origem — misturas entre pessoa física e jurídica, retiradas sem critério e titularidades mal definidas.",
      "O planejamento patrimonial organiza esse conjunto: define o que pertence a quem, como o resultado da empresa chega aos sócios e quais estruturas preservam o valor no longo prazo.",
    ],
    deliverables: [
      "Inventário patrimonial de pessoa física e jurídica",
      "Política de pró-labore, distribuição de lucros e retiradas",
      "Avaliação de riscos e exposição do patrimônio pessoal",
      "Estratégias de proteção e organização de titularidades",
      "Integração com o planejamento sucessório da família",
    ],
    forWhom: [
      "Empresários com patrimônio relevante fora da empresa",
      "Sócios que misturam contas pessoais e empresariais",
      "Famílias preparando a transição patrimonial",
      "Profissionais liberais com exposição a risco de atividade",
    ],
    process: [
      { title: "Inventário", text: "Levantamento completo de bens, dívidas e participações." },
      { title: "Diagnóstico", text: "Identificação de riscos, sobreposições e ineficiências." },
      { title: "Plano", text: "Definição de estrutura, titularidades e política de retiradas." },
      { title: "Execução", text: "Implantação acompanhada e revisões periódicas." },
    ],
  },
];

export const solutionBySlug = (slug: string) => solutions.find((s) => s.slug === slug)!;

export const steps = [
  {
    n: "01",
    title: "Escuta inicial",
    text: "Uma conversa técnica para entender o negócio, o momento da empresa e o que já foi tentado antes.",
  },
  {
    n: "02",
    title: "Diagnóstico",
    text: "Análise de documentos contábeis, fiscais e societários para medir riscos e oportunidades reais.",
  },
  {
    n: "03",
    title: "Cenários",
    text: "Apresentação de alternativas com números, prazos e implicações — sem promessas genéricas.",
  },
  {
    n: "04",
    title: "Decisão conjunta",
    text: "A escolha é do cliente, tomada com informação suficiente e riscos explicitados.",
  },
  {
    n: "05",
    title: "Implantação",
    text: "Execução acompanhada de perto, com cronograma, responsáveis e documentação organizada.",
  },
  {
    n: "06",
    title: "Acompanhamento",
    text: "Monitoramento contínuo dos resultados e revisão sempre que a operação ou a legislação mudar.",
  },
];

export const segments = [
  {
    title: "Indústria",
    text: "Custos, créditos de insumos, apuração complexa e obrigações acessórias de alto volume.",
  },
  {
    title: "Comércio e distribuição",
    text: "Substituição tributária, produtos monofásicos, margens estreitas e giro elevado.",
  },
  {
    title: "Serviços",
    text: "ISS, retenções, folha relevante e escolha de regime sensível à margem.",
  },
  {
    title: "Agronegócio",
    text: "Produtor rural, pessoa física e jurídica, crédito rural e planejamento sucessório.",
  },
  {
    title: "Saúde e profissionais liberais",
    text: "Clínicas, consultórios e sociedades profissionais com equiparação hospitalar e sociedade uniprofissional.",
  },
  {
    title: "Construção e imobiliário",
    text: "Incorporações, RET, obras próprias e de terceiros, patrimônio de afetação.",
  },
  {
    title: "Tecnologia e serviços digitais",
    text: "Receitas recorrentes, contratos nacionais e internacionais, sócios investidores.",
  },
  {
    title: "Holdings e famílias empresárias",
    text: "Gestão patrimonial, sucessão, governança familiar e controle de participações.",
  },
];

export type City = {
  slug: string;
  path: string;
  city: string;
  state: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  context: string[];
  highlights: string[];
};

export const cities: City[] = [
  {
    slug: "contabilidade-umuarama-pr",
    path: "/contabilidade-umuarama-pr",
    city: "Umuarama",
    state: "PR",
    region: "Noroeste do Paraná",
    metaTitle: "Contabilidade em Umuarama – PR | Bandoch Alves Escritório Contábil",
    metaDescription:
      "Escritório contábil em Umuarama – PR com atendimento presencial: contabilidade empresarial, planejamento tributário, holding e recuperação de créditos.",
    intro:
      "Nossa sede fica em Umuarama, na Av. Ângelo Moreira da Fonseca, 4566. É daqui que atendemos presencialmente empresas da cidade e de todo o noroeste do Paraná.",
    context: [
      "Umuarama concentra comércio regional, serviços de saúde, educação superior, agronegócio e uma indústria diversificada. Cada um desses perfis exige leitura tributária própria.",
      "O atendimento presencial permite reuniões na empresa, conferência de documentos no local e proximidade real com a direção do negócio.",
    ],
    highlights: [
      "Atendimento presencial na sede, com hora marcada",
      "Contabilidade empresarial completa e obrigações em dia",
      "Planejamento tributário e recuperação de créditos",
      "Estruturação societária e holding familiar",
    ],
  },
  {
    slug: "contabilidade-campo-mourao-pr",
    path: "/contabilidade-campo-mourao-pr",
    city: "Campo Mourão",
    state: "PR",
    region: "Centro-Ocidental Paranaense",
    metaTitle: "Contabilidade em Campo Mourão – PR | Bandoch Alves",
    metaDescription:
      "Contabilidade consultiva para empresas de Campo Mourão – PR: planejamento tributário, recuperação de créditos, holding e escrituração completa.",
    intro:
      "Atendemos empresas de Campo Mourão com rotina digital estruturada e reuniões periódicas, presenciais ou remotas, conforme a necessidade do cliente.",
    context: [
      "Campo Mourão tem forte presença do agronegócio, de cooperativas e da indústria de transformação, com cadeias que envolvem crédito presumido, diferimento e regimes específicos.",
      "Nossa atuação combina a escrituração precisa com a leitura estratégica dessas particularidades.",
    ],
    highlights: [
      "Contabilidade completa com envio digital de documentos",
      "Análise tributária para agronegócio e indústria",
      "Recuperação de créditos dos últimos cinco anos",
      "Planejamento societário e sucessório",
    ],
  },
  {
    slug: "contabilidade-goioere-pr",
    path: "/contabilidade-goioere-pr",
    city: "Goioerê",
    state: "PR",
    region: "Noroeste do Paraná",
    metaTitle: "Contabilidade em Goioerê – PR | Bandoch Alves Escritório Contábil",
    metaDescription:
      "Escritório contábil atendendo Goioerê – PR: contabilidade empresarial, planejamento tributário, holding patrimonial e recuperação de créditos.",
    intro:
      "Empresas de Goioerê contam com nossa estrutura contábil completa, com atendimento remoto ágil e visitas programadas quando o assunto pede presença.",
    context: [
      "O município reúne comércio local consolidado, prestadores de serviço e produção agrícola, muitas vezes com patrimônio familiar relevante e sucessão a organizar.",
      "Tratamos empresa e família como um único sistema patrimonial, com decisões coordenadas.",
    ],
    highlights: [
      "Escrituração contábil e fiscal completa",
      "Holding patrimonial e planejamento sucessório",
      "Revisão de regime tributário",
      "Atendimento direto com a responsável técnica",
    ],
  },
  {
    slug: "contabilidade-douradina-pr",
    path: "/contabilidade-douradina-pr",
    city: "Douradina",
    state: "PR",
    region: "Noroeste do Paraná",
    metaTitle: "Contabilidade em Douradina – PR | Bandoch Alves",
    metaDescription:
      "Contabilidade para empresas e produtores de Douradina – PR: obrigações em dia, planejamento tributário e organização patrimonial.",
    intro:
      "Douradina fica a poucos quilômetros da nossa sede, o que permite atendimento próximo, com reuniões presenciais sempre que necessário.",
    context: [
      "A economia local combina agropecuária, comércio e serviços, com forte presença de negócios familiares.",
      "Nosso trabalho organiza a contabilidade, dá previsibilidade tributária e prepara o patrimônio para a próxima geração.",
    ],
    highlights: [
      "Proximidade geográfica e atendimento presencial",
      "Contabilidade rural e empresarial",
      "Planejamento tributário e sucessório",
      "Regularização de empresas e produtores",
    ],
  },
  {
    slug: "contabilidade-itapema-sc",
    path: "/contabilidade-itapema-sc",
    city: "Itapema",
    state: "SC",
    region: "Litoral de Santa Catarina",
    metaTitle: "Contabilidade em Itapema – SC | Bandoch Alves Escritório Contábil",
    metaDescription:
      "Contabilidade para empresas de Itapema – SC: incorporação imobiliária, locação por temporada, comércio, serviços e holding patrimonial.",
    intro:
      "Em Itapema, atendemos empresas do setor imobiliário, do turismo e do comércio com estrutura 100% digital e reuniões por videoconferência.",
    context: [
      "O litoral catarinense concentra incorporações, locações por temporada e negócios sazonais, com questões específicas de RET, patrimônio de afetação e tributação de aluguéis.",
      "Muitos clientes mantêm patrimônio no Paraná e operação em Santa Catarina — coordenamos os dois lados na mesma estrutura.",
    ],
    highlights: [
      "Atendimento digital completo, sem perda de proximidade",
      "Incorporação imobiliária, RET e patrimônio de afetação",
      "Tributação de locações e receitas sazonais",
      "Holding patrimonial para investidores do litoral",
    ],
  },
];

export const cityBySlug = (slug: string) => cities.find((c) => c.slug === slug)!;

export const faq = [
  {
    q: "O escritório atende empresas de fora de Umuarama?",
    a: "Sim. Nossa estrutura é digital e atendemos empresas em todo o Brasil, com destaque para o noroeste do Paraná e o litoral de Santa Catarina. Documentos são recebidos eletronicamente e as reuniões podem ser presenciais ou por videoconferência.",
  },
  {
    q: "Como funciona a troca do escritório contábil atual?",
    a: "Conduzimos a transição do início ao fim: solicitação de arquivos e balancetes, conferência de saldos, revisão de obrigações pendentes e transferência de procurações eletrônicas. O cliente acompanha um cronograma com prazos e responsáveis.",
  },
  {
    q: "É possível recuperar tributos pagos a maior?",
    a: "Sim, respeitado o prazo de cinco anos. A recuperação depende de auditoria dos arquivos fiscais e contábeis do período e de lastro documental consistente. Só apresentamos pedidos com memória de cálculo e fundamentação técnica.",
  },
  {
    q: "Qual a diferença entre contabilidade tradicional e contabilidade consultiva?",
    a: "A contabilidade tradicional entrega obrigações. A consultiva parte delas para orientar decisões: escolha de regime, estrutura societária, política de retiradas, organização patrimonial e antecipação de riscos.",
  },
  {
    q: "Quando vale a pena constituir uma holding familiar?",
    a: "Quando existe patrimônio relevante, mais de um herdeiro, participações societárias ou risco de conflito na sucessão. A análise é individual: em alguns casos, ajustes societários mais simples resolvem melhor.",
  },
  {
    q: "Quem responde tecnicamente pelo escritório?",
    a: `${site.responsible}, ${site.crcResponsible}. O escritório é registrado sob o ${site.crcOffice} e o atendimento estratégico é feito diretamente pela responsável técnica.`,
  },
];

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readingTime: string;
  date: string;
  dateLabel: string;
  body: { heading?: string; paragraphs: string[] }[];
};

export const articleCategories = [
  "Tributário",
  "Patrimônio e Sucessão",
  "Gestão Empresarial",
  "Societário",
];

export const articles: Article[] = [
  {
    slug: "quando-migrar-do-simples-para-o-lucro-presumido",
    title: "Quando migrar do Simples Nacional para o Lucro Presumido",
    category: "Tributário",
    excerpt:
      "O limite de faturamento não é o único critério. Margem, folha e composição de receitas mudam completamente a conta.",
    readingTime: "6 min de leitura",
    date: "2026-02-10",
    dateLabel: "10 de fevereiro de 2026",
    body: [
      {
        paragraphs: [
          "A migração de regime costuma ser tratada como consequência automática do crescimento do faturamento. Na prática, empresas ainda dentro do limite do Simples Nacional podem pagar menos no Lucro Presumido — e o contrário também é verdadeiro.",
        ],
      },
      {
        heading: "O peso do anexo e do Fator R",
        paragraphs: [
          "Empresas de serviços enquadradas nos anexos III e V têm alíquota efetiva definida pela relação entre folha e receita. Uma variação de poucos pontos percentuais nessa relação muda a alíquota de forma expressiva.",
          "Por isso, o acompanhamento mensal do Fator R deve fazer parte da rotina, e não ser verificado apenas na virada do ano.",
        ],
      },
      {
        heading: "Margem e composição de receitas",
        paragraphs: [
          "No Lucro Presumido, a tributação incide sobre uma margem legal presumida, independente do resultado real. Negócios com margem inferior à presumida tendem a ser penalizados; margens superiores podem se beneficiar.",
          "Receitas mistas — mercadorias e serviços no mesmo CNPJ — exigem simulação segregada para evitar conclusões equivocadas.",
        ],
      },
      {
        heading: "A decisão correta é a decisão simulada",
        paragraphs: [
          "Antes de qualquer alteração, projete pelo menos doze meses em cada regime, considerando sazonalidade, folha, investimentos e créditos disponíveis. A escolha deve ser documentada e revisada anualmente.",
        ],
      },
    ],
  },
  {
    slug: "holding-familiar-o-que-considerar-antes-de-constituir",
    title: "Holding familiar: o que considerar antes de constituir",
    category: "Patrimônio e Sucessão",
    excerpt:
      "A estrutura resolve muitos problemas sucessórios, mas exige análise prévia de custos, tributação e relações familiares.",
    readingTime: "7 min de leitura",
    date: "2026-01-22",
    dateLabel: "22 de janeiro de 2026",
    body: [
      {
        paragraphs: [
          "A holding familiar deixou de ser assunto restrito a grandes fortunas. Famílias com alguns imóveis e uma empresa operacional já encontram, na estrutura, ganhos concretos de organização e previsibilidade.",
        ],
      },
      {
        heading: "Custos de constituição e manutenção",
        paragraphs: [
          "A integralização de imóveis pode envolver ITBI conforme a atividade da holding e o valor declarado. Além disso, a estrutura passa a ter contabilidade, obrigações acessórias e custos recorrentes.",
          "Esses custos precisam ser comparados ao cenário alternativo: inventário, honorários, ITCMD e o tempo de bloqueio do patrimônio.",
        ],
      },
      {
        heading: "As cláusulas importam mais que a sigla",
        paragraphs: [
          "Doação de quotas com reserva de usufruto, incomunicabilidade, impenhorabilidade e regras de saída definem se a estrutura vai realmente proteger a família.",
          "Um contrato social padronizado costuma criar a ilusão de proteção sem entregá-la.",
        ],
      },
      {
        heading: "Sucessão é conversa antes de ser documento",
        paragraphs: [
          "Antes do registro, alinhe expectativas entre os envolvidos. A melhor estrutura é aquela que a família compreende e sustenta ao longo dos anos.",
        ],
      },
    ],
  },
  {
    slug: "recuperacao-de-creditos-como-funciona-na-pratica",
    title: "Recuperação de créditos tributários: como funciona na prática",
    category: "Tributário",
    excerpt:
      "Da auditoria retroativa à homologação, o caminho exige documentação, método e prudência com o caixa da empresa.",
    readingTime: "5 min de leitura",
    date: "2025-12-05",
    dateLabel: "5 de dezembro de 2025",
    body: [
      {
        paragraphs: [
          "Recuperar créditos não é encontrar uma tese e aplicá-la. É reconstruir o histórico fiscal da empresa e demonstrar, documento a documento, que houve recolhimento acima do devido.",
        ],
      },
      {
        heading: "O que costuma gerar crédito",
        paragraphs: [
          "Classificação fiscal inadequada, tributação de produtos monofásicos ou com substituição já recolhida, bases de cálculo infladas por valores que não compõem receita e créditos de insumos não aproveitados no Lucro Real.",
        ],
      },
      {
        heading: "Prudência com o caixa",
        paragraphs: [
          "Compensações devem ser feitas em ritmo compatível com o grau de segurança de cada crédito. Antecipar o uso de valores frágeis transforma uma oportunidade em passivo.",
        ],
      },
      {
        heading: "Depois da recuperação",
        paragraphs: [
          "O trabalho só termina quando as rotinas são corrigidas. Caso contrário, o mesmo erro volta a gerar recolhimento indevido no mês seguinte.",
        ],
      },
    ],
  },
  {
    slug: "indicadores-contabeis-que-a-direcao-precisa-acompanhar",
    title: "Os indicadores contábeis que a direção precisa acompanhar",
    category: "Gestão Empresarial",
    excerpt:
      "Balancete não é burocracia. Bem lido, ele antecipa problemas de caixa, margem e endividamento.",
    readingTime: "5 min de leitura",
    date: "2025-11-18",
    dateLabel: "18 de novembro de 2025",
    body: [
      {
        paragraphs: [
          "Grande parte das empresas recebe demonstrações contábeis mensalmente e não as utiliza. O problema raramente é o dado — é a ausência de leitura.",
        ],
      },
      {
        heading: "Margem de contribuição por linha",
        paragraphs: [
          "Separar custos variáveis de fixos revela quais produtos ou serviços sustentam o resultado e quais apenas ocupam a operação.",
        ],
      },
      {
        heading: "Ciclo financeiro",
        paragraphs: [
          "Prazo médio de estoque, de recebimento e de pagamento definem quanto capital de giro a empresa precisa. Crescer sem observar esse ciclo é a causa mais comum de aperto de caixa em negócios lucrativos.",
        ],
      },
      {
        heading: "Carga tributária efetiva",
        paragraphs: [
          "Acompanhe o percentual dos tributos sobre a receita mês a mês. Variações inesperadas indicam erro de classificação, mudança de mix ou oportunidade de revisão de regime.",
        ],
      },
    ],
  },
  {
    slug: "segregacao-de-atividades-limites-entre-planejamento-e-risco",
    title: "Segregação de atividades: limites entre planejamento e risco",
    category: "Societário",
    excerpt:
      "Separar operações em CNPJs distintos pode ser legítimo — desde que exista substância econômica real.",
    readingTime: "6 min de leitura",
    date: "2025-10-30",
    dateLabel: "30 de outubro de 2025",
    body: [
      {
        paragraphs: [
          "A criação de novas pessoas jurídicas para segregar atividades é prática legítima quando cada empresa tem estrutura, autonomia e propósito próprios.",
        ],
      },
      {
        heading: "O que caracteriza substância",
        paragraphs: [
          "Contratos próprios, equipe, endereço, controle de custos e decisões independentes. Empresas que dividem tudo, inclusive a gestão, tendem a ser tratadas como unidade pelo fisco.",
        ],
      },
      {
        heading: "Sinais de risco",
        paragraphs: [
          "Confusão patrimonial, faturamento direcionado artificialmente para respeitar limites de regime e ausência de estrutura operacional são os principais indicadores de autuação.",
        ],
      },
      {
        heading: "Documentar é proteger",
        paragraphs: [
          "Toda reorganização deve ser acompanhada de estudo técnico que registre a motivação econômica da decisão, e não apenas o efeito tributário.",
        ],
      },
    ],
  },
  {
    slug: "pro-labore-e-distribuicao-de-lucros-como-definir",
    title: "Pró-labore e distribuição de lucros: como definir a política",
    category: "Gestão Empresarial",
    excerpt:
      "Retiradas sem critério comprometem o caixa da empresa e expõem o patrimônio pessoal dos sócios.",
    readingTime: "4 min de leitura",
    date: "2025-09-24",
    dateLabel: "24 de setembro de 2025",
    body: [
      {
        paragraphs: [
          "A separação entre o dinheiro da empresa e o dinheiro do sócio é o primeiro passo de qualquer organização patrimonial séria.",
        ],
      },
      {
        heading: "Pró-labore é remuneração pelo trabalho",
        paragraphs: [
          "Deve refletir a função exercida e sustentar as contribuições previdenciárias correspondentes. Valores simbólicos criam fragilidade previdenciária e questionamentos futuros.",
        ],
      },
      {
        heading: "Lucro se distribui com escrituração",
        paragraphs: [
          "A distribuição isenta depende de contabilidade regular que comprove o lucro apurado. Sem escrituração adequada, o limite é a presunção legal.",
        ],
      },
      {
        heading: "Política escrita",
        paragraphs: [
          "Defina periodicidade, percentuais e reservas antes do próximo exercício. Regras combinadas evitam conflitos entre sócios e protegem o capital de giro.",
        ],
      },
    ],
  },
];

export const articleBySlug = (slug: string) => articles.find((a) => a.slug === slug);
