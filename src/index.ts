
import './styles.css';
const calcBtn = document.getElementById('calcBtn') as HTMLInputElement;
const calcBtn1 = document.getElementById('calcBtn1') as HTMLInputElement;
const calcBtn2 = document.getElementById('calcBtn2') as HTMLInputElement;
const calcBtn3 = document.getElementById('calcBtn3') as HTMLInputElement;
const itemToCalc = document.getElementById('itemToCalc') as HTMLInputElement;
const billAmount = document.getElementById('billAmount') as HTMLSpanElement;
const tipPercent = document.getElementById('tipPercent') as HTMLSpanElement;
const totalBill = document.getElementById('totalBill') as HTMLSpanElement;
const list = document.getElementById('list') as HTMLUListElement;
const percent = document.getElementById('percent') as HTMLSpanElement;
const count = document.getElementById('count') as HTMLSpanElement;
let calcedValue: number = 0
const storedItems = localStorage.getItem('shopping-list');
const items = itemToCalc.valueAsNumber;



function updateCount() {
    count.innerText = calcedValue.toString();
    billAmount.innerText = itemToCalc.value;

}
//calcBtn.addEventListener('click', function () {
//   var that = this as HTMLButtonElement;
//  const tip = parseFloat(that.dataset.tip);
//console.log(tip);

//calcedValue = itemToCalc.valueAsNumber * tip;
//console.log("Calced Value: " + calcedValue)

//tipPercent.innerText = (tip * 100).toString();
//percent.innerText = (tip * 100).toString();
//count.innerText = calcedValue.toString();
//billAmount.innerText = itemToCalc.value;
//totalBill.innerText = (tip + itemToCalc.valueAsNumber).toString();
//});


calcBtn1.addEventListener('click', addTheItem);
calcBtn2.addEventListener('click', addTheItem);
calcBtn3.addEventListener('click', addTheItem);

itemToCalc.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
        addTheItem();
    }
});

interface ShoppingItem {
    description: string;
}

function addTheItem() {
    var that = this as HTMLButtonElement;
    const tip = parseFloat(that.dataset.tip);
    console.log(tip);

    calcedValue = itemToCalc.valueAsNumber * tip;
    console.log("Calced Value: " + calcedValue)

    tipPercent.innerText = (tip * 100).toString();
    percent.innerText = (tip * 100).toString();
    count.innerText = calcedValue.toString();
    billAmount.innerText = itemToCalc.value;
    totalBill.innerText = (tip + itemToCalc.valueAsNumber).toString();
    // saveIt();
    // updateCount();
}


