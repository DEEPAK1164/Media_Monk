let flag=0;
function controller(x)
{
    flag=flag+x;
    slideshow(flag);
}
slideshow(flag);
function slideshow(index){
    let slides=document.getElementsByClassName('slide');
    if(index==slides.length)
    {
       flag=0;
       index=0;
    }
    if(index==-1)
    {
       flag=slides.length-1;
       index=slides.length-1;
    }
    for(let i of slides)
    {
        i.style.display="none";
    }
   slides[index].style.display="block";
}