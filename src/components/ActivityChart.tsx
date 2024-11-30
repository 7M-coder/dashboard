import React, { useEffect, useRef } from "react";
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const ActivityChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy previous chart instance if it exists
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      // Create new chart instance and save it in chartInstanceRef
      chartInstanceRef.current = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: ["S", "M", "T", "W", "T", "F", "S"],
          datasets: [
            {
              label: "Time",
              data: [8, 6, 7, 6, 10, 8, 4],
              backgroundColor: "rgb(132 204 22)",
              borderWidth: 3,
              borderRadius: 6,
              hoverBackgroundColor: "rgb(37 99 235)",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false, // Prevent Chart.js from enforcing aspect ratio
          scales: {
            x: {
              border: { display: true },
              grid: { display: true, color: "rgb(37 99 235)" },
              ticks: {
                color: "white",
              },
            },
            y: {
              ticks: { display: false },
              grid: { display: false },
            },
          },
          plugins: {
            legend: { display: false },
          },
          animation: {
            duration: 1000,
            easing: "easeInOutQuad",
          },
        },
      });
    }

    // Cleanup on unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  // Wrapper div controls the canvas size
  return (
    <div className="h-40 mt-4 relative">
      <canvas ref={chartRef} />
    </div>
  );
};

export default ActivityChart;
