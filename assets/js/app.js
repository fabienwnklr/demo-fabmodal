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
        Current options :
        <pre class="ft-syntax-highlight" data-syntax="js" data-syntax-theme="one-dark" data-ui-theme="" data-showtooltips="true">
            <code>
            <span class="keyword">const</span> <span class="identifier-constant">defaultContent</span> = <span class="value">'my default content'</span>;
            { 
                <span class="property">title</span>: <span class="value">'Default FabModal</span>,
                <span class="property">content</span>: <span class="identifier-constant">defaultContent</span>
            }
            </code>
        </pre>
    <p>
    <p>
        You like this modal ? You can use FabModal function on console using for example :</p>
    <p>
        <pre class="ft-syntax-highlight" data-syntax="js" data-syntax-theme="one-dark" data-ui-theme="" data-showtooltips="true">
            <code class="">
            <span class="identifier-class">defaultModal</span>.<span class="identifier-udf">startLoader()</span>;
            <span class="comment">// then</span>
            <span class="identifier-class">defaultModal</span>.<span class="identifier-udf">resetContent()</span>;
            </code>
        </pre>
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
    <p>
    Current options :
    <pre class="ft-syntax-highlight" data-syntax="js" data-syntax-theme="one-dark" data-ui-theme="simple" data-showtooltips="true">
        <code>
            <span class="keyword">const</span> <span class="identifier-constant">timeoutContent</span> = <span class="value">'my timeout content'</span>;
            { 
                <span class="property">title</span>: <span class="value">'Timeout close'</span>,
                <span class="property">timeout</span>: <span class="unit">15000</span>,
                <span class="property">timeoutProgressBar</span>: <span class="boolean">true</span>,
                <span class="property">content</span>: <span class="identifier-constant">timeoutContent</span>
            }
        </code>
    </pre>
    <p>
    <p>(15 sec.) Timeout can be pause on hover with option pauseOnHover: <code>true</code> or on calling to function : </p> 
    <pre class="ft-syntax-highlight" data-syntax="js" data-syntax-theme="one-dark" data-ui-theme="simple" data-showtooltips="true">
        <code>
            <span class="comment">// Click on function, it work !</span>
            <a onclick="timeoutModal.pauseProgress();" class="btn btn-secondary p-2 m-0 shadow-none text-lowercase">FabModal.pauseProgress();</a> 
            <span class="comment">// then</span> 
            <a onclick="timeoutModal.resumeProgress();" class="btn btn-secondary p-2 m-0 shadow-none text-lowercase">FabModal.resumeProgress();</a>
            <span class="comment">// or</span> 
            <a onclick="timeoutModal.startProgress(6000);" class="btn btn-secondary p-2 m-0 shadow-none text-lowercase">FabModal.startProgress(6000);</a>
        </code>
    </pre>
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

document.getElementById('fullscreen').addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    window.fullscreenModal = new FabModal({
        title: 'FullScreen Modal',
        isFullScreen: true,
        content: 'Full screen..'
    })
});

let allOptionsContent = `
     <div class="d-flex align-items-center justify-center flex-column">
        <button onclick="allOptionsModal.pauseProgress();" class="btn btn-secondary">
            FabModal.pauseProgress();
        </button> 
        then 
        <button onclick="allOptionsModal.resumeProgress();" class="btn btn-secondary">
            FabModal.resumeProgress();
        </button>
        or 
        <button onclick="allOptionsModal.startProgress(6000);" class="btn btn-secondary">
            FabModal.startProgress(6000);
        </button>
    </div>
`;
document.getElementById('all').addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    window.allOptionsModal = new FabModal({
        title: 'All options',
        timeoutProgressBar: true,
        content: allOptionsContent
    })
})