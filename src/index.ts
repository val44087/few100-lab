import './styles.css';
// document.getElementById('amountToCalc').oninput = calcTheBill;

// I can get rid of these once I disable correctly
// const calcBtn1 = document.getElementById('calcBtn1') as HTMLInputElement;
// const calcBtn2 = document.getElementById('calcBtn2') as HTMLInputElement;
// const calcBtn3 = document.getElementById('calcBtn3') as HTMLInputElement;

const amountToCalc = document.getElementById('amountToCalc') as HTMLInputElement;
const billAmount = document.getElementById('billAmount') as HTMLSpanElement;
const tipPercent = document.getElementById('tipPercent') as HTMLSpanElement;
const totalBill = document.getElementById('totalBill') as HTMLSpanElement;
const percent = document.getElementById('percent') as HTMLSpanElement;
const tipAmount = document.getElementById('tipAmount') as HTMLSpanElement;
let calcedTipAmt = 0;


const buttons = document.querySelectorAll('.btn') as NodeListOf<HTMLInputElement>;

// Ask Eric how to get this to work.  dynmaic updating.
// document.getElementById('amountToCalc').addEventListener('input', calcTheBill);
document.getElementById('calcBtn1').addEventListener('click', calcTheBill);
document.getElementById('calcBtn2').addEventListener('click', calcTheBill);
document.getElementById('calcBtn3').addEventListener('click', calcTheBill);
// Ask about currency formatting also

function calcTheBill() {
  const that = this as HTMLButtonElement;

  if (amountToCalc.valueAsNumber < 0) {
    amountToCalc.valueAsNumber = 0;
    // make the border red here
  }
  const tip = parseFloat(that.dataset.tip);
  const btnId = that.id;

  calcedTipAmt = amountToCalc.valueAsNumber * tip;

  tipPercent.innerText = (tip * 100).toFixed(2).toString();
  percent.innerText = (tip * 100).toString();
  tipAmount.innerText = calcedTipAmt.toFixed(2).toString();

  billAmount.innerText = amountToCalc.value;
  totalBill.innerText = (calcedTipAmt + amountToCalc.valueAsNumber).toString();
  disableBTN(btnId);
  // disableButtons(btnId);
}

function disableBTN(btnId: string) {
  // const bt = btnId;
  buttons.forEach(x => {
    if (x.id === btnId) {
      x.setAttribute('disabled', 'disabled');

    } else {
      x.removeAttribute('disabled');
    }
  });
}





// function disableButtons(btnId: string) {
  //    if (btnId === 'calcBtn1') {
    //    calcBtn1.disabled = true;
      //  calcBtn2.disabled = false;
        // calcBtn3.disabled = false;
      // } else {
        // if (btnId === 'calcBtn2') {
          // calcBtn2.disabled = true;
        //  calcBtn1.disabled = false;
          // calcBtn3.disabled = false;
        // } else {
          // if (btnId === 'calcBtn3') {
            // calcBtn3.disabled = true;
            // calcBtn1.disabled = false;
            // calcBtn2.disabled = false;
         // }
        // }
     // }
    // };
