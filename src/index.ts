import './styles.css';

const billEle = document.getElementById('bill') as HTMLInputElement;
const billAmt = document.getElementById('billAmt') as HTMLDataListElement;
const tipping = document.getElementById('tipping') as HTMLDataListElement;
const tipp = document.getElementById('tipp') as HTMLDataListElement;
const tipAmt = document.getElementById('tipAmt') as HTMLDataListElement;
const totalAmt = document.getElementById('totalAmt') as HTMLDataListElement;

const tip10Ele = document.getElementById('tip10') as HTMLInputElement;
const tip15Ele = document.getElementById('tip15') as HTMLInputElement;
const tip20Ele = document.getElementById('tip20') as HTMLInputElement;

const tipcEle = document.getElementById('tipc') as HTMLInputElement;
const customEle = document.getElementById('customAmt') as HTMLInputElement;

billEle.addEventListener('change', handleChange);
customEle.addEventListener('change', handleChange);

tip10Ele.addEventListener('click', handleClick);
tip15Ele.addEventListener('click', handleClick);
tip20Ele.addEventListener('click', handleClick);
tipcEle.addEventListener('click', handleClick);

let tipSelected = '10';
function handleChange() {
    // set tip value if custom value is changed (generally hard set in the handleClick() method)
    if (tipcEle.parentElement.classList.contains('active')) {
        tipSelected = customEle.value;
    }
    const billVal = Number(billEle.value);
    const tipVal = Number(tipSelected) / 100;

    // info box assignments
    billAmt.innerText = billEle.value;
    tipping.innerText = tipSelected;
    tipp.innerText = tipSelected;
    tipAmt.innerText = String(billVal * tipVal);
    totalAmt.innerText = String((billVal * tipVal) + billVal);

}

function handleClick() {
    // clear other active boxes
    tip10Ele.parentElement.classList.remove('active');
    tip15Ele.parentElement.classList.remove('active');
    tip20Ele.parentElement.classList.remove('active');
    tipcEle.parentElement.classList.remove('active');

    const that = this as HTMLInputElement;
    that.parentElement.classList.add('active');
    tipSelected = (that.id === 'tipc') ? customEle.value : that.id.substr(3);

    handleChange();
}
