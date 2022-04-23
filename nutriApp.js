const userInput = prompt('שם מוצר לחיפוש');
let ansPlace = document.getElementById('res');
const noRes = '<h3>לא נמצאו תוצאות</h3>';
const getNutri = async () => {
  try {
    const response = await axios.get(
      `https://data.gov.il/api/3/action/datastore_search?resource_id=c3cb0630-0650-46c1-a068-82d575c094b2&q=${userInput}`
    );
    const answer = response.data.result.records.map(x => x.shmmitzrach);
    console.log(answer);
    console.log(answer.length);
    ansPlace.innerHTML = answer;
    if (answer.length == 0) {
      ansPlace.innerHTML = noRes;
    } else {
      ansPlace.innerHTML = answer;
    }
  } catch (error) {
    console.log(error);
    ansPlace.innerHTML = noRes;
  }
};
getNutri();
