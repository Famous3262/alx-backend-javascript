/* eslint-disable */
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Perform asynchronous operation here
    // Make an API call using fetch()

    fetch('https://api.example.com/data')
      .then(response => {
        if (response.ok) {
          // Resolve the Promise with the response data
          resolve(response.json());
        } else {
          // Reject the Promise with an error message
          reject('Error: Unable to fetch data from API');
        }
      })
      .catch(error => {
        // Reject the Promise with the error message
        reject(`Error: ${error.message}`);
      });
  });
}
