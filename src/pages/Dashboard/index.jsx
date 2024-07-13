import React from "react";
import DateFilter from "../../components/DateFilter";
import Chart from "../../components/Chart";

export default function index() {
  const taskData = {
    series: [
      {
        name: "Bugs",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
        color: "#fc030f",
      },
      {
        name: "New Feature",
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
        color: "#fc6b03",
      },
      {
        name: "Question/Feedback",
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
        color: "#0380fc",
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [5, 7, 5],
        curve: "straight",
        dashArray: [0, 8, 5],
      },
      title: {
        text: "Support",
        align: "left",
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "#263238",
        },
      },
      legend: {
        tooltipHoverFormatter: function (val, opts) {
          return (
            val +
            " - <strong>" +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            "</strong>"
          );
        },
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6,
        },
      },
      xaxis: {
        categories: [
          "01 Jan",
          "02 Jan",
          "03 Jan",
          "04 Jan",
          "05 Jan",
          "06 Jan",
          "07 Jan",
          "08 Jan",
          "09 Jan",
          "10 Jan",
          "11 Jan",
          "12 Jan",
        ],
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function (val) {
                return val;
              },
            },
          },
          {
            title: {
              formatter: function (val) {
                return val;
              },
            },
          },
          {
            title: {
              formatter: function (val) {
                return val;
              },
            },
          },
        ],
      },
      grid: {
        borderColor: "#f1f1f1",
      },
    },
  };

  const pieData = {
    series: [44, 55, 67, 83],
    options: {
      colors: ["#fc030f", "#fc6b03", "#0380fc", "#42f563"],
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return "23 / 47";
              },
            },
          },
        },
      },
      title: {
        text: "Task Resolved",
        align: "left",
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "#263238",
        },
      },
      legend: {
        tooltipHoverFormatter: function (val, opts) {
          return (
            val +
            " - <strong>" +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            "</strong>"
          );
        },
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6,
        },
      },
      labels: ["Bugs", "New Feature", "Questions", "Total"],
    },
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-full p-4 bg-white">
        <DateFilter />
      </div>
      <div className="w-full p-4 bg-white">
        <h2 className="font-bold mb-3">Summary</h2>

        <div className="grid grid-cols-4 justify-between">
          <div className="flex flex-col items-center">
            <h2 className="">Organizations</h2>
            <h1 className="text-3xl font-bold">0</h1>
            <p className="text-xs">0 in demo</p>
          </div>
          <div className="flex flex-col items-center border-l">
            <h2 className="">Users</h2>
            <h1 className="text-3xl font-bold">0</h1>
            <p className="text-xs">0 Admins</p>
          </div>
          <div className="flex flex-col items-center  border-l">
            <h2 className="">Disabled Org</h2>
            <h1 className="text-3xl font-bold">0</h1>
            <p className="text-xs">0 users disabled</p>
          </div>
          <div className="flex flex-col items-center  border-l">
            <h2 className="">Unresolved Feedback</h2>
            <h1 className="text-3xl font-bold">0</h1>
            <p className="text-xs">0 bugs </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 w-full gap-3">
        <div className="bg-white col-span-2">
          <Chart
            options={taskData?.options}
            series={taskData?.series}
            type={"line"}
          />
        </div>
        <div className="bg-white">
          <Chart
            options={pieData?.options}
            series={pieData?.series}
            type={"radialBar"}
          />
        </div>
      </div>
    </div>
  );
}
