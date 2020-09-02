window.addEventListener('load', function () {
    if (window.localStorage.getItem('darkly')) {
        document.getElementById('theme_css').href = 'assets/css/darkly.css';
    }
})

document.getElementById('changeTheme').addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (document.getElementById('theme_css').href.search('default') !== -1) {
        document.getElementById('theme_css').href = 'assets/css/darkly.css';
        window.localStorage.setItem('darkly', 'true');
    } else {
        document.getElementById('theme_css').href = 'assets/css/default.css';
        window.localStorage.clear();
    }
});

let defaultContent = `
    <p>
        You like this modal ? You can use FabModal function on console using for example :</p>
    <p>
        <code class="border rounded shadow-sm p-1">
        defaultModal.startLoader();
        </code> 
        then 
        <code class="border rounded shadow-sm p-1">
        defaultModal.resetContent();
        </code>
    </p>
`;
document.getElementById('default').addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    window.defaultModal = new FabModal({
        title: 'Default FabModal',
        content: defaultContent
    });
});

let timeoutContent = `
    <p>(15 sec.) Timeout can be pause on hover with option pauseOnHover: <code>true</code> or on calling to function : </p> 
    <p class="d-flex align-items-center justify-center flex-column">
        <button onclick="timeoutModal.pauseProgress();" class="btn btn-secondary">
            FabModal.pauseProgress();
        </button> 
        then 
        <button onclick="timeoutModal.resumeProgress();" class="btn btn-secondary">
            FabModal.resumeProgress();
        </button>
        or 
        <button onclick="timeoutModal.startProgress(6000);" class="btn btn-secondary">
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
        content: timeoutContent
    });
});

document.getElementById('iframe').addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    window.iframeModal = new FabModal({
        title: 'iFrame Modal',
        isIframe: true,
        iframeURL: 'https://www.youtube.com/embed/HSsqzzuGTPo',
    })
});