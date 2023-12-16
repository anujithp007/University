let ValueDisplays=document.querySelectorAll(".num")
let interval=2000;
ValueDisplays.forEach((ValueDisplay)=>{
    let startValue=0;
    let endValue=parseInt(ValueDisplay.getAttribute
        ("data-val"));
        let duration=Math.floor(interval/endValue)
        let counter=setInterval(function(){
            startValue+=1;
            ValueDisplay.textContent=startValue;
            if(startValue==endValue){
                clearInterval(counter);
            }
        },duration);
});

// ValueDisplays.forEach((ValueDisplay) => {
//     let startValue = 0;
//     let endValue = parseInt(ValueDisplay.getAttribute("data-val"));
//     console.log("endValue:", endValue); // Log the endValue to check if it's retrieved correctly

//     let duration = Math.floor(interval / endValue);
//     console.log("duration:", duration); // Log the duration to check if it's calculated correctly

//     let counter = setInterval(function () {
//         startValue += 1;
//         ValueDisplay.textContent = startValue;
//         console.log("startValue:", startValue); // Log the startValue to check its progression

//         if (startValue == endValue) {
//             clearInterval(counter);
//         }
//     }, duration);
// });
