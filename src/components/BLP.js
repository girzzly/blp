import React from 'react';
import ReactDOM from 'react-dom';
import jsonObjectStatistics from './data/STATISTIC.json';
import jsonObjectDatabase from './data/DATABASE.json';


class BLP extends React.Component {

    constructor(props) {
        super(props);

        this.stats = JSON.stringify(jsonObjectStatistics);
        this.db = JSON.stringify(jsonObjectDatabase);

        this.html = null;

        this.DATABASE_FILE_NAME = "DATABASE.json";
        this.STATISTC_FILE_NAME = "STATISTIC.json";

        this.ICONLINK = [
            "https://derivates.kicker.de/image/fetch/w_60,h_60,c_fit,q_auto:best/https%3A%2F%2Fsecure-mediadb.kicker.de%2F2019%2Ffussball%2Fvereine%2Fxxl%2F10_20191127726.png",    // arminia-bielefeld
            "https://derivates.kicker.de/image/fetch/w_60,h_60,c_fit,q_auto:best/https%3A%2F%2Fsecure-mediadb.kicker.de%2F2019%2Ffussball%2Fvereine%2Fxxl%2F9_20181114991.png",     // bayer-04-leverkusen
            "https://derivates.kicker.de/image/fetch/w_60,h_60,c_fit,q_auto:best/https%3A%2F%2Fsecure-mediadb.kicker.de%2F2009%2Ffussball%2Fvereine%2Fxxl%2F17_20150212741.png",    // borussia-dortmund
            "https://derivates.kicker.de/image/fetch/w_60,h_60,c_fit,q_auto:best/https%3A%2F%2Fsecure-mediadb.kicker.de%2F2016%2Ffussball%2Fvereine%2Fxxl%2F15_20160215335.png",    // bor-moenchengladbach
            "https://derivates.kicker.de/image/fetch/w_60,h_60,c_fit,q_auto:best/https%3A%2F%2Fsecure-mediadb.kicker.de%2F2009%2Ffussball%2Fvereine%2Fxxl%2F32_20150225827.png",    // eintracht-frankfurt
            "https://derivates.kicker.de/image/fetch/w_60,h_60,c_fit,q_auto:best/https%3A%2F%2Fsecure-mediadb.kicker.de%2F2016%2Ffussball%2Fvereine%2Fxxl%2F91_20160502546.png",    // fc-augsburg
            "https://derivates.kicker.de/image/fetch/w_60,h_60,c_fit,q_auto:best/https%3A%2F%2Fsecure-mediadb.kicker.de%2F2018%2Ffussball%2Fvereine%2Fxxl%2F14_20170731800.png",    // fc-bayern-muenchen
            "https://derivates.kicker.de/image/fetch/w_60,h_60,c_fit,q_auto:best/https%3A%2F%2Fsecure-mediadb.kicker.de%2F2009%2Ffussball%2Fvereine%2Fxxl%2F16_20150226713.png",    // 1-fc-koeln
            "https://derivates.kicker.de/image/fetch/w_60,h_60,c_fit,q_auto:best/https%3A%2F%2Fsecure-mediadb.kicker.de%2F2021%2Ffussball%2Fvereine%2Fxxl%2F30_20200804894.png",    // 1-fsv-mainz-05
            "https://derivates.kicker.de/image/fetch/w_60,h_60,c_fit,q_auto:best/https%3A%2F%2Fsecure-mediadb.kicker.de%2F2021%2Ffussball%2Fvereine%2Fxxl%2F62_20210316732.png",    // 1-fc-union-berlin
            "https://derivates.kicker.de/image/fetch/w_60,h_60,c_fit,q_auto:best/https%3A%2F%2Fsecure-mediadb.kicker.de%2F2013%2Ffussball%2Fvereine%2Fxxl%2F29_20150226842.png",    // hertha-bsc
            "https://derivates.kicker.de/image/fetch/w_60,h_60,c_fit,q_auto:best/https%3A%2F%2Fsecure-mediadb.kicker.de%2F2021%2Ffussball%2Fvereine%2Fxxl%2F15778_20200716872.png", // rb-leipzig
            "https://derivates.kicker.de/image/fetch/w_60,h_60,c_fit,q_auto:best/https%3A%2F%2Fsecure-mediadb.kicker.de%2F2013%2Ffussball%2Fvereine%2Fxxl%2F7_20150226260.png",     // sc-freiburg
            "https://derivates.kicker.de/image/fetch/w_60,h_60,c_fit,q_auto:best/https%3A%2F%2Fsecure-mediadb.kicker.de%2F2018%2Ffussball%2Fvereine%2Fxxl%2F82_20170712237.png",    // spvgg-greuther-fuerth
            "https://derivates.kicker.de/image/fetch/w_60,h_60,c_fit,q_auto:best/https%3A%2F%2Fsecure-mediadb.kicker.de%2F2017%2Ffussball%2Fvereine%2Fxxl%2F3209_20160810540.png",  // tsg-hoffenheim
            "https://derivates.kicker.de/image/fetch/w_60,h_60,c_fit,q_auto:best/https%3A%2F%2Fsecure-mediadb.kicker.de%2F2015%2Ffussball%2Fvereine%2Fxxl%2F11_20150226154.png",    // vfb-stuttgart
            "https://derivates.kicker.de/image/fetch/w_60,h_60,c_fit,q_auto:best/https%3A%2F%2Fsecure-mediadb.kicker.de%2F2021%2Ffussball%2Fvereine%2Fxxl%2F8_20200804901.png",     // vfl-bochum
            "https://derivates.kicker.de/image/fetch/w_60,h_60,c_fit,q_auto:best/https%3A%2F%2Fsecure-mediadb.kicker.de%2F2018%2Ffussball%2Fvereine%2Fxxl%2F24_20180318873.png"     // vfl-wolfsburg
        ];

        this.CITIES = [
            "bielefeld",
            "leverkusen",
            "dortmund",
            "gladbach",
            "frankfurt",
            "augsburg",
            "bayern",
            "koeln",
            "mainz",
            "union",
            "hertha",
            "leipzig",
            "freiburg",
            "fuerth",
            "hoffenheim",
            "stuttgart",
            "bochum",
            "wolfsburg"
        ];

        this.WEIGHTS = [
            0.55,
            0.3,
            0.15
        ];
    }

