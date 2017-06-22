$(function(){
    init_get();
    init_post();
});

function init_get() 
{
    $('a.showContent').one('click', function(){
        var content = $(this).attr('data-contentId');
        console.log('ID статьи = ', content); 
        showLoaderIdentity();
        $.ajax({
            url:'JS/showContentsHandler.php?articleId=' + content, 
            dataType: 'text'
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

function init_post() 
{
    $('a.showContentPOSTmethod').one('click', function(){
        var content = $(this).attr('data-contentId');
        showLoaderIdentity();
        $.ajax({
            url:'JS/showContentsHandlerPOSTmethod.php', 
            dataType: 'json',
            converters: 'json text',
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

// выводим идентификатор
    function showLoaderIdentity() 
    {
        $("#loader-identity").show("slow");
    }

    // скрываем идентификатор
    function hideLoaderIdentity() 
    {
       $("#loader-identity").hide();  
    }
 

