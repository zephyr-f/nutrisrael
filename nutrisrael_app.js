const userInput = prompt('הזן ערך לחיפוש');
const getNutri = async () => {
  try {
    const response = await axios.get(
      `https://data.gov.il/api/3/action/datastore_search?resource_id=c3cb0630-0650-46c1-a068-82d575c094b2&q=${userInput}`
    );
    const answer = response.data.result.records.map(x => x.shmmitzrach);
    console.log(answer);
    document.getElementById('res').innerHTML = answer;
  } catch (error) {
    console.log(error);
  }
};
getNutri();
