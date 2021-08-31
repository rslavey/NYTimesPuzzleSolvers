javascript: (() => {
    function k(e, f) {
        var o = document.createEvent("Events");
        o.initEvent("keydown", true, true);
        o.which = f;
        o.keyCode = f;
        e.dispatchEvent(o);
    }
    var gd = JSON.parse(decodeURIComponent(atob(window.gameData))).puzzle_data.replace(/[^A-Z]/gi, '');
    var grids = document.getElementsByClassName('ax-grid__square clue-blank');
    for (var i = 0; i < grids.length; i++) {
        k(grids[i], gd[parseInt(grids[i].querySelector('.ax-grid__blank-number').innerText) - 1].charCodeAt(0));
    }
})();