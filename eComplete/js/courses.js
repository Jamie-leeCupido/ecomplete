'use strict';

let itemCount = 0;

window.onscroll = function slideInCart() {
    if (window.scrollY > 300){
        $("#shopping_cart").css('right', '0px', 'transition', 'all 0.4s');
    }
    else if (window.scrollY < 300 && itemCount !=0){
        $("#shopping_cart").css('right', '0px', 'transition', 'all 0.4s');
    }
    else{
        $("#shopping_cart").css('right', '-85px', 'transition', 'all 0.4s');
    }
    if ($("#shopping_list").css('right') == "0px"){
        $("#shopping_cart").css('right', '305px', 'transition', 'all 0.4s');
    }
    if($("#shopping_list").css('right') == "0px"){
        $("#shopping_list").css('right', '-305px', 'transition', 'all 0.4s');
    }
}

if (window.matchMedia("(max-width: 500px)").matches){
    $("#shopping_cart").click(function(){
        if ($("#shopping_list").css('right') == "0px"){
            $("#shopping_cart").css('right', '0px', 'transition', 'all 0.4s');
            $("#shopping_list").css('right', '-205', 'transition', 'all 0.4s');
        }
        else {
            $("#shopping_cart").css('right', '205px', 'transition', 'all 0.4s');
            $("#shopping_list").css('right', '0px', 'transition', 'all 0.4s');
        }
    })
    $("button").click(function(){
        $("#shopping_cart").css('right', '205px', 'transition', 'all 0.4s');
        $("#shopping_list").css('right', '0px', 'transition', 'all 0.4s');
    })
}

else if (!window.matchMedia("(max-width: 500px)").matches){
    $("#shopping_cart").click(function(){
        if ($("#shopping_list").css('right') == "0px"){
            $("#shopping_cart").css('right', '0px', 'transition', 'all 0.4s');
            $("#shopping_list").css('right', '-305px', 'transition', 'all 0.4s');
        }
        else {
            $("#shopping_cart").css('right', '305px', 'transition', 'all 0.4s');
            $("#shopping_list").css('right', '0px', 'transition', 'all 0.4s');
        }
    })
    
    $("button").click(function(){
        $("#shopping_cart").css('right', '305px', 'transition', 'all 0.4s');
        $("#shopping_list").css('right', '0px', 'transition', 'all 0.4s');
    })
}

// ******************************************************************** //

let totalAmount = [0];
let theList = [];

$("#amountInCart").text(itemCount);

function getSum(total, num){
    return total + num;
}

let course1 = { name : "Converse Ox R1800", price: 1800, };

let course2 = { name : "Air Force 1 Utility Mid R2500", price: 2500, };

let course3 = { name : "Air Max 720 R3200", price: 3200, };

let course4 = { name : "Puma Cell Venom R4000", price: 4000, };

let course5 = { name : "New Balance 574 R2700", price: 2700, };

let course6 = { name : "Air Max 97 R1500", price: 1500, };

let course7 = { name : "Air Force Utility R3000", price: 3000, };

let course8 = { name : "Puma Thunder Rice Gauche R1750", price: 1750, };



let cartListText = document.getElementById("cartItemList");

let remove_btn1 = "<button id='remove_course1'>X</button>";
let remove_btn2 = "<button id='remove_course2'>X</button>";
let remove_btn3 = "<button id='remove_course3'>X</button>";
let remove_btn4 = "<button id='remove_course4'>X</button>";
let remove_btn5 = "<button id='remove_course5'>X</button>";
let remove_btn6 = "<button id='remove_course6'>X</button>";
let remove_btn7 = "<button id='remove_course7'>X</button>";
let remove_btn8 = "<button id='remove_course8'>X</button>";


let course1Text = remove_btn1 + course1.name + "<br>";
let course2Text = remove_btn2 + course2.name + "<br>";
let course3Text = remove_btn3 + course3.name + "<br>";
let course4Text = remove_btn4 + course4.name + "<br>";
let course5Text = remove_btn5 + course5.name + "<br>";
let course6Text = remove_btn6 + course6.name + "<br>";
let course7Text = remove_btn7 + course7.name + "<br>";
let course8Text = remove_btn8 + course8.name + "<br>";



