export interface Service {
  slug: string;
  number: string;
  name: string;
  menuHint: string;
  tagline: string;
  excerpt: string;
  heroText: string;
  highlights: string[];
  checklist: string[];
  forWhom: { title: string; text: string }[];
  process: { title: string; text: string }[];
  faq: { q: string; a: string }[];
  relatedSlugs: string[];
}

export const services: Service[] = [
  {
    slug: "tenue-comptable",
    number: "01",
    name: "Tenue comptable",
    menuHint: "Comptabilité fiable, reporting mensuel clair",
    tagline: "Des comptes tenus au cordeau, un reporting qui éclaire vos décisions.",
    excerpt:
      "Saisie, lettrage, rapprochements, états de synthèse : une comptabilité conforme au CGNC, tenue aux échéances, avec un reporting mensuel lisible par un dirigeant — pas seulement par un comptable.",
    heroText:
      "La comptabilité n'est pas une contrainte administrative : c'est l'instrument de mesure de votre entreprise. Nous la tenons avec exactitude, dans le respect du Code Général de Normalisation Comptable, et nous la restituons sous une forme que vous pouvez réellement utiliser pour piloter.",
    highlights: ["Conformité CGNC", "Reporting mensuel", "Interlocuteur dédié"],
    checklist: [
      "Saisie et imputation des pièces comptables (achats, ventes, banque, caisse)",
      "Lettrage des comptes clients et fournisseurs, suivi des impayés",
      "Rapprochements bancaires mensuels",
      "Tenue des journaux, grand livre et balance",
      "Travaux d'inventaire : amortissements, provisions, régularisations",
      "Établissement du bilan et du compte de produits et charges (CPC)",
      "Liasse fiscale complète et télédéclaration via Simpl",
      "Tableau de bord mensuel : trésorerie, marge, créances, dettes",
    ],
    forWhom: [
      {
        title: "TPE & PME",
        text: "Commerce, services, industrie, BTP : une comptabilité externalisée complète, sans recruter en interne.",
      },
      {
        title: "Professions libérales",
        text: "Médecins, architectes, consultants : obligations simplifiées mais suivies avec la même exigence.",
      },
      {
        title: "Filiales de groupes étrangers",
        text: "Tenue locale aux normes marocaines avec reporting au format attendu par votre maison mère, en français ou en anglais.",
      },
    ],
    process: [
      {
        title: "Audit de l'existant",
        text: "Revue de vos comptes, identification des retards ou anomalies, plan de remise à niveau si nécessaire.",
      },
      {
        title: "Organisation des flux",
        text: "Circuit de transmission des pièces (dépôt numérique ou collecte), calendrier mensuel et responsabilités de chacun.",
      },
      {
        title: "Tenue régulière",
        text: "Saisie, lettrage et rapprochements chaque mois ; vos comptes sont toujours à jour, jamais reconstitués dans l'urgence.",
      },
      {
        title: "Restitution & conseil",
        text: "Reporting mensuel commenté, point trimestriel de gestion et préparation sereine de la clôture annuelle.",
      },
    ],
    faq: [
      {
        q: "Ma comptabilité est en retard de plusieurs mois. Pouvez-vous la reprendre ?",
        a: "Oui, c'est une situation fréquente. Nous commençons par un audit de l'existant, chiffrons précisément la remise à niveau, puis traitons l'arriéré par ordre de priorité fiscale afin de régulariser vos déclarations avant toute pénalité supplémentaire.",
      },
      {
        q: "Comment vous transmet-on les pièces comptables ?",
        a: "Au choix : dépôt sur un espace numérique sécurisé (scan ou photo des pièces), transmission par e-mail, ou collecte physique au cabinet pour les clients de Casablanca. Nous définissons ensemble un rythme mensuel qui devient une routine simple.",
      },
      {
        q: "Travaillez-vous avec nos outils de facturation existants ?",
        a: "Oui. Nous récupérons les exports de la plupart des solutions de facturation et de caisse utilisées au Maroc. Si vous n'êtes pas encore équipé, nous vous recommandons un outil adapté à votre volume et à votre secteur.",
      },
      {
        q: "Que comprend exactement le reporting mensuel ?",
        a: "Un document synthétique d'une à deux pages : chiffre d'affaires, marge, charges principales, position de trésorerie, créances clients et dettes fournisseurs, accompagné de nos alertes et recommandations. L'objectif : que vous sachiez chaque mois où en est votre entreprise.",
      },
    ],
    relatedSlugs: [
      "externaliser-sa-comptabilite-pme-maroc",
      "tva-maroc-taux-deductions-pieges",
      "loi-de-finances-2026-pme-maroc",
    ],
  },
  {
    slug: "fiscalite-declarations",
    number: "02",
    name: "Fiscalité & déclarations",
    menuHint: "IS, IR, TVA : conformité et optimisation légale",
    tagline: "Payer le juste impôt : ni plus, ni moins, et toujours dans les délais.",
    excerpt:
      "IS, IR, TVA, retenues à la source, taxe professionnelle : nous sécurisons l'ensemble de vos obligations fiscales et identifions les optimisations prévues par le Code Général des Impôts.",
    heroText:
      "La fiscalité marocaine évolue chaque année avec la loi de finances. Notre rôle : vous garantir une conformité totale — déclarations exactes, télétransmises aux échéances — tout en mobilisant les dispositifs légaux qui réduisent votre charge fiscale. L'optimisation n'est pas un risque quand elle s'appuie sur les textes.",
    highlights: ["Veille loi de finances", "Télédéclarations Simpl", "Assistance en cas de contrôle"],
    checklist: [
      "Déclarations de TVA mensuelles ou trimestrielles et télépaiement",
      "Acomptes et liquidation de l'impôt sur les sociétés (IS)",
      "Déclarations d'IR professionnel et revenus salariaux (traitements et salaires)",
      "Retenues à la source : honoraires, dividendes, prestations de non-résidents",
      "Taxe professionnelle et taxe de services communaux",
      "État des honoraires, déclaration des rémunérations versées à des tiers",
      "Revue fiscale annuelle et optimisations prévues par le CGI",
      "Assistance et représentation en cas de contrôle ou de demande de l'administration",
    ],
    forWhom: [
      {
        title: "Sociétés soumises à l'IS",
        text: "SARL, SA, SAS : calendrier fiscal complet, de l'acompte trimestriel à la liquidation annuelle.",
      },
      {
        title: "Entrepreneurs individuels",
        text: "IR professionnel, régime du résultat net réel ou simplifié, contribution professionnelle unique (CPU).",
      },
      {
        title: "Structures en croissance",
        text: "Levées de fonds, restructurations, conventions intragroupe : anticiper l'impact fiscal avant de signer.",
      },
    ],
    process: [
      {
        title: "Diagnostic fiscal",
        text: "Revue de vos déclarations passées, identification des risques (prescription, provisions, TVA) et des optimisations manquées.",
      },
      {
        title: "Calendrier déclaratif",
        text: "Mise en place d'un échéancier complet IS, IR, TVA et taxes locales, avec alertes avant chaque échéance.",
      },
      {
        title: "Production & télédéclaration",
        text: "Préparation, contrôle et télétransmission de chaque déclaration via les téléservices Simpl de la DGI.",
      },
      {
        title: "Veille & optimisation",
        text: "Analyse de chaque loi de finances, simulation de son impact sur votre société et recommandations concrètes.",
      },
    ],
    faq: [
      {
        q: "Quelles sont les principales échéances fiscales d'une société marocaine ?",
        a: "Les acomptes d'IS sont dus avant la fin de chaque trimestre ; la déclaration du résultat fiscal dans les trois mois de la clôture ; la TVA se déclare mensuellement (CA ≥ 1 MDH) ou trimestriellement ; s'y ajoutent les déclarations annuelles des traitements et salaires, des honoraires et la taxe professionnelle. Nous consolidons tout dans un calendrier unique.",
      },
      {
        q: "Que risque-t-on en cas de retard de déclaration ?",
        a: "Des majorations et pénalités calculées sur les droits dus, auxquelles s'ajoutent des amendes pour dépôt tardif, même en l'absence d'impôt à payer. Le coût d'un retard dépasse presque toujours celui d'un accompagnement : notre priorité absolue est le respect des échéances.",
      },
      {
        q: "Pouvez-vous nous assister lors d'un contrôle fiscal ?",
        a: "Oui. Nous préparons le dossier, assistons aux réunions avec le vérificateur, répondons aux notifications dans les délais légaux et, le cas échéant, vous accompagnons dans les recours devant les commissions. Plus tôt nous sommes impliqués, mieux le contrôle se passe.",
      },
      {
        q: "L'optimisation fiscale est-elle légale au Maroc ?",
        a: "Utiliser les dispositifs prévus par le Code Général des Impôts — exonérations sectorielles, provisions réglementées, choix du régime de TVA, imputation des déficits — est parfaitement légal. Ce qui est sanctionné, c'est la dissimulation. Notre ligne est claire : toute optimisation que nous proposons s'appuie sur un texte.",
      },
    ],
    relatedSlugs: [
      "loi-de-finances-2026-pme-maroc",
      "tva-maroc-taux-deductions-pieges",
      "employeur-cnss-amo-ir-maroc",
    ],
  },
  {
    slug: "creation-entreprise",
    number: "03",
    name: "Création d'entreprise",
    menuHint: "De l'idée à l'immatriculation, clé en main",
    tagline: "Votre société immatriculée en quelques jours, sur des fondations juridiques saines.",
    excerpt:
      "Choix de la forme juridique, certificat négatif, statuts, registre du commerce, ICE, CNSS : nous pilotons la création de bout en bout, pour démarrer vite et sur des bases solides.",
    heroText:
      "Créer une entreprise au Maroc est rapide quand chaque étape est faite dans le bon ordre, avec les bons documents. Nous nous chargeons de l'intégralité du parcours — de la réservation de la dénomination à l'affiliation CNSS — et nous vous conseillons sur les choix qui engagent l'avenir : forme juridique, capital, pacte d'associés, régime fiscal.",
    highlights: ["Dossier complet clé en main", "Délai moyen 7 à 10 jours", "Conseil sur la structure"],
    checklist: [
      "Conseil sur la forme juridique : SARL, SARL AU, SAS, succursale",
      "Certificat négatif auprès de l'OMPIC (réservation de la dénomination)",
      "Rédaction des statuts et du pacte d'associés le cas échéant",
      "Contrat de domiciliation ou bail commercial",
      "Enregistrement des actes et formalités fiscales de constitution",
      "Immatriculation au registre du commerce et identifiant ICE",
      "Affiliation CNSS et inscription à la taxe professionnelle",
      "Ouverture du compte bancaire et dépôt du capital, publicité légale",
    ],
    forWhom: [
      {
        title: "Primo-entrepreneurs",
        text: "Un parcours expliqué pas à pas, des choix éclairés et aucune formalité oubliée pour un premier projet serein.",
      },
      {
        title: "Dirigeants qui structurent",
        text: "Filialisation, holding, nouvelle activité : créer la bonne entité, au bon endroit, avec la bonne fiscalité.",
      },
      {
        title: "Investisseurs étrangers",
        text: "Création possible intégralement à distance, par procuration, avec accompagnement bilingue français-anglais.",
      },
    ],
    process: [
      {
        title: "Cadrage du projet",
        text: "Activité, associés, capital, régime fiscal et social du dirigeant : nous validons ensemble la structure optimale.",
      },
      {
        title: "Constitution du dossier",
        text: "Certificat négatif, statuts, domiciliation, pièces des associés : nous préparons et faisons signer tous les actes.",
      },
      {
        title: "Formalités d'immatriculation",
        text: "Enregistrement, registre du commerce, ICE, CNSS, publicité légale : nous déposons et suivons chaque formalité.",
      },
      {
        title: "Lancement opérationnel",
        text: "Remise du dossier juridique complet, mise en place de la comptabilité et du calendrier fiscal dès le premier jour.",
      },
    ],
    faq: [
      {
        q: "Quel est le capital minimum pour créer une SARL au Maroc ?",
        a: "La loi n'impose plus de capital minimum pour une SARL : elle peut être constituée avec un capital symbolique. En pratique, nous recommandons un capital cohérent avec votre activité (souvent 10 000 à 100 000 MAD) : il crédibilise la société auprès des banques, clients et administrations.",
      },
      {
        q: "Combien de temps prend la création d'une société ?",
        a: "Comptez en moyenne 7 à 10 jours ouvrés entre la demande de certificat négatif et l'immatriculation au registre du commerce, si le dossier est complet. L'ouverture du compte bancaire peut ajouter quelques jours selon la banque, notamment pour les associés étrangers.",
      },
      {
        q: "SARL ou SAS : que choisir ?",
        a: "La SARL reste la forme la plus courante et la plus simple pour une PME. La SAS offre une grande liberté statutaire, utile en présence d'investisseurs ou de pactes complexes. Le bon choix dépend de votre actionnariat et de vos perspectives : c'est précisément l'objet de notre premier entretien.",
      },
      {
        q: "Peut-on créer une société sans local commercial ?",
        a: "Oui. La domiciliation auprès d'une société de domiciliation agréée est légale et très répandue pour démarrer. Elle fournit une adresse juridique et la gestion du courrier. Vous pourrez transférer le siège vers vos propres locaux ultérieurement, formalité que nous gérons également.",
      },
    ],
    relatedSlugs: [
      "creer-une-sarl-au-maroc-2026",
      "investisseurs-etrangers-7-questions-maroc",
      "loi-de-finances-2026-pme-maroc",
    ],
  },
  {
    slug: "conseil-assistance-administrative",
    number: "04",
    name: "Conseil & assistance administrative",
    menuHint: "Paie, CNSS, juridique courant, relations administration",
    tagline: "Un bras droit administratif pour que vous restiez concentré sur votre métier.",
    excerpt:
      "Paie et déclarations CNSS, secrétariat juridique courant, relations avec les administrations, conseil de gestion : nous prenons en charge tout ce qui vous éloigne de votre cœur de métier.",
    heroText:
      "Entre la paie, les assemblées générales, les attestations à produire et les courriers de l'administration, un dirigeant de PME peut perdre plusieurs jours chaque mois. Nous absorbons cette charge avec méthode : chaque obligation est inventoriée, planifiée et traitée — et vous disposez d'un conseiller joignable pour chaque décision de gestion.",
    highlights: ["Paie & Damancom", "Secrétariat juridique", "Conseiller joignable"],
    checklist: [
      "Bulletins de paie et livre de paie conformes au Code du travail",
      "Déclarations sociales mensuelles CNSS / AMO via Damancom",
      "Contrats de travail, avenants et soldes de tout compte",
      "Secrétariat juridique : AG annuelles, PV, dépôts au greffe",
      "Modifications statutaires : transfert de siège, cession de parts, changement de gérant",
      "Attestations et dossiers administratifs (marchés publics, banques, bailleurs)",
      "Relations avec la DGI, la CNSS et l'Inspection du travail",
      "Conseil de gestion : prévisionnels, business plans, demandes de financement",
    ],
    forWhom: [
      {
        title: "PME avec salariés",
        text: "Une paie externalisée fiable et des déclarations sociales toujours à l'heure, sans service RH interne.",
      },
      {
        title: "Dirigeants très sollicités",
        text: "Un point d'entrée unique pour toutes les questions administratives, juridiques et de gestion courante.",
      },
      {
        title: "Sociétés en développement",
        text: "Prévisionnels, dossiers bancaires et restructurations préparés par une équipe qui connaît déjà vos chiffres.",
      },
    ],
    process: [
      {
        title: "Inventaire des obligations",
        text: "Recensement complet : social, juridique, administratif. Rien ne doit reposer sur la seule mémoire du dirigeant.",
      },
      {
        title: "Planification annuelle",
        text: "Un calendrier unique regroupant échéances sociales, juridiques et administratives, avec rappels systématiques.",
      },
      {
        title: "Traitement récurrent",
        text: "Paie mensuelle, déclarations Damancom, formalités juridiques : exécution aux échéances, sans relance de votre part.",
      },
      {
        title: "Conseil continu",
        text: "Un conseiller dédié répond à vos questions de gestion et prépare vos décisions importantes avec des chiffres.",
      },
    ],
    faq: [
      {
        q: "Gérez-vous la paie de bout en bout ?",
        a: "Oui : calcul des bulletins, IR retenu à la source, cotisations CNSS et AMO, télédéclaration Damancom, virements de salaires préparés et écritures comptables de paie. Vous validez un récapitulatif mensuel, nous faisons le reste.",
      },
      {
        q: "Pouvez-vous régulariser une situation CNSS en retard ?",
        a: "Oui. Nous établissons un état des lieux précis des périodes non déclarées, chiffrons les régularisations et négocions le cas échéant un échéancier avec la CNSS. Plus la régularisation est anticipée, plus son coût est maîtrisé.",
      },
      {
        q: "Qu'est-ce que le secrétariat juridique annuel comprend ?",
        a: "La tenue de l'assemblée générale annuelle d'approbation des comptes : convocations, rapport de gérance, procès-verbaux, affectation du résultat et dépôt au greffe du tribunal de commerce dans les délais légaux.",
      },
      {
        q: "Intervenez-vous sur les dossiers de financement bancaire ?",
        a: "Oui. Nous préparons les prévisionnels, états financiers et dossiers exigés par les banques, et nous vous accompagnons dans la négociation. Un dossier préparé par un cabinet crédibilise fortement votre demande.",
      },
    ],
    relatedSlugs: [
      "employeur-cnss-amo-ir-maroc",
      "externaliser-sa-comptabilite-pme-maroc",
      "investisseurs-etrangers-7-questions-maroc",
    ],
  },
];

export function getService(slug: string | undefined): Service | undefined {
  return services.find((s) => s.slug === slug);
}
