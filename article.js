let insert = {};
let search;
let question;
let passage;
let answer;

 process = async () => {
  const model = await insert;
  const answers = await model.findAnswers(question.value, passage.value);
  console.log(answers);
  answer.innerHTML =
      answers.map(answer => answer.text + ' (score =' + answer.score + ')')
          .join('<br>');
};


insert = qna.load()
question = document.getElementById('question');
search = document.getElementById('search');
passage = document.getElementById('article');
answer = document.getElementById('answer');
search.onclick = process;

async function done (event) {
    if(event.key === "Enter"){
        process()
    }
};


