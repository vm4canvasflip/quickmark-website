//Page is loaded - start preparing the content
window.addEventListener("load", function () {

    //Prepare the variables 
    cID = getParameterByName("cid");
    sharerName = getParameterByName("sname");
    sharedCollection = getParameterByName("cname");

    // Load in the UI
    document.getElementById("sharerName").textContent = sharerName;
    document.getElementById("collName").textContent = sharedCollection;


})


function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}