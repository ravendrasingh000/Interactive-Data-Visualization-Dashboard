const data = [
    { Day: '2022-10-04', Age: '15-25', Gender: 'Male', A: 262, B: 570, C: 181, D: 856, E: 616, F: 532 },
    { Day: '2022-10-04', Age: 'Above 25', Gender: 'Male', A: 454, B: 973, C: 90, D: 331, E: 327, F: 692 },
    { Day: '2022-10-04', Age: '15-25', Gender: 'Female', A: 64, B: 778, C: 710, D: 64, E: 704, F: 907 },
    { Day: '2022-10-05', Age: '15-25', Gender: 'Male', A: 500, B: 600, C: 300, D: 400, E: 300, F: 200 },
    { Day: '2022-10-05', Age: 'Above 25', Gender: 'Female', A: 150, B: 450, C: 250, D: 550, E: 350, F: 450 },
    { Day: '2022-10-06', Age: '15-25', Gender: 'Male', A: 424, B: 550, C: 459, D: 65, E: 508, F: 371 },
    { Day: '2022-10-06', Age: 'Above 25', Gender: 'Male', A: 402, B: 928, C: 33, D: 226, E: 714, F: 17 },
    { Day: '2022-10-06', Age: '15-25', Gender: 'Female', A: 726, B: 749, C: 320, D: 332, E: 430, F: 811 },
    { Day: '2022-10-06', Age: 'Above 25', Gender: 'Female', A: 414, B: 730, C: 547, D: 906, E: 10, F: 828 },
    { Day: '2022-10-07', Age: '15-25', Gender: 'Male', A: 388, B: 419, C: 945, D: 949, E: 760, F: 793 },
    { Day: '2022-10-07', Age: 'Above 25', Gender: 'Male', A: 694, B: 79, C: 642, D: 186, E: 367, F: 270 },
    { Day: '2022-10-07', Age: '15-25', Gender: 'Female', A: 689, B: 168, C: 260, D: 976, E: 876, F: 245 },
    { Day: '2022-10-07', Age: 'Above 25', Gender: 'Female', A: 631, B: 354, C: 591, D: 786, E: 834, F: 558 },
    { Day: '2022-10-08', Age: '15-25', Gender: 'Male', A: 854, B: 94, C: 568, D: 514, E: 347, F: 662 },
    { Day: '2022-10-08', Age: 'Above 25', Gender: 'Male', A: 365, B: 334, C: 153, D: 928, E: 466, F: 785 },
    { Day: '2022-10-08', Age: '15-25', Gender: 'Female', A: 904, B: 251, C: 861, D: 691, E: 589, F: 294 },
    { Day: '2022-10-08', Age: 'Above 25', Gender: 'Female', A: 176, B: 726, C: 365, D: 677, E: 902, F: 89 },
    { Day: '2022-10-09', Age: '15-25', Gender: 'Male', A: 21, B: 433, C: 896, D: 280, E: 622, F: 806 },
    { Day: '2022-10-09', Age: 'Above 25', Gender: 'Male', A: 845, B: 843, C: 724, D: 320, E: 622, F: 36 },
    { Day: '2022-10-09', Age: '15-25', Gender: 'Female', A: 733, B: 206, C: 929, D: 558, E: 118, F: 428 },
    { Day: '2022-10-09', Age: 'Above 25', Gender: 'Female', A: 103, B: 712, C: 243, D: 326, E: 222, F: 806 },
    { Day: '2022-10-10', Age: '15-25', Gender: 'Male', A: 370, B: 446, C: 494, D: 492, E: 583, F: 494 },
    { Day: '2022-10-10', Age: 'Above 25', Gender: 'Male', A: 848, B: 168, C: 507, D: 104, E: 304, F: 323 },
    { Day: '2022-10-10', Age: '15-25', Gender: 'Female', A: 797, B: 8, C: 132, D: 400, E: 235, F: 886 },
    { Day: '2022-10-10', Age: 'Above 25', Gender: 'Female', A: 239, B: 718, C: 754, D: 238, E: 512, F: 768 },
    { Day: '2022-10-11', Age: '15-25', Gender: 'Male', A: 612, B: 950, C: 782, D: 535, E: 546, F: 927 },
    { Day: '2022-10-11', Age: 'Above 25', Gender: 'Male', A: 720, B: 44, C: 459, D: 791, E: 803, F: 151 },
    { Day: '2022-10-11', Age: '15-25', Gender: 'Female', A: 1000, B: 588, C: 150, D: 125, E: 698, F: 551 },
    { Day: '2022-10-11', Age: 'Above 25', Gender: 'Female', A: 54, B: 38, C: 142, D: 197, E: 5, F: 150 },
    { Day: '2022-10-12', Age: '15-25', Gender: 'Male', A: 470, B: 932, C: 808, D: 43, E: 107, F: 678 },
    { Day: '2022-10-12', Age: 'Above 25', Gender: 'Male', A: 671, B: 266, C: 758, D: 111, E: 396, F: 479 },
    { Day: '2022-10-12', Age: '15-25', Gender: 'Female', A: 353, B: 898, C: 106, D: 415, E: 295, F: 197 },
    { Day: '2022-10-12', Age: 'Above 25', Gender: 'Female', A: 203, B: 713, C: 59, D: 603, E: 18, F: 916 },
    { Day: '2022-10-13', Age: '15-25', Gender: 'Male', A: 670, B: 547, C: 505, D: 26, E: 611, F: 317 },
    { Day: '2022-10-13', Age: 'Above 25', Gender: 'Male', A: 564, B: 916, C: 650, D: 629, E: 243, F: 333 },
    { Day: '2022-10-13', Age: '15-25', Gender: 'Female', A: 756, B: 125, C: 889, D: 778, E: 736, F: 283 },
    { Day: '2022-10-13', Age: 'Above 25', Gender: 'Female', A: 161, B: 765, C: 822, D: 708, E: 171, F: 559 },
    { Day: '2022-10-14', Age: '15-25', Gender: 'Male', A: 384, B: 290, C: 427, D: 592, E: 385, F: 294 },
    { Day: '2022-10-14', Age: 'Above 25', Gender: 'Male', A: 633, B: 117, C: 934, D: 765, E: 476, F: 632 },
    { Day: '2022-10-14', Age: '15-25', Gender: 'Female', A: 556, B: 910, C: 282, D: 108, E: 879, F: 317 },
    { Day: '2022-10-14', Age: 'Above 25', Gender: 'Female', A: 630, B: 218, C: 502, D: 35, E: 667, F: 582 }
];