// This function checks if there is a value in the array `theList`
function checkArray() {
    cartListText.innerHTML = "";
    for (let i in theList){
        let theText = theList[i];
        cartListText.innerHTML += theText;
    }
}

// This function adds up the values in the array `totalAmount`
function getTotal() {
    document.getElementById("cartTotal").innerHTML = "Total : " + totalAmount.reduce(getSum);
}

$("#course_btn1").click(function(){
    let iCourse1 = theList.indexOf(course1Text);
    let course1Price = totalAmount.indexOf(course1.price);
    totalAmount.push(course1.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course1Text);
    checkArray();
});

$("body").on('click', '#remove_course1', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse1 = theList.indexOf(course1Text);
        let course1Price = totalAmount.indexOf(course1.price);
        totalAmount.splice(course1Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse1, 1);
        checkArray();
    }
})

$("#course_btn2").click(function(){
    let iCourse2 = theList.indexOf(course2Text);
    let course2Price = totalAmount.indexOf(course2.price);
    totalAmount.push(course2.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course2Text);
    checkArray();
});

$("body").on('click', '#remove_course2', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse2 = theList.indexOf(course2Text);
        let course2Price = totalAmount.indexOf(course2.price);
        totalAmount.splice(course2Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse2, 1);
        checkArray();
    }
});

$("#course_btn3").click(function(){
    let iCourse3 = theList.indexOf(course3Text);
    let course3Price = totalAmount.indexOf(course3.price);
    totalAmount.push(course3.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course3Text);
    checkArray();
});

$("body").on('click', '#remove_course3', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse3 = theList.indexOf(course3Text);
        let course3Price = totalAmount.indexOf(course3.price);
        totalAmount.splice(course3Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse3, 1);
        checkArray();
    }
});

$("#course_btn4").click(function(){
    let iCourse4 = theList.indexOf(course4Text);
    let course4Price = totalAmount.indexOf(course4.price);
    totalAmount.push(course4.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course4Text);
    checkArray();
});

$("body").on('click', '#remove_course4', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse4 = theList.indexOf(course4Text);
        let course4Price = totalAmount.indexOf(course4.price);
        totalAmount.splice(course4Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse4, 1);
        checkArray();
    }
});

$("#course_btn5").click(function(){
    let iCourse5 = theList.indexOf(course5Text);
    let course5Price = totalAmount.indexOf(course5.price);
    totalAmount.push(course5.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course5Text);
    checkArray();
});

$("body").on('click', '#remove_course5', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse5 = theList.indexOf(course5Text);
        let course5Price = totalAmount.indexOf(course5.price);
        totalAmount.splice(course5Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse5, 1);
        checkArray();
    }
});

$("#course_btn6").click(function(){
    let iCourse6 = theList.indexOf(course6Text);
    let course6Price = totalAmount.indexOf(course6.price);
    totalAmount.push(course6.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course6Text);
    checkArray();
});

$("body").on('click', '#remove_course6', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse6 = theList.indexOf(course6Text);
        let course6Price = totalAmount.indexOf(course6.price);
        totalAmount.splice(course6Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse6, 1);
        checkArray();
    }
});

$("#course_btn7").click(function(){
    let iCourse7 = theList.indexOf(course7Text);
    let course7Price = totalAmount.indexOf(course7.price);
    totalAmount.push(course7.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course7Text);
    checkArray();
});

$("body").on('click', '#remove_course7', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse7 = theList.indexOf(course7Text);
        let course7Price = totalAmount.indexOf(course7.price);
        totalAmount.splice(course7Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse7, 1);
        checkArray();
    }
});

$("#course_btn8").click(function(){
    let iCourse8 = theList.indexOf(course8Text);
    let course8Price = totalAmount.indexOf(course8.price);
    totalAmount.push(course8.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course8Text);
    checkArray();
});

$("body").on('click', '#remove_course8', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse8 = theList.indexOf(course8Text);
        let course8Price = totalAmount.indexOf(course8.price);
        totalAmount.splice(course8Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse8, 1);
        checkArray();
    }
});


$("#emptyCartList").click(function(){
    $("#cartItemList").text("");
    document.getElementById("cartTotal").innerHTML = "Total : " + 0;
    itemCount = 0;
    $("#amountInCart").text("0");
    totalAmount = [];
    theList = [];
})


