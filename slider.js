const img_list=["1","2","3","4"];
const container=document.querySelector('.container3');
const btns=document.querySelectorAll('.btn')

let index=0;
btns.forEach((button)=>
{
    button.addEventListener('click',()=>
    {
      /*console.log('clicked')*/
      if(button.classList.contains('left'))
      {
        index--;
        if(index<0)
        {
            index=img_list.length-1;
        }
        container.style.background= `url("Images/Slider/Image${img_list[index]}.jpg") center/cover no-repeat`

      }
      else
      {
        index++;
        if(index===img_list.length)
        {
            index=0;
        }
        container.style.background= `url("Images/Slider/Image${img_list[index]}.jpg") center/cover no-repeat`

      }
    })
})