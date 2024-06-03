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
                youTubeVideoId: 'xS9KVesgQ28',
                player: 'youtube',
                status: 1
            },
            {
                id: 2,
                type: 'video',
                name: 'Aula 2 - Ipsum Lorem',
                youTubeVideoId: '7gMibGpkq2s',
                player: 'youtube',
                status: 2
            },
            {
                id: 3,
                type: 'article',
                name: 'Aula 3 - Lorem Lorem Ipsum',
                html: `<form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>`,
                status: 2
            },
            {
                id: 4,
                type: 'test',
                name: 'Prova Avaliativa',
                status: 2
            },
        ]
    },

    selectedLesson: {}
}