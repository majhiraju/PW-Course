// document.getElementById('cutegirl').onclick = function (){
//     alert("cutegirl clicked")
// }

// attachEvent()
// jQuery - on


// Read +++++++++++


// type, timestamp, PreventDefault
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
//altkey, ctrlkey, shiftkey, keyCode

// document.getElementById("cutegirl").addEventListener('click', function (e){
//     // console.log(e)
//     // alert("cutegirl clicked")
// },false);

// evnetPropogation

// 1.EventCapturing
// 2.EventBabling

// evnetPropogation stop example

// document.getElementById('images').addEventListener('click', function (e){
//     console.log("clicked inside the ul");
// }, false);

// document.getElementById('cutegirl').addEventListener('click', function (e){
//     console.log("cutegirl clicked");
//     e.stopPropagation()
// }, false);

// document.getElementById('google').addEventListener('click', function (e){
//     e.preventDefault();
//     e.stopPropagation();
//     console.log('google clicked');
// }, false );


// project style work example +++++++++++++

document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG'){
        console.log(e.target.id)
        let removedIt = e.target.parentNode
        removedIt.remove()
    }


}, false);

// removedIt.parentNode.removedChild()



