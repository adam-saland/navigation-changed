document.addEventListener('DOMContentLoaded', () => {

    let originalUrl = '';
    let newUrl = '';

    fin.System.on('view-resource-response-received', async (e) => {
        
        // Wrap the view of the resource received 
        const view = fin.View.wrapSync(e.viewIdentity);
        
        // Get the view instance info object
        const viewInfo = await view.getInfo();
        
        // Determine whether the view has been navigated, if not set the current url, if it has set the latest resource received.
        if (!viewInfo.canNavigateBack && !viewInfo.canNavigateForward) {
            originalUrl = e.originalUrl;
            console.log("ORIGINAL URL", originalUrl)
        } else {
            newUrl = e.newUrl;
            console.log("NEW URL", newUrl)
        }
    })
})