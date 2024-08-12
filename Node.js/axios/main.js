function perfomGetRequest(){
    var resultElement = document.getElementById('result');

    result.innerHTML = '';

    axios.get('http://jsonplaceholder.typicode.com/posts').then(function(res){
        result.innerHTML = generateSuccessOutput(res);
    }).catch(function(err){
        result.innerHTML = generateErrorOutput(err);
    });
}
function generateSuccessOutput(res){
    return '<h4> Result </h4>' +
    '<h5> Status </h5>' + '<pre>'+ res.status + ' ' + res.statusText  + '</pre>' +
    '<h5> Header </h5>' +
    '<pre>'+JSON.stringify(res.headers ,null ,'\t') +'</pre>'+
    '<h5> Data </h5>' +'<pre>'  + JSON.stringify(res.data ,null ,'\t') + '</pre>';
}
function generateErrorOutput(err){
    return '<h4> Result </h4>' +
    '<h5> Status </h5>' +'<pre>'+err.message + '</pre>' +
    '<h5> Status </h5>' + '<pre>'+ err.response.status + ' ' + err.response.statusText  + '</pre>' +
    '<h5> Header </h5>' +
    '<pre>'+JSON.stringify(err.response.headers ,null ,'\t') +'</pre>'+
    '<h5> Data </h5>' +'<pre>'  + JSON.stringify(err.response.data ,null ,'\t') + '</pre>';
}
function clearOutput(){
    var resultElement = document.getElementById('result');
    resultElement.innerHTML ='';
}