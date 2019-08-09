function changeFunction(str) {
    var url = '/pages/' + str + '.html';

    var xhr = new XMLHttpRequest();
    xhr.responseType = "text";
    xhr.open("POST", url, true);
    xhr.onload = function(e) {
        if (this.status == 200) {
            document.getElementById("text").innerHTML = this.responseText;
        } else {
            document.getElementById("text").innerHTML = 'НЕТ ЗНАЧЕНИЯ';
        }
    };
    xhr.send();

    getCurrentPage(str);
    test(str);
};

function getCurrentPage(str) {
    document.cookie = "currPage=" + str;
    var url = '/scripts/functionPHP.php';

    var xhr = new XMLHttpRequest();
    xhr.responseType = "text";
    xhr.open("POST", url, true);
    xhr.setRequestHeader('123', '123');
    xhr.onload = function(e) {
        if (this.status == 200) {
            document.getElementById("rightDiv").innerHTML = this.responseText;
        } else {
            document.getElementById("rightDiv").innerHTML = 'НЕТ ЗНАЧЕНИЯ';
        }
    };
    xhr.send();

};

function test(str) {
    document.cookie = "user=John";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/scripts/printMass.php', true);
    //Передает правильный заголовок в запросе
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        //Вызывает функцию при смене состояния.
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            // Запрос завершен. Здесь можно обрабатывать результат.
            document.getElementById("leftDiv").innerHTML = this.responseText + '<br>';
        }
    }
    //xhr.send("foo=bar&lorem=ipsum");
    xhr.send(str);
    //xhr.send(new Blob());
    //xhr.send(new Int8Array());
    //xhr.send({ form: 'data' });
    //xhr.send(document);
}