import "bootstrap";
import "bootstrap/scss/bootstrap.scss";

import "./style.scss";
import ReactApp from '../../my-app'

class PageContact {
  constructor() {
    console.log("Page:: Home");
    ReactApp();

    this.listeners();
  }

  listeners() {
    this.btnLoadChart = document.querySelector(".btn-load-chart");

    this.btnLoadChart.addEventListener("click", () => {
      this.loadChart();
    });
  }

  async loadChart() {
    const chartJs = import(/* webpackChunkName: "vendor.chartjs" */ "chart.js");

    // Sau khi tải xong thư viện chart.js sẽ vẽ chart
    Promise.all([chartJs]).then((module) => {
      console.log("ChartJs Loaded");

      const Chart = module[0].Chart;
      Chart.register(...module[0].registerables);

      const ctx = document.getElementById("myChart").getContext("2d");
      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Red", "Blue", "Yellow"],
          datasets: [
            {
              label: "My First Dataset",
              data: [300, 50, 100],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
              ],
              hoverOffset: 4,
            },
          ],
        },
      });
    });
  }
}

new PageContact();
