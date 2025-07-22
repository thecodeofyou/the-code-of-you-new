// src/api.js
import mockBirthChart from "./mockData";

export function fetchBirthChart(birthData) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockBirthChart);
    }, 1000); // simulate network delay
  });
}
