$(function(){
    //init_get();
    init_post();
});

function init_get() 
{
    $('a.showContent').one('click', function(){
        var contentId = $(this).attr('data-contentId');
        console.log('ID статьи = ', contentId); 
        showLoaderIdentity();
        $.ajax({
            url:'JS/showContentsHandler.php?articleId=' + contentId, 
            dataType: 'text'
        })
        .done (function(obj){
            hideLoaderIdentity();
            console.log('Ответ получен');
            $('li.' + contentId).append(obj);
        })
        .fail(function(){
            hideLoaderIdentity();
            console.log('Ошибка соединения с сервером');
        });
        
        return false;
        
    });  
}

function init_post() 
{
    $('a.showContentPOSTmethod').one('click', function(){
        var content = $(this).attr('data-contentId');
        showLoaderIdentity();
        $.ajax({
            url:'JS/showContentsHandler.php', 
            dataType: 'json',
//            converters: 'json text',
            method: 'POST'
        })
        .done (function(obj){
            hideLoaderIdentity();
            console.log('Ответ получен');
            $('li.' + content).append(obj);
        })
        .fail(function(){
            hideLoaderIdentity();
            console.log('Ошибка соединения с сервером');
        });
        
        return false;
        
    });  
}
