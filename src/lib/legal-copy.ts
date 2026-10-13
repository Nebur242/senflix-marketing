import { type Language } from "@/lib/site-copy";

export const legalLanguages = [
  "en",
  "fr",
] as const satisfies readonly Language[];

export function isLegalLanguage(value: string): value is Language {
  return legalLanguages.includes(value as Language);
}

export const legalCopy = {
  en: {
    common: {
      brand: "Senflix",
      backHome: "Back to home",
      contactEmail: "dev.support@senflix.app",
    },
    terms: {
      metadata: {
        title: "Senflix Terms and Conditions",
        description:
          "Terms and Conditions for Senflix covering platform access, creator responsibilities, digital purchases, moderation, and support.",
      },
      title: "Terms and Conditions",
      summary:
        "Effective date: March 30, 2026. These terms cover access to the Senflix platform, creator uploads, moderation, digital purchases, and support.",
      contactLabel: "Contact",
      contactLead:
        "For terms, account, billing, or moderation questions, contact",
      contactSuffix: ".",
      contactSummary:
        "Résumé : ces conditions régissent l'utilisation de Senflix, les contenus créés par les utilisateurs, les achats numériques, la modération et le support.",
      sections: [
        {
          title: "Using Senflix",
          items: [
            "You must use the service lawfully and only with authority over the account and payment method you use.",
            "Creators are responsible for the content they upload, the rights they hold, and the accuracy of playlist pricing and descriptions.",
            "You must not upload, share, or distribute content that infringes third-party copyrights or intellectual property rights. See our Copyright Policy for full details.",
            "We may suspend or remove accounts, playlists, videos, comments, or transactions that violate platform rules, law, or safety requirements.",
          ],
        },
        {
          title: "Digital access and payments",
          items: [
            "Paid access unlocks the specific content or entitlement described at checkout, subject to platform availability and technical limits.",
            "Payment providers may apply their own terms, verification checks, and refund handling rules.",
            "We may cancel, limit, or reverse access when fraud, abuse, charge disputes, or policy violations are confirmed.",
          ],
        },
        {
          title: "Creator and platform responsibilities",
          items: [
            "Senflix operates the platform, moderation systems, discovery surfaces, and support channels, but creator content remains creator-controlled unless removal is required.",
            "Creators retain ownership of their original content. By uploading, creators grant Senflix a non-exclusive license to host, display, and promote content as described in our Copyright Policy.",
            "The Senflix name, logo, design, and underlying technology are protected intellectual property. Unauthorized copying, modification, or reverse-engineering is prohibited.",
            "We may review content, metadata, pricing, and user reports to protect users, meet store requirements, and enforce moderation decisions.",
            "Content may be removed following a valid copyright takedown request. Affected creators may file a counter-notification as detailed in our Copyright Policy.",
            "Platform features, payout eligibility, and monetization tools may change over time as the product evolves.",
          ],
        },
        {
          title: "Support, disputes, and updates",
          items: [
            "Questions about billing, access, moderation, or account issues should be sent to the support contact listed below.",
            "We may update these terms as the service changes. Continued use after updates means you accept the revised terms.",
            "If part of these terms is unenforceable, the remaining sections continue to apply.",
          ],
        },
      ],
    },
    support: {
      metadata: {
        title: "Senflix Support and Contact",
        description:
          "Public Senflix support page with contact details for account help, billing issues, moderation concerns, and creator support.",
      },
      title: "Support and Contact",
      summary:
        "Need help with your account, creator workflow, billing, or a moderation concern? Use the contact address below and include the details that let our team identify the right user, content, or transaction quickly.",
      primaryContactLabel: "Primary contact",
      primaryContactSummary:
        "Résumé : pour toute aide avec votre compte, vos achats, vos contenus ou la modération, contactez dev.support@senflix.app.",
      includeTitle: "What to include",
      channels: [
        {
          title: "General support",
          description:
            "Questions about accounts, app access, creator discovery, or platform usage.",
        },
        {
          title: "Billing and purchases",
          description:
            "Help with payment confirmation, access issues, refunds, or order problems.",
        },
        {
          title: "Trust and moderation",
          description:
            "Report abusive content, creator impersonation, intellectual property concerns, or safety issues.",
        },
      ],
      responseExpectations: [
        "Include the email address used on the platform and a short description of the issue.",
        "If the request involves a playlist or transaction, include the playlist title, order reference, or screenshot when available.",
        "Urgent safety or moderation concerns should clearly state the affected account or content link.",
      ],
    },
    contact: {
      metadata: {
        title: "Contact Senflix",
        description:
          "Get in touch with the Senflix team for questions, partnerships, or support.",
      },
      title: "Contact us",
      summary:
        "Have a question, idea, or need help? Fill in the form below and our team will get back to you as soon as possible.",
      form: {
        nameLabel: "Full name",
        namePlaceholder: "Your full name",
        emailLabel: "Email address",
        emailPlaceholder: "you@example.com",
        categoryLabel: "Category",
        categoryPlaceholder: "Select a category",
        categories: {
          general: "General inquiry",
          technical: "Technical issue",
          billing: "Billing & payments",
          account: "Account help",
          content: "Content & playlists",
          creator: "Creator support",
          other: "Other",
        },
        subjectLabel: "Subject",
        subjectPlaceholder: "Brief summary of your request",
        messageLabel: "Message",
        messagePlaceholder:
          "Describe your request in detail (at least 20 characters)",
        submitLabel: "Send message",
        submittingLabel: "Sending...",
      },
      success: {
        title: "Message sent!",
        description:
          "Thank you for reaching out. Our team will respond to your inquiry shortly.",
        backLabel: "Send another message",
      },
      error: {
        title: "Something went wrong",
        description:
          "We could not send your message. Please try again or email us directly at",
      },
    },
    copyright: {
      metadata: {
        title: "Senflix Copyright Policy",
        description:
          "Copyright policy for Senflix covering intellectual property, content ownership, DMCA procedures, and creator rights.",
      },
      title: "Copyright Policy",
      summary:
        "Effective date: March 30, 2026. This policy explains how Senflix handles intellectual property, copyright ownership, content licensing, and takedown requests.",
      contactLabel: "Contact",
      contactLead:
        "For copyright inquiries, takedown requests, or intellectual property questions, contact",
      contactSuffix: ".",
      contactSummary:
        "Résumé : cette politique couvre la propriété intellectuelle, les droits d'auteur, les licences de contenu et les procédures de retrait sur Senflix.",
      sections: [
        {
          title: "Content ownership",
          items: [
            "Creators retain full ownership of the original content they upload to Senflix, including videos, thumbnails, descriptions, and playlist structures.",
            "By uploading content, creators grant Senflix a non-exclusive, worldwide license to host, display, distribute, and promote their content on the platform.",
            "This license is limited to the operation and promotion of Senflix and does not transfer ownership or exclusive rights.",
          ],
        },
        {
          title: "Platform intellectual property",
          items: [
            "The Senflix name, logo, design, interface, and underlying technology are protected by intellectual property laws.",
            "Users may not copy, modify, distribute, or reverse-engineer any part of the Senflix platform without prior written permission.",
            "Third-party trademarks, logos, and brand names referenced on the platform remain the property of their respective owners.",
          ],
        },
        {
          title: "Copyright infringement and takedowns",
          items: [
            "Senflix respects the intellectual property rights of others and expects users to do the same.",
            "If you believe content on Senflix infringes your copyright, you may submit a takedown request to the contact address below with a description of the copyrighted work, the infringing material URL, and a statement of good faith.",
            "Upon receiving a valid takedown request, Senflix will review and may remove or disable access to the infringing content.",
            "Repeat infringers may have their accounts suspended or permanently terminated.",
          ],
        },
        {
          title: "Counter-notifications",
          items: [
            "If your content was removed due to a copyright claim and you believe the removal was in error, you may submit a counter-notification.",
            "Counter-notifications must include identification of the removed material, a statement under penalty of perjury that the removal was a mistake, and your contact information.",
            "Senflix will forward counter-notifications to the original complainant and may restore the content if no further legal action is taken.",
          ],
        },
        {
          title: "Fair use and limitations",
          items: [
            "Senflix recognizes fair use principles and will consider them when evaluating copyright claims.",
            "Educational, commentary, criticism, and transformative uses may be protected under applicable fair use or fair dealing laws.",
            "Senflix does not provide legal advice and encourages users to consult a qualified attorney for specific copyright questions.",
          ],
        },
      ],
    },
    privacy: {
      metadata: {
        title: "Senflix Privacy Policy",
        description:
          "Privacy Policy for the Senflix app, including data collection, permissions, payments, support, and user rights.",
      },
      title: "Privacy Policy",
      summary:
        "Effective date: March 30, 2026. This policy explains how the Senflix app collects, uses, shares, and protects personal information across account, content, payment, support, and operational flows.",
      contactLabel: "Contact",
      contactLead:
        "For support, privacy requests, or data rights questions, contact ",
      contactSuffix: ".",
      contactSummary:
        "Résumé : pour les questions de confidentialité, de support ou de droits sur vos données, contactez dev.support@senflix.app.",
      securityTitle: "Security and updates",
      securityBody:
        "We use reasonable technical and organizational safeguards to protect personal information, but no system is perfectly secure. We may update this policy from time to time, and material changes will be reflected by updating the effective date on this page.",
      sections: [
        {
          title: "Information we collect",
          items: [
            "Account details such as phone number, email address, display name, and profile preferences.",
            "Content and metadata you upload, including videos, thumbnails, playlists, and descriptions.",
            "Purchase and payout metadata needed to confirm payments, unlock paid content, and support creator revenue workflows.",
            "Technical and device data such as app version, device model, notification token, and diagnostics needed for security and reliability.",
            "Usage activity related to authentication, browsing, playback, purchases, and support flows.",
          ],
        },
        {
          title: "Permissions",
          items: [
            "Camera access to capture photos or video inside the app.",
            "Microphone access to record audio with video content.",
            "Photos and media library access to select or upload existing files.",
            "Notification permission to deliver transactional and product messages.",
          ],
        },
        {
          title: "How we use data",
          items: [
            "To create accounts, authenticate users, and protect the platform from abuse.",
            "To host, process, and display creator and viewer content.",
            "To process purchases, confirm access, and support payouts and customer support.",
            "To monitor reliability, investigate errors, and improve product quality.",
            "To meet legal, accounting, fraud, and safety obligations.",
          ],
        },
        {
          title: "Sharing and processors",
          items: [
            "We may share information with hosting, storage, analytics, observability, moderation, and customer support providers that operate on our behalf.",
            "Mobile money and card payments are handled by our payment provider Bictorys, which processes payment data under its own privacy terms.",
            "We may disclose information when legally required or when necessary to protect users, rights, and platform integrity.",
            "We do not sell personal information.",
          ],
        },
        {
          title: "Retention and rights",
          items: [
            "We retain information only as long as needed for service delivery, security, support, compliance, and dispute resolution.",
            "You can request access, correction, deletion, or other privacy help by contacting the address below.",
            "If you believe a child has submitted personal information improperly, contact us and we will review the request.",
          ],
        },
      ],
    },
  },
  fr: {
    common: {
      brand: "Senflix",
      backHome: "Retour à l'accueil",
      contactEmail: "dev.support@senflix.app",
    },
    terms: {
      metadata: {
        title: "Conditions générales Senflix",
        description:
          "Conditions générales de Senflix : accès à la plateforme, responsabilités créateur, achats numériques, modération et support.",
      },
      title: "Conditions générales",
      summary:
        "Date d'effet : 30 mars 2026. Ces conditions couvrent l'accès à la plateforme Senflix, les contenus créateurs, la modération, les achats numériques et le support.",
      contactLabel: "Contact",
      contactLead:
        "Pour toute question sur les conditions, le compte, la facturation ou la modération, contactez",
      contactSuffix: ".",
      contactSummary:
        "English summary: these terms govern the use of Senflix, user-created content, digital purchases, moderation, and support.",
      sections: [
        {
          title: "Utiliser Senflix",
          items: [
            "Vous devez utiliser le service légalement et uniquement avec autorité sur le compte et le moyen de paiement utilisés.",
            "Les créateurs sont responsables des contenus qu'ils publient, des droits qu'ils détiennent et de l'exactitude des prix et descriptions de playlists.",
            "Vous ne devez pas publier, partager ou distribuer de contenu portant atteinte aux droits d'auteur ou à la propriété intellectuelle de tiers. Consultez notre Politique de droits d'auteur pour plus de détails.",
            "Nous pouvons suspendre ou supprimer des comptes, playlists, vidéos, commentaires ou transactions qui violent les règles de la plateforme, la loi ou les exigences de sécurité.",
          ],
        },
        {
          title: "Accès numérique et paiements",
          items: [
            "Un accès payant débloque le contenu ou le droit décrit lors du paiement, sous réserve de disponibilité de la plateforme et de limites techniques.",
            "Les prestataires de paiement peuvent appliquer leurs propres conditions, vérifications et règles de remboursement.",
            "Nous pouvons annuler, limiter ou retirer l'accès en cas de fraude, d'abus, de litige de paiement ou de violation de politique confirmée.",
          ],
        },
        {
          title: "Responsabilités créateur et plateforme",
          items: [
            "Senflix opère la plateforme, les systèmes de modération, les surfaces de découverte et les canaux de support, mais les contenus créateurs restent sous contrôle créateur sauf retrait nécessaire.",
            "Les créateurs conservent la propriété de leurs contenus originaux. En les publiant, ils accordent à Senflix une licence non exclusive pour héberger, afficher et promouvoir ces contenus, comme décrit dans notre Politique de droits d'auteur.",
            "Le nom, le logo, le design et la technologie de Senflix sont protégés par la propriété intellectuelle. Toute copie, modification ou rétro-ingénierie non autorisée est interdite.",
            "Nous pouvons examiner les contenus, métadonnées, prix et signalements pour protéger les utilisateurs, respecter les exigences des stores et appliquer les décisions de modération.",
            "Un contenu peut être retiré suite à une demande de retrait pour atteinte aux droits d'auteur. Les créateurs concernés peuvent déposer une contre-notification comme détaillé dans notre Politique de droits d'auteur.",
            "Les fonctionnalités de la plateforme, l'éligibilité aux paiements créateurs et les outils de monétisation peuvent évoluer avec le produit.",
          ],
        },
        {
          title: "Support, litiges et mises à jour",
          items: [
            "Les questions de facturation, d'accès, de modération ou de compte doivent être envoyées au contact support ci-dessous.",
            "Nous pouvons mettre à jour ces conditions au fil de l'évolution du service. Continuer à utiliser le service signifie accepter la version révisée.",
            "Si une partie de ces conditions est inapplicable, le reste continue de s'appliquer.",
          ],
        },
      ],
    },
    support: {
      metadata: {
        title: "Support et contact Senflix",
        description:
          "Page de support Senflix avec les contacts pour les comptes, la facturation, la modération et l'accompagnement créateur.",
      },
      title: "Support et contact",
      summary:
        "Besoin d'aide pour votre compte, votre parcours créateur, la facturation ou une question de modération ? Utilisez l'adresse ci-dessous et ajoutez les détails qui permettent à notre équipe d'identifier rapidement le bon utilisateur, contenu ou paiement.",
      primaryContactLabel: "Contact principal",
      primaryContactSummary:
        "English summary: for any help with account, purchases, content, or moderation, contact dev.support@senflix.app.",
      includeTitle: "Que faut-il inclure ?",
      channels: [
        {
          title: "Support général",
          description:
            "Questions sur les comptes, l'accès à l'application, la découverte créateur ou l'usage de la plateforme.",
        },
        {
          title: "Facturation et achats",
          description:
            "Aide pour la confirmation de paiement, les problèmes d'accès, les remboursements ou les commandes.",
        },
        {
          title: "Confiance et modération",
          description:
            "Signaler un contenu abusif, une usurpation d'identité, une atteinte à la propriété intellectuelle ou un problème de sécurité.",
        },
      ],
      responseExpectations: [
        "Indiquez l'adresse email utilisée sur la plateforme ainsi qu'une courte description du problème.",
        "Si la demande concerne une playlist ou une transaction, ajoutez le titre de la playlist, la référence de commande ou une capture d'écran si possible.",
        "Les problèmes urgents de sécurité ou de modération doivent mentionner clairement le compte ou le lien de contenu concerné.",
      ],
    },
    contact: {
      metadata: {
        title: "Contacter Senflix",
        description:
          "Contactez l'équipe Senflix pour vos questions, partenariats ou demandes de support.",
      },
      title: "Nous contacter",
      summary:
        "Une question, une idée ou besoin d'aide ? Remplissez le formulaire ci-dessous et notre équipe vous répondra dans les meilleurs délais.",
      form: {
        nameLabel: "Nom complet",
        namePlaceholder: "Votre nom complet",
        emailLabel: "Adresse email",
        emailPlaceholder: "vous@exemple.com",
        categoryLabel: "Catégorie",
        categoryPlaceholder: "Choisir une catégorie",
        categories: {
          general: "Question générale",
          technical: "Problème technique",
          billing: "Facturation et paiements",
          account: "Aide au compte",
          content: "Contenus et playlists",
          creator: "Support créateur",
          other: "Autre",
        },
        subjectLabel: "Objet",
        subjectPlaceholder: "Résumé de votre demande",
        messageLabel: "Message",
        messagePlaceholder:
          "Décrivez votre demande en détail (au moins 20 caractères)",
        submitLabel: "Envoyer le message",
        submittingLabel: "Envoi en cours...",
      },
      success: {
        title: "Message envoyé !",
        description:
          "Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais.",
        backLabel: "Envoyer un autre message",
      },
      error: {
        title: "Une erreur est survenue",
        description:
          "Nous n'avons pas pu envoyer votre message. Veuillez réessayer ou nous écrire directement à",
      },
    },
    copyright: {
      metadata: {
        title: "Politique de droits d'auteur Senflix",
        description:
          "Politique de droits d'auteur de Senflix : propriété intellectuelle, droits des créateurs, procédures de retrait et utilisation équitable.",
      },
      title: "Politique de droits d'auteur",
      summary:
        "Date d'effet : 30 mars 2026. Cette politique explique comment Senflix gère la propriété intellectuelle, les droits d'auteur, les licences de contenu et les demandes de retrait.",
      contactLabel: "Contact",
      contactLead:
        "Pour les questions de droits d'auteur, les demandes de retrait ou les questions de propriété intellectuelle, contactez",
      contactSuffix: ".",
      contactSummary:
        "English summary: this policy covers intellectual property, copyright, content licensing, and takedown procedures on Senflix.",
      sections: [
        {
          title: "Propriété du contenu",
          items: [
            "Les créateurs conservent la pleine propriété du contenu original qu'ils publient sur Senflix, y compris les vidéos, miniatures, descriptions et structures de playlists.",
            "En publiant du contenu, les créateurs accordent à Senflix une licence non exclusive, mondiale, pour héberger, afficher, distribuer et promouvoir leur contenu sur la plateforme.",
            "Cette licence est limitée à l'exploitation et la promotion de Senflix et ne transfère ni la propriété ni des droits exclusifs.",
          ],
        },
        {
          title: "Propriété intellectuelle de la plateforme",
          items: [
            "Le nom Senflix, le logo, le design, l'interface et la technologie sous-jacente sont protégés par les lois sur la propriété intellectuelle.",
            "Les utilisateurs ne peuvent pas copier, modifier, distribuer ou rétro-concevoir toute partie de la plateforme Senflix sans autorisation écrite préalable.",
            "Les marques, logos et noms de marque tiers référencés sur la plateforme restent la propriété de leurs détenteurs respectifs.",
          ],
        },
        {
          title: "Atteinte aux droits d'auteur et retraits",
          items: [
            "Senflix respecte les droits de propriété intellectuelle d'autrui et attend des utilisateurs qu'ils fassent de même.",
            "Si vous estimez qu'un contenu sur Senflix porte atteinte à vos droits d'auteur, vous pouvez soumettre une demande de retrait à l'adresse de contact ci-dessous avec une description de l'œuvre protégée, l'URL du contenu litigieux et une déclaration de bonne foi.",
            "Après réception d'une demande de retrait valide, Senflix examinera et pourra retirer ou désactiver l'accès au contenu litigieux.",
            "Les récidivistes pourront voir leur compte suspendu ou définitivement résilié.",
          ],
        },
        {
          title: "Contre-notifications",
          items: [
            "Si votre contenu a été retiré suite à une réclamation de droits d'auteur et que vous estimez que le retrait était une erreur, vous pouvez soumettre une contre-notification.",
            "Les contre-notifications doivent inclure l'identification du contenu retiré, une déclaration sous serment que le retrait était une erreur, et vos coordonnées.",
            "Senflix transmettra les contre-notifications au plaignant original et pourra restaurer le contenu si aucune action en justice n'est engagée.",
          ],
        },
        {
          title: "Usage équitable et limitations",
          items: [
            "Senflix reconnaît les principes d'usage équitable et les prendra en compte lors de l'évaluation des réclamations de droits d'auteur.",
            "Les usages éducatifs, de commentaire, de critique et transformatifs peuvent être protégés par les lois applicables sur l'usage équitable.",
            "Senflix ne fournit pas de conseils juridiques et encourage les utilisateurs à consulter un avocat qualifié pour les questions spécifiques de droits d'auteur.",
          ],
        },
      ],
    },
    privacy: {
      metadata: {
        title: "Politique de confidentialité Senflix",
        description:
          "Politique de confidentialité de l'application Senflix : données collectées, permissions, paiements, support et droits des utilisateurs.",
      },
      title: "Politique de confidentialité",
      summary:
        "Date d'effet : 30 mars 2026. Cette politique explique comment l'application Senflix collecte, utilise, partage et protège les informations personnelles dans les flux de compte, contenu, paiement, support et opérations.",
      contactLabel: "Contact",
      contactLead:
        "Pour le support, les demandes de confidentialité ou les questions sur vos droits, contactez ",
      contactSuffix: ".",
      contactSummary:
        "English summary: for privacy, support, or data-rights questions, contact dev.support@senflix.app.",
      securityTitle: "Sécurité et mises à jour",
      securityBody:
        "Nous utilisons des mesures techniques et organisationnelles raisonnables pour protéger les informations personnelles, mais aucun système n'est parfait. Cette politique peut être mise à jour, et tout changement important sera reflété par une nouvelle date d'effet sur cette page.",
      sections: [
        {
          title: "Informations que nous collectons",
          items: [
            "Les détails de compte comme le numéro de téléphone, l'adresse email, le nom affiché et les préférences de profil.",
            "Les contenus et métadonnées que vous publiez, notamment vidéos, miniatures, playlists et descriptions.",
            "Les métadonnées d'achat et de paiement créateur nécessaires pour confirmer les paiements, débloquer les contenus payants et soutenir les flux de revenus créateurs.",
            "Les données techniques et appareil comme la version de l'application, le modèle de l'appareil, le jeton de notification et les diagnostics utiles à la sécurité et à la fiabilité.",
            "L'activité d'usage liée à l'authentification, la navigation, la lecture, les achats et le support.",
          ],
        },
        {
          title: "Permissions",
          items: [
            "Accès à la caméra pour capturer photo ou vidéo depuis l'application.",
            "Accès au microphone pour enregistrer l'audio avec les contenus vidéo.",
            "Accès aux photos et à la bibliothèque média pour sélectionner ou téléverser des fichiers existants.",
            "Permission de notification pour envoyer des messages transactionnels et produit.",
          ],
        },
        {
          title: "Comment nous utilisons les données",
          items: [
            "Pour créer les comptes, authentifier les utilisateurs et protéger la plateforme contre les abus.",
            "Pour héberger, traiter et afficher les contenus créateurs et spectateurs.",
            "Pour traiter les achats, confirmer l'accès et soutenir les paiements créateurs et le support client.",
            "Pour surveiller la fiabilité, investiguer les erreurs et améliorer la qualité du produit.",
            "Pour respecter les obligations légales, comptables, antifraude et de sécurité.",
          ],
        },
        {
          title: "Partage et sous-traitants",
          items: [
            "Nous pouvons partager des informations avec des prestataires d'hébergement, stockage, analytics, observabilité, modération et support qui agissent pour notre compte.",
            "Les paiements par mobile money et par carte sont traités par Bictorys, notre prestataire de paiement, qui traite les données de paiement selon sa propre politique de confidentialité.",
            "Nous pouvons divulguer des informations lorsque la loi l'impose ou lorsque cela est nécessaire pour protéger les utilisateurs, les droits et l'intégrité de la plateforme.",
            "Nous ne vendons pas les informations personnelles.",
          ],
        },
        {
          title: "Conservation et droits",
          items: [
            "Nous conservons les informations uniquement le temps nécessaire au service, à la sécurité, au support, à la conformité et à la résolution des litiges.",
            "Vous pouvez demander l'accès, la correction, la suppression ou toute autre aide relative à vos données en contactant l'adresse ci-dessous.",
            "Si vous pensez qu'un enfant a transmis des informations personnelles de manière inappropriée, contactez-nous et nous examinerons la demande.",
          ],
        },
      ],
    },
  },
} as const;
