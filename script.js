$(document).ready(function() {
    $.get("https://fortnite-api.com/v2/news", function(data, status) {
        if (status == "success"){
            var lastUpdate = data["data"]["br"]["date"];
            lastUpdate = lastUpdate.replaceAll("T"," ");
            lastUpdate = lastUpdate.replaceAll("Z","");
            $("#news").attr("src", data["data"]["br"]["image"]);
            $("#lastUpdated").text("Last Updated: "+lastUpdate)
        };
    });
    $.get("https://fort-api.com/shop/sections", function(data, status) {
        if (status == "success"){
            $("#sections").html(data.join("<br>"));
        };
    });
});