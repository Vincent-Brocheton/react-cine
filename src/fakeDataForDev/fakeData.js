function fakeData() {
    return [
    {
        id: 0,
        name: "Cin'Amand",
        adresse: "Rocade du Nord",
        codePostal: 59230,
        ville: "Saint-Amand-les-Eaux",
        tarif: [
            {
                type: "Enfant (Moins de 14 ans)",
                prix: 4.00,
            },
            {
                type: "Etudiant",
                prix: 6.20,
            },
            {
                type: "Normal",
                prix: 8.00,
            },
            {
                type: "Senior",
                prix: 6.20,
            },
            {
                type: "Moins de 26 ans",
                prix: 5.20,
            }
        ],
        films: [
            {
                id: 0,
                titre: "Avenger's Endgame",
                synopsis: "Thanos ayant anéanti la moitié de l’univers, les Avengers restants resserrent les rangs dans ce vingt-deuxième film des Studios Marvel, grande conclusion d’un des chapitres de l’Univers Cinématographique Marvel. ",
                duree: {hours: 3, minutes: 1},
            },
            {
                id: 1,
                titre: "Inferno",
                synopsis: "Dans \"Inferno\", le célèbre expert en symbologie suit la piste d’indices liés au grand Dante lui-même. Robert Langdon se réveille dans un hôpital italien, frappé d’amnésie, et va devoir collaborer avec le docteur Sienna Brooks pour retrouver la mémoire. Tous deux vont sillonner l’Europe dans une course contre la montre pour déjouer un complot à l’échelle mondiale et empêcher le déchaînement de l’Enfer…",
                duree: {hours: 2, minutes: 2},
            }
        ]
    },
    {
        id: 1,
        name: "Gaumont Valenciennes",
        adresse: "59 rue des Alpes",
        codePostal: 59300,
        ville: "Valenciennes",
        tarif: [
            {
                type: "Enfant (Moins de 14 ans)",
                prix: 5.90,
            },
            {
                type: "Etudiant",
                prix: 8.90,
            },
            {
                type: "Normal",
                prix: 11.90,
            },
            {
                type: "Senior (plus de 65 ans)",
                prix: 9.40,
            }
        ],
        films: [
            {
                id: 0,
                titre: "Avenger's Infinity War",
                synopsis: "Les Avengers et leurs alliés devront être prêts à tout sacrifier pour neutraliser le redoutable Thanos avant que son attaque éclair ne conduise à la destruction complète de l’univers.",
                duree: {hours: 2, minutes: 36},
            },
            {
                id: 1,
                titre: "Da Vinci Code",
                synopsis: "Une nuit, le professeur Robert Langdon, éminent spécialiste de l'étude des symboles, est appelé d'urgence au Louvre : le conservateur du musée a été assassiné, mais avant de mourir, il a laissé de mystérieux symboles... Avec l'aide de la cryptologue Sophie Neveu, Langdon va mener l'enquête et découvrir des signes dissimulés dans les oeuvres de Léonard de Vinci.",
                duree: {hours: 2, minutes: 32},
            }
        ]
    }
]}
