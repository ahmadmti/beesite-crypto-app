import React from 'react'
import './style.css';
import ReactApexChart from "react-apexcharts";

export default class BarChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Inflation',
          data: [4.3, 5.1, 4.0, 7.1]
        }],
        options: {
          chart: {
            height: 350,
            type: 'bar',
            toolbar: {
                show: false
              },
          },
          plotOptions: {
            bar: {
              borderRadius: 10,
              dataLabels: {
                position: 'top', // top, center, bottom
              },
            }
          },
          
          fill:{
            colors:["#FFA876","#FFA876","#FFA876"]
          },
          dataLabels: {
            enabled: true,
            formatter: function (val) {
              return val + "%";
            },
            offsetY: -20,
            style: {
              fontSize: '12px',
              colors: ["#FFA876"]
              
            },
           
          },
          
          xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr",],
            position: 'top',
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            crosshairs: {
              fill: {
                type: 'gradient',
                gradient: {
                  colorFrom: '#D8E3F0',
                  colorTo: '#BED1E6',
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                }
              }
            },
            tooltip: {
              enabled: true,
            }
          },
          grid: {
            show: false,
        },
          yaxis: {
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false,
            },
            lines: {
                show: false,
            },

            labels: {
              show: false,
              formatter: function (val) {
                return val + "%";
              }
            },
          
          },
          title: {
            // text: 'Monthly Inflation in Argentina, 2002',
            floating: true,
            offsetY: 330,
            align: 'center',
            style: {
              color: '#444'
            }
          }
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
</div>


      );
    }
  }