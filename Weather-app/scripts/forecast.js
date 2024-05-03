// script file for asynchronous operations

const getCity = async (city) => {
  let area = city; 
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=260a4ad3daa0ec85f73a1d5c26334d47&units=metric`);
  // the await function is simply to make sure that the execution of this block waits for the fetch function to be resolved, returning a promise
  // the URl is defined as a concatination of the base URL and the query parameters
  const data = await response.json();
  // having the response info, we need to parse it into javascript objects using the json method
  // but note that the json() method also returns a promise reason why i wait for the parsing to be completely resolved
    return data;
};

// getCity('buea')
//   .then(data => { console.log(data) })
//   .catch(err => { console.log(err) })
