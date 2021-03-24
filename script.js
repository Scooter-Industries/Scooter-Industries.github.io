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
    $.get("https://fn-api.com/api/shop_categories", function(data, status) {
        if (status == "success"){
            var sectionList = "";
            for (sectionDict in data["shopCategories"]){
                for (sectionName in sectionDict["sectionList"]){
                    sectionList = sectionList + `\n${sectionName}`
                }
            }
            $("sections").text("Currently Active:" + sectionList)
        };
    });
});