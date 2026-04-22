/**
 * Controle do Vídeo VSL
 */
function initVideoControl() {
    const vslCover = document.getElementById('vsl-cover');
    if (!vslCover) return;

    vslCover.addEventListener('click', function () {
        const wrapper = document.getElementById('video-vsl');
        const iframe = document.getElementById('vsl-iframe');

        if (!wrapper || !iframe) return;

        // Adiciona classe para esconder a capa
        wrapper.classList.add('is-playing');

        // Ativa o autoplay no iframe
        let currentSrc = iframe.src;
        if (currentSrc.indexOf('autoplay=1') === -1) {
            iframe.src = currentSrc + (currentSrc.indexOf('?') === -1 ? '?' : '&') + 'autoplay=1';
        }
    });
}

/**
 * Encaminhamento de parâmetros de URL para links da Hotmart
 */
function initUrlParamsForwarding() {
    const urlParams = window.location.search;
    if (!urlParams) return;

    const links = document.querySelectorAll('a[href*="hotmart.com"]');
    links.forEach(link => {
        if (!link.href.includes(urlParams.substring(1))) {
            const separator = link.href.indexOf('?') !== -1 ? '&' : '?';
            link.href = link.href + separator + urlParams.substring(1);
        }
    });
}

// Inicialização
window.addEventListener('load', function () {
    initVideoControl();
    
    // Pequeno delay para garantir que outros scripts carregaram
    setTimeout(initUrlParamsForwarding, 1000);
});
