javascript: (() => {
    var a = document.createEvent('MouseEvents');
    a.initEvent('click', true, true);
    var kb = document.getElementsByClassName('su-keyboard__container')[0].childNodes;
    var p = window.location.pathname;
    var d = window.gameData;
    var s = p.indexOf('hard') >= 0 ? d.hard.puzzle_data.solution : p.indexOf('medium') >= 0 ? d.medium.puzzle_data.solution : d.easy.puzzle_data.solution;
    for (var i = 0; i < s.length; i++) {
        document.querySelector(`[data-cell="${i}"]`).dispatchEvent(a);
        kb[s[i] - 1].dispatchEvent(a);
    }
})();