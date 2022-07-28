function delayedResult(n1,n2,delayTime, callback)
{
    window.setTimeout(function() { callback (n1+n2); }, 3000); //Office.addEventListener( '電話響', function(){ /* 接電話 */ }, false)
                                    //para1                                , para2
                                                                                   //呼叫callback
}

delayedResult(4, 5, 3000, function(result) {
    console.log(result);
});
delayedResult(4, 5, 3000, function(result){
    window.alert(result);
});
