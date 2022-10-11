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


// Experience details

const addbtn = document.querySelector(".add")

const input = document.querySelector(".inp-group");

function removeInput(){
    this.parentElement.remove();
}

function addInput(){

    const name = document.createElement("input");
    name.type="text";
    name.className="nn"
    name.classList.add('inp-group')
    name.classList.add('form-control')
    name.classList.add('mt-2')
    name.id="cn"
    name.placeholder = "Enter company name"

    const pos = document.createElement("input");
    pos.type='text';
    pos.className="tt"
    pos.classList.add('inp-group')
    pos.classList.add('form-control')
    pos.classList.add('mt-2')
    pos.id="pos"
    pos.placeholder = "Enter the position";

    const rm = document.createElement("input");
    rm.type='text';
    rm.className="o1"
    rm.classList.add('inp-group')
    rm.classList.add('form-control')
    rm.classList.add('mt-2')
    rm.id="startm"
    rm.placeholder = "Start month & year";

    const dd = document.createElement("input");
    dd.type="text";
    dd,className="p1"
    dd.classList.add('inp-group');
    dd.classList.add('form-control')
    dd.classList.add('mt-2')
    dd.id="endm"
    dd.placeholder = "End month & year "

    const btn = document.createElement("a")
    btn.className = "delete"
    btn.innerHTML = "&times"

    btn.addEventListener("click", removeInput);


    

    const flex = document.createElement("div")
    flex.className = "flex";


    input.appendChild(flex);
    flex.appendChild(name);
    flex.appendChild(pos)
    flex.appendChild(rm)
    flex.appendChild(dd)
    flex.appendChild(btn)
}

addbtn.addEventListener("click", addInput)


// Skills-section

const addbtn1 = document.querySelector(".add1")

const input1 = document.querySelector(".inp-group1");

function removeInput(){
    this.parentElement.remove();
}

function addIn(){

    const sk1 = document.createElement("input")
    sk1.type="text";
    sk1.className="skl1"
    sk1.classList.add('form-control');
    sk1.classList.add('inp-group1');
    sk1.classList.add('mt-2');
    sk1.id="skk1"
    sk1.placeholder = "Hard skill e.g Python"

    const sk2 = document.createElement("input")
    sk2.type="text";
    sk2.className="skl2"
    sk2.classList.add('form-control');
    sk2.classList.add('inp-group1');
    sk2.classList.add('mt-2');
    sk2.id="skk2"
    sk2.placeholder = "Soft skill e.g leadership"

    const btn1 = document.createElement("a")
    btn1.className = "delete"
    btn1.innerHTML = "&times"

    btn1.addEventListener("click", removeInput);

    const flex1 = document.createElement("div")
    flex1.className = "flex";

    input1.appendChild(flex1)
    flex1.appendChild(sk1)
    flex1.appendChild(sk2)
    flex1.appendChild(btn1)
}

addbtn1.addEventListener("click", addIn)




function GenerateCV(){
    console.log("Hello")

// Personal Information
    let nameField = document.getElementById('fname1').value;
    //  Here value of the textfield added into the namefield 

    let fnameT1 = document.getElementById('fnameT1');
    // The nameT1 conatain object of the nemafield..by using this object we can change value of namefiled

    fnameT1.innerHTML = nameField;
    // Here we have set the value of the namfield using innerHTML by creating object of the namefield   
    document.getElementById('lnameT2').innerHTML = document.getElementById('lname1').value;

    document.getElementById('emailT1').innerHTML = document.getElementById('email').value;

    document.getElementById('phoneT1').innerHTML = document.getElementById('phone').value;

    document.getElementById('obj').innerHTML = document.getElementById('obj1').value;

// Eductaion Details
    document.getElementById('clgT1').innerHTML = document.getElementById('clg').value;

    document.getElementById('locT1').innerHTML = document.getElementById('loc').value;

    document.getElementById('dgT1').innerHTML = document.getElementById('dg').value;

    
    document.getElementById('prcT1').innerHTML = document.getElementById('prc').value;

    document.getElementById('smT1').innerHTML = document.getElementById('sm').value;

    document.getElementById('syT1').innerHTML = document.getElementById('sy').value;

    document.getElementById('emT1').innerHTML = document.getElementById('em').value;

    document.getElementById('eyT1').innerHTML = document.getElementById('ey').value;

    document.getElementById('cnT1').innerHTML = document.getElementById('cn').value;

    document.getElementById('posT1').innerHTML = document.getElementById('pos').value;

    document.getElementById('ssyT1').innerHTML = document.getElementById('startm').value;

    document.getElementById('eeyT1').innerHTML = document.getElementById('endm').value;

    document.getElementById('desT1').innerHTML = document.getElementById('we1').value;

    document.getElementById('skkT1').innerHTML = document.getElementById('skk1').value;

    document.getElementById('skkT2').innerHTML = document.getElementById('skk2').value;

    document.getElementById('prjT1').innerHTML = document.getElementById('aq1').value;












// Work expreince

document.getElementById('weT').innerHTML = document.getElementById('we1').value;

let we1 = document.getElementsByClassName('weField')
let str=''

for(let e of we1)
{
    str = ` ${e.value}`;
}

document.getElementById("weT").innerHTML = str;


// company name
let aq1 = document.getElementsByClassName('nn')
let str1=''

for(let e of aq1)
{
    str1 = `${e.value}`;
} 
document.getElementById('aqT1').innerHTML = str1;

// position
let aq2 = document.getElementsByClassName('tt')
let str2=''

for(let e of aq2)
{
    str2 =  `${e.value}`;
} 
document.getElementById('poT1').innerHTML = str2;

// start month
let aq3 = document.getElementsByClassName('o1')
let str3=''

for(let e of aq3)
{
    str3 = `${e.value}`;
} 
document.getElementById('sTl1').innerHTML = str3;

// end month
let aq4 = document.getElementsByClassName('p1')
let str4=''

for(let e of aq4)
{
    str4 = `${e.value}`;
} 
document.getElementById('eTl1').innerHTML = str4;


// Hard skill
let aq5 = document.getElementsByClassName('skl1')
let str5=''

for(let e of aq5)
{
    str5 =`${e.value}`;
} 
document.getElementById('sklT1').innerHTML = str5;

// soft-skills

let aq6 = document.getElementsByClassName('skl2')
let str6=''

for(let e of aq6)
{
    str6 =`${e.value}`;
} 
document.getElementById('sklT2').innerHTML = str6;


// Projects
let aq7 = document.getElementsByClassName('eqFld')
let str7=''

for(let e of aq7)
{
    str7 =`${e.value}`;
} 
document.getElementById('prjTT').innerHTML = str7;










    // code for setting imgae
    let file = document.getElementById('imgFile').files[0]
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    
    //set the image to template
    
    reader.onloadend = function (){
        document.getElementById("imgTem").src = reader.result;
    };


document.getElementById("cv-form").style.display="none";
document.getElementById("cv-template").style.display="block";
document.getElementById('pp22').style.display="block";

}

function PrintCV(){
    document.getElementById('pp22').style.display="block";
    window.print();

}