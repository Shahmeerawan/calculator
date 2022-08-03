var scr = document.getElementById("screen")
scr.style.zIndex = "-" + "2.5"

function seven(){
    scr.innerHTML += 7
}
function eight(){
    scr.innerHTML += 8
}
function nine(){
    scr.innerHTML += 9
}
function multi(){
    scr.innerHTML += "*"
}
function four(){
    scr.innerHTML += 4
}
function five(){
    scr.innerHTML += 5
}
function six(){
    scr.innerHTML += 6
}
function divide(){
    scr.innerHTML += "/"
}
function minu(){
    scr.innerHTML += "-"
}
function one(){
    scr.innerHTML += 1
}
function three(){
    scr.innerHTML += 3
}
function two(){
    scr.innerHTML += 2
}
function zero(){
    scr.innerHTML += 0
}
function dot(){
    scr.innerHTML += "."
}
function plus(){
    scr.innerHTML += "+"
}
function clr(){
    scr.innerHTML = ""
}
function lastclr() {
    var a = scr.innerHTML.split("")
    var b =a.pop()
    var c = a.join("")
    console.log(c)
    scr.innerHTML = c

}
function dekh(){
var spl = scr.innerHTML;
var oKs = spl.charAt(spl.length-2);
var oKA = spl.charAt(spl.length-1);
console.log(oKA )
// console.log(charAt(spl.length-1) )

//oKA !== oKs
if(oKA == oKs ){
    var a = scr.innerHTML.split("")
    var b =a.pop()
    var c = a.join("")
    console.log(c)
    scr.innerHTML = c
}
else if( oKs == "*" ||  oKs == "/" ||  oKs == "+" ||  oKs == "-"   ){
    var b = scr.innerHTML.replace(oKs , "" )
    // var c = a.join("")
    console.log(b)
    scr.innerHTML = b

}

}


function equal(){
  var marks = eval( scr.innerHTML)
  console.log(scr.innerHTML)
  console.log(marks)
  scr.innerHTML = marks
}

