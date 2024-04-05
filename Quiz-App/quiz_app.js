// First thing, we need to create a standard array of correct answers

const correctAnswers =['D', 'A', 'A'];
// attach an eventListerner to form to listen when the user has submited the form 

    const form= document.querySelector('.quiz-form');
    const result =document.querySelector('.result');

        form.addEventListener('submit', (e) =>{
            e.preventDefault();// prevent the submit event to execute upon refreshing the page

            let score=0;
        
            const userAnswers=[form.question1.value, form.question2.value, form.question3.value];
        
            // check answers
            userAnswers.forEach((answer, index)=>{
                if (answer===correctAnswers[index]){
                    score+=30;
                }
            });
            // console.log(score); here I want to use javascript to show the score just under the heading QUiz App
             scrollTo(0,0);
             result.querySelector('span').textContent = `${score}%`
             console.log(score)
             result.classList.remove('d-none')
        });


    

