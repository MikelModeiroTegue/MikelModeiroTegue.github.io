const myClock= document.querySelector('.clock')

const time = () => {
    const now = new Date();

    const hr = now.getHours();
    const mins = now.getMinutes();
    const sec = now.getSeconds();
    const Day = now.toDateString();

    const html = `
        <span>${hr}</span>:
        <span>${mins}</span>:
        <span>${sec}</span>
        <span class="day">${Day}</span>
        <span class="day">By Tariq St Patrick</span>
    `;
    myClock.innerHTML = html ;
}
setInterval(time, 1000)




// small example of an HTTP request
// the first step is to create XMLHttpRequest object which comes with built in methods that we can use to get data from a service's endpoint
const request = new XMLHttpRequest();

// here i will use the built in open() method to make a request which takes in two parameters, 
// the type of request and the endpoint to which you want to get data 

// here I will add the listener i mentioned at line 36 to the request object to be noted on the state changes of the request 
request.addEventListener('readystatechange', ()=>{
   // console.log(request, request.readyState)
    // as you will see on the console, there're actually noted that the request when through exactly 4 states yeah of course this is because the open() method was already executed
    // in case i want to see the data retrieve (responseText) from the source on my console, when the request is already completed, i will just play with conditional statement since i now the readystate value at completion
    if (request.readyState===4){
        //console.log(request.responseText)
        // this response Text is a selection of data received in JSON format, as JSON objects in an array 

        // now having the JSON data, i need to access them which is quite difficult in this format, 
        // so in order to make use of the data retrieved, i need to turn this JSON data into real JavaScript objects as follows 

        const data= JSON.parse(request.responseText);
        console.log(data)
    }
})


request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
// after creating my request i can now send the request using the built in send method 
request.send()
// the big issue here is how can i access the data retrieved from the endpoint ?
// and how do i know when the request was successful and completed ? 
// to do this, i can listen to a special type of event called the readystatechange and fire a callback function each time there's a change in state of the request
// note that the readystate property returns the state of an XHP client which are in total of five with ranging values from [0-4] 
