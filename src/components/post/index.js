export function renderPosts(data){
    const source = document.getElementById("post-template").innerHTML;
    let template = Handlebars.compile(source);
    let html = template(data);
    
    let container = document.getElementById("container");
    container.innerHTML = html;
}