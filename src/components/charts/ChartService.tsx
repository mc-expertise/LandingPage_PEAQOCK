import React, { useRef } from 'react';
import Chart from 'react-apexcharts';
import imageLogo from '../../../public/logoLL.png';

const ChartService = () => {
  const chartRef = useRef(null);

  const labels = ['Market', 'Marketing', 'Connect'];
  const series = [55, 20, 25]; // Set custom percentages for each segment

  const options = {
    labels: labels,
    colors: ['#202A4C', '#127682', '#205EFF'],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },

    plotOptions: {
      pie: {
        customScale: 1,
        donut: {
          size: '45%',
          labels: {
            show: false,
            value: {
              show: true,
            },
            total: {
              show: true,
            },
          },
        },
        dataLabels: {
          offset: 0,
          minAngleToShowLabel: 10,
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    tooltip: {
      enabled: false,
    },
  };

  return (
    <div className="relative ml-[8rem]">
      <Chart
        type="donut"
        width={568}
        height={568}
        series={series}
        options={options}
        ref={chartRef}
      />
      <img
        src={imageLogo}
        alt=""
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
      />
    </div>
  );
};

export default ChartService;
