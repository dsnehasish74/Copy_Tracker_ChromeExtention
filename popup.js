$(document).ready(function() {
    var div = $('#copies_');
    chrome.storage.sync.get(['copyTracker','limit'], function(result) {

        //To update The limit int the pop up
        if(result.limit!=undefined){
            $('#limit_show').append(result.limit.toString());
        }else{
            $('#limit_show').append(10);
        }
        if(result.copyTracker!=undefined) {
            let cps = result.copyTracker;
            cps = cps.reverse();
            //to show elements according to limit
            cps.forEach((copy)=>{
                let show = `<h4 class="copy_item">${copy}</h4>`
                div.append(show);
            })
        }
    });
    //Copy to the Clipboard
    $('#copies_').on('click', 'h4', function () {
                    var $temp = $("<input>");
                    $("body").append($temp);
                    $temp.val($(this).text()).select();
                    document.execCommand("copy");
                    $temp.remove();
    });
});
