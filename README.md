# Description

This is simple Chart.js Radar React component.

# Quickstart

In project directory run command:

    bash install.bash

then open <code>index.html</code> file in your browser.

# Sample usage - basic

You can create <code>chart</code> object with data and send it to the <code>ChartRadar</code> React component as <code>data</code>.

    import React from 'react';
    import ReactDOM from 'react-dom';
    import ChartRadar from './react-chart-radar.js';

    var chart = { msg: "", osX: [], osY: [] };
    for (var i=0,x=-10; i<20; i++,x++) {
      chart.osX[i] = x;
      chart.osY[i] = Math.tan(x);
    }

    ReactDOM.render(
      <ChartRadar data={chart}/>,
      document.getElementById('app')
    );

# Sample usage - update

If you send updated <code>chart</code> object again to the <code>ChartRadar</code> React component as <code>data</code> it will update itself.

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

# License

MIT
