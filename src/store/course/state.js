export default {
    course: {
        description: 'Análise e Desenvolvimento de Sistemas'
    },
    courseModules: [
        {
            id: 1,
            img: 'https://endeavor.org.br/wp-content/uploads/2015/07/gest%C3%A3o-de-projetos.jpg',
            name: 'Gerenciamento Avançado de Projetos',
            progress: '20',
            url: '',
            status: 1,
        },
        {
            id: 2,
            img: 'https://endeavor.org.br/wp-content/uploads/2015/07/gest%C3%A3o-de-projetos.jpg',
            name: 'Solução de Problemas com Integrais',
            progress: '40',
            url: 'solucao-de-poblemas-com-integrais',
            status: 1,
        }
    ],
    moduleDisciplines: {
        id: 1,
        module: 'Gerenciamento Avançado de Projetos',
        disciplines: [
            {
                id: 1,
                name: 'A aurora da Gestão de Projetos',
                progress: '30',
                disciplineDetail: {
                    visualizedVideos: '0',
                    videos: '5',
                    vizualizedArticles: '0',
                    articles: 1,
                    exercicesConcluded: 0,
                    exercices: 5,
                }
            },
            {
                id: 2,
                name: 'Habilidades Técnicas e Psicossociais',
                progress: '30',
                disciplineDetail: {
                    visualizedVideos: '0',
                    videos: '5',
                    vizualizedArticles: '0',
                    articles: '1',
                    exercicesConcluded: '0',
                    exercices: '5',
                }
            }
        ]
    },
    moduleDiscipline: {
        id: 1,
        name: 'A aurora da Gestão de Projetos',
        lessons: [
            {
                id: 1,
                type: 'video',
                name: 'Aula 1 - Lorem Ipsum',
                src: 'https://youtu.be/V14jTusJ9os?list=PLWXw8Gu52TRL3sY3esdsH2PxYiRdXwfvX',
                status: 1
            },
            {
                id: 2,
                type: 'video',
                name: 'Aula 2 - Ipsum Lorem',
                src: 'https://youtu.be/V14jTusJ9os?list=PLWXw8Gu52TRL3sY3esdsH2PxYiRdXwfvX',
                status: 2
            },
            {
                id: 3,
                type: 'article',
                name: 'Aula 3 - Lorem Lorem Ipsum',
                src: 'https://youtu.be/V14jTusJ9os?list=PLWXw8Gu52TRL3sY3esdsH2PxYiRdXwfvX',
                status: 2
            }
        ]
    },

    selectedLesson: {}
}