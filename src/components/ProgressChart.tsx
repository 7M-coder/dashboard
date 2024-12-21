import React, { useEffect, useRef } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const ProgressChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current;

    // Destroy previous chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create new chart instance and save it in chartInstanceRef
    if (ctx) {
      chartInstanceRef.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          datasets: [
            {
              label: "Class GPA",
              data: [2, 6, 7, 6, 3, 8, 4],
              borderColor: "rgb(132 204 22)",
              backgroundColor: "rgba(132, 204, 22, 0.2)",
              borderWidth: 2,
              pointRadius: 3, // Reduced from 5 to 3
              pointBackgroundColor: "rgb(132 204 22)",
              tension: 0.4,
            },
            {
              label: "Average GPA",
              data: [3, 9, 8, 6, 4, 5, 2],
              borderColor: "rgb(37 99 235)",
              backgroundColor: "rgba(37, 99, 235, 0.2)",
              borderWidth: 2,
              pointRadius: 3, // Reduced from 5 to 3
              pointBackgroundColor: "rgb(37 99 235)",
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: { display: false },
              ticks: {
                color: "black", // Changed from white to black for visibility
                font: {
                  size: 12,
                },
                padding: 10,
              },
            },
            y: {
              ticks: { display: false },
              border: { display: false },
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
    <div className="h-40 md:h-72 mt-4 relative">
      <canvas ref={chartRef} />
    </div>
  );
};

export default ProgressChart;
