$(document).ready(function(){
    $('.calculator__buttons .clear').click((e)=>{
        e.preventDefault();
        $('.calculator__input').val(0); // clear
    });

    $('.calculator__buttons .plus').click((e)=>{
        e.preventDefault();
        let currentValue = $('.calculator__input').val();
        $('.calculator__input').val(currentValue+'+');
    })

    $('.calculator__buttons .data-number').click(function(e)
    {
        e.preventDefault();
        let currentValue = $('.calculator__input').val();
        let selectedValue =$(this).html();
        if(currentValue == 0)
        {
            $('.calculator__input').val(selectedValue);
            return;
        }
        $('.calculator__input').val(currentValue+selectedValue);        
    });

    
  });