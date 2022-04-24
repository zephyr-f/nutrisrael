const userInput = prompt('שם מוצר לחיפוש');
let ansPlace = document.getElementById('resCont');
const noRes = '<h3>לא נמצאו תוצאות</h3>';
const getNutri = async () => {
  try {
    const response = await axios.get(
      `https://data.gov.il/api/3/action/datastore_search?resource_id=c3cb0630-0650-46c1-a068-82d575c094b2&q=${userInput}`
    );
    console.log(response);
    const answer = response.data.result.records
      .map(
        x =>
          `<div class="resItemFrame">
          <p class="res" id=${x.smlmitzrach}>
          ${x.shmmitzrach}
          </p>
          </div>`
      )
      .join('');
    console.log(answer);
    console.log(answer.length);
    ansPlace.HTML = answer;
    if (answer.length == 0) {
      // empty
      ansPlace.innerHTML = noRes;
    } else {
      // success
      ansPlace.innerHTML = answer;
    }
  } catch (error) {
    console.log(error);
    ansPlace.innerHTML = noRes;
  }
};
getNutri();

listen () => {
  nuTable ()
  const resItems = document.getElementsByClassName('res');
  for (let i = 0; i < resItems.length; i++) {
      console.log(sml);
      resItems[i].addEventListener('click', nuTable)
    }
}
