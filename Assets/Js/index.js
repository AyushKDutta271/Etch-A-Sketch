
function createGrid()
{

        let divContainer=document.querySelector('.container');
         divContainer.innerHTML='';
    let num=parseInt(prompt('Enter number of grids: '));
    if(num>100)
        prompt("Enter grids less than or equal to 100");
    else
    {
        let bdy=document.getElementById('main-body');

        divContainer.classList.add('container');

        divContainer.innerHTML='';
   

        

        for(let i=0; i<num; i++)
        {
                    let divRows=document.createElement('div');
                    divRows.classList.add('rows-div');
                divRows.style.display='flex';
                // divRows.style.justifyContent="space-between";
                divContainer.appendChild(divRows);
            for(let j=0; j<num; j++)
            {
                let oi=1;
                let div=document.createElement('div');
                div.addEventListener('mouseover',()=>{
                div.style.backgroundColor='rgb('+Math.random()*256+','+Math.random()*256+','+Math.random()*256+','+(oi++*0.1)+')';
                
                });
                div.style.width=`15px`;
                div.style.height='15px';
                div.addEventListener('mouseout',()=>{
                // div.style.backgroundColor='white';
                });
                divRows.appendChild(div); 
            }
            
        }

       
        bdy.appendChild(divContainer);
    }
        
}
