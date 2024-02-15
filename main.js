// 1 - je localise mon bouton 
const clearButton = document.querySelector('[data-all-clear]')
const output = document.querySelector('[data-output]')

// 2 - je surveille si on clique dessus
clearButton.addEventListener('click', () => {
    console.info('effacer')
})
const numberButtons = document.querySelectorAll('[data-number]')

numberButtons.forEach(button => { // Pour chaque bouton
    button.addEventListener('click', () => { // On créer un detecteur
        console.info(button.innerText) // au clique, on affiche le contenu du btn dans la console
    })
})

function appendNumber(number) {
    //console.info(number)
    output.innerText = output.innerText + number // On modifie l'afficheur avec le nombre
}

numberButtons.forEach(button => { // Pour chaque bouton
    button.addEventListener('click', () => { // On créer un detecteur
        //console.info(button.innerText)
        appendNumber(button.innerText)
    })
})

function clear() {
    output.innerText = '';
    OperationCalcul = undefined
}

clearButton.addEventListener('click', () => {
        console.info('effacer')
        clear() // J'appelle maintenant la fonction
    })
    // je localise les boutons d'opération
const operationButtons = document.querySelectorAll('[data-operation]')

// declaration de la variable à mettre en tout debut de script
var OperationCalcul = undefined

// fonction qui affiche le signe de l'opération dans la zone "output"
function chooseOperation(operation) {
    if (output.innerText.includes('x') || output.innerText.includes('+') || output.innerText.includes('÷') || output.innerText.includes('-')) return
    OperationCalcul = operation
    output.innerText = output.innerText.toString() + ' ' + operation + ' '
}
// // On surveille le clique sur un des boutons
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperation(button.innerText)
    })
})

// je localise le bouton =
const equalsButton = document.querySelector('[data-equals]')

function calcul() {


    if (output.innerText === '') return
    let split = output.innerHTML.split(OperationCalcul)

    // recupération des 2 valeurs
    let nombre1 = parseFloat(split[0])
    let nombre2 = parseFloat(split[1])

    // verification qu'il y a bien eu des valeurs de saisies
    if (isNaN(nombre1) || isNaN(nombre2)) return

    console.log(nombre1)
    console.log(nombre2)
    console.log(OperationCalcul)
    let moncalcul;

    switch (OperationCalcul) {
        case '+':
            moncalcul = nombre1 + nombre2
            break
        case '-':
            moncalcul = nombre1 - nombre2
            break
        case 'x':
            moncalcul = nombre1 * nombre2
            break
        case '÷':
            moncalcul = nombre1 / nombre2
            break
        default:
            return
    }
    console.info(moncalcul)
    output.innerText = moncalcul
    OperationCalcul = undefined

}

equalsButton.addEventListener('click', button => {
    calcul()
})