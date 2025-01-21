function graphTabs() {
  // HTML for the graph container and tabs
  const htm = `
    <ul class="nav nav-tabs" id="dynamicTabs1" role="tablist"></ul>
    <div class="tab-content" id="dynamicTabContent1"></div>
      <button id="levelSensorGeneratePdf" class="btn btn-danger" style=" float: right; margin-top: 10px;">Download</button>
	
    
    `;
  
  // Insert the HTML into the target container
  $("#Trends1").html(htm);

  // Ensure dataArr exists and has content
  if (!Array.isArray(dataArr) || dataArr.length === 0) {
    console.error("dataArr is empty or not defined.");
    $("#bodyTrends").append("<p class='text-danger'>No data available to display.</p>");
    return;
  }

  // Clear existing tabs and content
  $('#dynamicTabs1').empty();
  $('#dynamicTabContent1').empty();

  // Create a function to initialize the chart for a specific tab
  function initializeChart(i, combinedData) {
    // Extract data arrays
    const uvArray = combinedData.map(item => parseFloat(item.uv) || 0);
    const cvArray = combinedData.map(item => parseFloat(item.cv) || 0);
    const mvArray = combinedData.map(item => parseFloat(item.mv) || 0);
    const pvArray = combinedData.map(item => parseFloat(item.pv) || 0);
    const gvArray = combinedData.map(item => parseFloat(item.gv) || 0);

    // Initialize the Highcharts graph for each tab
    Highcharts.chart(`chart-${i}`, {
      chart: {
        type: 'line',
        backgroundColor: '#f4f4f4',
      },
      exporting: { enabled: false },
      credits: { enabled: false },
      title: {
        text: `Level Sensor Data - Test Cycle ${i + 1}`,
      },
      xAxis: {
        min: 0,
        categories: uvArray,
        title: {
          text: 'Standard Readings (uv)',
        },
      },
      yAxis: {
        title: {
          text: 'Observation Readings',
        },
        min: 0, // Ensure Y-axis starts from 0
      },
      tooltip: {
        shared: true,
        crosshairs: true,
      },
      series: [
        { name: 'Ultrasonic Sensor', data: uvArray, color: '#FF6384' },
        { name: 'Capacitive Sensor', data: cvArray, color: '#CC65FE' },
        { name: 'Magnetostrictive Sensor', data: mvArray, color: '#FFCE56' },
        { name: 'Pulse Radar Sensor', data: pvArray, color: '#4BC0C0' },
        { name: 'Guided Wave Radar Sensor', data: gvArray, color: '#000080' },
      ],
    });
  }

  // Loop through dataArr to create tabs and graphs
  for (let i = 0; i < dataArr.length; i++) {
    // Combine `up` and `down` arrays
    const combinedData = dataArr[i].up.concat(dataArr[i].down);

    // Add a tab for each cycle
    const activeClass = i === 0 ? 'active' : ''; // Activate the first tab
    const tabItem = `
      <li class="nav-item" role="presentation">
        <button class="nav-link ${activeClass}" id="tab-${i}" data-bs-toggle="tab" data-bs-target="#content-${i}" type="button" role="tab" aria-controls="content-${i}" aria-selected="${i === 0}">
          Test cycle - ${i + 1}
        </button>
      </li>`;
    $('#dynamicTabs1').append(tabItem);

    // Add content for the tab
    const tabContent = `
      <div class="tab-pane fade ${activeClass ? 'show active' : ''}" id="content-${i}" role="tabpanel" aria-labelledby="tab-${i}">
        <div id="chart-${i}" style="width:100%; height:400px;"></div>
      </div>`;
    $('#dynamicTabContent1').append(tabContent);

    // Initialize the chart for the first tab (it will be shown first)
    if (i === 0) {
      initializeChart(i, combinedData);
    }

    // Initialize the chart when the tab is shown
    $(`#tab-${i}`).on('shown.bs.tab', function () {
      // Clear the chart container by emptying the div
      $(`#chart-${i}`).empty();

      // Destroy the existing chart to clear the previous one
      if (Highcharts.charts[i]) {
        Highcharts.charts[i].destroy(); // Destroy the previous chart
      }

      // Only initialize the chart when the tab is shown, to prevent reloading unnecessary charts
      initializeChart(i, combinedData);
    });
  }

  // Add functionality to generate a PDF
  document.getElementById('levelSensorGeneratePdf').addEventListener('click', function () {
    const { jsPDF } = window.jspdf; // Access jsPDF library
    const doc = new jsPDF();

    // Loop through each tab and graph to add it to the PDF
    for (let i = 0; i < dataArr.length; i++) {
      // Get the chart as an SVG element
      const chart = Highcharts.charts[i];
      if (chart) {
        // Export chart to image (SVG to DataURL)
        chart.getSVGForExport({}, function(svg) {
          // Convert SVG to PNG base64 image
          const img = new Image();
          img.src = 'data:image/svg+xml;base64,' + btoa(svg);

          // Wait for the image to load before adding to PDF
          img.onload = function() {
            if (i > 0) {
              doc.addPage(); // Add a new page for each graph after the first one
            }

            // Add the image to the PDF (positioning it in the center)
            doc.addImage(img, 'PNG', 10, 10, 180, 150); // You can adjust the width and height
          };
        });
      }
    }

    // Save the generated PDF
    doc.save('Level_sensor_test_cycles_graphs.pdf');
  });
}
