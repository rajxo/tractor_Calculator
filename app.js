const form=document.querySelector('#trcform');
const hrsinput=document.querySelector('#time');
const mininput=document.querySelector('#min');
const cont=document.querySelector('.container');
const p=document.querySelector('p');



form.addEventListener('submit',function(e){
    e.preventDefault();
    const hrs=hrsinput.value;
    const min=mininput.value;
    
    
    p.innerText=`RS. ${stime(hrs,min)}`

})

function stime(hourstr,minstr){
    //const [hourstr,minstr]=st.split(':');
    //console.log(hourstr,minstr);
    const hrs=parseInt(hourstr,10)||0;
    const mins=parseInt(minstr,10)||0;
    const tothrs=hrs+mins/60;
    const rent=tothrs*1000;
    return rent;
}
