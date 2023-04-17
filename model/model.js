export function getRoute() {
    let hashID = window.location.hash;
    let pageID = hashID.replace("#","");

    if (pageID != ""){
        $.get(`pages/${pageID}.html`, function(data){
            $("#app").html(data);
        });
    } else {
        $.get(`pages/home.html`, function(data){
            $("#app").html(data);
        })
    }
}