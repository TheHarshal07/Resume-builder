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

function removeItem(e){
    const btn = e.target;
    btn.closest("wefield").remove();
    alert("hello")

}