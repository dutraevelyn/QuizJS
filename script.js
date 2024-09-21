const questions = [
    {
      question: "Qual a posição de Harry no jogo de Quadribol? ",
      choices: ["Artilheiro", "Apanhador", "Batedor", "Goleiro"],
      answer: "Apanhador",
    },
    {
      question: "Quais os nomes dos pais de Harry Potter?",
      choices: ["Thiago e Lilian Potter", "Victor e Victoria Potter", "John e Lisa Potter", "Michael e Alice Potter"],
      answer: "Thiago e Lilian Potter",
    },
    {
      question: "Quem fugiu de Azkaban no filme Harry Potter e o prisioneiro de Azkaban?",
      choices: ["Draco", "Voldemort", "Snape", "Sirius"],
      answer: "Sirius",
    },
    {
      question: "Qual o feitiço que espanta dementadores?",
      choices: ["Expecto Patronum", "Expelliarmus", "Avada Kedavra", "Imperio"],
      answer: "Expecto Patronum",
    },
    {
      question: "Como é chamada a pessoa que pode falar com cobras?",
      choices: ["Ofidioglota", "Fidioglota", "Afidioglota", "Efidioglota"],
      answer: "Ofidioglota",
    },
    {
      question: "Quem mata o professor Dumbledore?",
      choices: ["Belatrix", "Draco", "Minerva", "Snape"],
      answer: "Snape",
    },
    {
      question: "Quem deu a capa de invisibilidade para Harry?",
      choices: ["Sirius", "Remo", "Dumbledore", "Minerva"],
      answer: "Dumbledore",
    },
    {
      question: "Qual é o feitiço usado para abrir fechaduras?",
      choices: ["Alorromora", "Estupefaça", "Expelliarmus", "Wingardium Leviosa"],
      answer: "Alorromora",
    },
  ];
  
  const questionElement = document.querySelector("#question")
  const choiceElements = document.querySelectorAll(".choice")
  const nextButton = document.querySelector("#next")
  const scoreElement = document.querySelector("#score")
  const wrongElement = document.querySelector("#wrong")

  let currentQuestion = 0
  let score = 0
  let wrong = 0
  let answerChosen = false

  function loadQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionElement.innerText = currentQuestionData.question;
  
    const choices = shuffleArray(currentQuestionData.choices)
  
    for (let i = 0; i < choiceElements.length; i++) {
      choiceElements[i].innerText = choices[i];
    }

    answerChosen = false;
  }

    function shuffleArray(array){
      let currentIndex = array.length
      let temporaryValue
      let randomIndex

      while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random()* currentIndex)
        currentIndex -= 1

        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }
      return array
    }
    

  loadQuestion()