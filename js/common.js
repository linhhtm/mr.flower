
//initial validation for form
! function(window, document, $) {
    "use strict";
    $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
}(window, document, jQuery);

var baseUrl = 'http://127.0.0.1:5500/views/admin/';

//format number from (ex:xxxxxxx to x,xxx,xxx)
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,', '000')
}

//create random string
function randomCharacters(num){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for( var i=0; i < num; i++ )
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

//populate form base on json
function populate(frm, data) {   
    $.each(data, function(key, value) {  
        var ctrl = $('[name='+value.name+']', frm);  
        switch(ctrl.prop("type")) { 
            case "radio": case "checkbox":   
            ctrl.each(function() {
                if($(this).attr('value') == value.value) $(this).attr("checked",value.value);
            });   
            break;  
            default:{
                ctrl.val(value.value); 
            }
        }  
    });  
}

//modal edit customer
function openModalEdit(form, modal){
    $(modal).find('form').removeClass('error');
    $(modal).find('form .form-group').removeClass('error validate');
    $(modal).find('form .form-group .help-block').empty();
    $(modal).modal('show');
    let arr = $(form).serializeArray();
    populate($(modal).find('form'), arr);
}

function initDatePicker(){
    
}

$(document).ready(function(){
})