class Product {
    constructor(name, department, quantity) {
        this.name = name;
        this.department = department;
        this.quantity = Number(quantity);
    }
}

let item = document.querySelector("input#item")
let department = document.querySelector("select#department")
let itemQtde = document.querySelector("input#itemQtde")
let products = []

function addItems() {
    let res = document.querySelector("ul#res") // Pega o elemento ul com o id res e atribui para a variavel res
    let li = document.createElement('li') // Cria um elemento li e atribui a variavel li
    if (item.value.length == 0 || itemQtde.value == 0 || department.value == 'default') { // Verifica se o produto tem nome, departamento e quantidade
        alert('Add a product name, quantity and department!')
        item.focus()
    } else {
        let isEqual = false
        for (const product of products) { // verifica se o produto já existe na lista
            if (item.value == product.name) {
                isEqual = true
                productEqual(product)
                console.log(products)
                li.innerHTML = `${item.value} | ${department.value} | ${itemQtde.value} uni`
                item.value = ''
                item.focus()
            }
        }

        function productEqual(productEqual) {
            productEqual.quantity = Number(productEqual.quantity) + Number(itemQtde.value)
            console.log(productEqual)
            printProductsList()
        }

        if (isEqual != true) {
            products.push(new Product(item.value, department.value, itemQtde.value))
            console.log(products)
            li.innerHTML = `${item.value} | ${department.value} | ${itemQtde.value} uni`
            res.appendChild(li)
            item.value = ''
            item.focus()
        }
    }
}

function organize() {
    products.sort()
    console.log(products)
}

function printProductsList() {
    res.innerHTML = ''
    for (const key of products) {
        res.innerHTML += `<li>${key.name} | ${key.department} | ${key.quantity} uni</li>`
    }
}

item.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        addItems()
    }
})