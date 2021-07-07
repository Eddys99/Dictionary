var dictionary = [], i = 0;
function addWord() {
    var word = document.getElementById("inputWord").value;
    dictionary[i] = word;
    ++i;
}

function searchWord() {
    var word = document.getElementById("inputSearchText").value;
    var dictionarySize = dictionary.length, flag = 0;
    for(var i = 0; i < dictionarySize; ++i) {
        if(word === dictionary[i]) {
            flag = 1;
            break;
        }
    }
    if(flag == 1) {
        document.getElementById("message").innerHTML = "<h4>This word does exists in dictionary.</h4>";
    } else {
        document.getElementById("message").innerHTML = "<h4>This word doesn't exists in dictionary.</h4>";
    }
}