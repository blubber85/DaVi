function createUrl(obj) {
    url = "https://opendata.swisscom.com/api/records/1.0/search/?dataset=effektiver-datendownload-pro-kanton-und-stunde-de&rows=30&facet=canton&refine.timestamp_hour=";
    url += obj.date;
    url += "T" + obj.time;
    return url;
};

function getDateTimeStr(obj) {
    return obj.date + " " + obj.time + ":00 Uhr";
}

function getGB(json, canton) {
    var ret = false;
    json["records"].some(element => {
        if (element.fields.canton.toLowerCase() == canton.toLowerCase()) {
            var count = element.fields.effective_bytes_down_per_canton_per_hour_gb;
            //console.log(element.fields.canton + " " + count);
            ret = count;
        }
    });

    return Math.round(ret * 100) / 100;
}

var jqueryGet = $.get("https://opendata.swisscom.com/api/records/1.0/search/?dataset=effektiver-datendownload-pro-kanton-und-stunde-de&rows=30&facet=canton&refine.timestamp_hour=2017-07-25T20",function(data){
    console.log("jquery get: ");
    console.log(data);



});


function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
}

var time = {date: "2017-07-25", time: "20"};
var url = createUrl(time);
console.log("url: "+url);
responseJson = httpGet(url);


function rangeChange() {
    var val = document.getElementById("rangeHour").value;
    var hour = val;
    //document.getElementById("uhrzeit").value= "Uhrzeit "+val;
    if (val > 9) {
        val = val + ":00";
    } else {
        hour = "0" + val;
        val = "0" + val + ":00";

    }
    $("#uhrzeit").text("Uhrzeit " + val);
    console.log("Uhrzeit " + val);
    time.time = hour;
    responseJson = httpGet(createUrl(time));
    console.log(responseJson);
    data = reloadCardData();
    chart.series[0].setData(data, true);
    chart.redraw();
}

async function diashow() {
    for (hour = 1; hour < 24; hour++) {
        if (hour < 10) {
            hourString = "0" + hour + ":00";
            time.time = "0" + hour;
        } else {
            hourString = hour + ":00";
            time.time = hour;
        }
        $("#uhrzeit").text("Uhrzeit " + hourString);
        responseJson = httpGet(createUrl(time));
        if (responseJson["nhits"] == 27) {
            data = reloadCardData();
            chart.series[0].setData(data, true);
            chart.series[0].setName(getDateTimeStr(time), true);
            chart.redraw();
            $("#rangeHour").val(hour);
            await sleep(2000);
        }else{
            console.log("Keine Daten für {}",time);
            await sleep(2000);
        }
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function reloadCardData() {
    var data = [
        ['ch-fr', getGB(responseJson, "FR")],
        ['ch-ne', getGB(responseJson, "NE")],
        ['ch-ag', getGB(responseJson, "AG")],
        ['ch-lu', getGB(responseJson, "LU")],
        ['ch-7', getGB(responseJson, "NW")],
        ['ch-vs', getGB(responseJson, "VS")],
        ['ch-sg', getGB(responseJson, "SG")],
        ['ch-ar', getGB(responseJson, "AR")],
        ['ch-ti', getGB(responseJson, "TI")],
        ['ch-gl', getGB(responseJson, "GL")],
        ['ch-gr', getGB(responseJson, "GR")],
        ['ch-sz', getGB(responseJson, "SZ")],
        ['ch-tg', getGB(responseJson, "TG")],
        ['ch-sh', getGB(responseJson, "SH")],
        ['ch-ur', getGB(responseJson, "UR")],
        ['ch-zh', getGB(responseJson, "ZH")],
        ['ch-zg', getGB(responseJson, "ZG")],
        ['ch-vd', getGB(responseJson, "VD")],
        ['ch-3306', getGB(responseJson, "BL")],
        ['ch-be', getGB(responseJson, "BE")],
        ['ch-bs', getGB(responseJson, "BS")],
        ['ch-so', getGB(responseJson, "SO")],
        ['ch-nw', getGB(responseJson, "NW")],
        ['ch-ai', getGB(responseJson, "AI")],
        ['ch-ge', getGB(responseJson, "GE")],
        ['ch-ju', getGB(responseJson, "JU")]
    ];
    console.log("data: {}",data);
    return data;
}


// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.





// Create the chart
var chart = Highcharts.mapChart('mapcontainer', {
    chart: {
        map: 'countries/ch/ch-all',
        zoomType: false
    },

    title: {
        text: undefined
    },
    /*
        subtitle: {
            text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/ch/ch-all.js">Switzerland</a>'
        },*/

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    exporting: {enabled: false},


    series: [{
        data: reloadCardData(),
        name: getDateTimeStr(time),
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});



