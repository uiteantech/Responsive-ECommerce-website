const bar =document.getElementById('bar');
const nav =document.getElementById('navbor');
const close=document.getElementById('close')

if (bar)
{
    bar.addEventListener('click', ()=> {
        nav.classList.add('active');
    })


}

if (close)
    {
        close.addEventListener('click', ()=> {
            nav.classList.remove('active');
        })
    
    
    }