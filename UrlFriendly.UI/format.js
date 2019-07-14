
var fn_formatText = (function () {
    var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç .%_&#;,:?!'\\\/\'\'\"\"<=>{}[]()«®€¦™©∼≈≡≥√∞∨∪∴≅≠≤⊂⊄⊇⊗°|¬¿¡+^*´!@",
        to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc---------------------------------------------------------------------",
        mapping = {};

    for (var i = 0, j = from.length; i < j; i++)
        mapping[from.charAt(i)] = to.charAt(i);

    return function (str) {
        var ret = [];
        for (var i = 0, j = str.length; i < j; i++) {
            var c = str.charAt(i);
            if (mapping.hasOwnProperty(str.charAt(i)))
                ret.push(mapping[c]);
            else
                ret.push(c);
        }
        return ret.join('').toLowerCase();
    }
})();


function slugify(palabra) {
    var palabra
    var a = 0;
    var i = 0;
    var word = '', u = '';
    while (i < palabra.length) {
        if (palabra.charAt(i) != '-') {
            word = word + (a >= 1 ? u + palabra.charAt(i) : palabra.charAt(i));
            a = 0;

        } else {
            a = a + 1;
            u = '-';
        }

        i++;
        console.log(palabra.charAt(i));
    }
    var res = word.substr(1, word.length);
    return (res);
    //return text.toString().toLowerCase();
};

alert(slugify(fn_formatText('  ?¿¡!    hola niño       <>>>>>>>>>>>>>>>::::::::::::||°°¬¬:::..............,,,,,,,,,,,,,;;;;;;;;;;;;;;;[[[[]]]]}}}}}{{{{{{{++´+´´+++\'\'\'´+´+´^^+´++´´                          __%%_ @ \'cantame\' una canción ÑaÑitA.()..================""..*.+.')));