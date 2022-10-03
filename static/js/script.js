function addNewweFeild(){
    // console.log("It's Working")

let NewNode= document.createElement('textarea');
NewNode.classList.add('form-control');
NewNode.classList.add('weField');
NewNode.classList.add('mt-2')
NewNode.setAttribute('placeholder', 'Enter here')
NewNode.setAttribute('rows',3);

let weOb=document.getElementById("we")
let weaddButtonOb=document.getElementById("weButton")

weOb.insertBefore(NewNode, weaddButtonOb)
}

function addNeweqField(){

    let Newbtn=document.createElement('textarea');
    Newbtn.classList.add('form-control');
    Newbtn.classList.add('eqFld');
    Newbtn.classList.add('mt-2');
    Newbtn.setAttribute('placeholder', 'Enter here');
    Newbtn.setAttribute('rows',3);

let eqOb=document.getElementById("Edufield")
let eqaddButton=document.getElementById("eqField")

eqOb.insertBefore(Newbtn, eqaddButton)
}

function removeItem(){

    let Newbtn4=document.getElementById('we1')
    Newbtn4.remove();
}

function GenerateCV(){
    console.log("Hello")
 let nameField = document.getElementById('fname1').value;
//  Here value of the textfield added into the namefield 

 let fnameT1 = document.getElementById('fnameT1');
// The nameT1 conatain object of the nemafield..by using this object we can change value of namefiled

 fnameT1.innerHTML = nameField;
// Here we have set the value of the namfield using innerHTML by creating object of the namefield   
document.getElementById('fnameT2').innerHTML = nameField;

document.getElementById('addT').innerHTML = document.getElementById('addr').value;

document.getElementById('phoneT').innerHTML = document.getElementById('phone').value;

document.getElementById('obj').innerHTML = document.getElementById('obj1').value;

// Work expreince

document.getElementById('weT').innerHTML = document.getElementById('we1').value;

let we1 = document.getElementsByClassName('weField')
let str=''

for(let e of we1)
{
    str = str + `<li> ${e.value} </li>`;
}

document.getElementById("weT").innerHTML = str;



let aq1 = document.getElementsByClassName('eqFld')
let str1=''

for(let e of aq1)
{
    str1 = str1 + `<li> ${e.value} </li>`;
} 
document.getElementById('aqT').innerHTML = str1;

// code for setting imgae
let file = document.getElementById('imgF').files[0]
let reader = new FileReader();
reader.readAsDataURL(file);
console.log(reader.result);

//set the image to template

reader.onloadend = function (){
    document.getElementById("imgTemp").src = reader.result;
};


document.getElementById("cv-form").style.display="none";
document.getElementById("cv-template").style.display="block";

}

function PrintCV(){
    
    window.print();
}