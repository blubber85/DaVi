function rangeChange() {
    let hour = $("#rangeHour").val();
    $("#numberHour").val(hour);
    let day = $("#rangeDay").val();
    $("#numberDay").val(day);
    update();
}

function animateDateTimeObj() {
    $("#dateTime")
        .animate({fontSize: "2em", color: "red"}, "slow")
        .delay(300)
        .animate({fontSize: "1.5em", color: "black"}, "slow");

}

function calculatePopulation() {
    console.log("perBevoelkerung");
    $("#perBevoelkerung").toggleClass("btn-danger").toggleClass("btn-primary");
    //$("#perBevoelkerung").removeClass("btn-danger").addClass("btn-primary");
}

function numberChange() {
    let hour = $("#numberHour").val();
    $("#rangeHour").val(hour);
    let day = $("#numberDay").val();
    $("#rangeDay").val(day);
    update();
}

function update() {
    let dateTimeObj = {date: "2017-07-", time: "20"};
    let hour = $("#rangeHour").val();
    let time;
    if (hour > 9) {
        dateTimeObj.time = hour;
        time = hour + ":00";
    } else {
        dateTimeObj.time = "0" + hour;
        time = "0" + hour + ":00";
    }
    $("#time").text("Uhrzeit " + time);
    console.log("Uhrzeit " + time);
    let day = $("#rangeDay").val();
    if (day > 9) {
        dateTimeObj.date += day;
    } else {
        dateTimeObj.date += "0" + day;
    }
    let d = new Date(2017, 7, day, 10, 0, 0, 0);
    let weekday = new Array(7);
    weekday[0] = "Sonntag";
    weekday[1] = "Montag";
    weekday[2] = "Dienstag";
    weekday[3] = "Mittwoch";
    weekday[4] = "Donnerstag";
    weekday[5] = "Freitag";
    weekday[6] = "Samstag";
    let n = weekday[d.getDay()];
    $("#day").text("Datum:  " + dateTimeObj.date + " " + n + ",");
    animateDateTimeObj();
    console.log("Tag " + day);
    requestData(dateTimeObj);
    einwohner("tg");
}


function getDateTimeStr() {
    console.log("getDateTimeStr");
    let hour = $("#rangeHour").val();
    let time;
    if (hour > 9) {
        time = hour + ":00";
    } else {
        time = "0" + hour + ":00";
    }
    let day = $("#rangeDay").val();
    let date = "2017-07-";
    if (day > 9) {
        date += day;
    } else {
        date += "0" + day;
    }
    return date + " " + time;
}

function requestData(dateTimeObj) {
    let url = "https://opendata.swisscom.com/api/records/1.0/search/?dataset=effektiver-datendownload-pro-kanton-und-stunde-de&rows=30&facet=canton&refine.timestamp_hour=";
    url += dateTimeObj.date;
    url += "T" + dateTimeObj.time;
    console.log("url: " + url);

    $.get(url, function (data) {
        let cantons = [
            ['ch-fr', getGB(data, "FR")],
            ['ch-ne', getGB(data, "NE")],
            ['ch-ag', getGB(data, "AG")],
            ['ch-lu', getGB(data, "LU")],
            ['ch-7', getGB(data, "NW")],
            ['ch-vs', getGB(data, "VS")],
            ['ch-sg', getGB(data, "SG")],
            ['ch-ar', getGB(data, "AR")],
            ['ch-ti', getGB(data, "TI")],
            ['ch-gl', getGB(data, "GL")],
            ['ch-gr', getGB(data, "GR")],
            ['ch-sz', getGB(data, "SZ")],
            ['ch-tg', getGB(data, "TG")],
            ['ch-sh', getGB(data, "SH")],
            ['ch-ur', getGB(data, "UR")],
            ['ch-zh', getGB(data, "ZH")],
            ['ch-zg', getGB(data, "ZG")],
            ['ch-vd', getGB(data, "VD")],
            ['ch-3306', getGB(data, "BL")],
            ['ch-be', getGB(data, "BE")],
            ['ch-bs', getGB(data, "BS")],
            ['ch-so', getGB(data, "SO")],
            ['ch-nw', getGB(data, "NW")],
            ['ch-ai', getGB(data, "AI")],
            ['ch-ge', getGB(data, "GE")],
            ['ch-ju', getGB(data, "JU")]
        ];
        console.log(cantons);
        chart.series[0].setData(cantons, true);
        chart.series[0].setName(getDateTimeStr(), true);
        chart.redraw();
    });
}

function getGB(json, canton) {
    let ret = false;
    json["records"].some(element => {
        if (element.fields.canton.toLowerCase() == canton.toLowerCase()) {
            let count = element.fields.effective_bytes_down_per_canton_per_hour_gb;
            //console.log(element.fields.canton + " " + count);
            ret = count;
        }
    });
//    ret = ret / einwohner(canton.toLowerCase());
    return Math.round(ret * 100) / 100;
}

$(document).ready(function () {
    console.log("ready");
    rangeChange();
});

let chart = Highcharts.mapChart('mapcontainer', {
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
        data: [
            ['ch-fr', 0],
            ['ch-ne', 0],
            ['ch-ag', 0],
            ['ch-lu', 0],
            ['ch-7', 0],
            ['ch-vs', 0],
            ['ch-sg', 0],
            ['ch-ar', 0],
            ['ch-ti', 0],
            ['ch-gl', 0],
            ['ch-gr', 0],
            ['ch-sz', 0],
            ['ch-tg', 0],
            ['ch-sh', 0],
            ['ch-ur', 0],
            ['ch-zh', 0],
            ['ch-zg', 0],
            ['ch-vd', 0],
            ['ch-3306', 0],
            ['ch-be', 0],
            ['ch-bs', 0],
            ['ch-so', 0],
            ['ch-nw', 0],
            ['ch-ai', 0],
            ['ch-ge', 0],
            ['ch-ju', 0]
        ],
        name: getDateTimeStr(),
        states: {
            hover: {
                color: '#FFDA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});

