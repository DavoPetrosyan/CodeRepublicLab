let UpperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
let LowerChars = "abcdefghijklmnopqrstuvwxyz".split('');

function StartEncription() {
    let text = document.getElementById("code").value
    let key = Number(document.getElementById("key").value)
    document.getElementById("decode").value = CaesarCipher(text, key)
    //console.log(text + "  " + key)
}



function StartDecription() {
    let text = document.getElementById("decode").value
    let key = Number(document.getElementById("key").value)
    document.getElementById("code").value = CaesarCipher(text, -1 * key)

    //console.log(text + "  " + key)
}




function CaesarCipher(str, num) {

    let result = '';
    let charcode = 0;

    for (let i = 0; i < str.length; i++) {
        if (UpperChars.includes(str[i])) {
            charcode = UpperChars.indexOf(str[i]) + num;
            while (charcode >= 26) {
                charcode = charcode - 26;
            }
            while (charcode < 0) {
                charcode = charcode + 26;
            }
            result += UpperChars[charcode];
        }
        else if (LowerChars.includes(str[i])) {
            charcode = LowerChars.indexOf(str[i]) + num;
            while (charcode >= 26) {
                charcode = charcode - 26;
            }
            while (charcode < 0) {
                charcode = charcode + 26;
            }
            result += LowerChars[charcode];
        }
        else {
            result += str[i];
        }
    }
    return result;
}
