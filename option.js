console.log("hiiiii");
$(function(){
    $('#limit').click(function() {
        var limit = $('#limit_input').val();
        chrome.storage.sync.set({'limit': limit});
    });
});