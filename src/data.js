const projectsData = [
  {
    id: 0,
    title: "Great.Hikes",
    url: "https://great-hikes.vercel.app/",
    imageUrl: "/images/03.jpg",
    logo: "/images/great_hikes_ok.png",
    description: "Hiking trail discovery platform built with modern web technologies. Find and explore hiking trails worldwide. MVP project.",
    publicationDate: "2024-01-15",
    author: "Yuri Cooke",
    course: "Web Development",
    genres: [
      "React",
      "Next.js",
      "TypeScript",
      "Full-stack"
    ],
    hasUpdate: true,
    sections: 1,
    translations: {},
    goals: []
  },
  {
    id: 1,
    title: "Rise of the Barbarian Kingdoms",
    url: "https://stensineme.blob.core.windows.net/hmlgrepoh/00212hu/04612/index.html",
    imageUrl: "https://stensineme.blob.core.windows.net/hmlgrepoh/00212hu/04612/img/capa-tema.jpg",
    logo: "/images/ReinosBarbaros.png",
    description: "The context of transition from Antiquity to the Middle Ages from the perspective of the political and social formation of the barbarian kingdoms.",
    publicationDate: "2022-07-15",
    author: "Nathália Serenado",
    course: "História",
    genres: [
      "História",
      "Idade média",
      "Império Romano",
      "Visigodos",
      "Suevos",
      "Iberia",
    ],
    hasUpdate: true,
    sections: 3,
    translations: {
      english: "Formations of the Barbarian Kingdoms",
      spanish: "Formaciones de los Reinos Bárbaros",
      german: "Formationen der Barbarenkönigreiche",
    },
    goals: ["Bárbaros: do território imperial à formação dos reinos bárbaros", "Reinos bárbaros na Hispânia e Itália",  "Reino franco: entre merovíngios e carolíngios"]
  },
  {
    id: 2,
    title: "React.js",
    url: "https://stensineme.blob.core.windows.net/hmlgrepoh/00212ti/04321/index.html",
    imageUrl: "https://stensineme.blob.core.windows.net/hmlgrepoh/00212ti/04321/img/capa-tema.jpg",
    logo: "/images/Daco_5903330.png",
    description: "JavaScript library for front-end development of web applications and mobile applications.",
    publicationDate: "2020-06-10",
    author: "Antonio Anderson Marques de Sousa",
    course: "Inglês",
    genres: [
        "Inglês",
        "Gramática Inglesa",
        "Lingua extrangeira"
    ],
    hasUpdate: false,
    sections: 3,
    translations: {
      english: "Adjective phrase",
      spanish: "",
      german: "",
    },
    goals: [
        "Distinguir adjetivos atributivos e adjetivos predicativos",
        "Reconhecer o posicionamento do adjetivo em um sintagma nominal",
        "Identificar alterações de ordem e sentido do adjetivo"
    ]


  },
  {
    id: 3,
    title: "Next.js",
    url: "https://stensineme.blob.core.windows.net/hmlgrepoh/00212ti/04322/index.html",
    imageUrl: "https://stensineme.blob.core.windows.net/hmlgrepoh/00212ti/04322/img/capa-tema.jpg",
    logo: "/images/nextjs.png",
    description: "Construction of SPA (single page application) applications with the main fundamentals and concepts of the Next.js framework.",
    publicationDate: "2020-06-10",
    author: "Antonio Anderson Marques de Sousa",
    course: "Inglês",
    genres: [
        "Inglês",
        "Gramática Inglesa",
        "Lingua estrangeira"
    ],
    sections: 3,
    translations: {
      english: "<em>Noun phrase</em>",
      spanish: "",
      german: "",
    },
    goals: [
        "Reconhecer os tipos de nomes – próprios, comuns, simples, compostos, contáveis, incontáveis e coletivos",
        "Identificar os determinadores e os pronomes",
        "Descrever o caso genitivo"
    ]
  },
  {
    id: 5,
    title: "The Adjectival Phrase in English",
    url: "https://stensineme.blob.core.windows.net/hmlgrepoh/o_sintagma_adjetival_em_ingles/index.html",
    imageUrl: "https://stensineme.blob.core.windows.net/hmlgrepoh/o_sintagma_adjetival_em_ingles/img/header/bg_header.jpg",
    logo: "/images/SintagmaAdjetival.png",
    description: "Introduction to the concept, function and form of the adjective, recognizing the effects of semantic change depending on its position in an English phrase.",
    publicationDate: "2020-06-10",
    author: "Antonio Anderson Marques de Sousa",
    course: "Inglês",
    genres: [
        "Inglês",
        "Gramática Inglesa",
        "Lingua extrangeira"
    ],
    hasUpdate: false,
    sections: 3,
    translations: {
      english: "Adjective phrase",
      spanish: "",
      german: "",
    },
    goals: [
        "Distinguir adjetivos atributivos e adjetivos predicativos",
        "Reconhecer o posicionamento do adjetivo em um sintagma nominal",
        "Identificar alterações de ordem e sentido do adjetivo"
    ]


  },
  {
    id: 6,
    title: "Heinous and similar crimes",
    url: "https://stensineme.blob.core.windows.net/hmlgrepoh/00212hu/04070/index.html",
    imageUrl: "https://stensineme.blob.core.windows.net/hmlgrepoh/00212hu/04070/img/capa-tema.jpg",
    logo: "/images/CrimesHediondos.png",
    description: "General aspects of the Heinous Crimes Law in Brazil, including the analysis of heinous crimes in kind, as well as those equated to heinous crimes.",
    publicationDate: "2022-02-23",
    author: "Renata Saggioro Davis",
    course: "Direito",
    genres: [
        "Direito",
        "Direito Criminal",
        "Investigação"
    ],
    sections: 3,
    translations: {
      english: "<em>Crimes</em>",
      spanish: "",
      german: "",
    },
    goals: [
        "Sistemática aplicada aos crimes hediondos",
        "Crimes hediondos em espécie",
        "Crimes equiparados aos crimes hediondos"
    ]


  },
  {
    id: 7,
    title: "Edifício 1010",
    url: "http://www.edificio1010.com.br",
    imageUrl: "/images/banner1010.jpg",
    description: ["Homepage for the 1010 Condominium - Goiânia, Brasil."],
    logo: "/images/1010.png",

    publicationDate: "2021-01-20",
    author: "Tatiana de Freitas Massuno",
    course: "Língua estrangeira",
    genres: [
        "Inglês",
        "English grammas",
        "Gramática inglesa"
    ],
    sections: 4,
    translations: {
      english: "",
      spanish: "",
      german: "",
    },
    goals: [
        "To identify fricative consonants: labiodental, dental, alveolar, palato-alveolar, and glottal fricatives",
        "To identify plosive consonants: bilabial, alveolar, and velar plosive",
        "To classify consonants based on the degree of constriction",
        "To recognize the context in which syllabic consonants can occur"
    ]


  },
  {
    id: 9,
    title: "The Noun Phrase in English",
    url: "https://stensineme.blob.core.windows.net/hmlgrepoh/o_sintagma_nominal_em_ingles/index.html",
    imageUrl: "https://stensineme.blob.core.windows.net/hmlgrepoh/o_sintagma_nominal_em_ingles/img/header/bg_header.jpg",
    logo: "/images/SintagmaNominal.png",
    description: "Presentation of the concept, structure and function of the noun phrase, as well as the use of nouns in particular cases. Identification of genitive structures and their modes of use.",
    publicationDate: "2020-06-10",
    author: "Antonio Anderson Marques de Sousa",
    course: "Inglês",
    genres: [
        "Inglês",
        "Gramática Inglesa",
        "Lingua estrangeira"
    ],
    sections: 3,
    translations: {
      english: "<em>Noun phrase</em>",
      spanish: "",
      german: "",
    },
    goals: [
        "Reconhecer os tipos de nomes – próprios, comuns, simples, compostos, contáveis, incontáveis e coletivos",
        "Identificar os determinadores e os pronomes",
        "Descrever o caso genitivo"
    ]
  }

  
  
]
export default projectsData;