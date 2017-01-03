require('babel-polyfill') ; 
var $ = require('jquery'); 
var Highcharts = require('highcharts');
var aijs =  require('aijs') ;  

let _a = 2.289; 
let _b = 11.788; 
let x = []; 
    for(let i =0; i < 20; i+=1){
        let k = i ;
        x.push({x: [k], y:_a*k+_b + Math.random()*5})
    }
 
$( document ).ready(function() {
    var result = aijs.LinearRegression.Multivariate.converge(x); 
    
    let x1 = x[0].x[0];
    let y1 = result[0]*x1 + result[1]; 
    let x2 = 20;
    let y2 = result[0]*x2 + result[1];

    Highcharts.chart('linearregression1', {
        xAxis: { min: 0, max: 20 },
        yAxis: { min: 0 },
        title: {
            text: 'Linear Regression ( Multivariate )'
        },
        series: [{
            type: 'line',
            name: 'Regression Line',
            data: [[x1, y1], [x2, y2]],
            enableMouseTracking: false
        }, {
            type: 'scatter',
            name: 'Points',
            data: x.map(x =>  x.y ),
            marker: {
                radius: 4
            }
        }]
    });

})
 