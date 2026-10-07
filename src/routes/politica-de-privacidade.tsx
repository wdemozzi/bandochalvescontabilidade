import { createFileRoute } from "@tanstack/react-router";
import { Container, Section } from "@/components/ui/primitives";
import { PageHero } from "@/components/sections/common";
import { site } from "@/lib/site";
import { meta } from "@/lib/seo";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () =>
    meta({
      title: "Política de Privacidade (LGPD) | Bandoch Alves Escritório Contábil",
      description:
        "Como a Bandoch Alves Escritório Contábil coleta, utiliza, armazena e protege dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018).",
      path: "/politica-de-privacidade",
    }),
  component: Privacidade,
});

const UPDATED = "26 de setembro de 2026";

const sections: { title: string; paragraphs: string[]; list?: string[] }[] = [
  {
    title: "1. Quem somos (controlador dos dados)",
    paragraphs: [
      `${site.legalName}, inscrita no CNPJ ${site.cnpj}, organização contábil registrada no Conselho Regional de Contabilidade do Paraná sob nº ${site.crcOffice}, com sede em ${site.address.full}, é a controladora dos dados pessoais tratados por meio deste site e dos canais de atendimento nele indicados.`,
      `Responsável técnica: ${site.responsible} — ${site.crcResponsible}.`,
    ],
  },
  {
    title: "2. Encarregado pelo tratamento de dados (DPO)",
    paragraphs: [
      `Dúvidas, solicitações e reclamações relacionadas a dados pessoais podem ser encaminhadas ao canal de privacidade do escritório: e-mail ${site.email}, telefone ${site.phone} ou WhatsApp ${site.whatsappDisplay}, em dias úteis — ${site.hours.toLowerCase()}.`,
    ],
  },
  {
    title: "3. Abrangência",
    paragraphs: [
      "Esta política se aplica aos dados pessoais coletados por meio deste site, do formulário de contato, dos botões de WhatsApp, do telefone, do e-mail e do perfil oficial no Instagram. Os dados tratados na execução de contratos de prestação de serviços contábeis seguem, adicionalmente, as cláusulas de confidencialidade do respectivo contrato.",
    ],
  },
  {
    title: "4. Dados que coletamos",
    paragraphs: ["Coletamos apenas os dados estritamente necessários, fornecidos voluntariamente por você:"],
    list: [
      "Identificação e contato: nome, empresa (opcional), e-mail e telefone/WhatsApp;",
      "Conteúdo da solicitação: assunto escolhido e mensagem enviada;",
      "Dados técnicos mínimos de navegação (endereço IP, tipo de navegador e páginas acessadas), registrados automaticamente pelo provedor de hospedagem para fins de segurança e funcionamento do site.",
    ],
  },
  {
    title: "5. Dados que não solicitamos pelo site",
    paragraphs: [
      "Não solicitamos pelo site dados pessoais sensíveis (origem racial, saúde, religião, biometria, opinião política etc.), senhas, certificados digitais ou documentos fiscais. Pedimos que tais informações não sejam enviadas pelo formulário ou por mensagens abertas; quando necessárias à prestação do serviço, serão solicitadas por canal adequado e seguro após a contratação.",
      "Este site não é direcionado a menores de 18 anos e não coleta intencionalmente dados de crianças ou adolescentes.",
    ],
  },
  {
    title: "6. Finalidades e bases legais",
    paragraphs: ["Tratamos os dados pessoais para as seguintes finalidades, com as respectivas bases legais (art. 7º da LGPD):"],
    list: [
      "Responder ao seu contato, agendar conversas e elaborar propostas — procedimentos preliminares relacionados a contrato (art. 7º, V) e consentimento (art. 7º, I);",
      "Prestar os serviços contábeis, tributários e societários contratados — execução de contrato (art. 7º, V);",
      "Cumprir obrigações legais e regulatórias da profissão contábil e exigências de órgãos públicos — cumprimento de obrigação legal (art. 7º, II);",
      "Garantir a segurança do site e prevenir fraudes — legítimo interesse (art. 7º, IX);",
      "Exercer direitos em processos judiciais, administrativos ou arbitrais — art. 7º, VI.",
    ],
  },
  {
    title: "7. Cookies e tecnologias de navegação",
    paragraphs: [
      "Este site não utiliza cookies de publicidade, remarketing ou criação de perfil comportamental. Podem ser utilizados apenas recursos técnicos essenciais ao funcionamento e à segurança das páginas.",
      "Ao visualizar o mapa incorporado (Google Maps) ou acessar links do Instagram e do WhatsApp, esses serviços de terceiros (Google LLC e Meta Platforms) podem utilizar cookies e tecnologias de rastreamento próprias, conforme suas respectivas políticas de privacidade. Você pode bloquear ou apagar cookies nas configurações do seu navegador.",
      "No primeiro acesso, exibimos um aviso de cookies. Ao clicar em \"Aceitar\", sua escolha fica registrada no seu navegador e o aviso não é exibido novamente. Ao clicar em \"Recusar\", mantemos apenas os recursos estritamente essenciais.",
    ],
  },
  {
    title: "8. Compartilhamento de dados",
    paragraphs: [
      "Não vendemos, alugamos nem cedemos dados pessoais. O compartilhamento ocorre somente quando necessário e limitado ao mínimo indispensável, com:",
    ],
    list: [
      "Órgãos públicos e fiscalizadores (Receita Federal, Secretarias da Fazenda, Juntas Comerciais, Previdência, prefeituras e CRC), para cumprimento das obrigações do serviço contratado;",
      "Fornecedores de tecnologia que viabilizam a operação (hospedagem do site, e-mail, sistemas contábeis e ferramentas de comunicação), obrigados a manter a confidencialidade e a segurança dos dados;",
      "Autoridades judiciais ou administrativas, mediante determinação legal.",
    ],
  },
  {
    title: "9. Serviços de terceiros e transferência internacional",
    paragraphs: [
      "Ao utilizar o WhatsApp e o Instagram (Meta Platforms) ou o Google Maps (Google LLC), você interage diretamente com essas plataformas, que possuem políticas de privacidade próprias e podem armazenar dados em servidores fora do Brasil. O provedor de hospedagem do site também pode processar dados técnicos no exterior. Nesses casos, a transferência ocorre nos termos do art. 33 da LGPD, com fornecedores que adotam padrões reconhecidos de proteção de dados.",
    ],
  },
  {
    title: "10. Prazo de armazenamento",
    paragraphs: [
      "Dados de contatos que não resultaram em contratação são mantidos pelo tempo necessário ao atendimento e excluídos ou anonimizados em até 24 meses, salvo solicitação anterior do titular.",
      "Dados vinculados à prestação de serviços são mantidos pelos prazos exigidos pela legislação contábil, tributária, trabalhista e previdenciária e pelas normas do Conselho Federal de Contabilidade, inclusive para defesa em eventuais processos, e eliminados ao término desses prazos.",
    ],
  },
  {
    title: "11. Segurança e sigilo profissional",
    paragraphs: [
      "Adotamos medidas técnicas e administrativas razoáveis para proteger os dados contra acessos não autorizados, perda, alteração ou divulgação indevida, como controle de acesso restrito à equipe, conexão segura (HTTPS) e dever de confidencialidade dos colaboradores.",
      "Além da LGPD, o escritório observa o sigilo profissional previsto no Código de Ética Profissional do Contador. Nenhum sistema é totalmente imune a riscos; por isso, recomendamos que você também proteja seus dispositivos e credenciais.",
    ],
  },
  {
    title: "12. Incidentes de segurança",
    paragraphs: [
      "Na ocorrência de incidente que possa acarretar risco ou dano relevante aos titulares, o escritório adotará as medidas de contenção cabíveis e comunicará os titulares afetados e a Autoridade Nacional de Proteção de Dados (ANPD), nos termos do art. 48 da LGPD e da regulamentação vigente.",
    ],
  },
  {
    title: "13. Seus direitos como titular",
    paragraphs: ["Nos termos do art. 18 da LGPD, você pode solicitar, a qualquer momento e gratuitamente:"],
    list: [
      "Confirmação da existência de tratamento e acesso aos dados;",
      "Correção de dados incompletos, inexatos ou desatualizados;",
      "Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade;",
      "Portabilidade dos dados a outro fornecedor, observados os segredos comercial e industrial;",
      "Eliminação dos dados tratados com base no consentimento, ressalvadas as hipóteses legais de guarda;",
      "Informação sobre com quem os dados foram compartilhados;",
      "Informação sobre a possibilidade de não fornecer consentimento e suas consequências;",
      "Revogação do consentimento;",
      "Revisão de decisões tomadas unicamente com base em tratamento automatizado.",
    ],
  },
  {
    title: "14. Como exercer seus direitos",
    paragraphs: [
      `Envie sua solicitação para ${site.email}, informando nome completo e o pedido. Para sua segurança, poderemos solicitar informações que confirmem sua identidade antes do atendimento. As solicitações serão respondidas em até 15 (quinze) dias, conforme o art. 19 da LGPD.`,
      "Caso entenda que seus direitos não foram atendidos, você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD) — www.gov.br/anpd.",
    ],
  },
  {
    title: "15. Links externos",
    paragraphs: [
      "Este site pode conter links para sites e plataformas de terceiros. O escritório não se responsabiliza pelas práticas de privacidade desses ambientes, recomendando a leitura de suas respectivas políticas.",
    ],
  },
  {
    title: "16. Conteúdo informativo",
    paragraphs: [
      "Os artigos, publicações e vídeos disponibilizados neste site e nas redes sociais têm caráter exclusivamente informativo e não substituem a análise técnica individualizada de cada caso. Decisões contábeis, tributárias ou patrimoniais devem ser tomadas com orientação profissional específica.",
    ],
  },
  {
    title: "17. Atualizações e foro",
    paragraphs: [
      "Esta política pode ser atualizada a qualquer momento para refletir alterações legais, regulatórias ou operacionais. A versão vigente estará sempre disponível nesta página, com a data da última atualização.",
      "Esta política é regida pela legislação brasileira, em especial a Lei nº 13.709/2018 (LGPD) e o Marco Civil da Internet (Lei nº 12.965/2014). Fica eleito o foro da Comarca de Umuarama – PR, ressalvado o direito do titular de optar pelo foro de seu domicílio.",
    ],
  },
];

function Privacidade() {
  return (
    <>
      <PageHero
        eyebrow="LGPD"
        title="Política de Privacidade e Proteção de Dados"
        intro="Como a Bandoch Alves Escritório Contábil coleta, utiliza, armazena e protege dados pessoais, em conformidade com a Lei 13.709/2018."
      />
      <Section tone="white">
        <Container>
          <div className="max-w-3xl space-y-12">
            <p className="eyebrow text-muted-foreground">Última atualização: {UPDATED}</p>
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="font-serif text-2xl leading-snug">{s.title}</h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                  {s.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {s.list && (
                    <ul className="list-disc space-y-2 pl-5 marker:text-wine">
                      {s.list.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
