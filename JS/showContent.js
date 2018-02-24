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
            url:'/ajax/showContentsHandler.php?articleId=' + contentId, 
            dataType: 'json'
        })
        .done (function(obj){
            hideLoaderIdentity();
            console.log('Ответ получен');
            $('li.' + contentId).append(obj);
        })
        .fail(function(xhr, status, error){
            hideLoaderIdentity();
    
            console.log('ajaxError xhr:', xhr); // выводим значения переменных
            console.log('ajaxError status:', status);
            console.log('ajaxError error:', error);
    
            console.log('Ошибка соединения с сервером (GET)');
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
            url:'/ajax/showContentsHandler.php', 
            dataType: 'text',
//            converters: 'json text',
            method: 'POST'
        })
        .done (function(obj){
            hideLoaderIdentity();
            console.log('Ответ получен', obj);
            $('li.' + content).append(obj);
        })
        .fail(function(xhr, status, error){
            hideLoaderIdentity();
    
    
            console.log('Ошибка соединения с сервером (POST)');
            console.log('ajaxError xhr:', xhr); // выводим значения переменных
            console.log('ajaxError status:', status);
            console.log('ajaxError error:', error);
        });
        
        return false;
        
    });  
}
