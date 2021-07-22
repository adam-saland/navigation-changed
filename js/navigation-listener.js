document.addEventListener('DOMContentLoaded', () => {
    async function bindListeners() {
        if (fin.me.isWindow) {
            const views = await fin.me.getCurrentViews();
            let originalUrls = []
            let newUrl = '';
            let originalUrl ='';
            views.forEach(async (view) => {
                const viewInfo = await view.getInfo();
                if (!(viewInfo.canNavigateBack && viewInfo.canNavigateForward)) {
                    originalUrls.push(viewInfo.url)
                }
            })
            console.log(originalUrls);
            fin.System.on('view-resource-response-received', async (e) => {
                console.log(e)
                originalUrl = originalUrls.find((url) => url === e.newUrl)
                console.log(originalUrl)
                if (!originalUrl) {
                    newUrl = e.newUrl;
                }
            })
            if (newUrl) { return newUrl } else { return originalUrl}
        }
    }
    bindListeners().then(console.log)
})