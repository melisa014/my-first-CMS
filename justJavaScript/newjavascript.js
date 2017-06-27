$(function(){
    init();
});

function init() 
{
    // немного jQuery
    $('body').css({
        'background-image' : 'url(/images/Mickey.jpg)',
        'background-size' : '100%',
        'background-repeat' : 'no-repeat'
    }); 
    
    // задачи из learn.javascript
    //Структуры данных -> Строки
    // #1 
    var string = "вася";
    var nextString = "николай Петрович";
    var emptyString = "";
    function upFirst(str) {
        var result = str.charAt(0).toUpperCase() + str.slice(1);
        return result;
    }

    console.log(upFirst(string));
    console.log(upFirst(nextString));
    console.log(upFirst(emptyString));
    
    // #2
    function checkSpam(str) {
        var str = str.toLowerCase();
        var pos = 0;
        while (pos <= str.length) {
            if (~str.indexOf('xxx', pos)) {
                pos++;
            }
            else {
                console.log('Внимание, спам!');
                pos++;
            }
        }
    }
    var spam = "XXX another XXX and all xxx";
    checkSpam(spam);

}

