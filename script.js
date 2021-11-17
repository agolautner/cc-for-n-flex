const generateArray = function (amount){
    let returnArray = [];
    // let amountConverted = parseInt(amount);
    // amount = amountConverted;
    amount = parseInt(amount);

    // console.log(amount);
    // console.log(typeof amount);

    //Number.isNaN(amount) !== true
    if (!Number.isNaN(amount)) {
        for (let i = 0; i < amount; i++) {
            returnArray.push(`${i}`);
            // console.log(returnArray);
        }
    } else {
        returnArray.push('error');
    }

    // console.log(returnArray);
    return returnArray;
}

function loadEvent() {
    // console.log("the page has loaded");
    // console.log(generateArray('kiskutya'));
    // console.log(generateArray(100));
    // console.log(generateArray('100'));
    // console.log(generateArray([100]));

    const root = document.getElementById('root');
    const list = generateArray(200);

    if (list[0] !== 'error') {
        for (const item of list) {
            root.insertAdjacentHTML("beforeend", 
            `<div>${item}</div>`)
        }
    }
};

window.addEventListener("load", loadEvent);

/*
window.addEventListener("load", function(){
    this is also a valid solution
});

window.addEventListener("load", () => {
    this is also a valid solution
});

window.addEventListener("load", _ => {
    this is also a valid solution
});
*/