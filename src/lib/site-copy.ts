export type Language = "en" | "fr";

export type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    product: string;
    creators: string;
    discovery: string;
    trust: string;
    faq: string;
    download: string;
  };
  header: {
    languageLabel: string;
    themeLabel: string;
    launchCta: string;
    openMenuLabel: string;
    closeMenuLabel: string;
    closeDrawerLabel: string;
    themeOptions: {
      light: string;
      dark: string;
      system: string;
    };
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    audienceLabel: string;
    stats: Array<{ value: string; label: string }>;
    liveCards: Array<{ title: string; detail: string }>;
    creatorLoopLabel: string;
    creatorLoopValue: string;
    shortsLabel: string;
    shortsValue: string;
  };
  value: {
    title: string;
    description: string;
    cards: Array<{ title: string; description: string }>;
  };
  creator: {
    title: string;
    description: string;
    pillars: Array<{ title: string; description: string }>;
    revenueTitle: string;
    revenueItems: string[];
  };
  discovery: {
    title: string;
    description: string;
    columns: Array<{ title: string; items: string[] }>;
  };
  trust: {
    title: string;
    description: string;
    points: Array<{ title: string; description: string }>;
  };
  download: {
    title: string;
    description: string;
    stores: Array<{ name: string; note: string; href: string }>;
    footnote: string;
    readyCta: string;
  };
  faq: {
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  footer: {
    tagline: string;
    rights: string;
    termsLink: string;
    supportLink: string;
    contactFormLink: string;
    privacyLink: string;
  };
};

