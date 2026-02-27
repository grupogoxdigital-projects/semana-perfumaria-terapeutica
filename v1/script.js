// Carregamento dinâmico de módulos (Performance)
function setupImageFallback() {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        const fixImage = (img) => {
            if (img.src.includes('/.netlify/images')) {
                const urlParams = new URLSearchParams(img.src.split('?')[1]);
                const originalUrl = urlParams.get('url');
                if (originalUrl) {
                    img.src = decodeURIComponent(originalUrl);
                }
            }
        };

        // Fix existing images
        document.querySelectorAll('img[src^="/.netlify/images"]').forEach(fixImage);

        // Fix future images (dynamic)
        const observer = new MutationObserver((mutations) => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.tagName === 'IMG') fixImage(node);
                    else if (node.querySelectorAll) {
                        node.querySelectorAll('img[src^="/.netlify/images"]').forEach(fixImage);
                    }
                });
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }
}

// Iniciar fallback imediatamente
setupImageFallback();

