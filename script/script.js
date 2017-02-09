/**
 * Created by Mamun Morshed on 2/9/2017.
 */


var chartone = document.querySelectorAll('.chartone')[0];
new Chart(chartone, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Green", "Yellow", "Orange", "Cyan"],
        datasets:[{
            label: '# of votes',
            data: [12, 19, 2, 5, 3, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            bordeWidth: 1
        }]
    },
    options: {
        responsive: true,
        legend: {
            labels:{
                fontStyle: "italic"
            }
        },
        scales: {
            yAxes:[{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

});

