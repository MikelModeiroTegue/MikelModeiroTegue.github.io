// First thing, we need to create a standard array of correct answers

const correctAnswers =['D', 'A', 'A'];
var score=0;
// attach an eventListerner to form to listen when the user has submited the form 

document.addEventListener('DOMContentLoaded', ()=>{
    const form=document.getElementsByClassName('quiz-form');
    const totalScore=document.getElementsByClassName('result');
    if (form){

        form.addEventListener('submit', e =>{
            e.preventDefault();// prevent the submit event to execute upon refreshing the page
        
            const userAnswers=[form.question1.value, form.question2.value, form.question3.value];
        
            // check answers
        
            userAnswers.forEach((answer, index)=>{
                if (answer===correctAnswers[index]){
                    score+=30;
                }
            });
            // console.log(score); here I want to use javascript to show the score just under the heading QUiz App
             scrollTo(0,0);
            totalScore.document.getElementsByTagName('span').textContent = '${score}%';
            totalScore.classlist.remove('d-none');
        });

    }
})


    