export const siteCopy: Record<Language, SiteContent> = {
  en: {
    meta: {
      title: "Senflix | Stories That Move",
      description:
        "A video platform made for African creators and their communities. Publish your work, grow your audience, earn from your content, and connect directly with the people who watch.",
    },
    nav: {
      product: "Platform",
      creators: "Creators",
      discovery: "Discovery",
      trust: "Trust",
      faq: "FAQ",
      download: "Download",
    },
    header: {
      languageLabel: "Language",
      themeLabel: "Theme",
      launchCta: "Launch preview",
      openMenuLabel: "Open navigation menu",
      closeMenuLabel: "Close navigation menu",
      closeDrawerLabel: "Close navigation drawer",
      themeOptions: {
        light: "Light",
        dark: "Dark",
        system: "System",
      },
    },
    hero: {
      eyebrow: "Made for African stories, creators, and communities",
      title: "Your stories deserve reach, not compromise.",
      description:
        "Senflix helps creators publish, grow their audience, and earn from their work — while viewers discover fresh voices, playlists, and short-form content all in one place.",
      primaryCta: "Explore the platform",
      secondaryCta: "See what creators get",
      audienceLabel: "Built for mobile-first audiences",
      stats: [
        { value: "EN / FR", label: "Bilingual experience" },
        { value: "Shorts + Playlists", label: "Content formats" },
        { value: "Monetization-ready", label: "Creator tools" },
      ],
      liveCards: [
        {
          title: "Creator earnings",
          detail: "Real ways to earn and grow",
        },
        {
          title: "Curated discovery",
          detail: "Trending videos, playlists, and categories",
        },
        {
          title: "Trust & safety",
          detail: "Moderation tools that keep things safe",
        },
      ],
      creatorLoopLabel: "Creator loop",
      creatorLoopValue: "Publish. Reach. Earn.",
      shortsLabel: "Shorts",
      shortsValue: "Always-on discovery",
    },
    value: {
      title: "One platform, many ways to grow.",
      description:
        "Publishing, discovery, community, and operations all work together — so the experience is great for viewers, creators, and the teams behind the scenes.",
      cards: [
        {
          title: "Mobile-first publishing",
          description:
            "Upload and share content in the formats your audience already watches and shares.",
        },
        {
          title: "Audience growth built in",
          description:
            "Categories, playlists, trending feeds, and short videos help great content reach more people.",
        },
        {
          title: "Clear operational control",
          description:
            "Moderation, support, and platform settings keep things running smoothly as your catalog and audience grow.",
        },
      ],
    },
    creator: {
      title: "A creator engine, not just a feed.",
      description:
        "Creators need more than a place to upload. They need to be discovered again and again, build a community around their work, and have a clear path to earning money.",
      pillars: [
        {
          title: "Publish with intention",
          description:
            "Long-form videos, playlists, and short clips give your audience multiple ways to find and enjoy your work.",
        },
        {
          title: "Build repeat audiences",
          description:
            "Followers, saved content, playlists, and recommendations turn one-time viewers into regulars.",
        },
        {
          title: "Turn reach into revenue",
          description:
            "Creator earnings, payouts, and monetization features that grow with you.",
        },
      ],
      revenueTitle: "Built-in monetization features",
      revenueItems: [
        "Creator revenue tracking",
        "Gifts and payout management",
        "Premium and curated playlists",
        "Order and payment handling",
      ],
    },
    discovery: {
      title: "Discovery that feels alive.",
      description:
        "Trending content, short-form energy, categories, and hand-picked playlists make the platform feel fresh every time you open it.",
      columns: [
        {
          title: "Viewers discover",
          items: [
            "Trending videos",
            "Short-form highlights",
            "Top creators",
            "Category-led browsing",
          ],
        },
        {
          title: "Communities keep returning",
          items: [
            "Saved content",
            "Bookmarks",
            "Follower loops",
            "Personalized recommendations",
          ],
        },
        {
          title: "Teams keep control",
          items: [
            "Moderation tooling",
            "Support workflows",
            "Media management",
            "Platform configuration",
          ],
        },
      ],
    },
    trust: {
      title: "Trust and safety are part of the product.",
      description:
        "Growth only lasts when people trust the platform. That's why moderation, support, and transparency are built in from day one.",
      points: [
        {
          title: "Moderation from the ground up",
          description:
            "Review tools and admin controls help teams act fast when content or behavior needs attention.",
        },
        {
          title: "Support that actually resolves things",
          description:
            "Built-in support tools cut down on back-and-forth for users and staff alike.",
        },
        {
          title: "Reliable media delivery",
          description:
            "The infrastructure behind the scenes is designed for fast playback and smooth streaming.",
        },
      ],
    },
    download: {
      title: "Senflix is available on iOS and Android.",
      description:
        "Download the app from the App Store or Google Play to start watching.",
      stores: [
        {
          name: "App Store",
          note: "Download Senflix for iPhone.",
          href: "https://apps.apple.com/us/app/senflix/id6759029492",
        },
        {
          name: "Google Play",
          note: "Download Senflix for Android.",
          href: "https://play.google.com/store/apps/details?id=com.nebur242.african.video.platform",
        },
      ],
      footnote:
        "The app is available in French and English.",
      readyCta: "Available now",
    },
    faq: {
      title: "Common questions before launch.",
      items: [
        {
          question: "Who is this for?",
          answer:
            "African creators, viewers, and the teams behind the scenes who want a mobile-first video platform with publishing, discovery, and real control over operations.",
        },
        {
          question: "Can creators earn money on Senflix?",
          answer:
            "Yes. The platform is built around creator revenue — including earnings tracking, payouts, and monetization tools that will keep expanding.",
        },
        {
          question: "Why talk about moderation on a marketing page?",
          answer:
            "Because growth without trust doesn't last. Showing that moderation and support are part of the product is just being honest about how we build.",
        },
      ],
    },
    footer: {
      tagline: "Le meilleur du contenu africain.",
      rights: "All rights reserved.",
      termsLink: "Terms & Conditions",
      supportLink: "Support",
      contactFormLink: "Contact Form",
      privacyLink: "Privacy Policy",
    },
  },
  fr: {
    meta: {
      title: "Senflix | Le meilleur du contenu africain.",
      description:
        "Une plateforme vidéo faite pour les créateurs africains et leurs communautés. Publiez, développez votre audience, monétisez votre travail et créez un lien direct avec votre public.",
    },
    nav: {
      product: "Plateforme",
      creators: "Créateurs",
      discovery: "Découverte",
      trust: "Confiance",
      faq: "FAQ",
      download: "Téléchargement",
    },
    header: {
      languageLabel: "Langue",
      themeLabel: "Thème",
      launchCta: "Voir l'aperçu",
      openMenuLabel: "Ouvrir le menu de navigation",
      closeMenuLabel: "Fermer le menu de navigation",
      closeDrawerLabel: "Fermer le panneau de navigation",
      themeOptions: {
        light: "Clair",
        dark: "Sombre",
        system: "Système",
      },
    },
    hero: {
      eyebrow: "Conçue pour les histoires, créateurs et communautés d'Afrique",
      title: "Vos histoires méritent de la portée, pas des compromis.",
      description:
        "Senflix aide les créateurs à publier, développer leur audience et gagner de l'argent avec leur contenu — pendant que les spectateurs découvrent de nouvelles voix, des playlists et des formats courts, le tout au même endroit.",
      primaryCta: "Explorer la plateforme",
      secondaryCta: "Voir ce que les créateurs y gagnent",
      audienceLabel: "Pensée pour des audiences mobiles avant tout",
      stats: [
        { value: "EN / FR", label: "Expérience bilingue" },
        { value: "Formats courts + playlists", label: "Formats de contenu" },
        { value: "Prêt pour la monétisation", label: "Outils créateur" },
      ],
      liveCards: [
        {
          title: "Revenus créateurs",
          detail: "De vraies façons de gagner et de grandir",
        },
        {
          title: "Découverte éditorialisée",
          detail: "Tendances, playlists et catégories",
        },
        {
          title: "Confiance & sécurité",
          detail: "Des outils de modération pour que tout reste sûr",
        },
      ],
      creatorLoopLabel: "Boucle créateur",
      creatorLoopValue: "Publier. Toucher. Monétiser.",
      shortsLabel: "Formats courts",
      shortsValue: "Une découverte toujours active",
    },
    value: {
      title: "Une plateforme, plein de façons de grandir.",
      description:
        "Publication, découverte, communauté et pilotage — tout fonctionne ensemble pour que l'expérience soit au top pour les spectateurs, les créateurs et les équipes en coulisses.",
      cards: [
        {
          title: "Publication mobile-first",
          description:
            "Téléversez et partagez vos contenus dans les formats que votre audience regarde et partage déjà.",
        },
        {
          title: "Croissance d'audience intégrée",
          description:
            "Catégories, playlists, tendances et vidéos courtes aident les bons contenus à toucher plus de monde.",
        },
        {
          title: "Un pilotage clair",
          description:
            "Modération, support et paramètres plateforme gardent les choses fluides à mesure que le catalogue et l'audience grandissent.",
        },
      ],
    },
    creator: {
      title: "Un moteur créateur, pas juste un fil d'actu.",
      description:
        "Les créateurs ont besoin de plus qu'un espace pour publier. Ils veulent être découverts encore et encore, fédérer une communauté et avoir un vrai chemin vers la monétisation.",
      pillars: [
        {
          title: "Publier avec intention",
          description:
            "Vidéos longues, playlists et clips courts offrent à votre audience plusieurs portes d'entrée dans votre catalogue.",
        },
        {
          title: "Construire une audience fidèle",
          description:
            "Abonnés, contenus sauvegardés, playlists et recommandations transforment un spectateur de passage en habitué.",
        },
        {
          title: "Transformer la portée en revenus",
          description:
            "Revenus créateurs, versements et outils de monétisation qui grandissent avec vous.",
        },
      ],
      revenueTitle: "Fonctionnalités de monétisation intégrées",
      revenueItems: [
        "Suivi des revenus créateurs",
        "Gestion des cadeaux et des versements",
        "Playlists premium et sélections éditoriales",
        "Gestion des commandes et des paiements",
      ],
    },
    discovery: {
      title: "Une découverte qui vit.",
      description:
        "Contenus tendance, énergie des formats courts, catégories et playlists choisies — la plateforme a toujours quelque chose de frais à proposer.",
      columns: [
        {
          title: "Les spectateurs découvrent",
          items: [
            "Vidéos tendance",
            "Moments forts en format court",
            "Top créateurs",
            "Navigation par catégories",
          ],
        },
        {
          title: "Les communautés reviennent",
          items: [
            "Contenus sauvegardés",
            "Favoris",
            "Fil d'abonnés",
            "Recommandations personnalisées",
          ],
        },
        {
          title: "Les équipes gardent le contrôle",
          items: [
            "Outils de modération",
            "Flux support",
            "Gestion média",
            "Configuration plateforme",
          ],
        },
      ],
    },
    trust: {
      title: "La confiance et la sécurité font partie du produit.",
      description:
        "La croissance ne tient que si les gens font confiance à la plateforme. C'est pour ça que la modération, le support et la transparence sont intégrés dès le départ.",
      points: [
        {
          title: "Modération intégrée dès le départ",
          description:
            "Outils de revue et contrôles admin pour que les équipes puissent agir vite quand un contenu ou un comportement pose problème.",
        },
        {
          title: "Un support qui résout vraiment les choses",
          description:
            "Des outils de support intégrés qui évitent les allers-retours, autant pour les utilisateurs que pour les équipes.",
        },
        {
          title: "Une diffusion média fiable",
          description:
            "L'infrastructure derrière la plateforme est conçue pour une lecture rapide et un streaming fluide.",
        },
      ],
    },
    download: {
      title:
        "Senflix est disponible sur iOS et Android.",
      description:
        "Téléchargez l'app sur l'App Store ou Google Play pour commencer à regarder.",
      stores: [
        {
          name: "App Store",
          note: "Téléchargez Senflix sur iPhone.",
          href: "https://apps.apple.com/us/app/senflix/id6759029492",
        },
        {
          name: "Google Play",
          note: "Téléchargez Senflix sur Android.",
          href: "https://play.google.com/store/apps/details?id=com.nebur242.african.video.platform",
        },
      ],
      footnote:
        "L'app est disponible en français et en anglais.",
      readyCta: "Disponible maintenant",
    },
    faq: {
      title: "Questions fréquentes avant le lancement.",
      items: [
        {
          question: "À qui s'adresse la plateforme ?",
          answer:
            "Aux créateurs africains, aux spectateurs et aux équipes qui cherchent un écosystème vidéo mobile-first avec publication, découverte et un vrai contrôle sur les opérations.",
        },
        {
          question:
            "Les créateurs peuvent-ils gagner de l'argent sur Senflix ?",
          answer:
            "Oui. La plateforme est construite autour des revenus créateurs — avec suivi des gains, versements et outils de monétisation qui continueront d'évoluer.",
        },
        {
          question: "Pourquoi parler de modération sur une page marketing ?",
          answer:
            "Parce que la croissance sans confiance ne dure pas. Montrer que la modération et le support font partie du produit, c'est simplement être honnête sur notre façon de construire.",
        },
      ],
    },
    footer: {
      tagline: "Le meilleur du contenu africain.",
      rights: "Tous droits réservés.",
      termsLink: "Conditions générales",
      supportLink: "Assistance",
      contactFormLink: "Formulaire de contact",
      privacyLink: "Politique de confidentialité",
    },
  },
};
