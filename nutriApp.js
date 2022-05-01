const userInput = prompt('שם מוצר לחיפוש');
const ansPlace = document.getElementById('resCont');
const noRes = '<h3>לא נמצאו תוצאות</h3>';
let nuTable = document.getElementById('nuTableCont');
function replacer(key, value) {
  // Filtering out empty properties
  if (value) return value;
}
async function getNutri() {
  try {
    const response = await axios.get(
      `https://data.gov.il/api/3/action/datastore_search?resource_id=c3cb0630-0650-46c1-a068-82d575c094b2&q=${userInput}`
    );
    console.log(response);
    recsPath = response.data.result.records;
    answer = recsPath
      .map(
        (x, y) => `<div class="resItemFrame">
          <p class="res" id=${x.smlmitzrach} data-index=${y} >
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
      listen();
    }
  } catch (error) {
    console.log(error);
    ansPlace.innerHTML = noRes;
  }
}
getNutri();

function nuTableDisp() {
  const index = this.getAttribute('data-index');
  console.log(index);
  let recStr = JSON.stringify(recsPath[index], replacer, '\t');
  let tableValues = Object.entries(recsPath[index])
    .map(
      (x, y) =>
        `<div class="resItemFrame">
      <p class="res" data-index=${y}>
        ${x}
      </p>
    </div> `
    )
    .join('');
  // console.log(`<p>${x}</p>`);
  nuTable.innerHTML = tableValues;
  console.table(tableValues);
}
listen = async () => {
  const resItems = document.getElementsByClassName('res');
  for (let i = 0; i < resItems.length; i++) {
    // console.log(this);
    resItems[i].addEventListener('click', nuTableDisp);
  }
};
