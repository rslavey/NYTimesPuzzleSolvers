javascript: (() => {
    var a = document.createEvent('MouseEvents');
    a.initEvent('mousedown', true, true);
    var w = window.gameData.today.answers;
    var c = new Array();
    var b = document.getElementsByClassName('cell-letter');
    for (var i = 0; i < b.length; i++) {
        c.push({ letter: document.getElementsByClassName('cell-letter')[i].innerHTML, ob: document.getElementsByClassName('cell-letter')[i].parentNode.childNodes[0] });
    }
    for (var i = 0; i < w.length; i++) {
        for (var l = 0; l < w[i].length; l++) {
            c.filter(x => x.letter == w[i][l])[0].ob.dispatchEvent(a);
        }
        document.getElementsByClassName('hive-action__submit')[0].dispatchEvent(a);
    }
})();