    convertPayerNote(note) {

        const RATINGTABLE = new Map();
        RATINGTABLE.set(1.0, 100);
        RATINGTABLE.set(1.5, 96);
        RATINGTABLE.set(2.0, 90);
        RATINGTABLE.set(2.5, 82);
        RATINGTABLE.set(3.0, 72);
        RATINGTABLE.set(3.5, 60);
        RATINGTABLE.set(4.0, 48);
        RATINGTABLE.set(4.5, 36);
        RATINGTABLE.set(5.0, 24);
        RATINGTABLE.set(5.5, 12);
        RATINGTABLE.set(6.0, 0);
      
        return RATINGTABLE.get(note);
      }


      showAllClubEncounters() {
        let html = '<div>';
      
        // For each CLUB!!!!
        for (let i = 0; i < jsonObjectDatabase.database.length; i++) {
      
          html = html + '<div class="' + this.CITIES[i] + '" id="club">';
          html = html + '<div>';
      
          let club = jsonObjectDatabase.database[i].club;
      
          // Save encouters for each club
          let encounters = new Map();
          for (let j = 0; j < jsonObjectDatabase.database[i].player.length; j++) {
            let name = jsonObjectDatabase.database[i].player[j].name;
            for (let k = 0; k < jsonObjectDatabase.database[i].player[j].encounters.length; k++) {
              encounters.set(jsonObjectDatabase.database[i].player[j].encounters[k].encounter, club);
            }
          }
      
          let encounterNotesTotal = new Map();
          let noteCounter = 0;
          let playerCounter = 0;
          let encounter = null;
      
          let iterator = encounters.keys();
          let key = iterator.next().value;
          while (key != null) {
      
            for (let j = 0; j < jsonObjectDatabase.database[i].player.length; j++) {
              let name = jsonObjectDatabase.database[i].player[j].name;
              for (let k = 0; k < jsonObjectDatabase.database[i].player[j].encounters.length; k++) {
                let e = jsonObjectDatabase.database[i].player[j].encounters[k].encounter;
                let note = jsonObjectDatabase.database[i].player[j].encounters[k].note;
      
                if (e == key && note != null) {
                  noteCounter = noteCounter + this.convertPayerNote(note);
                  playerCounter++;
                  encounter = e;
                  //console.log(playerCounter + " " + club + "\t\t" + name + "\t\t" + e + "\t\t" + convertPayerNote(note));
                }
              }
            }
      
            encounterNotesTotal.set(encounter, noteCounter / playerCounter);
            //console.log(club + " " + encounter + " " + noteCounter + "/" + playerCounter + "=" + noteCounter / playerCounter);
            // console.log("---");
      
            // Reset variables
            noteCounter = 0;
            playerCounter = 0;
            key = iterator.next().value;
          }
          //console.log(club);
          //console.log(encounterNotesTotal);
          //console.log("---");
      
          // Prepear html content
          let vs = [];
          let notes = [];
          iterator = encounters.keys();
          key = iterator.next().value;
          while (key != null) {
            vs.push(key);
            key = iterator.next().value;
          }
          let notesTotal = 0;
          for (let i = 0; i < vs.length; i++) {
            notes[i] = Number((encounterNotesTotal.get(vs[i])).toFixed(2));
            //notes[i] = encounterNotesTotal.get(vs[i]);
            notesTotal = notesTotal + notes[i];
          }
          notesTotal = Number(notesTotal / vs.length).toFixed(2);
          //---------------------
      
          // Expected Goals - fbref.com
          let confidenceDB = jsonObjectStatistics;
      
          let confidenceRating = [
            0.06, 0.14, 0.21, 0.27, 0.32
          ];
      
          let confidenceFaktor = null;
      
          for(let z = 0; z < confidenceDB[i].confidence.length; z++) {
            let confidenceEntry = confidenceDB[i].confidence[z];
            confidenceFaktor = confidenceFaktor + (confidenceEntry * confidenceRating[z]);
          }
          confidenceFaktor = confidenceFaktor * 100;
      
          //console.log("CONFIDENCE FAKTOR   " + club);
          //console.log(confidenceFaktor);
      
          // Calculation for team factor
          let xGDmax = confidenceDB[confidenceDB.length - 1].xGDmax;
          let xGDmin = confidenceDB[confidenceDB.length - 1].xGDmin;
      
          let gameDay = vs.length;
          let xG = confidenceDB[i].xG;
          let xGA = confidenceDB[i].xGA;
          let xGD = confidenceDB[i].xGD;
      
          let xG90 = xG / gameDay; // anzeigen
          let xGA90 = xGA / gameDay; // anzeigen
          let xGD90 = xGD / gameDay;
          let xGD90max = xGDmax / gameDay; // 2,48
          let xGD90min = xGDmin / gameDay; // -1,19
          let xGD90_abs_max = (xGD90min < 0) ? xGD90max - xGD90min : xGD90max + xGD90min; // 3,67
          
          let xGD90_abs = (xGD90min < 0) ? xGD90 - xGD90min : xGD90 + xGD90min
          let teamFactor = xGD90_abs / xGD90_abs_max * 100;
      
          let total = (this.WEIGHTS[0] * notesTotal) + (this.WEIGHTS[1] * teamFactor) + (this.WEIGHTS[2] * confidenceFaktor);
      
          //console.log(club + "\t" + teamFactor);
      
          html = html + '<table border="0">';
          html = html + '<tbody>';
          html = html + '<tr><td vertical-align="middle"><img src="' + this.ICONLINK[i] + '" /></td><td vertical-align="middle"><p style="font-size: 27pt; font-weight: bold;">' + club + '</p></td><td style="text-align:right;width:100px;"><p style="font-size: 27pt; font-weight: bold;">' + Number(total).toFixed(1) + '</p></td></tr>';
          html = html + '</tbody>';
          html = html + '</table>';
      
          html = html + '<table border="0" style="width:450px;">';
          html = html + '<thead>';
          html = html + '<tr>';
          html = html + '<th><p>Note</p></th>';
          html = html + '<th><p>Taktik</p></th>';
          html = html + '<th><p>From</p></th>';
          html = html + '<th><p>xG90</p></th>';
          html = html + '<th><p>xGA90</p></th>';
          html = html + '</tr>';
          html = html + '</thead>';
      
          html = html + '<tbody>';
          html = html + '<tr><td style="text-align:center"><p style="font-size:17pt;">' + Number(notesTotal).toFixed(1) + '</p></td><td style="text-align:center"><p style="font-size:17pt;">' + Number(teamFactor).toFixed(1) + '</p></td><td style="text-align:center"><p style="font-size:17pt;">' + Number(confidenceFaktor).toFixed(1) + '</p></td><td style="text-align:center"><p style="font-size:17pt;">' + Number(xG90).toFixed(1) + '</p></td><td style="text-align:center"><p style="font-size:17pt;">' + Number(xGA90).toFixed(1) + '</p></td></tr>';
          html = html + '</tbody>';
          html = html + '</table>';
      
          html = html + '<hr />';
      
          html = html + '<table border="0">';
      
          html = html + '<thead>';
          html = html + '<tr>';
          html = html + '<th><p style="font-size:17pt;">Spieltag</p></th>';
          html = html + '<th><p style="font-size:17pt;">Begegnung</p></th>';
          html = html + '<th><p style="font-size:17pt;">Note</p></th>';
          html = html + '</tr>';
          html = html + '</thead>';
      
          html = html + '<tbody>';
      
          // show last 4 encounters
          let l = 0;
          if (vs.length > 4) {
            l = vs.length - 4;
          }
      
          for (let i = vs.length - 1; i >= l; i--) {
            html = html + '<tr><td style="text-align:center";><p style="font-size:17pt;">' + (i + 1) + '</p></td><td><p style="font-size:17pt;">' + vs[i] + '</p></td><td style="text-align:center;width:100px;"><p style="font-size:17pt;">' + notes[i] + '</p></td></tr>';
          }
      
          html = html + '</tbody>';
          html = html + '</table>';
      
          html = html + '</div>';
          html = html + '</div>';
        }
      
        html = html + '</div>';

        return html;
      }

    componentDidMount() {


        

        document.getElementById("target").innerHTML = this.showAllClubEncounters();
        
    }

    render() {

        console.log("render:");

        return (
            <div className="BLP" id="target">

            </div>
        );
    }
}

export default BLP;