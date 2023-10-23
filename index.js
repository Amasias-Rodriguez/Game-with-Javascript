let matrix = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', ''],
]

let board = document.querySelector('.board');

drawTokens()
addEventListener()

function drawTokens() {
    matrix.forEach(row => row.forEach(element => {
        if (element == '') {
            board.innerHTML += `<div class='empty'>${element}</div>`
        } else {
            board.innerHTML += `<div class='token'>${element}</div>`
        }
    }))
}

function addEventListener() {
    let tokens = document.querySelectorAll('.token')
    tokens.forEach(token => token.addEventListener('click', () => {
        let actualPosition = searchPosition(token.innerText)
        console.log(actualPosition)

        let emptyPosition = searchPosition('')
        let movement = nextMovement(actualPosition, emptyPosition)
        if (movement !== 'noMove') {
            updateMatrix(token.innerText, actualPosition, emptyPosition)
        }
    }))
}

function searchPosition(element) {
    let rowIndex = 0;
    let columIndex = 0;
    matrix.forEach((row, index) => {
        let rowElement = row.findIndex(item => item == element)
        if (rowElement !== -1) {
            rowIndex = index;
            columIndex = rowElement;
        }
    })
    return [rowIndex, columIndex]
}

function nextMovement(actualPosition, emptyPosition) {

    if (actualPosition[1] == emptyPosition[1]) {
        if (actualPosition[0] - emptyPosition[0] == -1) {
            return 'down'
        } else if (actualPosition[0] - emptyPosition[0] == 1) {
            return 'up'
        } else {
            return 'noMove'
        }

    } else if (actualPosition[0] == emptyPosition[0]) {

        if (actualPosition[1] - emptyPosition[1] == -1) {
            return 'right'
        }

        else if (actualPosition[1] - emptyPosition[1] == 1) {
            return 'left'
        } else {
            return 'noMove'
        }
    } else {
        return 'noMove'
    }
}

function updateMatrix(element, actualPosition, emptyPosition) {
    matrix[2][2] = ''
    matrix[2][1] = element
}
