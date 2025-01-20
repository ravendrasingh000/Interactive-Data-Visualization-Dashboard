const data = [
    { "Day": "2022-10-04", "Age": "15-25", "Gender": "Male", "A": 787, "B": 638, "C": 647, "D": 118, "E": 21, "F": 742 },
    { "Day": "2022-10-04", "Age": ">25", "Gender": "Male", "A": 8, "B": 394, "C": 338, "D": 500, "E": 546, "F": 548 },
    { "Day": "2022-10-04", "Age": "15-25", "Gender": "Female", "A": 164, "B": 23, "C": 941, "D": 976, "E": 269, "F": 94 },
    { "Day": "2022-10-04", "Age": ">25", "Gender": "Female", "A": 479, "B": 784, "C": 947, "D": 26, "E": 458, "F": 196 },
    { "Day": "2022-10-05", "Age": "15-25", "Gender": "Male", "A": 128, "B": 69, "C": 579, "D": 405, "E": 957, "F": 405 },
    { "Day": "2022-10-05", "Age": ">25", "Gender": "Male", "A": 502, "B": 616, "C": 156, "D": 412, "E": 518, "F": 564 },
    { "Day": "2022-10-05", "Age": "15-25", "Gender": "Female", "A": 10, "B": 56, "C": 186, "D": 473, "E": 196, "F": 986 },
    { "Day": "2022-10-05", "Age": ">25", "Gender": "Female", "A": 349, "B": 796, "C": 293, "D": 51, "E": 56, "F": 349 },
    { "Day": "2022-10-06", "Age": "15-25", "Gender": "Male", "A": 510, "B": 642, "C": 532, "D": 478, "E": 941, "F": 772 },
    { "Day": "2022-10-06", "Age": ">25", "Gender": "Male", "A": 382, "B": 25, "C": 823, "D": 364, "E": 414, "F": 940 },
    { "Day": "2022-10-06", "Age": "15-25", "Gender": "Female", "A": 287, "B": 733, "C": 153, "D": 922, "E": 184, "F": 79 },
    { "Day": "2022-10-06", "Age": ">25", "Gender": "Female", "A": 26, "B": 310, "C": 775, "D": 516, "E": 161, "F": 854 },
    { "Day": "2022-10-07", "Age": "15-25", "Gender": "Male", "A": 370, "B": 232, "C": 150, "D": 172, "E": 804, "F": 791 },
    { "Day": "2022-10-07", "Age": ">25", "Gender": "Male", "A": 198, "B": 922, "C": 30, "D": 335, "E": 457, "F": 912 },
    { "Day": "2022-10-07", "Age": "15-25", "Gender": "Female", "A": 545, "B": 279, "C": 725, "D": 118, "E": 146, "F": 366 },
    { "Day": "2022-10-07", "Age": ">25", "Gender": "Female", "A": 47, "B": 350, "C": 151, "D": 500, "E": 131, "F": 98 },
    { "Day": "2022-10-08", "Age": "15-25", "Gender": "Male", "A": 440, "B": 479, "C": 749, "D": 206, "E": 516, "F": 484 },
    { "Day": "2022-10-08", "Age": ">25", "Gender": "Male", "A": 26, "B": 714, "C": 272, "D": 968, "E": 173, "F": 553 },
    { "Day": "2022-10-08", "Age": "15-25", "Gender": "Female", "A": 326, "B": 239, "C": 315, "D": 746, "E": 761, "F": 551 },
    { "Day": "2022-10-08", "Age": ">25", "Gender": "Female", "A": 986, "B": 767, "C": 634, "D": 502, "E": 307, "F": 659 },
    { "Day": "2022-10-09", "Age": "15-25", "Gender": "Male", "A": 295, "B": 972, "C": 945, "D": 146, "E": 996, "F": 217 },
    { "Day": "2022-10-09", "Age": ">25", "Gender": "Male", "A": 110, "B": 270, "C": 112, "D": 652, "E": 337, "F": 263 },
    { "Day": "2022-10-09", "Age": "15-25", "Gender": "Female", "A": 689, "B": 716, "C": 709, "D": 418, "E": 575, "F": 768 },
    { "Day": "2022-10-09", "Age": ">25", "Gender": "Female", "A": 275, "B": 607, "C": 423, "D": 45, "E": 401, "F": 455 },
    { "Day": "2022-10-10", "Age": "15-25", "Gender": "Male", "A": 773, "B": 792, "C": 65, "D": 795, "E": 411, "F": 213 },
    { "Day": "2022-10-10", "Age": ">25", "Gender": "Male", "A": 977, "B": 551, "C": 394, "D": 284, "E": 655, "F": 707 },
    { "Day": "2022-10-10", "Age": "15-25", "Gender": "Female", "A": 584, "B": 141, "C": 122, "D": 897, "E": 703, "F": 83 },
    { "Day": "2022-10-10", "Age": ">25", "Gender": "Female", "A": 393, "B": 512, "C": 354, "D": 153, "E": 403, "F": 246 },
    { "Day": "2022-10-11", "Age": "15-25", "Gender": "Male", "A": 18, "B": 250, "C": 392, "D": 333, "E": 768, "F": 687 },
    { "Day": "2022-10-11", "Age": ">25", "Gender": "Male", "A": 814, "B": 870, "C": 429, "D": 575, "E": 75, "F": 133 },
    { "Day": "2022-10-11", "Age": "15-25", "Gender": "Female", "A": 919, "B": 143, "C": 881, "D": 824, "E": 593, "F": 498 },
    { "Day": "2022-10-11", "Age": ">25", "Gender": "Female", "A": 393, "B": 638, "C": 769, "D": 525, "E": 714, "F": 153 },
      { "Day": "2022-10-12", "Age": "15-25", "Gender": "Male", "A": 722, "B": 872, "C": 552, "D": 464, "E": 181, "F": 877 },
      { "Day": "2022-10-12", "Age": ">25", "Gender": "Male", "A": 451, "B": 538, "C": 766, "D": 251, "E": 266, "F": 917 },
      { "Day": "2022-10-12", "Age": "15-25", "Gender": "Female", "A": 846, "B": 759, "C": 865, "D": 268, "E": 472, "F": 251 },
      { "Day": "2022-10-12", "Age": ">25", "Gender": "Female", "A": 587, "B": 131, "C": 238, "D": 947, "E": 92, "F": 421 },
      { "Day": "2022-10-13", "Age": "15-25", "Gender": "Male", "A": 119, "B": 762, "C": 695, "D": 694, "E": 307, "F": 651 },
      { "Day": "2022-10-13", "Age": ">25", "Gender": "Male", "A": 853, "B": 718, "C": 72, "D": 417, "E": 764, "F": 505 },
      { "Day": "2022-10-13", "Age": "15-25", "Gender": "Female", "A": 417, "B": 385, "C": 398, "D": 803, "E": 756, "F": 535 },
      { "Day": "2022-10-13", "Age": ">25", "Gender": "Female", "A": 617, "B": 401, "C": 732, "D": 692, "E": 288, "F": 970 },
      { "Day": "2022-10-14", "Age": "15-25", "Gender": "Male", "A": 804, "B": 19, "C": 820, "D": 487, "E": 625, "F": 113 },
      { "Day": "2022-10-14", "Age": ">25", "Gender": "Male", "A": 106, "B": 97, "C": 481, "D": 716, "E": 370, "F": 692 },
      { "Day": "2022-10-14", "Age": "15-25", "Gender": "Female", "A": 270, "B": 95, "C": 196, "D": 13, "E": 624, "F": 147 },
      { "Day": "2022-10-14", "Age": ">25", "Gender": "Female", "A": 703, "B": 519, "C": 526, "D": 756, "E": 973, "F": 276 },
      { "Day": "2022-10-15", "Age": "15-25", "Gender": "Male", "A": 336, "B": 678, "C": 67, "D": 682, "E": 989, "F": 936 },
      { "Day": "2022-10-15", "Age": ">25", "Gender": "Male", "A": 754, "B": 243, "C": 667, "D": 469, "E": 627, "F": 218 },
      { "Day": "2022-10-15", "Age": "15-25", "Gender": "Female", "A": 843, "B": 767, "C": 950, "D": 314, "E": 219, "F": 131 },
      { "Day": "2022-10-15", "Age": ">25", "Gender": "Female", "A": 947, "B": 575, "C": 171, "D": 679, "E": 168, "F": 308 },
      { "Day": "2022-10-16", "Age": "15-25", "Gender": "Male", "A": 357, "B": 299, "C": 406, "D": 907, "E": 350, "F": 303 },
      { "Day": "2022-10-16", "Age": ">25", "Gender": "Male", "A": 890, "B": 430, "C": 54, "D": 841, "E": 436, "F": 968 },
      { "Day": "2022-10-16", "Age": "15-25", "Gender": "Female", "A": 131, "B": 276, "C": 230, "D": 219, "E": 347, "F": 772 },
      { "Day": "2022-10-16", "Age": ">25", "Gender": "Female", "A": 577, "B": 303, "C": 215, "D": 537, "E": 100, "F": 492 },
      { "Day": "2022-10-17", "Age": "15-25", "Gender": "Male", "A": 642, "B": 428, "C": 972, "D": 849, "E": 747, "F": 343 },
      { "Day": "2022-10-17", "Age": ">25", "Gender": "Male", "A": 587, "B": 51, "C": 879, "D": 850, "E": 945, "F": 788 },
      { "Day": "2022-10-17", "Age": "15-25", "Gender": "Female", "A": 748, "B": 166, "C": 557, "D": 903, "E": 185, "F": 703 },
      { "Day": "2022-10-17", "Age": ">25", "Gender": "Female", "A": 627, "B": 238, "C": 672, "D": 907, "E": 456, "F": 925 },
      { "Day": "2022-10-18", "Age": "15-25", "Gender": "Male", "A": 505, "B": 661, "C": 417, "D": 301, "E": 643, "F": 244 },
      { "Day": "2022-10-18", "Age": ">25", "Gender": "Male", "A": 679, "B": 206, "C": 281, "D": 162, "E": 593, "F": 611 },
      { "Day": "2022-10-18", "Age": "15-25", "Gender": "Female", "A": 392, "B": 462, "C": 528, "D": 377, "E": 280, "F": 264 },
      { "Day": "2022-10-18", "Age": ">25", "Gender": "Female", "A": 728, "B": 189, "C": 375, "D": 202, "E": 365, "F": 381 },
      { "Day": "2022-10-19", "Age": "15-25", "Gender": "Male", "A": 123, "B": 497, "C": 655, "D": 689, "E": 920, "F": 607 },
      { "Day": "2022-10-19", "Age": ">25", "Gender": "Male", "A": 361, "B": 711, "C": 852, "D": 465, "E": 233, "F": 621 },
      { "Day": "2022-10-19", "Age": "15-25", "Gender": "Female", "A": 799, "B": 593, "C": 265, "D": 319, "E": 381, "F": 567 },
      { "Day": "2022-10-19", "Age": ">25", "Gender": "Female", "A": 398, "B": 285, "C": 636, "D": 498, "E": 175, "F": 376 },
      { "Day": "2022-10-20", "Age": "15-25", "Gender": "Male", "A": 611, "B": 708, "C": 599, "D": 981, "E": 315, "F": 612 },
      { "Day": "2022-10-20", "Age": ">25", "Gender": "Male", "A": 925, "B": 348, "C": 554, "D": 511, "E": 233, "F": 178 },
      { "Day": "2022-10-20", "Age": "15-25", "Gender": "Female", "A": 694, "B": 753, "C": 395, "D": 412, "E": 251, "F": 623 },
      { "Day": "2022-10-20", "Age": ">25", "Gender": "Female", "A": 502, "B": 631, "C": 536, "D": 182, "E": 376, "F": 504 },
      { "Day": "2022-10-21", "Age": "15-25", "Gender": "Male", "A": 317, "B": 682, "C": 435, "D": 870, "E": 597, "F": 411 },
      { "Day": "2022-10-21", "Age": ">25", "Gender": "Male", "A": 256, "B": 736, "C": 541, "D": 586, "E": 492, "F": 573 },
      { "Day": "2022-10-21", "Age": "15-25", "Gender": "Female", "A": 459, "B": 820, "C": 135, "D": 661, "E": 391, "F": 441 },
      { "Day": "2022-10-21", "Age": ">25", "Gender": "Female", "A": 679, "B": 451, "C": 358, "D": 217, "E": 522, "F": 328 },
      { "Day": "2022-10-22", "Age": "15-25", "Gender": "Male", "A": 736, "B": 820, "C": 537, "D": 387, "E": 579, "F": 473 },
      { "Day": "2022-10-22", "Age": ">25", "Gender": "Male", "A": 334, "B": 495, "C": 444, "D": 631, "E": 749, "F": 511 },
      { "Day": "2022-10-22", "Age": "15-25", "Gender": "Female", "A": 890, "B": 823, "C": 215, "D": 762, "E": 506, "F": 372 },
      { "Day": "2022-10-22", "Age": ">25", "Gender": "Female", "A": 672, "B": 926, "C": 452, "D": 533, "E": 619, "F": 722 },
      { "Day": "2022-10-23", "Age": "15-25", "Gender": "Male", "A": 730, "B": 594, "C": 589, "D": 481, "E": 448, "F": 577 },
      { "Day": "2022-10-23", "Age": ">25", "Gender": "Male", "A": 607, "B": 303, "C": 635, "D": 859, "E": 517, "F": 399 },
      { "Day": "2022-10-23", "Age": "15-25", "Gender": "Female", "A": 441, "B": 720, "C": 518, "D": 834, "E": 243, "F": 726 },
      { "Day": "2022-10-23", "Age": ">25", "Gender": "Female", "A": 878, "B": 722, "C": 285, "D": 591, "E": 256, "F": 527 },
      { "Day": "2022-10-24", "Age": "15-25", "Gender": "Male", "A": 828, "B": 414, "C": 632, "D": 296, "E": 508, "F": 679 },
      { "Day": "2022-10-24", "Age": ">25", "Gender": "Male", "A": 284, "B": 368, "C": 748, "D": 313, "E": 724, "F": 249 },
      { "Day": "2022-10-24", "Age": "15-25", "Gender": "Female", "A": 521, "B": 687, "C": 179, "D": 394, "E": 228, "F": 516 },
      { "Day": "2022-10-24", "Age": ">25", "Gender": "Female", "A": 174, "B": 366, "C": 484, "D": 623, "E": 511, "F": 281 },
      { "Day": "2022-10-25", "Age": "15-25", "Gender": "Male", "A": 321, "B": 349, "C": 254, "D": 366, "E": 678, "F": 539 },
      { "Day": "2022-10-25", "Age": ">25", "Gender": "Male", "A": 915, "B": 258, "C": 122, "D": 836, "E": 214, "F": 456 },
      { "Day": "2022-10-25", "Age": "15-25", "Gender": "Female", "A": 487, "B": 667, "C": 192, "D": 836, "E": 548, "F": 626 },
      { "Day": "2022-10-25", "Age": ">25", "Gender": "Female", "A": 634, "B": 746, "C": 491, "D": 224, "E": 459, "F": 178 },
      { "Day": "2022-10-26", "Age": "15-25", "Gender": "Male", "A": 387, "B": 568, "C": 746, "D": 255, "E": 477, "F": 350 },
      { "Day": "2022-10-26", "Age": ">25", "Gender": "Male", "A": 610, "B": 457, "C": 823, "D": 574, "E": 283, "F": 674 },
      { "Day": "2022-10-26", "Age": "15-25", "Gender": "Female", "A": 811, "B": 766, "C": 357, "D": 256, "E": 724, "F": 367 },
      { "Day": "2022-10-26", "Age": ">25", "Gender": "Female", "A": 294, "B": 482, "C": 925, "D": 679, "E": 555, "F": 288 },
      { "Day": "2022-10-27", "Age": "15-25", "Gender": "Male", "A": 479, "B": 351, "C": 648, "D": 416, "E": 512, "F": 642 },
      { "Day": "2022-10-27", "Age": ">25", "Gender": "Male", "A": 249, "B": 720, "C": 352, "D": 245, "E": 387, "F": 503 },
      { "Day": "2022-10-27", "Age": "15-25", "Gender": "Female", "A": 641, "B": 522, "C": 451, "D": 648, "E": 273, "F": 287 },
      { "Day": "2022-10-27", "Age": ">25", "Gender": "Female", "A": 819, "B": 229, "C": 511, "D": 755, "E": 392, "F": 441 },
      { "Day": "2022-10-28", "Age": "15-25", "Gender": "Male", "A": 747, "B": 41, "C": 434, "D": 210, "E": 941, "F": 597 },
      { "Day": "2022-10-28", "Age": ">25", "Gender": "Male", "A": 992, "B": 586, "C": 777, "D": 197, "E": 532, "F": 817 },
      { "Day": "2022-10-28", "Age": "15-25", "Gender": "Female", "A": 727, "B": 531, "C": 618, "D": 612, "E": 522, "F": 91 },
      { "Day": "2022-10-28", "Age": ">25", "Gender": "Female", "A": 706, "B": 745, "C": 493, "D": 474, "E": 499, "F": 737 },
      { "Day": "2022-10-29", "Age": "15-25", "Gender": "Male", "A": 77, "B": 223, "C": 895, "D": 250, "E": 255, "F": 960 },
      { "Day": "2022-10-29", "Age": ">25", "Gender": "Male", "A": 680, "B": 288, "C": 538, "D": 390, "E": 645, "F": 439 },
      { "Day": "2022-10-29", "Age": "15-25", "Gender": "Female", "A": 895, "B": 271, "C": 280, "D": 124, "E": 162, "F": 24 },
      { "Day": "2022-10-29", "Age": ">25", "Gender": "Female", "A": 709, "B": 674, "C": 250, "D": 786, "E": 355, "F": 352 }

               
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