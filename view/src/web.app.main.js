// Coded by DosX [kay-software.ru] 

if (document.domain != app_domain) {location="/";}

const params = new URLSearchParams(document.location.search);
const ArticleName = params.get('doc');
if (ArticleName == null) {
    OnLoadError();
}
with (ArticleName) {
    switch(true){
        case includes("/"):
        case includes("\\"):
            OnLoadError();
            break;
    }
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
    let Property = source.split('\n');

    let _AuthorParam = "author_name:";
    let _NameParam = "article_name:";
    let _DateParam = "publication_date:";
    let _Author = Property[2].split("=")[0];
    let _AuthorURL = Property[2].split("=")[1];
    let _Name = Property[3]; let _Date = Property[4];
    if (_Author.includes(_AuthorParam)) {SetAuthor(_Author.replace(_AuthorParam, "").trim(), _AuthorURL);} else {OnLoadError();}
    if (_Name.includes(_NameParam)) {SetArticleName(_Name.replace(_NameParam, "").trim());} else {OnLoadError();}

    let pub_date, pub_str
    if (_Date.includes(_DateParam)) {
        pub_date = _Date.replace(_DateParam, "").trim();
        pub_str = _PublicationDate.replace("{%s}", pub_date)
    } else {OnLoadError();}

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