const tableBody = document.querySelector('#data-table tbody');
const filterBtn = document.querySelector('#filter-btn');
const chartCanvas = document.getElementById('chart').getContext('2d');
let chartInstance;

function renderTable(filteredData) {
  tableBody.innerHTML = '';
  filteredData.forEach(row => {
    const tr = document.createElement('tr');
    Object.values(row).forEach(value => {
      const td = document.createElement('td');
      td.textContent = value;
      tr.appendChild(td);
    });
    tableBody.appendChild(tr);
  });
}

function updateChart(filteredData) {
    const labels = filteredData.map(row => row.Day);
    const datasetA = filteredData.map(row => row.A);
    const datasetB = filteredData.map(row => row.B);
    const datasetC = filteredData.map(row => row.C);
    const datasetD = filteredData.map(row => row.D);
    const datasetE = filteredData.map(row => row.E);
    const datasetF = filteredData.map(row => row.F);

    if (chartInstance) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(chartCanvas, {
        type: 'bar',
        data: {
        labels,
        datasets: [
            {
            label: 'A',
            data: datasetA,
            backgroundColor: 'rgb(8, 245, 245)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
            },
            {
            label: 'B',
            data: datasetB,
            backgroundColor: 'rgb(86, 5, 248)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
            },
            {
            label: 'C',
            data: datasetC,
            backgroundColor: 'rgb(255, 160, 64)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1
            },
            {
            label: 'D',
            data: datasetD,
            backgroundColor: 'rgb(255, 99, 133)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
            },
            {
            label: 'E',
            data: datasetE,
            backgroundColor: 'rgb(54, 163, 235)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
            },
            {
            label: 'F',
            data: datasetF,
            backgroundColor: 'rgb(255, 207, 86)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1
            }
        ]
        },
        options: {
        responsive: true,
        plugins: {
            legend: {
            position: 'top',
            },
        },
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
    });
    }


function filterData() {
  const day = document.querySelector('#day').value;
  const age = document.querySelector('#age').value;
  const gender = document.querySelector('#gender').value;

  const filteredData = data.filter(row => {
    return (!day || row.Day === day) &&
           (!age || row.Age === age) &&
           (!gender || row.Gender === gender);
  });

  renderTable(filteredData);
  updateChart(filteredData);
}

filterBtn.addEventListener('click', filterData);

// Initial render
renderTable(data);
updateChart(data);

    // Toggle Table visibility
    document.getElementById('toggle-table-btn').addEventListener('click', () => {
  const table = document.getElementById('data-table');
  table.style.display = table.style.display === 'none' ? 'block' : 'none';
});