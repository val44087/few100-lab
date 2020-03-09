import './styles.css';

const amountToCalc = document.getElementById('amountToCalc') as HTMLInputElement;
const billAmount = document.getElementById('billAmount') as HTMLSpanElement;
const tipPercent = document.getElementById('tipPercent') as HTMLSpanElement;
const totalBill = document.getElementById('totalBill') as HTMLSpanElement;
const percent = document.getElementById('percent') as HTMLSpanElement;
const tipAmount = document.getElementById('tipAmount') as HTMLSpanElement;
let calcedTipAmt = 0;
const tipStored = 0;

document.getElementById('amountToCalc').oninput = calcStoredTip;

const buttons = document.querySelectorAll('.btn') as NodeListOf<HTMLInputElement>;

// Ask Eric how to get this to work.  dynmaic updating.
document.getElementById('calcBtn1').addEventListener('click', calcTip);
document.getElementById('calcBtn2').addEventListener('click', calcTip);
document.getElementById('calcBtn3').addEventListener('click', calcTip);

function calcStoredTip() {
  const storedTip = localStorage.getItem('calcTip');
  const storedBtn = localStorage.getItem('calcBtn');


  if (storedTip) {
    const tipStored = JSON.parse(storedTip);
    const btnStored = JSON.parse(storedBtn);
    calcTheBill(tipStored, btnStored);
  } else {
    if (NaN) {
      tipPercent.innerText = null;
      billAmount.innerText = null;
      tipAmount.innerText = null;
      totalBill.innerHTML = null;
    }
  }
}

function calcTip() {
  const that = this as HTMLButtonElement;
  const tip = parseFloat(that.dataset.tip);
  const btnId = that.id;
  calcTheBill(tip, btnId);
}


function calcTheBill(tip: number, btnId: string) {

  // const that = this as HTMLButtonElement;

  if (amountToCalc.valueAsNumber === 0) {
    amountToCalc.valueAsNumber = 0;
    alert('Value cant be empty');
    amountToCalc.style.borderColor = 'red';
  }
  // const tip = parseFloat(that.dataset.tip);
  // const btnId = that.id;

  calcedTipAmt = amountToCalc.valueAsNumber * tip;

  tipPercent.innerText = (tip * 100).toFixed(2).toString();
  percent.innerText = (tip * 100).toString();
  tipAmount.innerText = calcedTipAmt.toFixed(2).toString();

  billAmount.innerText = amountToCalc.value;
  totalBill.innerText = (calcedTipAmt + amountToCalc.valueAsNumber).toString();
  disableBTN(btnId);
  saveIt(tip, btnId);
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
function saveIt(tip: number, btnId: string) {
  localStorage.setItem('calcBtn', JSON.stringify(btnId));
  localStorage.setItem('calcTip', JSON.stringify(tip));
}
