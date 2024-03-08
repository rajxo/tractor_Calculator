const form=document.querySelector('#trcform');
const input=document.querySelector('#time');
const cont=document.querySelector('.container');
const p=document.querySelector('p');



form.addEventListener('submit',function(e){
    e.preventDefault();
    const time=input.value;
    //console.log(time);
    //stime(time);
    // const span=document.createElement('span');
    // span.innerHTML=<span class="material-symbols-outlined">currency_rupee</span>
    // p.innerHTML=span
    
    p.innerText=`RS. ${stime(time)}`

})

function stime(st){
    const [hourstr,minstr]=st.split(':');
    //console.log(hourstr,minstr);
    const hrs=parseInt(hourstr,10)||0;
    const mins=parseInt(minstr,10)||0;
    const tothrs=hrs+mins/60;
    const rent=tothrs*1000;
    return rent;
}