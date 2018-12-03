#Spezifizierung der Daten


Für die Visualisierung wird der Datensatz Effektiver Datendownload pro Kanton und Stunde (Juli 2017) von 
[opendata.swisscom.com](https://opendata.swisscom.com/explore/dataset/effektiver-datendownload-pro-kanton-und-stunde-de/api/?disjunctive.canton "Daten") 
verwendet. Der Datensatz ist frei verfügbar. 
Er enthält 20088 Einträge für die 26 Kantone + Liechtenstein (insgesamt 27). Somit sind pro Kanton 744 Einträge vorhanden.

##Beispiel eines Datensatzes
```json
{
  "nhits":20088,
  "parameters":{
    "dataset":[
      "effektiver-datendownload-pro-kanton-und-stunde-de"
    ],
    "timezone":"UTC",
    "rows":1,
    "format":"json"
  },
  "records":[
    {
      "datasetid":"effektiver-datendownload-pro-kanton-und-stunde-de",
      "recordid":"904e8afd74ef07a0bd4ca5a5c5108f65beffe0a3",
      "fields":{
        "effective_bytes_down_per_canton_per_hour_gb":28.824870626442134,
        "effective_bytes_down_per_canton_per_hour_bytes":30950469163,
        "timestamp_hour":"2017-07-11T17:00:00+00:00",
        "canton":"AI"
      },
      "record_timestamp":"2017-10-19T07:10:11+00:00"
    }
  ]
}
```
Pro Eintrag ist jeweils der effektive Download in Bytes sowie in GB angegeben. Zusätzliche Informationen sind der Kanton sowie einen Timestamp.

##Abruf & Export der Daten
Die Daten können per CSV, JSON oder Excel exportiert werden. Zusätzlich kann ebenfalls die API Schnittstelle verwendet werden. 
Die API eignet sich besonders, wenn man bereits vorsortierte Daten will (bspw. alle Kantone eines Zeitpunktes).

##Woher stammen die Daten
Der Datensatz beruht auf allen mobilen Daten der Swisscom in diesem Zeitraum. Jeder Antennenstandort wurde dem Kanton zugezählt in dem er steht.

##Anzusprechende Zielgruppe mit der Visualisierung

Mit der Visualisierung sollen alle Personen angesprochen werden, die ein technisches Flair haben und mit den Zahlen etwas anfangen können. 


##Erkenntnisse der Visualisierung

Anhand der Visualisierung soll der verschiedene Gebrauch des Internets zwischen den Kantonen dargestellt werden. Daraus kann man auf das Verhalten der Bewohner im jeweiligen Kanton schliessen. Bspw. können Hypothesen erstellt werden, bei welchen Kantonen die Bewohner früher ins Bett gehen.


##Prototyp
Ein erster
[Prototyp](http://zueger.li/davi2/html/index.html "Daten") 
kann hier begutachtet werden.

##Validierung
Mit Hilfe der Anzahl lebender Personen pro Kanton, kann die Downloadmenge pro Kopf/Kanton ausgerechnet werden. In dieser Ansicht zeigt sich ein homogenes Bild der Downloadmenge ab. 
Folgende Fragenstellungen bleiben:
* Ist die prozentuale Anzahl Abonennten pro Kanton in etwa gleich oder
* Ist die prozentuale Anzahl Abonennten in den ländlichen Kantonen grösser, dafür wird in den stätischen Kantonen mehr Daten bezogen? (Kann natürlich auch umgekehrt sein)

##Source Code
Der Source Code kann auf [GitHub](https://github.com/blubber85/DaVi/) eingesehen werden.