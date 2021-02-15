let btnNum=document.getElementsByClassName('btn');
let result=document.getElementsByClassName('result')[0];
let input=document.getElementsByClassName('input')[0];
let btnClear=document.getElementById('clear');

btnClear.addEventListener('click',()=>
{
    input.value='';
    result.value='';
})

for(let i=0;i<btnNum.length;i++)
{
    if(btnNum[i].innerHTML!='C')
    { 
            btnNum[i].addEventListener('click', function(){
            input.value+=btnNum[i].innerHTML;
            if(!isNaN(Number(input.value[input.value.length-1])))
            {
                result.value=eval(input.value);
            }
        });
    }

}