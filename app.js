const divContain = document.querySelector('.container')
const newDiv = document.createElement('div')
newDiv.classList.add('grid')

let newestGrid = newDiv.cloneNode(false)

for (let i = 0; i < 256; i++) {
    newestGrid = newestGrid.cloneNode(false)
    divContain.append(newestGrid)
}

const colorDivs = document.querySelectorAll('.grid')

colorDivs.forEach((divs) => {
    divs.addEventListener('mouseover', () => {
        console.log("hello");
        return divs.classList.add('change');
    });
});
