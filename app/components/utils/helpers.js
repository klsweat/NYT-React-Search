// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";

// This variable will be pre-programmed with our authentication key
// (the one we received when we registered)
let a = "b9f91d369f";
let b = "f59547cd47b93";
let c = "1d8cbc56b:0:74623931";
let authKey = a + b + c;

console.log(authKey);
// Helper Functions (in this case the only one is runQuery)
const helpers = {

  runQuery: (queryTerm, startYear, endYear) => {

    console.log(queryTerm, startYear, endYear);

    let year1 = startYear + "0101";
    let year2 = endYear + "0101";

    var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${authKey}&q=${queryTerm}&begin_date=${year1}&end_date=${year2}`;
    //"&q=" + queryTerm + "&begin_date=" + year1 + "&end_date=" + year2;

    console.log(queryURL);
    return axios.get(queryURL).then((response) => {
      
      console.log(response);
      console.log(response.data.response.docs[0]);

      var loop = [1, 2, 3 , 4, 5, 6];
      return response.data.response.docs[0].headline.main;
      return response.data.response.docs[1].headline.main;
      return response.data.response.docs[2].headline.main;
      return response.data.response.docs[3].headline.main;
      return response.data.response.docs[4].headline.main;
      //return response;
    });

  }
};

// We export the helpers function (which contains getGithubInfo)
export default helpers;
