import React, { Component } from "react";
import ReactApexChart  from "react-apexcharts";
export default class PieChart  extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [70],
      options: {
        chart: {
          height: 350,
          type: 'radialBar',
        },
        colors: ['#0E47DD'],
        plotOptions: {
          radialBar: {
            hollow: {
              show: false,
              size: '70%',
              background: 'transparent',
            }
          },
        },
        labels: ['36 890 €',"jh"],
      },
    
    
    };
  }



  render() {
    return (
      

<div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={250} />
</div>


    );
  }

}