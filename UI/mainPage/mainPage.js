'use strict';

var mainPage = angular.module('myApp.mainPage', ['ngRoute']);

mainPage.controller('MainPageCtrl', function ($scope, diagramService) {
    $scope.modelValue = "test";

    getDiagram();
    
    function getDiagram(){
        diagramService.getDiagram().then(function(response){
            var data = response;
        });
    }
    
    /*    $scope.denisovValue = "{}";
    google.charts.load("current", {
        packages: ["corechart"]
    });
    google.charts.setOnLoadCallback(drawGistChart);

    function drawGistChart() {
        var data = google.visualization.arrayToDataTable([
          ['Dinosaur', 'Length'],
          ['Acrocanthosaurus (top-spined lizard)', 12.2],
          ['Albertosaurus (Alberta lizard)', 9.1],
          ['Allosaurus (other lizard)', 12.2],
          ['Apatosaurus (deceptive lizard)', 22.9],
          ['Archaeopteryx (ancient wing)', 0.9],
          ['Argentinosaurus (Argentina lizard)', 36.6],
          ['Baryonyx (heavy claws)', 9.1],
          ['Brachiosaurus (arm lizard)', 30.5],
          ['Ceratosaurus (horned lizard)', 6.1],
          ['Coelophysis (hollow form)', 2.7],
          ['Compsognathus (elegant jaw)', 0.9],
          ['Deinonychus (terrible claw)', 2.7],
          ['Diplodocus (double beam)', 27.1],
          ['Dromicelomimus (emu mimic)', 3.4],
          ['Gallimimus (fowl mimic)', 5.5],
          ['Mamenchisaurus (Mamenchi lizard)', 21.0],
          ['Megalosaurus (big lizard)', 7.9],
          ['Microvenator (small hunter)', 1.2],
          ['Ornithomimus (bird mimic)', 4.6],
          ['Oviraptor (egg robber)', 1.5],
          ['Plateosaurus (flat lizard)', 7.9],
          ['Sauronithoides (narrow-clawed lizard)', 2.0],
          ['Seismosaurus (tremor lizard)', 45.7],
          ['Spinosaurus (spiny lizard)', 12.2],
          ['Supersaurus (super lizard)', 30.5],
          ['Tyrannosaurus (tyrant lizard)', 15.2],
          ['Ultrasaurus (ultra lizard)', 30.5],
          ['Velociraptor (swift robber)', 1.8]]);

        var options = {
            title: 'Lengths of dinosaurs, in meters',
            legend: {
                position: 'none'
            },
        };

        var chart = new google.visualization.Histogram(document.getElementById('gistogram'));
        chart.draw(data, options);
    }





    google.charts.load('current', {
        'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(drawSeriesChart);
    var legend = [['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population']];

    function drawSeriesChart() {

        var data = google.visualization.arrayToDataTable(legend);

        var options = {
            title: 'Correlation between life expectancy, fertility rate ' +
                'and population of some world countries (2010)',
            hAxis: {
                title: 'Life Expectancy'
            },
            vAxis: {
                title: 'Fertility Rate'
            },
            bubble: {
                textStyle: {
                    fontSize: 11
                }
            }
        };

        var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
        chart.draw(data, options);
    }
    visualize();

    function GaussRand() {
        var s = 2 * Math.random() - 1;
        var m = 2 * Math.random() - 1;
        var u = s * s + m * m;
        if (u == 0 || u > 1) return GaussRand();
        var k = Math.sqrt(-2 * Math.log(u) / u);
        return s * m;
    }


    function visualize() {
        var time = 0;
        var x1 = 80.5;
        var y1 = 1.5;
        var x2 = 80.5;
        var y2 = 1.5;
        var x3 = 80.5;
        var y3 = 1.5;
        var x4 = 80.5;
        var y4 = 1.5;
        var x5 = 80.5;
        var y5 = 1.5;
        var startValue1 = 2555;
        var startValue2 = 2555;
        var startValue3 = 2555;
        var startValue4 = 2555;
        var startValue5 = 2555;
        var iter = 0;
        var time = 0;
        var intervalTest = setInterval(function () {
            time += 10;
            iter++;
            x1 +=   time;
            y1 += GaussRand() 
            x2 +=  time;
            y2 += GaussRand() 
            x3 +=   time;
            y3 += GaussRand() 
            x4 +=   time;
            y4 += GaussRand() 
            x5 +=   time;
            y5 += GaussRand() 
            
            startValue1 += Math.random() * 10 - GaussRand() * 10;
            startValue2 += Math.random() * 10 - GaussRand() * 10;
            startValue3 += Math.random() * 10 - GaussRand() * 10;
            startValue4 += Math.random() * 10 - GaussRand() * 10;
            startValue5 += Math.random() * 10 - GaussRand() * 10;

            var val1 = ['CAN', x1, y1, 'С', startValue1];
            var val2 = ['DEU', x2, y2, 'Е', startValue2];
            var val3 = ['DNK', x3, y3, 'Р', startValue3];
            var val4 = ['EGY', x4, y4, 'Ё', startValue4];
            var val5 = ['GBR', x5, y5, 'Г', startValue5];
            var val6 = ['2GBR', y2, x4, 'А', startValue5];
            
            legend.push(val1);
            //legend.push(val2);
            //legend.push(val3);
            //legend.push(val4);
            //legend.push(val5);
            //legend.push(val6);
            
            drawSeriesChart();

            if (iter == 125) clearInterval(intervalTest);
        }, 250)

    }





    var mass = [['VALUE', 'COS']];
    google.charts.load('current', {
        'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var startValue1 = 1000;
        var startValue2 = 1170;
        var startValue3 = 660;
        var startValue4 = 1030;
        var time = 0;
        var cnt = 0;
        var intervalTest = setInterval(function () {
            time = time + 0.1 * Math.random() * 0, 1;
            cnt++;
            //var y = 100 * 0.5 - ((Math.random() * 4 - Math.random() * 2) + ((Math.random() * 10 >= 5) ? Math.cos(time + cnt * 0.05) * 20 : Math.sin(time + cnt * 0.05) * 20));
            var y = GaussRand();
            mass.push([cnt, y])


            // Define the chart to be drawn.
            var data = google.visualization.arrayToDataTable(mass);

            var options = {
                title: 'Company Performance',
                curveType: 'function',
                legend: {
                    position: 'bottom'
                }
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
            if (cnt == 500) clearInterval(intervalTest);
            chart.draw(data, options);
        }, 100)
    }*/

});
