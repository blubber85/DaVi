
// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.


var data = [
    ['ch-fr', getGB(responseJson,"FR")],
    ['ch-ne', getGB(responseJson,"NE")],
    ['ch-ag', getGB(responseJson,"AG")],
    ['ch-lu', getGB(responseJson,"LU")],
    ['ch-7', getGB(responseJson,"NW")],
    ['ch-vs', getGB(responseJson,"VS")],
    ['ch-sg', getGB(responseJson,"SG")],
    ['ch-ar', getGB(responseJson,"AR")],
    ['ch-ti', getGB(responseJson,"TI")],
    ['ch-gl', getGB(responseJson,"GL")],
    ['ch-gr', getGB(responseJson,"GR")],
    ['ch-sz', getGB(responseJson,"SZ")],
    ['ch-tg', getGB(responseJson,"TG")],
    ['ch-sh', getGB(responseJson,"SH")],
    ['ch-ur', getGB(responseJson,"UR")],
    ['ch-zh', getGB(responseJson,"ZH")],
    ['ch-zg', getGB(responseJson,"ZG")],
    ['ch-vd', getGB(responseJson,"VD")],
    ['ch-3306', getGB(responseJson,"BL")],
    ['ch-be', getGB(responseJson,"BE")],
    ['ch-bs', getGB(responseJson,"BS")],
    ['ch-so', getGB(responseJson,"SO")],
    ['ch-nw', getGB(responseJson,"NW")],
    ['ch-ai', getGB(responseJson,"AI")],
    ['ch-ge', getGB(responseJson,"GE")],
    ['ch-ju', getGB(responseJson,"JU")]
];





// Create the chart
Highcharts.mapChart('mapcontainer', {
    chart: {
        map: 'countries/ch/ch-all',
        zoomType : false
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

    exporting: { enabled: false },


    series: [{
        data: data,
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



