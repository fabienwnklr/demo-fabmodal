document.getElementById('changeTheme').addEventListener('change', function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (document.getElementById('theme_css').href.search('default') !== -1) {
        document.getElementById('theme_css').href = 'assets/css/darkly.css';
    } else {
        document.getElementById('theme_css').href = 'assets/css/default.css';
    }
});

document.getElementById('default').addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    window.defaultModal = new FabModal({
        title: 'Default FabModal',
        content : '<p>You like this modal ? You can use FabModal function on console using for example :</p> <p><code class="border rounded shadow-sm p-1">defaultModal.startLoader();</code> then <code class="border rounded shadow-sm p-1">defaultModal.resetContent();</code></p>'
    });
})

var timeoutContent = `
    <p>(15 sec.) Timeout can be pause on hover with option pauseOnHover: <code>true</code> or on calling to function : </p> 
    <p class="d-flex align-items-center justify-center">
        <button onclick="timeoutModal.pauseProgress();" class="border rounded shadow-sm p-1">
            FabModal.pauseProgress();
        </button> 
        then 
        <button onclick="timeoutModal.resumeProgress();" class="border rounded shadow-sm p-1">
            FabModal.resumeProgress();
        </button>
        or 
        <button onclick="timeoutModal.startProgress(6000);" class="border rounded shadow-sm p-1">
            FabModal.startProgress(6000);
        </button>
    </p>
`;
document.getElementById('timeout').addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    
    window.timeoutModal = new FabModal({
        title: 'Timeout close',
        timeout: 15000,
        timeoutProgressBar: true,
        content : timeoutContent
    });
})

document.getElementById('iframe').addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    window.iframeModal = new FabModal({
        title: 'iFrame Modal',
        isIframe: true,
        iframeURL: 'https://www.youtube.com/embed/HSsqzzuGTPo',
    })
})