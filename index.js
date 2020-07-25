function handleProduct(product,isIncrease){
    const productInput = document.getElementById(product +'-count');
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    if(isIncrease == true){
        productNewCount = productCount + 1;
    }
    if(isIncrease == false && productCount > 0 ){
        productNewCount = productCount - 1;

    }
    productInput.value = productNewCount;

    let productTotal = 0;
    if(product == 'phone'){
        productTotal = productNewCount * 1200;
    }
    if(product == 'case'){
        productTotal = productNewCount * 50;
    }
    document.getElementById(product +'-price').innerText = '$' + productTotal;



    calculate ()
}


function calculate (){
    
    const caseCount = productInputValue('case');
    const phoneCount = productInputValue('phone');

    const totalPrice = phoneCount *1200 + caseCount * 50;
    document.getElementById('subtotal').innerText = '$' + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax').innerText = '$'+ tax;

    grandTotal = totalPrice + tax;
    document.getElementById('total').innerText ='$' + grandTotal;
}

function productInputValue (product){
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}







// //phone
// function handlePhone(isIncrease){
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     let phoneNewCount = phoneCount;
//     if(isIncrease == true){
//         phoneNewCount = phoneCount + 1;
//     }
//     if(isIncrease == false && phoneCount > 0 ){
//         phoneNewCount = phoneCount - 1;

//     }
//     phoneInput.value = phoneNewCount;

//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById('phone-price').innerText = '$' + phoneTotal;
// }

// //case
// function handleCase(isIncrease){
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     let caseNewCount = caseCount;
//     if(isIncrease == true){
//         caseNewCount = caseCount + 1;
//     }
//     if(isIncrease == false && caseCount > 0 ){
//         caseNewCount = caseCount - 1;

//     }
//     caseInput.value = caseNewCount;

//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-price').innerText = '$' + caseTotal;
// }







// function calculate (){
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);

//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);

//     document.getElementById('subtotal').innerText = phoneCount *1200 + caseCount * 50;
// }