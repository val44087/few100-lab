import './styles.css';

const amountToCalc = document.getElementById('amountToCalc') as HTMLInputElement;
const billAmount = document.getElementById('billAmount') as HTMLSpanElement;
const tipPercent = document.getElementById('tipPercent') as HTMLSpanElement;
const totalBill = document.getElementById('totalBill') as HTMLSpanElement;
const percent = document.getElementById('percent') as HTMLSpanElement;
const tipAmount = document.getElementById('tipAmount') as HTMLSpanElement;
let calcedTipAmt = 0;

const storedBtn = localStorage.getItem('calcBtn');
const storedTip = localStorage.getItem('calcTip');
document.getElementById('amountToCalc').oninput = calcTheBill;
const buttons = document.querySelectorAll('.btn') as NodeListOf<HTMLInputElement>;

// Ask Eric how to get this to work.  dynmaic updating.
document.getElementById('calcBtn1').addEventListener('click', calcTheBill);
document.getElementById('calcBtn2').addEventListener('click', calcTheBill);
document.getElementById('calcBtn3').addEventListener('click', calcTheBill);



function calcTheBill() {

  const that = this as HTMLButtonElement;

  if (amountToCalc.valueAsNumber < 0) {
    amountToCalc.valueAsNumber = 0;
    // make; the; border; red; here;
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
  saveIt(btnId, tip);
}

function disableBTN(btnId: string) {
  buttons.forEach(x => {
    if (x.id === btnId) {
      x.setAttribute('disabled', 'disabled');
    } else {
      x.removeAttribute('disabled');
    }
  });
}
function saveIt(btnId: string, tip: number) {
  localStorage.setItem('calcBtn', JSON.stringify(btnId));
  localStorage.setItem('calcTip', JSON.stringify(tip));
}
