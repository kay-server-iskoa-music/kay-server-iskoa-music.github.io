if (document.domain != app_domain) {location="/";}

const params = new URLSearchParams(document.location.search);
const ArticleName = params.get('doc');
if (ArticleName == null) {
    OnLoadError();
}
if (ArticleName.includes("/")) {
    OnLoadError();
}
if (ArticleName) {
fetch(content + ArticleName + "." + content_data)
.then(response => response.text())
.then(code => load(code));
} else {
    OnLoadError();
}
function load(source) {
    let X = document.getElementById("web.container.article");
    let Prop = source.split('\n');
    SetAuthor(Prop[2].split("=")[0].replace("author_name: ", ""), Prop[2].split("=")[1]);
    SetArticleName(Prop[3].replace("article_name: ", ""));
    let pub_date = Prop[4].replace("publication_date: ", "");
    let pub_str = _PublicationDate.replace("{%s}", pub_date)

    if (source.includes("__article__")) {

        X.innerHTML = pub_str + source;
    } else {
        OnLoadError();
    }
}
function SetAuthor(name, url) {
    let X = document.getElementById("author");
    X.innerHTML = `<a target="_blank" href="` + url + `">` + name + `</a>`;
}
function SetArticleName(name) {
    let X = document.getElementById("name");
    document.title = name + " - " + document.domain;
    X.innerHTML = name;
}
function OnLoadError() {
    let Y = document.getElementById("web.container");
    document.title = _OnLoadErrorT + document.domain;
    Y.innerHTML = _OnLoadError;
}