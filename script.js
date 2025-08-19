const labels = [
      'Английский',
      'Испанский',
      'Немецкий',
      'Японский',
      'Французский',
      'Португальский',
      'Русский',
      'Итальянский',
      'Голландский',
      'Польский'
    ];
    const data = [
      49.1, 
      6.0, 
      5.8,
      5.1, 
      4.5,
      3.9,
      3.8,
      2.8,
      2.2,
      1.8  
    ];

    new Chart(document.getElementById('langChart'), {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Процент сайтов (из топ-10 млн)',
          data: data,
          backgroundColor: 'rgba(54, 162, 235, 0.6)'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Языковая структура в интернете'
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            title: { display: true, text: 'Язык' }
          },
          y: {
            title: { display: true, text: 'Процент сайтов (%)' },
            beginAtZero: true
          }
        }
      }
    }); 