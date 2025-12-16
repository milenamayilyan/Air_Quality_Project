document.addEventListener("DOMContentLoaded", () => {
  // Full sample data
  const data = [
  {"temperature":24.1,"pressure":904.12,"humidity":30.33,"altitude":950.95,"co2ppm":833.0,"tvoc_index":0,"timestamp":"2025-12-05T12:05:20.861899"},
  {"temperature":24.03,"pressure":904.09,"humidity":29.74,"altitude":951.22,"co2ppm":853,"tvoc_index":1,"timestamp":"2025-12-05T12:05:27.450820"},
  {"temperature":24.03,"pressure":904.13,"humidity":30.78,"altitude":950.89,"co2ppm":857,"tvoc_index":1,"timestamp":"2025-12-05T12:05:34.096612"},
  {"temperature":24.01,"pressure":904.13,"humidity":29.84,"altitude":950.91,"co2ppm":894,"tvoc_index":1,"timestamp":"2025-12-05T12:05:40.923010"},
  {"temperature":23.97,"pressure":904.14,"humidity":29.54,"altitude":950.96,"co2ppm":923,"tvoc_index":1,"timestamp":"2025-12-05T12:05:47.294906"},
  {"temperature":24.04,"pressure":904.08,"humidity":29.9,"altitude":951.39,"co2ppm":930,"tvoc_index":1,"timestamp":"2025-12-05T12:05:54.358318"},
  {"temperature":24.14,"pressure":904.1,"humidity":31.33,"altitude":951.16,"co2ppm":948,"tvoc_index":1,"timestamp":"2025-12-05T12:06:01.084073"},
  {"temperature":24.17,"pressure":904.11,"humidity":29.43,"altitude":951.04,"co2ppm":1028,"tvoc_index":1,"timestamp":"2025-12-05T12:06:07.539089"},
  {"temperature":24.18,"pressure":904.13,"humidity":29.3,"altitude":950.91,"co2ppm":1019,"tvoc_index":1,"timestamp":"2025-12-05T12:06:14.350436"},
  {"temperature":24.19,"pressure":904.13,"humidity":29.24,"altitude":950.93,"co2ppm":995,"tvoc_index":1,"timestamp":"2025-12-05T12:06:21.449217"},
  {"temperature":24.19,"pressure":904.15,"humidity":29.2,"altitude":950.71,"co2ppm":955,"tvoc_index":1,"timestamp":"2025-12-05T12:06:27.805606"},
  {"temperature":24.27,"pressure":904.09,"humidity":33.08,"altitude":951.24,"co2ppm":908,"tvoc_index":3,"timestamp":"2025-12-05T12:06:34.318067"},
  {"temperature":24.8,"pressure":904.16,"humidity":33.3,"altitude":950.63,"co2ppm":963,"tvoc_index":26,"timestamp":"2025-12-05T12:06:41.420116"},
  {"temperature":24.85,"pressure":904.1,"humidity":32.5,"altitude":950.83,"co2ppm":1092,"tvoc_index":27,"timestamp":"2025-12-05T12:06:49.121960"},
  {"temperature":25.06,"pressure":904.18,"humidity":41.71,"altitude":950.44,"co2ppm":1429,"tvoc_index":40,"timestamp":"2025-12-05T12:06:57.295911"},
  {"temperature":25.37,"pressure":904.17,"humidity":33.32,"altitude":950.56,"co2ppm":1441,"tvoc_index":62,"timestamp":"2025-12-05T12:07:04.154649"},
  {"temperature":25.58,"pressure":904.15,"humidity":31.45,"altitude":950.72,"co2ppm":1482,"tvoc_index":81,"timestamp":"2025-12-05T12:07:10.829653"},
  {"temperature":25.61,"pressure":904.06,"humidity":35.43,"altitude":951.52,"co2ppm":1437,"tvoc_index":99,"timestamp":"2025-12-05T12:07:18.608442"},
  {"temperature":25.68,"pressure":904.1,"humidity":33.83,"altitude":951.17,"co2ppm":1290,"tvoc_index":107,"timestamp":"2025-12-05T12:07:25.777367"},
  {"temperature":25.9,"pressure":904.23,"humidity":31.73,"altitude":950.02,"co2ppm":1197,"tvoc_index":125,"timestamp":"2025-12-05T12:07:32.554436"},
  {"temperature":26.08,"pressure":904.22,"humidity":34.37,"altitude":950.1,"co2ppm":1219,"tvoc_index":143,"timestamp":"2025-12-05T12:07:40.293886"},
  {"temperature":25.86,"pressure":904.18,"humidity":29.29,"altitude":950.4,"co2ppm":1164.0,"tvoc_index":136,"timestamp":"2025-12-05T12:07:47.192680"},
  {"temperature":25.75,"pressure":904.18,"humidity":33.97,"altitude":950.48,"co2ppm":1086.0,"tvoc_index":154,"timestamp":"2025-12-05T12:07:54.159763"},
  {"temperature":25.61,"pressure":904.14,"humidity":28.97,"altitude":950.77,"co2ppm":1088.0,"tvoc_index":169,"timestamp":"2025-12-05T12:08:01.035054"},
  {"temperature":25.49,"pressure":904.15,"humidity":28.36,"altitude":950.74,"co2ppm":1056.0,"tvoc_index":161,"timestamp":"2025-12-05T12:08:07.929319"},
  {"temperature":25.36,"pressure":904.14,"humidity":28.2,"altitude":950.83,"co2ppm":983.0,"tvoc_index":154,"timestamp":"2025-12-05T12:08:14.702348"},
  {"temperature":25.24,"pressure":904.14,"humidity":28.2,"altitude":950.83,"co2ppm":908.0,"tvoc_index":146,"timestamp":"2025-12-05T12:08:23.969224"},
  {"temperature":26.05,"pressure":904.25,"humidity":53.45,"altitude":949.84,"co2ppm":805.0,"tvoc_index":163,"timestamp":"2025-12-05T12:08:31.904441"},
  {"temperature":25.87,"pressure":904.18,"humidity":30.35,"altitude":950.4,"co2ppm":992.0,"tvoc_index":161,"timestamp":"2025-12-05T12:08:39.756403"},
  {"temperature":26.66,"pressure":904.25,"humidity":56.74,"altitude":949.77,"co2ppm":1066.0,"tvoc_index":177,"timestamp":"2025-12-05T12:08:47.378848"},
  {"temperature":26.82,"pressure":904.26,"humidity":45.6,"altitude":949.68,"co2ppm":1675.0,"tvoc_index":193,"timestamp":"2025-12-05T12:08:54.133098"},
  {"temperature":26.9,"pressure":904.05,"humidity":50.66,"altitude":951.65,"co2ppm":1442.0,"tvoc_index":207,"timestamp":"2025-12-05T12:09:00.686267"},
  {"temperature":26.76,"pressure":904.21,"humidity":33.69,"altitude":950.13,"co2ppm":1452.0,"tvoc_index":210,"timestamp":"2025-12-05T12:09:07.447076"},
  {"temperature":26.67,"pressure":904.13,"humidity":48.78,"altitude":950.93,"co2ppm":1358.0,"tvoc_index":222,"timestamp":"2025-12-05T12:09:13.843990"},
  {"temperature":26.46,"pressure":904.26,"humidity":32.66,"altitude":949.66,"co2ppm":1350.0,"tvoc_index":212,"timestamp":"2025-12-05T12:09:20.753803"},
  {"temperature":26.78,"pressure":903.93,"humidity":49.9,"altitude":952.69,"co2ppm":1138.0,"tvoc_index":226,"timestamp":"2025-12-05T12:09:27.514437"},
  {"temperature":26.73,"pressure":904.26,"humidity":31.4,"altitude":949.72,"co2ppm":1675.0,"tvoc_index":221,"timestamp":"2025-12-05T12:09:34.390753"},
  {"temperature":26.43,"pressure":904.29,"humidity":28.93,"altitude":949.39,"co2ppm":1442.0,"tvoc_index":210,"timestamp":"2025-12-05T12:09:41.131988"},
  {"temperature":26.22,"pressure":904.24,"humidity":28.38,"altitude":949.86,"co2ppm":1099.0,"tvoc_index":200,"timestamp":"2025-12-05T12:09:49.455004"},
  {"temperature":26.0,"pressure":904.25,"humidity":28.09,"altitude":949.81,"co2ppm":1004.0,"tvoc_index":191,"timestamp":"2025-12-05T12:09:57.133993"},
  {"temperature":25.98,"pressure":904.23,"humidity":27.95,"altitude":949.88,"co2ppm":980.0,"tvoc_index":188,"timestamp":"2025-12-05T12:10:04.421812"},
  {"temperature":25.95,"pressure":904.21,"humidity":27.62,"altitude":949.91,"co2ppm":955.0,"tvoc_index":185,"timestamp":"2025-12-05T12:10:11.903447"},
  {"temperature":25.92,"pressure":904.20,"humidity":27.40,"altitude":949.95,"co2ppm":940.0,"tvoc_index":182,"timestamp":"2025-12-05T12:10:19.388201"},
  {"temperature":25.90,"pressure":904.18,"humidity":27.18,"altitude":950.02,"co2ppm":925.0,"tvoc_index":179,"timestamp":"2025-12-05T12:10:26.742991"},
  {"temperature":25.89,"pressure":904.17,"humidity":27.05,"altitude":950.08,"co2ppm":910.0,"tvoc_index":177,"timestamp":"2025-12-05T12:10:34.216505"},
  {"temperature":25.87,"pressure":904.16,"humidity":26.91,"altitude":950.11,"co2ppm":900.0,"tvoc_index":175,"timestamp":"2025-12-05T12:10:41.607832"},
  {"temperature":25.86,"pressure":904.15,"humidity":26.80,"altitude":950.15,"co2ppm":890.0,"tvoc_index":174,"timestamp":"2025-12-05T12:10:49.084613"},
  {"temperature":25.85,"pressure":904.14,"humidity":26.92,"altitude":950.18,"co2ppm":905.0,"tvoc_index":176,"timestamp":"2025-12-05T12:10:56.533704"},
  {"temperature":25.84,"pressure":904.13,"humidity":26.70,"altitude":950.21,"co2ppm":880.0,"tvoc_index":173,"timestamp":"2025-12-05T12:11:03.998126"},
  {"temperature":25.83,"pressure":904.12,"humidity":26.55,"altitude":950.24,"co2ppm":865.0,"tvoc_index":171,"timestamp":"2025-12-05T12:11:11.462778"},
  {"temperature":25.82,"pressure":904.11,"humidity":26.40,"altitude":950.27,"co2ppm":850.0,"tvoc_index":169,"timestamp":"2025-12-05T12:11:18.913420"},
  {"temperature":25.81,"pressure":904.10,"humidity":26.28,"altitude":950.30,"co2ppm":840.0,"tvoc_index":168,"timestamp":"2025-12-05T12:11:26.388912"},
  {"temperature":25.80,"pressure":904.09,"humidity":26.15,"altitude":950.33,"co2ppm":830.0,"tvoc_index":166,"timestamp":"2025-12-05T12:11:33.844517"}
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
