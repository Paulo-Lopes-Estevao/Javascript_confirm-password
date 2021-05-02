
 /*
 *
 * Equipa  : Walalétec - Soluções Tecnológicas
 * Membros : António Gabriel, Aziel António, Filipe Gomes, Herlander Bento, Kelvín Domingos, Neiri Miúdo,  Paulo Estevão.
 * Desenvolvido por : Herlander Bento.
 * Data: 17/12/2019.
 * Nota: III João 01:11
 * " Amado, não siga o mal, mas o bem. Quem faz o bem é de Deus;
 *   mas quem faz o mal não tem visto Deus  ".
 *
*/


  var randomScalingFactor = function() {
    return Math.round(Math.random() * 50 * (Math.random() > 0.5 ? 1 : 1)) + 50;
  };

  var config = {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'My First dataset',
        fill: false,
        borderColor: window.chartColors.red,
        backgroundColor: window.chartColors.red,
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ]
      }, {
        label: 'My Second dataset',
        fill: false,
        borderColor: window.chartColors.blue,
        backgroundColor: window.chartColors.blue,
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ]
      }]
    },
    options: {
      width: 100,
      height: 100,
      title: {
        display: true,
        text: 'Chart.js Line Chart - X-Axis Filter'
      },
      scales: {
        x: {
          display: true,
          ticks: {
            callback: function(dataLabel, index) {
              // Hide the label of every 2nd dataset. return null to hide the grid line too
              return index % 2 === 0 ? dataLabel : '';
            }
          }
        },
        y: {
          display: true,
          beginAtZero: false
        }
      }
    }
  };

  window.onload = function() {
    var ctx = document.getElementById('chart-report').getContext('2d');
    window.myLine = new Chart(ctx, config);
  };