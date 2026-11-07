export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  intro: string;
  description: string;
  icon: string;
  handled: string[];
  audience: string;
  steps: string[];
  faqs: { question: string; answer: string }[];
  articleSlugs: string[];
};

export const services: Service[] = [
  {
    slug: "tenue-comptable",
    number: "01",
    title: "Tenue comptable & reporting",
    shortTitle: "Tenue comptable",
    intro: "Une information financière fiable, disponible au bon moment.",
    description:
      "Nous organisons votre comptabilité pour qu’elle reflète fidèlement votre activité. De la collecte des pièces à la clôture, nos équipes sécurisent chaque étape et vous donnent une lecture claire de vos résultats.",
    icon: "BookOpenCheck",
    handled: ["Saisie et contrôle des pièces comptables", "Rapprochements bancaires et lettrage", "Situations périodiques et tableaux de bord", "Révision, clôture et états de synthèse"],
    audience: "TPE, PME, professions libérales et filiales marocaines qui souhaitent fiabiliser leur information financière ou confier leur tenue à un partenaire dédié.",
    steps: ["Cadrage de vos besoins et de vos flux", "Organisation de la collecte des pièces", "Production et revue de la comptabilité", "Restitution claire et échanges réguliers"],
    faqs: [
      { question: "Quels documents faut-il transmettre ?", answer: "Les factures d’achat et de vente, relevés bancaires, pièces de caisse et justificatifs sociaux. Nous définissons avec vous un calendrier et un format de transmission adaptés." },
      { question: "Puis-je suivre mes chiffres en cours d’année ?", answer: "Oui. Selon le rythme convenu, nous préparons des situations périodiques et des tableaux de bord pour suivre votre activité sans attendre la clôture annuelle." },
      { question: "Accompagnez-vous les entreprises déjà en activité ?", answer: "Oui. Nous réalisons d’abord une revue de reprise, puis préparons un plan de mise à niveau et un calendrier de transition." },
      { question: "Intervenez-vous avec mon logiciel comptable ?", answer: "Nous étudions votre environnement lors du cadrage. L’organisation retenue doit assurer la traçabilité des pièces et la fiabilité des restitutions." },
    ],
    articleSlugs: ["organiser-comptabilite-pme", "cloture-comptable-preparer"],
  },
  {
    slug: "fiscalite-declarations",
    number: "02",
    title: "Fiscalité & déclarations",
    shortTitle: "Fiscalité & déclarations",
    intro: "Anticiper vos échéances et éclairer vos décisions fiscales.",
    description:
      "Nous transformons vos obligations fiscales en un calendrier maîtrisé. Notre accompagnement associe conformité, analyse de vos opérations et disponibilité lorsque vos décisions engagent votre entreprise.",
    icon: "Scale",
    handled: ["Calendrier et préparation des déclarations fiscales", "TVA, impôt sur les sociétés et impôt sur le revenu", "Revue des opérations et documentation", "Assistance lors des échanges avec l’administration"],
    audience: "Dirigeants de PME, entrepreneurs et filiales qui veulent sécuriser leurs déclarations et anticiper les conséquences fiscales de leurs choix.",
    steps: ["Cartographie de vos obligations", "Collecte et revue des données", "Préparation, validation et dépôt", "Suivi des échéances et conseils"],
    faqs: [
      { question: "Quelles déclarations prenez-vous en charge ?", answer: "Le périmètre est défini selon votre forme juridique, votre régime et votre activité. Nous établissons ensemble la liste des déclarations et des échéances applicables." },
      { question: "Pouvez-vous reprendre un dossier en retard ?", answer: "Oui. Nous commençons par mesurer les échéances concernées, les pièces disponibles et les éventuels risques, puis nous vous proposons un plan de régularisation." },
      { question: "Faites-vous une veille sur les évolutions fiscales ?", answer: "Nous suivons les textes et pratiques qui concernent votre activité et vous alertons sur les changements qui peuvent affecter vos obligations." },
      { question: "Comment préparer un contrôle fiscal ?", answer: "Nous vous aidons à réunir les justificatifs, à structurer les réponses et à comprendre les demandes de l’administration, dans le respect de votre situation." },
    ],
    articleSlugs: ["declarations-fiscales-maroc", "tva-au-maroc-entreprise"],
  },
  {
    slug: "creation-entreprise",
    number: "03",
    title: "Création d’entreprise",
    shortTitle: "Création d’entreprise",
    intro: "Les bons choix dès le premier jour de votre activité.",
    description:
      "Du choix de la structure à l’immatriculation, nous coordonnons les formalités qui donnent vie à votre projet. Vous avancez avec une vision claire des étapes, des pièces et des obligations à venir.",
    icon: "Building2",
    handled: ["Analyse du projet et choix de la forme juridique", "Préparation des statuts et formalités de constitution", "Immatriculations et identifiants de l’entreprise", "Mise en place du calendrier comptable et social"],
    audience: "Créateurs, repreneurs et porteurs de projets qui souhaitent lancer une activité structurée au Maroc, en limitant les retours administratifs.",
    steps: ["Comprendre le projet et les associés", "Choisir la structure et le régime adaptés", "Préparer et coordonner les formalités", "Démarrer avec vos premiers repères de gestion"],
    faqs: [
      { question: "Combien de temps prend une création ?", answer: "Le délai dépend de la forme juridique, de la disponibilité des pièces et du traitement des formalités. Après le cadrage, nous vous indiquons les étapes et les délais observés." },
      { question: "Quelle forme juridique choisir ?", answer: "La décision dépend notamment des associés, du financement, de la gouvernance et du développement envisagé. Nous comparons les options à partir de votre projet." },
      { question: "Puis-je créer une société à distance ?", answer: "Une partie importante des échanges et de la préparation peut se faire à distance. Certaines signatures ou pièces peuvent nécessiter des modalités particulières, vérifiées au démarrage." },
      { question: "M’accompagnez-vous après l’immatriculation ?", answer: "Oui. Nous pouvons organiser le suivi comptable, fiscal et social dès le lancement afin que vos premières échéances soient anticipées." },
    ],
    articleSlugs: ["creer-societe-maroc-etapes", "choisir-forme-juridique-maroc"],
  },
  {
    slug: "conseil-assistance-administrative",
    number: "04",
    title: "Conseil & assistance administrative",
    shortTitle: "Conseil & assistance",
    intro: "Un interlocuteur impliqué pour vos décisions et formalités.",
    description:
      "Nous vous aidons à lire vos chiffres, préparer vos décisions et coordonner vos démarches administratives. Un conseil utile commence par l’écoute de votre réalité opérationnelle.",
    icon: "MessagesSquare",
    handled: ["Analyse de gestion et aide à la décision", "Prévisionnels et accompagnement budgétaire", "Formalités administratives récurrentes", "Coordination des interlocuteurs de l’entreprise"],
    audience: "Dirigeants qui cherchent un regard externe sur leur gestion, un appui dans leurs démarches ou un partenaire pour structurer leur organisation.",
    steps: ["Écouter la situation et les objectifs", "Identifier les informations utiles", "Construire des options concrètes", "Suivre les actions décidées"],
    faqs: [
      { question: "Le conseil est-il réservé aux clients comptables ?", answer: "Non. Nous pouvons intervenir sur une mission ponctuelle ou construire un accompagnement plus régulier selon votre besoin." },
      { question: "Aidez-vous à construire un prévisionnel ?", answer: "Oui. Nous travaillons avec vous sur les hypothèses, les besoins de financement et la lecture des indicateurs, en explicitant les limites de chaque projection." },
      { question: "Pouvez-vous gérer les démarches administratives ?", answer: "Nous pouvons préparer et coordonner des formalités définies ensemble, en précisant les pièces attendues, les responsabilités et le calendrier." },
      { question: "Comment démarre une mission de conseil ?", answer: "Un premier échange permet de préciser votre question. Nous proposons ensuite un périmètre, des livrables et un calendrier adaptés." },
    ],
    articleSlugs: ["indicateurs-pilotage-pme", "organiser-comptabilite-pme"],
  },
];

export const findService = (slug: string) => services.find((service) => service.slug === slug);