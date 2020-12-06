var input = document.querySelector(".show");
var item = Array.from(document.querySelectorAll(".item"));
item.forEach(function(btn){
    btn.addEventListener('click', function(){
        if (input.innerHTML == '0')
        {
            input.innerHTML ='';
        }

        if (btn.innerHTML == 'AC')
        {
            input.innerHTML = '0';
        }

        

        else if (btn.innerHTML == 'DEL')
        {
            var arrtext = Array.from(input.innerHTML);
            arrtext.splice(arrtext.length-1,1);
            if (arrtext.length != 0)
            {
                input.innerHTML = arrtext.join('');
            }
            else
            {
                input.innerHTML = '0';
            }
        }

        else if (btn.innerHTML == '=')
        {
            input.innerHTML = eval(input.innerHTML).toFixed(2);
        }

        else 
        {
            input.innerHTML += btn.innerHTML;
        }
    })
})
