document.addEventListener("DOMContentLoaded", () => {
  // Full sample data
  const data = [
  {"sgp40_raw":25863,"tvoc_index":0,"timestamp":"2025-12-05T12:05:20.861899"},
  {"sgp40_raw":28525,"tvoc_index":1,"timestamp":"2025-12-05T12:05:27.450820"},
  {"sgp40_raw":29724,"tvoc_index":1,"timestamp":"2025-12-05T12:05:34.096612"},
  {"sgp40_raw":30193,"tvoc_index":1,"timestamp":"2025-12-05T12:05:40.923010"},
  {"sgp40_raw":30484,"tvoc_index":1,"timestamp":"2025-12-05T12:05:47.294906"},
  {"sgp40_raw":30533,"tvoc_index":1,"timestamp":"2025-12-05T12:05:54.358318"},
  {"sgp40_raw":30536,"tvoc_index":1,"timestamp":"2025-12-05T12:06:01.084073"},
  {"sgp40_raw":30564,"tvoc_index":1,"timestamp":"2025-12-05T12:06:07.539089"},
  {"sgp40_raw":30631,"tvoc_index":1,"timestamp":"2025-12-05T12:06:14.350436"},
  {"sgp40_raw":30679,"tvoc_index":1,"timestamp":"2025-12-05T12:06:21.449217"},
  {"sgp40_raw":30708,"tvoc_index":1,"timestamp":"2025-12-05T12:06:27.805606"},
  {"sgp40_raw":28975,"tvoc_index":3,"timestamp":"2025-12-05T12:06:34.318067"},
  {"sgp40_raw":28148,"tvoc_index":26,"timestamp":"2025-12-05T12:06:41.420116"},
  {"sgp40_raw":29305,"tvoc_index":27,"timestamp":"2025-12-05T12:06:49.121960"},
  {"sgp40_raw":28824,"tvoc_index":40,"timestamp":"2025-12-05T12:06:57.295911"},
  {"sgp40_raw":27614,"tvoc_index":62,"timestamp":"2025-12-05T12:07:04.154649"},
  {"sgp40_raw":28343,"tvoc_index":81,"timestamp":"2025-12-05T12:07:10.829653"},
  {"sgp40_raw":28386,"tvoc_index":99,"timestamp":"2025-12-05T12:07:18.608442"},
  {"sgp40_raw":28726,"tvoc_index":107,"timestamp":"2025-12-05T12:07:25.777367"},
  {"sgp40_raw":28054,"tvoc_index":125,"timestamp":"2025-12-05T12:07:32.554436"},
  {"sgp40_raw":27818,"tvoc_index":143,"timestamp":"2025-12-05T12:07:40.293886"},
  {"sgp40_raw":29482,"tvoc_index":136,"timestamp":"2025-12-05T12:07:47.192680"},
  {"sgp40_raw":26316,"tvoc_index":154,"timestamp":"2025-12-05T12:07:54.159763"},
  {"sgp40_raw":27879,"tvoc_index":169,"timestamp":"2025-12-05T12:08:01.035054"},
  {"sgp40_raw":29448,"tvoc_index":161,"timestamp":"2025-12-05T12:08:07.929319"},
  {"sgp40_raw":30093,"tvoc_index":154,"timestamp":"2025-12-05T12:08:14.702348"},
  {"sgp40_raw":30321,"tvoc_index":146,"timestamp":"2025-12-05T12:08:23.969224"},
  {"sgp40_raw":25891,"tvoc_index":163,"timestamp":"2025-12-05T12:08:31.904441"},
  {"sgp40_raw":28743,"tvoc_index":161,"timestamp":"2025-12-05T12:08:39.756403"},
  {"sgp40_raw":26245,"tvoc_index":177,"timestamp":"2025-12-05T12:08:47.378848"},
  {"sgp40_raw":27162,"tvoc_index":193,"timestamp":"2025-12-05T12:08:54.133098"},
  {"sgp40_raw":27175,"tvoc_index":207,"timestamp":"2025-12-05T12:09:00.686267"},
  {"sgp40_raw":28239,"tvoc_index":210,"timestamp":"2025-12-05T12:09:07.447076"},
  {"sgp40_raw":27701,"tvoc_index":222,"timestamp":"2025-12-05T12:09:13.843990"},
  {"sgp40_raw":28862,"tvoc_index":212,"timestamp":"2025-12-05T12:09:20.753803"},
  {"sgp40_raw":26664,"tvoc_index":226,"timestamp":"2025-12-05T12:09:27.514437"},
  {"sgp40_raw":28363,"tvoc_index":221,"timestamp":"2025-12-05T12:09:34.390753"},
  {"sgp40_raw":29676,"tvoc_index":210,"timestamp":"2025-12-05T12:09:41.131988"},
  {"sgp40_raw":30105,"tvoc_index":200,"timestamp":"2025-12-05T12:09:49.455004"},
  {"sgp40_raw": 30370,"tvoc_index":191,"timestamp":"2025-12-05T12:09:57.133993"},
  {"sgp40_raw":30120,"tvoc_index":188,"timestamp":"2025-12-05T12:10:04.421812"},
  {"sgp40_raw":29890,"tvoc_index":185,"timestamp":"2025-12-05T12:10:11.903447"},
  {"sgp40_raw":29640,"tvoc_index":182,"timestamp":"2025-12-05T12:10:19.388201"},
  {"sgp40_raw":29410,"tvoc_index":179,"timestamp":"2025-12-05T12:10:26.742991"},
  {"sgp40_raw":29180,"tvoc_index":177,"timestamp":"2025-12-05T12:10:34.216505"},
  {"sgp40_raw":28970,"tvoc_index":175,"timestamp":"2025-12-05T12:10:41.607832"},
  {"sgp40_raw":28820,"tvoc_index":174,"timestamp":"2025-12-05T12:10:49.084613"},
  {"sgp40_raw":28740,"tvoc_index":176,"timestamp":"2025-12-05T12:10:56.533704"},
  {"sgp40_raw":28590,"tvoc_index":173,"timestamp":"2025-12-05T12:11:03.998126"},
  {"sgp40_raw":28410,"tvoc_index":171,"timestamp":"2025-12-05T12:11:11.462778"},
  {"sgp40_raw":28250,"tvoc_index":169,"timestamp":"2025-12-05T12:11:18.913420"},
  {"sgp40_raw":28120,"tvoc_index":168,"timestamp":"2025-12-05T12:11:26.388912"},
  {"sgp40_raw":27980,"tvoc_index":166,"timestamp":"2025-12-05T12:11:33.844517"},
  {"sgp40_raw":27680,"tvoc_index":160,"timestamp":"2025-12-05T12:11:41.312994"},
  {"sgp40_raw":27240,"tvoc_index":148,"timestamp":"2025-12-05T12:11:48.774318"},
  {"sgp40_raw":26830,"tvoc_index":136,"timestamp":"2025-12-05T12:11:56.251903"},
  {"sgp40_raw":26480,"tvoc_index":125,"timestamp":"2025-12-05T12:12:03.721540"},
  {"sgp40_raw":26120,"tvoc_index":114,"timestamp":"2025-12-05T12:12:11.198204"},
  {"sgp40_raw":25890"tvoc_index":103,"timestamp":"2025-12-05T12:12:18.663711"},
  {"sgp40_raw":25680,"tvoc_index":92,"timestamp":"2025-12-05T12:12:26.137492"},
  {"sgp40_raw":25490,"tvoc_index":81,"timestamp":"2025-12-05T12:12:33.610381"},
  {"sgp40_raw":25340,"tvoc_index":70,"timestamp":"2025-12-05T12:12:41.086903"},
  {"sgp40_raw":25210,"tvoc_index":60,"timestamp":"2025-12-05T12:12:48.554228"},
  {"sgp40_raw":25120,"tvoc_index":50,"timestamp":"2025-12-05T12:12:56.030417"},
  {"sgp40_raw":25040,"tvoc_index":40,"timestamp":"2025-12-05T12:13:03.505992"},
  {"sgp40_raw":24980,"tvoc_index":30,"timestamp":"2025-12-05T12:13:10.977644"},
  {"sgp40_raw":24940,"tvoc_index":20,"timestamp":"2025-12-05T12:13:18.452306"},
  {"sgp40_raw":24910,"tvoc_index":12,"timestamp":"2025-12-05T12:13:25.924891"},
  {"sgp40_raw":24890,"tvoc_index":6,"timestamp":"2025-12-05T12:13:33.401207"},
  {"sgp40_raw":24880,"tvoc_index":2,"timestamp":"2025-12-05T12:13:40.876318"},
  {"sgp40_raw":24870,"tvoc_index":0,"timestamp":"2025-12-05T12:13:48.351992"},
  {"sgp40_raw":24870,"tvoc_index":0,"timestamp":"2025-12-05T12:13:35.350092"}
];

  const labels = data.map(d => d.timestamp.slice(11,19));
  const tvocData = data.map(d => d.tvoc_index);

  const ctx = document.getElementById('tvocChart').getContext('2d');
  const gradient = ctx.createLinearGradient(0,0,0,400);
  gradient.addColorStop(0, '#1a3c5a88');
  gradient.addColorStop(1, '#1a3c5a11');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,   // now only HH:MM:SS
      datasets: [{
        label: 'TVOC Index',
        data: tvocData,
        borderColor: '#1a3c5a',
        backgroundColor: gradient,
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true, position: 'top', labels: { color: '#1a3c5a' } },
        tooltip: { backgroundColor:'#1a3c5a', titleColor:'#fff', bodyColor:'#fff' }
      },
      scales: {
        x: { title: { display:true, text:'Time (HH:MM:SS)', color:'#1a3c5a' }, ticks:{ color:'#1a3c5a' } },
        y: { title: { display:true, text:'TVOC Index', color:'#1a3c5a' }, ticks:{ color:'#1a3c5a' } }
      }
    }
  });
});

// --- SGP40 RAW GRAPH ---

const sgp40Data = data.map(d => d.sgp40_raw);

const ctx2 = document.getElementById('sgp40Chart').getContext('2d');
const gradient2 = ctx2.createLinearGradient(0, 0, 0, 400);
gradient2.addColorStop(0, '#7a1f1f88');
gradient2.addColorStop(1, '#7a1f1f11');

new Chart(ctx2, {
  type: 'line',
  data: {
    labels: labels, // same HH:MM:SS labels
    datasets: [{
      label: 'SGP40 Raw Signal',
      data: sgp40Data,
      borderColor: '#7a1f1f',
      backgroundColor: gradient2,
      fill: true,
      tension: 0.4,
      pointRadius: 5,
      pointHoverRadius: 7
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: { color: '#7a1f1f' }
      },
      tooltip: {
        backgroundColor: '#7a1f1f',
        titleColor: '#fff',
        bodyColor: '#fff'
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time (HH:MM:SS)',
          color: '#7a1f1f'
        },
        ticks: { color: '#7a1f1f' }
      },
      y: {
        title: {
          display: true,
          text: 'SGP40 Raw Value',
          color: '#7a1f1f'
        },
        ticks: { color: '#7a1f1f' }
      }
    }
  }
});
