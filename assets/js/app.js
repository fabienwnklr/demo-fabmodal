document.getElementById('toggleTheme').addEventListener('change', function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (document.getElementById('theme_css').href.search('default') !== -1) {
        document.getElementById('theme_css').href = 'assets/css/darkly.css';
    } else {
        document.getElementById('theme_css').href = 'assets/css/default.css';
    }
});