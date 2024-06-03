<template>
  <div>
    <div v-for="(question, index) in questions" :key="index" class="question">
      <p>{{ question.text }}</p>
      <ul>
        <li v-for="(option, optionIndex) in question.options" :key="optionIndex">
          <label>
            <input type="radio" :name="'question_' + index" :value="option" v-model="question.selectedOption">
            {{ option }}
          </label>
        </li>
      </ul>
    </div>
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
export default {
    name: 'TestModuleComponent',
    props: {},
    data() {
        return {
        questions: [
            {
            text: 'Qual é a capital do Brasil?',
            options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],
            answer: 'Brasília',
            selectedOption: null
            },
            {
            text: 'Quem escreveu "Dom Casmurro"?',
            options: ['Machado de Assis', 'Carlos Drummond de Andrade', 'José de Alencar', 'Clarice Lispector'],
            answer: 'Machado de Assis',
            selectedOption: null
            },
            {
            text: 'Qual é o maior planeta do sistema solar?',
            options: ['Terra', 'Marte', 'Júpiter', 'Vênus'],
            answer: 'Júpiter',
            selectedOption: null
            },
            {
            text: 'Quem foi o primeiro presidente do Brasil?',
            options: ['Getúlio Vargas', 'Juscelino Kubitschek', 'Deodoro da Fonseca', 'Tancredo Neves'],
            answer: 'Deodoro da Fonseca',
            selectedOption: null
            },
            {
            text: 'Qual é o maior oceano do mundo?',
            options: ['Atlântico', 'Índico', 'Pacífico', 'Ártico'],
            answer: 'Pacífico',
            selectedOption: null
            },
            {
            text: 'Em que ano ocorreu a Independência do Brasil?',
            options: ['1808', '1822', '1889', '1922'],
            answer: '1822',
            selectedOption: null
            },
            {
            text: 'Quem pintou a Mona Lisa?',
            options: ['Michelangelo', 'Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh'],
            answer: 'Leonardo da Vinci',
            selectedOption: null
            },
            {
            text: 'Qual é a maior cordilheira do mundo?',
            options: ['Himalaias', 'Andes', 'Alpes', 'Montanhas Rochosas'],
            answer: 'Andes',
            selectedOption: null
            },
            {
            text: 'Quem é o autor de "O Pequeno Príncipe"?',
            options: ['Antoine de Saint-Exupéry', 'Jules Verne', 'Victor Hugo', 'F. Scott Fitzgerald'],
            answer: 'Antoine de Saint-Exupéry',
            selectedOption: null
            },
            {
            text: 'Qual é o maior mamífero terrestre?',
            options: ['Girafa', 'Elefante', 'Rinoceronte', 'Hipopótamo'],
            answer: 'Elefante',
            selectedOption: null
            }
        ]
        };
    },
    computed: { },
    mounted() {
    },
    methods: {
        submit() {
            let score = 0;
            this.questions.forEach(question => {
                if (question.selectedOption === question.answer) {
                score++;
                }
            });
            alert(`Você acertou ${score} de ${this.questions.length} perguntas.`);
            }
        }
}
</script>

<style scoped>

</style>