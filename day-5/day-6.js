class Product {
    constructor(name, department, quantity) {
        this.name = name;
        this.department = department;
        this.quantity = Number(quantity);
    }
}

let productName = document.querySelector("input#productName")
let productDepartment = document.querySelector("select#productDepartment")
let productQuantity = document.querySelector("input#productQuantity")
let res = document.querySelector("ul#res")
let productsList = []

function addProduct() {
    if (productName.value.length == 0 || productQuantity.value == 0 || productDepartment.value == 'default') {
        alert('Add a product name, quantity and department!')
        productName.focus()
    } else {
        productsList.push(new Product(productName.value, productDepartment.value, productQuantity.value))
        printProductsList()
        productName.value = ''
        productName.focus()
        console.log(productsList)
    }
}

function printProductsList() {
    res.innerHTML = ''
    organize()
    for (const product of productsList) {
        let newLiElement = document.createElement('li')
        newLiElement.innerHTML = `${product.name} | ${product.department} | ${product.quantity} uni`
        res.appendChild(newLiElement)
    }
}

function organize() {
    productsList.sort(compare)

    function compare(a, b) {
        if (a.department > b.department) return 1;
        if (b.department > a.department) return -1;
        return 0;
    }
}

productName.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        addProduct()
    }
})