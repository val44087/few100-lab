import './styles.css';

const calcBtn1 = document.getElementById('calcBtn1') as HTMLInputElement;
const calcBtn2 = document.getElementById('calcBtn2') as HTMLInputElement;
const calcBtn3 = document.getElementById('calcBtn3') as HTMLInputElement;
const itemToCalc = document.getElementById('itemToCalc') as HTMLInputElement;
const billAmount = document.getElementById('billAmount') as HTMLSpanElement;
const tipPercent = document.getElementById('tipPercent') as HTMLSpanElement;
const totalBill = document.getElementById('totalBill') as HTMLSpanElement;
// const list = document.getElementById('list') as HTMLUListElement;
const percent = document.getElementById('percent') as HTMLSpanElement;
const count = document.getElementById('count') as HTMLSpanElement;
let calcedValue = 0;
// const storedItems = localStorage.getItem('shopping-list');
// const items = itemToCalc.valueAsNumber;

function updateCount() {
    count.innerText = calcedValue.toString();
    billAmount.innerText = itemToCalc.value;
}

calcBtn1.addEventListener('click', addTheItem);
calcBtn2.addEventListener('click', addTheItem);
calcBtn3.addEventListener('click', addTheItem);

interface ShoppingItem {
    description: string;
}
function addTheItem() {
    const that = this as HTMLButtonElement;
    const tip = parseFloat(that.dataset.tip);
    const btnId = that.id;
    console.log(tip);
    calcedValue = itemToCalc.valueAsNumber * tip;
    console.log('Calced Value: ' + calcedValue);
    tipPercent.innerText = (tip * 100).toFixed(2).toString();
    percent.innerText = (tip * 100).toString();
    count.innerText = calcedValue.toFixed(2).toString();
    billAmount.innerText = itemToCalc.value;
    totalBill.innerText = (calcedValue + itemToCalc.valueAsNumber).toString();
    disableButtons(btnId);
}
function disableButtons(btnId: string) {

    // const btnList = ['calcBtn1', 'calcBtn2'];

    // btnList.forEach(workButtons);


    // function myFunction(item) {
    //   sum += item;
    //  document.getElementById('demo').innerHTML = sum;
    // }


    if (btnId === 'calcBtn1') {
        calcBtn1.disabled = true;
        calcBtn2.disabled = false;
        calcBtn3.disabled = false;
    } else {
        if (btnId === 'calcBtn2') {
            calcBtn2.disabled = true;
            calcBtn1.disabled = false;
            calcBtn3.disabled = false;
        } else {
            if (btnId === 'calcBtn3') {
                calcBtn3.disabled = true;
                calcBtn1.disabled = false;
                calcBtn2.disabled = false;
            }
        }
    }
}


