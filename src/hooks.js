export function usePageRender(page, callback) {
    let isDone = false;
    setInterval(() => {
        if (page.isRendered && !isDone){
            callback();
            isDone = true;
        } else if (!page.isRendered){
            isDone = false;
        }
    }, 10);
}
