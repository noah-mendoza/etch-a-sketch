const divContain = document.querySelector('.container')
const newDiv = document.createElement('div')
newDiv.classList.add('grid')

let newestGrid = newDiv.cloneNode(false)


for (let i = 0; i < 16**2; i++) {
    newestGrid = newestGrid.cloneNode(false)
    divContain.append(newestGrid)
}

let colorDivs = document.querySelectorAll('.grid')

function numberFunc() {
    let anyNum = prompt("Enter a number between 1 and 100")

    if (anyNum > 0 & anyNum < 101) {
        colorDivs.forEach((divs) => {
            divs.remove()
        });
    }

    for (let i = 0; i < anyNum**2; i++) {
        newestGrid = newestGrid.cloneNode(false)
        let number = 320 / anyNum;
        newestGrid.style.height = number.toString() + "px"
        newestGrid.style.width = number.toString() + "px"
        divContain.append(newestGrid)
    }

    colorDivs = document.querySelectorAll('.grid')
    colorDivs.forEach((divs) => {
        divs.addEventListener('mouseover', () => {
            console.log("hello");
            divs.classList.add('change');
        });
    });
}

colorDivs.forEach((divs) => {
    divs.addEventListener('mouseover', () => {
        console.log("hello");
        divs.classList.add('change');
    });
});