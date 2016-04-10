import React from 'react';
import ReactDOM from 'react-dom';

export default class ChartRadar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { chr: "init" };
  }

  render() {
    return (
      <div className="ChartRadar">
        <canvas id="canvas"></canvas>
      </div>
    );
  }

  componentDidMount() {
    var ChartData = {
      labels : this.props.data.osX,
      datasets : [
        {
          label: this.props.data.msg,
          fillColor : "#F1F1F1",
          strokeColor : "#C1C1C1",
          pointColor : "#F1F1F1",
          pointStrokeColor : "#C1C1C1",
          pointHighlightFill : "#FFFFFF",
          pointHighlightStroke : "#A1A1A1",
          data : this.props.data.osY
        }
      ]
    };
    var GlobalOptions = {
      responsive: true,
      animationEasing: "easeOutElastic",
      scaleShowGridLines : true,
      scaleGridLineColor : "#E1E1E1",
      scaleBeginAtZero: false
    };
    var nde = ReactDOM.findDOMNode(this);
    var ctx = nde.getElementsByTagName("canvas")[0].getContext('2d');
    this.state.chr = new Chart(ctx).Radar(ChartData, GlobalOptions);
  }

  componentDidUpdate() {
    for (var i=0; i<this.props.data.osX.length; i++) {
      this.state.chr.datasets[0].points[i].value = this.props.data.osY[i];
    }
    this.state.chr.update();
  }
}
