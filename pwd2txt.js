window.onload = function(){ 

    var chkbox = document.createElement('input');
    chkbox.type = 'checkbox';

    $("input[type='password']").parentNode.insertBefore(chkbox, $("input[type='password']").nextSibling);
}
