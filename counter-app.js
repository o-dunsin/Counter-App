//document.getElementById ('counter').innerText = 6;
//let count = 5
//count = count+1
//console.log (count);

let welcomeEl= document.getElementById ('welcome-el')
let userName = 'Matt! '
let greeting ='Welcome back '
welcomeEl.innerText= greeting + userName + String.fromCodePoint(0x1F604);

let counter = document.getElementById ('counter')
console.log (counter)
    let count = 0
function increment ()  {
    count +=1
    counter.textContent = count;
    console.log ('count');
}
let entriesEl=document.getElementById ('entries-el')
function save () {
    console.log ('count');
    let countRec = count+' - '
    entriesEl.textContent +=countRec;
    counter.textContent =0
    count=0
}





