import React from 'react';
import ReactDOM from 'react-dom';
import ChartRadar from './react-chart-radar.js';

// sample usage 1
/*
var chart = { msg: "", osX: [], osY: [] };
for (var i=0,x=-10; i<20; i++,x++) {
  chart.osX[i] = x;
  chart.osY[i] = Math.tan(x);
}

ReactDOM.render(
  <ChartRadar data={chart}/>,
  document.getElementById('app')
);
*/

// sample usage 2
function setRandomChart() {
  var chart = { msg: "", osX: [], osY: [] };
  for (var i=0,x=-10; i<20; i++,x++) {
    chart.osX[i] = x;
    chart.osY[i] = Math.tan(x)*Math.random();
  }
  ReactDOM.render(
    <ChartRadar data={chart}/>,
    document.getElementById('app')
  );
}
setInterval(() => { setRandomChart() }, 5000);
