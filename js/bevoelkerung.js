bevoelerkung = {
    "url": "https://www.bfs.admin.ch/bfs/de/home/statistiken/regionalstatistik/regionale-portraets-kennzahlen/kantone.assetdetail.4662815.html",
    "jahr": "2016",
    "multiplikator": 1000,
    "data": [
        {
            "kt": "zh",
            "einwohner": 1487.969
        },
        {
            "kt": "be",
            "einwohner": 1026.5
        },
        {
            "kt": "lu",
            "einwohner": 403.4
        },
        {
            "kt": "ur",
            "einwohner": 36.1
        },
        {
            "kt": "sz",
            "einwohner": 155.9
        },
        {
            "kt": "ow",
            "einwohner": 37.4
        },
        {
            "kt": "nw",
            "einwohner": 42.6
        },
        {
            "kt": "gl",
            "einwohner": 40.1
        },
        {
            "kt": "zg",
            "einwohner": 123.9
        },
        {
            "kt": "fr",
            "einwohner": 311.9
        },
        {
            "kt": "so",
            "einwohner": 269.4
        },
        {
            "kt": "bs",
            "einwohner": 193.1
        },
        {
            "kt": "bl",
            "einwohner": 285.6
        },
        {
            "kt": "sh",
            "einwohner": 80.8
        },
        {
            "kt": "ar",
            "einwohner": 55.0
        },
        {
            "kt": "ai",
            "einwohner": 16.0
        },
        {
            "kt": "sg",
            "einwohner": 502.6
        },
        {
            "kt": "gr",
            "einwohner": 197.6
        },
        {
            "kt": "ag",
            "einwohner": 663.5
        },
        {
            "kt": "tg",
            "einwohner": 270.7
        },
        {
            "kt": "ti",
            "einwohner": 354.4
        },
        {
            "kt": "vd",
            "einwohner": 784.8
        },
        {
            "kt": "vs",
            "einwohner": 339.2
        },
        {
            "kt": "ne",
            "einwohner": 178.6
        },
        {
            "kt": "ge",
            "einwohner": 489.5
        },
        {
            "kt": "ju",
            "einwohner": 73.1
        }
    ]
};

function einwohner(canton){
    let ret = 0;
    for (i = 0; i < bevoelerkung.data.length; i++){
        if(canton == bevoelerkung.data[i]["kt"]){
            console.log(bevoelerkung.data[i]);
            return bevoelerkung.data[i]["einwohner"];

        }
    }
}