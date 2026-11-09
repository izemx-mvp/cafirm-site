export type Category = "fiscalite" | "comptabilite" | "creation" | "investir" | "social";

export const categoryLabels: Record<Category, string> = {
  fiscalite: "Fiscalité",
  comptabilite: "Comptabilité",
  creation: "Création d'entreprise",
  investir: "Investir au Maroc",
  social: "Social & paie",
};

export interface PostSection {
  id: string;
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface Post {
  slug: string;
  title: string;
  category: Category;
  date: string; // ISO
  readingTime: number;
  featured?: boolean;
  excerpt: string;
  intro: string;
  sections: PostSection[];
}

export const posts: Post[] = [
  {
    slug: "loi-de-finances-2026-pme-maroc",
    title: "Loi de finances 2026 : ce qui change concrètement pour les PME marocaines",
    category: "fiscalite",
    date: "2026-10-14",
    readingTime: 6,
    featured: true,
    excerpt:
      "Taux d'IS stabilisés, facturation électronique, incitations à l'investissement : tour d'horizon des mesures de la loi de finances 2026 qui touchent directement les PME, et des décisions à prendre avant la clôture.",
    intro:
      "Chaque loi de finances redessine une partie du paysage fiscal marocain. Celle de 2026 s'inscrit dans la continuité de la grande réforme engagée par la loi-cadre 69-19 : stabilisation des taux de l'impôt sur les sociétés, poursuite de la modernisation de l'administration fiscale et montée en puissance de la facturation électronique. Voici ce qu'un dirigeant de PME doit retenir — et surtout, ce qu'il doit décider avant la clôture de son exercice.",
    sections: [
      {
        id: "is-taux",
        heading: "Impôt sur les sociétés : la fin de la période transitoire",
        paragraphs: [
          "La réforme de l'IS initiée par la loi de finances 2023 prévoyait une convergence progressive des taux sur quatre ans. Cette trajectoire arrive à son terme : le paysage se stabilise autour d'un taux cible de 20 % pour la grande majorité des entreprises, de 35 % pour celles dont le bénéfice net atteint ou dépasse 100 millions de dirhams, et de 40 % pour les établissements de crédit et organismes assimilés.",
          "Pour une PME, la conséquence pratique est double. D'une part, la prévisibilité revient : les simulations pluriannuelles redeviennent fiables, ce qui facilite les décisions d'investissement et de distribution. D'autre part, les effets de seuil méritent une attention réelle : une société dont le résultat approche un palier a intérêt à examiner, en toute légalité, le calendrier de ses charges déductibles, de ses amortissements et de ses provisions.",
        ],
      },
      {
        id: "facture-electronique",
        heading: "Facturation électronique : l'échéance se rapproche",
        paragraphs: [
          "La direction générale des impôts poursuit le déploiement de la facturation électronique, appelée à devenir progressivement la norme pour les transactions entre entreprises. L'objectif affiché est clair : fiabiliser la TVA et réduire la fraude, en s'inspirant des modèles déjà déployés dans plusieurs pays.",
          "Les PME ont tout intérêt à anticiper plutôt qu'à subir. Concrètement, cela signifie vérifier dès maintenant que votre outil de facturation est capable d'émettre des factures structurées et conformes (mentions obligatoires, ICE du client, numérotation continue), et que votre organisation comptable peut absorber la transmission des données à l'administration sans double saisie.",
        ],
        list: [
          "Vérifier la conformité des mentions obligatoires sur vos factures actuelles",
          "Identifier si votre logiciel de facturation prévoit le format électronique structuré",
          "Nettoyer votre base clients : ICE, raisons sociales et adresses exactes",
          "Former la personne en charge de la facturation aux nouvelles règles",
        ],
      },
      {
        id: "incitations",
        heading: "Investissement et jeunes entreprises : des dispositifs à activer",
        paragraphs: [
          "La charte de l'investissement continue de produire ses effets : primes à l'investissement pour les projets éligibles, dispositifs renforcés pour les provinces moins favorisées et pour les secteurs prioritaires. Les PME industrielles et exportatrices, en particulier, passent souvent à côté de soutiens auxquels elles ont droit, faute d'avoir structuré leur dossier en amont.",
          "Par ailleurs, les mesures en faveur de l'emploi des jeunes et de la première embauche sont reconduites et aménagées. Une entreprise qui prévoit de recruter en 2026 devrait systématiquement vérifier l'éligibilité de ses embauches aux exonérations de cotisations et d'IR prévues par les dispositifs en vigueur : l'économie par salarié est loin d'être négligeable.",
        ],
      },
      {
        id: "decisions",
        heading: "Les décisions à prendre avant la clôture",
        paragraphs: [
          "Une loi de finances ne se lit pas, elle se traduit en décisions. Avant la clôture de votre exercice, trois chantiers méritent un arbitrage avec votre conseil : le calendrier de vos investissements (pour optimiser amortissements et primes éventuelles), la politique de distribution de dividendes au regard de la retenue à la source applicable, et la revue de vos provisions pour qu'elles soient à la fois justifiées et documentées.",
          "Chez CAFIRM, chaque loi de finances donne lieu à une note d'impact personnalisée pour nos clients : ce que le texte change pour votre société, chiffres à l'appui, et ce que nous recommandons de faire. C'est à notre sens la seule façon utile de parler de fiscalité : appliquée à votre cas, pas en général.",
        ],
      },
    ],
  },
  {
    slug: "tva-maroc-taux-deductions-pieges",
    title: "TVA au Maroc : taux, droit à déduction et pièges à éviter",
    category: "fiscalite",
    date: "2026-11-03",
    readingTime: 7,
    excerpt:
      "Taux multiples, conditions de déduction, crédit de TVA, factures non conformes : la TVA est l'impôt le plus manipulé au quotidien — et celui où les erreurs coûtent le plus cher. Guide pratique pour les dirigeants.",
    intro:
      "La TVA est un impôt que l'entreprise collecte pour le compte de l'État : elle ne devrait, en théorie, rien lui coûter. En pratique, c'est l'impôt où nous constatons le plus d'erreurs lors des reprises de dossiers : taux mal appliqués, TVA déduite à tort, crédits dormants jamais récupérés, factures fournisseurs inexploitables. Voici l'essentiel de ce qu'un dirigeant doit comprendre pour que la TVA reste neutre — comme elle est censée l'être.",
    sections: [
      {
        id: "taux",
        heading: "Un taux normal, des taux réduits : appliquer le bon",
        paragraphs: [
          "Le taux normal de la TVA marocaine est de 20 %. S'y ajoutent des taux réduits applicables à des biens et services limitativement énumérés par le Code Général des Impôts : notamment 10 % (certaines opérations financières, restauration, certains produits) et 14 % ou 7 % pour d'autres catégories spécifiques. La loi de finances ajuste régulièrement ces listes dans une logique de convergence progressive des taux.",
          "L'erreur classique consiste à reconduire un taux « historique » sans vérifier son actualité. Une entreprise qui facture à 10 % une prestation devenue taxable à 20 % reste redevable de la différence, avec pénalités et majorations. À l'inverse, facturer un taux trop élevé pénalise votre compétitivité. La règle : à chaque nouvelle activité ou nouveau produit, valider le taux applicable avec votre conseil, texte à l'appui.",
        ],
      },
      {
        id: "deduction",
        heading: "Le droit à déduction : des conditions strictes",
        paragraphs: [
          "Vous ne pouvez déduire la TVA sur vos achats que si plusieurs conditions sont réunies simultanément : la dépense est engagée pour les besoins de l'exploitation, elle est appuyée par une facture régulière mentionnant notamment l'identifiant fiscal et l'ICE du fournisseur, et le paiement respecte les règles de traçabilité — au-delà des seuils fixés par la loi, un règlement en espèces fait perdre une partie du droit à déduction.",
          "Certaines TVA ne sont jamais déductibles : c'est le cas, par exemple, des véhicules de tourisme et des frais qui s'y rattachent, ou des dépenses à caractère non professionnel. Les faire passer en déduction est l'un des redressements les plus fréquents en contrôle.",
        ],
        list: [
          "Facture conforme : IF, ICE, numérotation, désignation précise, montants HT/TVA/TTC",
          "Dépense engagée pour les besoins de l'exploitation, correctement comptabilisée",
          "Moyen de paiement traçable au-delà des seuils légaux d'espèces",
          "Pas de déduction sur les exclusions légales (véhicules de tourisme, libéralités…)",
        ],
      },
      {
        id: "credit",
        heading: "Crédit de TVA : ne le laissez pas dormir",
        paragraphs: [
          "Lorsque la TVA déductible excède durablement la TVA collectée — situation fréquente chez les exportateurs et les entreprises en phase d'investissement — un crédit de TVA se forme. Le remboursement n'est possible que dans les cas prévus par la loi et selon une procédure documentée, avec des délais de dépôt à respecter scrupuleusement.",
          "Nous rencontrons régulièrement des sociétés qui traînent des crédits de TVA importants depuis des années, faute d'avoir constitué le dossier de remboursement dans les formes. C'est de la trésorerie immobilisée pure. Un examen annuel de votre position TVA devrait faire partie de votre routine de clôture.",
        ],
      },
      {
        id: "regime",
        heading: "Encaissements ou débits : choisir son régime en connaissance de cause",
        paragraphs: [
          "Le régime de droit commun au Maroc est celui de l'encaissement : la TVA devient exigible lors du paiement par le client. Le régime optionnel des débits la rend exigible dès la facturation. Le choix n'est pas neutre : le régime des débits simplifie le suivi mais peut dégrader la trésorerie si vos clients paient tard ; le régime de l'encaissement colle à votre trésorerie mais exige un suivi rigoureux des règlements.",
          "Enfin, gardez en tête la périodicité déclarative : déclaration mensuelle lorsque le chiffre d'affaires taxable de l'année écoulée atteint le seuil légal, trimestrielle en dessous. Un dépassement de seuil non détecté est une source classique de pénalités. C'est précisément le type de bascule que votre cabinet doit surveiller pour vous.",
        ],
      },
    ],
  },
  {
    slug: "creer-une-sarl-au-maroc-2026",
    title: "Créer une SARL au Maroc en 2026 : étapes, délais et coûts réels",
    category: "creation",
    date: "2026-09-02",
    readingTime: 6,
    excerpt:
      "Certificat négatif, statuts, registre du commerce, ICE, CNSS : le parcours complet de création d'une SARL au Maroc, avec les délais constatés, les coûts à prévoir et les erreurs qui se paient plus tard.",
    intro:
      "La SARL reste, de très loin, la forme sociale la plus utilisée au Maroc : souple, peu coûteuse, adaptée de l'activité unipersonnelle (SARL à associé unique) à la PME familiale ou à la filiale de groupe. Le processus de création s'est considérablement fluidifié ces dernières années, notamment grâce à la dématérialisation portée par l'OMPIC et les centres régionaux d'investissement. Voici le parcours réel, étape par étape, tel que nous le pilotons chaque semaine pour nos clients.",
    sections: [
      {
        id: "etapes",
        heading: "Les étapes, dans l'ordre",
        paragraphs: [
          "La création suit une séquence précise où chaque document conditionne le suivant. La respecter évite les allers-retours qui font perdre des semaines.",
        ],
        list: [
          "Certificat négatif (OMPIC) : réservation de la dénomination sociale",
          "Domiciliation : bail commercial ou contrat auprès d'une domiciliataire agréée",
          "Rédaction et signature des statuts (et du pacte d'associés le cas échéant)",
          "Blocage du capital en banque lorsque celui-ci excède 100 000 MAD",
          "Enregistrement des statuts auprès de l'administration fiscale",
          "Inscription à la taxe professionnelle et obtention de l'identifiant fiscal",
          "Immatriculation au registre du commerce et obtention de l'ICE",
          "Affiliation à la CNSS et publicité légale (journal d'annonces et Bulletin officiel)",
        ],
      },
      {
        id: "delais-couts",
        heading: "Délais et coûts : à quoi s'attendre vraiment",
        paragraphs: [
          "Avec un dossier complet, comptez 7 à 10 jours ouvrés entre la demande de certificat négatif et l'immatriculation. Les frais administratifs (certificat négatif, enregistrement, registre du commerce, annonces légales) se situent généralement entre 4 000 et 8 000 MAD selon le capital et la ville, hors honoraires d'accompagnement et hors domiciliation.",
          "Côté capital : la loi n'impose plus de minimum pour la SARL. Un capital de 10 000 à 100 000 MAD reste l'usage pour une activité de services ; une activité nécessitant des financements bancaires ou des marchés publics gagnera à afficher un capital plus substantiel. Rappelons qu'un capital trop faible par rapport aux besoins réels peut fragiliser la société et engager la responsabilité de gestion en cas de difficultés.",
        ],
      },
      {
        id: "erreurs",
        heading: "Les erreurs qui se paient plus tard",
        paragraphs: [
          "Trois erreurs reviennent constamment dans les dossiers que nous reprenons. D'abord, un objet social mal rédigé : trop étroit, il faudra modifier les statuts à la première évolution d'activité ; trop vague, il peut compliquer certains agréments ou appels d'offres. Ensuite, l'absence de pacte d'associés dans les sociétés à plusieurs : tant que tout va bien, personne n'en ressent le besoin ; au premier désaccord, son absence coûte très cher. Enfin, l'oubli des obligations qui naissent immédiatement après la création : première déclaration d'existence, mise en place de la comptabilité, échéances de TVA et d'IS — une société « en sommeil » qui ne déclare rien accumule des amendes, même sans activité.",
          "Notre conviction : la création n'est pas une formalité administrative mais la première décision de gestion de l'entreprise. Un choix de structure pertinent au départ économise des restructurations coûteuses trois ans plus tard.",
        ],
      },
      {
        id: "apres",
        heading: "Et après l'immatriculation ?",
        paragraphs: [
          "Dès l'obtention du registre du commerce, votre société existe juridiquement et ses obligations courent : tenue d'une comptabilité conforme au CGNC, déclarations fiscales aux échéances, assemblée générale annuelle. C'est aussi le bon moment pour cadrer la rémunération du gérant (salaire, dividendes, ou combinaison des deux), dont l'impact fiscal et social se calcule — et s'optimise — dès la première année.",
          "CAFIRM propose un accompagnement « premier exercice » pensé pour les créateurs : création, comptabilité, premières déclarations et conseil de gestion regroupés dans un forfait unique et lisible.",
        ],
      },
    ],
  },
  {
    slug: "investisseurs-etrangers-7-questions-maroc",
    title: "S'implanter au Maroc : les 7 questions que posent tous les investisseurs étrangers",
    category: "investir",
    date: "2026-07-21",
    readingTime: 7,
    excerpt:
      "Peut-on détenir 100 % d'une société marocaine ? Comment rapatrier les dividendes ? Faut-il venir sur place ? Les réponses aux questions que nous posent chaque semaine les investisseurs étrangers.",
    intro:
      "Quarante investisseurs étrangers accompagnés dans leur implantation, de la start-up française à la filiale industrielle espagnole : à force, les mêmes questions reviennent — et elles sont excellentes. Voici nos réponses, celles que nous donnons en rendez-vous de découverte, sans jargon et sans détour.",
    sections: [
      {
        id: "detention",
        heading: "1. Un étranger peut-il détenir 100 % d'une société marocaine ?",
        paragraphs: [
          "Oui, dans la quasi-totalité des secteurs. Le droit marocain n'impose pas d'associé local, et une SARL peut être intégralement détenue par des personnes physiques ou morales étrangères. Quelques secteurs réglementés font exception (certaines activités agricoles pour la propriété foncière, transport, pêche…) : nous vérifions systématiquement le vôtre avant toute démarche.",
        ],
      },
      {
        id: "rapatriement",
        heading: "2. Pourrai-je rapatrier dividendes et produit de cession ?",
        paragraphs: [
          "Oui, c'est le point que le Maroc a le mieux verrouillé pour rassurer les investisseurs. Le régime de convertibilité garanti par l'Office des changes assure aux investissements étrangers financés en devises le libre transfert des dividendes, des jetons de présence et du produit de cession ou de liquidation, sans limitation de montant ni de durée.",
          "La condition essentielle est formelle : l'investissement initial doit être correctement documenté (formulaire d'investissement, justificatifs de l'apport en devises). C'est une formalité simple au moment de la création — et un vrai casse-tête à reconstituer des années plus tard. Nous la traitons systématiquement dès le premier jour.",
        ],
      },
      {
        id: "fiscalite",
        heading: "3. Quelle fiscalité pour ma filiale et mes dividendes ?",
        paragraphs: [
          "Votre société marocaine paiera l'impôt sur les sociétés au taux de droit commun, avec les exonérations ou taux spécifiques propres à certains statuts (Casablanca Finance City, zones d'accélération industrielle, exportateurs…). Les dividendes versés à l'étranger supportent une retenue à la source, dont le taux peut être réduit par l'une des nombreuses conventions fiscales de non double imposition signées par le Maroc — plus d'une cinquantaine, couvrant l'Europe, l'Afrique, le Moyen-Orient et l'Amérique du Nord.",
          "La bonne approche consiste à modéliser la chaîne complète : résultat au Maroc, retenue à la source, imposition dans votre pays de résidence. C'est ce que nous faisons avant la création, pas après.",
        ],
      },
      {
        id: "distance",
        heading: "4. Dois-je venir sur place pour créer la société ?",
        paragraphs: [
          "Non. La création peut être réalisée intégralement à distance grâce à des procurations légalisées (et apostillées selon votre pays). Visioconférences pour les décisions, circuit de signature organisé, documents bilingues lorsque c'est utile : nos clients créent leur société depuis Paris, Bruxelles, Madrid ou Dubaï sans déplacement. Seule l'ouverture du compte bancaire peut, selon la banque, nécessiter une présence — et là encore, nous sélectionnons les établissements aux procédures les plus souples.",
        ],
      },
      {
        id: "banque",
        heading: "5. Combien de temps pour un compte bancaire opérationnel ?",
        paragraphs: [
          "C'est généralement l'étape la plus longue du parcours, du fait des obligations de conformité des banques (connaissance du client, bénéficiaires effectifs). Comptez de une à quatre semaines selon la banque et la complexité de l'actionnariat. Un dossier préparé par un cabinet connu des banques accélère sensiblement les choses : les pièces attendues sont fournies complètes, dans le bon format, dès le premier rendez-vous.",
        ],
      },
      {
        id: "charges",
        heading: "6. Quelles obligations récurrentes après la création ?",
        paragraphs: [
          "Les mêmes que pour toute société marocaine : comptabilité conforme au référentiel local, déclarations de TVA, acomptes et déclaration annuelle d'IS, déclarations sociales si vous employez du personnel, assemblée générale annuelle. Pour une filiale, s'y ajoutent le reporting vers la maison mère et, souvent, des sujets de prix de transfert à documenter. Un package mensuel unique couvrant tenue, fiscal, social et reporting est la formule que choisissent la plupart de nos clients étrangers.",
        ],
      },
      {
        id: "accompagnement",
        heading: "7. Comment se passe concrètement l'accompagnement ?",
        paragraphs: [
          "Un premier échange en visioconférence, en français ou en anglais, pour cadrer le projet : activité, structure, calendrier, budget. Ensuite, une feuille de route écrite avec les étapes, les documents attendus de votre côté et les délais. Puis nous exécutons : vous recevez un point d'avancement à chaque étape franchie. Après l'immatriculation, votre interlocuteur reste le même — c'est lui qui connaît votre dossier, vos contraintes et vos objectifs.",
        ],
      },
    ],
  },
  {
    slug: "externaliser-sa-comptabilite-pme-maroc",
    title: "Externaliser sa comptabilité : le bon calcul pour une PME marocaine ?",
    category: "comptabilite",
    date: "2026-06-10",
    readingTime: 6,
    excerpt:
      "Comptable interne, cabinet, ou solution hybride ? Coûts réels, risques cachés et critères de choix : ce qu'il faut mettre dans la balance avant de décider qui tiendra vos comptes.",
    intro:
      "« Est-ce que je recrute un comptable ou est-ce que je confie tout à un cabinet ? » La question se pose dans toutes les PME qui franchissent un cap. La réponse honnête : cela dépend de votre volume, de votre organisation et de ce que vous attendez de vos chiffres. Voici le raisonnement complet, coûts à l'appui, pour décider en connaissance de cause.",
    sections: [
      {
        id: "obligations",
        heading: "Ce que la loi exige, quel que soit votre choix",
        paragraphs: [
          "Toute entreprise marocaine est tenue d'une comptabilité régulière conforme au Code Général de Normalisation Comptable (CGNC) et à la loi comptable : journaux, grand livre, balance, inventaire annuel, états de synthèse. Ces documents fondent vos déclarations fiscales ; une comptabilité défaillante expose à la reconstitution du chiffre d'affaires par l'administration — le scénario le plus défavorable qui soit en cas de contrôle.",
          "Autrement dit : la question n'est jamais « faut-il une vraie comptabilité ? » mais uniquement « qui la tient, et avec quel niveau de fiabilité ? ».",
        ],
      },
      {
        id: "cout-interne",
        heading: "Le vrai coût d'un comptable interne",
        paragraphs: [
          "Le salaire n'est que la partie visible. Un comptable interne coûte son salaire brut chargé, mais aussi son logiciel, sa formation continue (indispensable : la fiscalité change chaque année), son encadrement — et son remplacement pendant les congés ou en cas de départ. Pour une PME, le risque de dépendance à une seule personne est réel : un départ non anticipé en pleine période fiscale peut coûter très cher.",
          "Surtout, un comptable seul ne peut pas tout savoir : fiscalité, social, juridique des sociétés, contrôle de gestion. Le cabinet mutualise ces expertises : votre dossier est tenu par une équipe, revu par un responsable, avec une continuité de service garantie.",
        ],
      },
      {
        id: "quand-externaliser",
        heading: "Externaliser : pour qui est-ce le bon choix ?",
        paragraphs: [
          "L'externalisation complète est généralement optimale jusqu'à un volume significatif de pièces mensuelles. Au-delà, la formule hybride devient pertinente : un(e) assistant(e) administratif(ve) interne prépare et transmet les pièces, le cabinet tient la comptabilité, produit les déclarations et le reporting. Les très grosses PME internalisent la saisie et confient au cabinet la révision, la fiscalité et les clôtures.",
        ],
        list: [
          "Moins de 150 pièces/mois : externalisation complète, c'est presque toujours le bon calcul",
          "150 à 500 pièces/mois : formule hybride, préparation interne + cabinet",
          "Au-delà : saisie interne, révision et fiscalité confiées au cabinet",
          "Dans tous les cas : les déclarations fiscales méritent un regard professionnel externe",
        ],
      },
      {
        id: "choisir",
        heading: "Comment choisir son cabinet",
        paragraphs: [
          "Quatre critères discriminent réellement. Un, la réactivité : posez une question précise avant de signer et mesurez le délai de réponse — il ne s'améliorera pas après. Deux, la clarté du périmètre : qui fait quoi, à quelle échéance, pour quel honoraire ; exigez-le par écrit. Trois, le reporting : demandez un exemple de ce que vous recevrez chaque mois ; s'il n'y a rien à montrer, vous ne recevrez rien. Quatre, l'interlocuteur : rencontrez la personne qui tiendra réellement votre dossier, pas seulement l'associé qui vend la mission.",
          "Un bon cabinet ne se contente pas d'enregistrer le passé : il vous alerte, vous conseille et transforme vos chiffres en décisions. C'est exactement la différence entre un coût et un investissement.",
        ],
      },
    ],
  },
  {
    slug: "employeur-cnss-amo-ir-maroc",
    title: "Employeurs : maîtriser la CNSS, l'AMO et l'IR salarial au Maroc",
    category: "social",
    date: "2026-08-18",
    readingTime: 7,
    excerpt:
      "Affiliation, déclarations Damancom, cotisations, retenue d'IR à la source : le guide de l'employeur marocain pour une paie conforme — et les erreurs qui déclenchent redressements et pénalités.",
    intro:
      "Dès le premier salarié, une entreprise marocaine devient collectrice de cotisations sociales et d'impôt pour le compte de l'État. La paie n'est donc pas un simple calcul de salaire : c'est une chaîne d'obligations — CNSS, AMO, IR retenu à la source, taxe de formation professionnelle — dont chaque maillon est contrôlé. Voici la carte complète des obligations de l'employeur, et les points où nous voyons le plus d'erreurs.",
    sections: [
      {
        id: "affiliation",
        heading: "Affiliation et immatriculation : les premiers réflexes",
        paragraphs: [
          "L'entreprise doit s'affilier à la CNSS dès sa création ou sa première embauche, puis immatriculer chaque salarié avant sa prise de fonction ; le salarié non déclaré est le risque social numéro un, passible de redressements sur plusieurs années et de sanctions. L'ensemble des déclarations s'effectue ensuite mensuellement via le portail Damancom : masse salariale, entrées et sorties, jours travaillés.",
          "À retenir : la déclaration est due même pour un mois sans activité ou sans salarié actif, tant que l'affiliation existe. L'absence de déclaration « parce qu'il ne s'est rien passé » génère mécaniquement des majorations.",
        ],
      },
      {
        id: "cotisations",
        heading: "Cotisations : qui paie quoi",
        paragraphs: [
          "Les cotisations se répartissent entre part patronale et part salariale. À la charge de l'employeur : allocations familiales, part patronale des prestations sociales (plafonnées), cotisation AMO et taxe de formation professionnelle. À la charge du salarié, retenues sur son brut : part salariale des prestations sociales (plafonnée) et part salariale de l'AMO.",
          "Au total, le coût employeur représente environ 20 % au-dessus du brut, tandis que le salarié supporte environ 6 à 7 % de retenues sociales avant IR. Ces ordres de grandeur permettent de calibrer correctement une offre d'embauche : le « coût entreprise » d'un salaire se calcule toujours charges comprises.",
        ],
        list: [
          "Allocations familiales : part patronale, assise sur le salaire total",
          "Prestations sociales : parts patronale et salariale, assises sur un salaire plafonné",
          "AMO : parts patronale et salariale, sans plafond",
          "Taxe de formation professionnelle : part patronale",
        ],
      },
      {
        id: "ir",
        heading: "L'IR salarial : l'employeur est le percepteur",
        paragraphs: [
          "L'impôt sur le revenu des salariés est retenu à la source par l'employeur, selon le barème progressif en vigueur, après déduction des cotisations sociales et des frais professionnels forfaitaires, et en tenant compte des charges de famille. L'employeur reverse l'IR retenu chaque mois et dépose une déclaration annuelle récapitulative des traitements et salaires.",
          "Les erreurs classiques : oublier d'intégrer les avantages en nature (logement, voiture) dans la base imposable, mal traiter les indemnités (toutes ne sont pas exonérées, et celles qui le sont ont des plafonds), et négliger la régularisation annuelle. Chacune de ces erreurs se voit immédiatement lors d'un contrôle de la paie.",
        ],
      },
      {
        id: "bonnes-pratiques",
        heading: "Les bonnes pratiques d'une paie sereine",
        paragraphs: [
          "Une paie conforme repose sur trois disciplines simples. Des contrats écrits et à jour, qui sécurisent la relation et fondent chaque élément de rémunération. Un calendrier social tenu sans exception : déclaration Damancom et paiements aux échéances, bulletins remis chaque mois, livre de paie à jour. Et une veille active : SMIG, plafonds, barème de l'IR et dispositifs d'exonération évoluent régulièrement — appliquer les paramètres de l'an dernier est le moyen le plus sûr de se tromper.",
          "C'est précisément le périmètre de notre service paie : bulletins, Damancom, IR, écritures comptables et veille réglementaire, pour que l'embauche redevienne ce qu'elle doit être — une décision de développement, pas un risque administratif.",
        ],
      },
    ],
  },
];

export function getPost(slug: string | undefined): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export const sortedPosts = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
