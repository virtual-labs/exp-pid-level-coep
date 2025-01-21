function graphTabs() {
//	 const combinedData = dataArr.up.concat(dataArr.down);
//	 console.log(combinedData);
  // HTML for the graph container and tabs
  var htm = ''
    + '<ul class="nav nav-tabs" id="dynamicTabs1" role="tablist"></ul>'
    + '<div class="tab-content" id="dynamicTabContent1"></div>';

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

  // Iterate through dataArr to create tabs and graphs
  for (let i = 0; i < dataArr.length; i++) {
    // Add a tab for each cycle
    const activeClass = i === 0 ? 'active' : ''; // Activate the first tab
    const tabItem = `
      <li class="nav-item" role="presentation">
        <button class="nav-link ${activeClass}" id="tab-${i}" data-bs-toggle="tab" data-bs-target="#content-${i}" type="button" role="tab" aria-controls="content-${i}" aria-selected="${i === 0}">
          Test cycle - ${i + 1}
        </button>
      </li>`;
    $('#dynamicTabs1').append(tabItem);

    // Generate arrays for Highcharts
    let cvArray = [];
    let gvArray = [];
    let mvArray = [];
    let pvArray = [];
    let uvArray = [];
 

    // Check if the current item has a "sensor" array
    if (!Array.isArray(dataArr[i].up) || dataArr[i].up.length === 0) {
      console.error(`No sensor data for cycle ${i + 1}`);
      continue;
    }

    // Populate arrays with sensor data
     dataArr[i].up.forEach(item => {
      cvArray.push(parseFloat(item.cv)); // Convert strings to numbers
      gvArray.push(parseFloat(item.gv));
      mvArray.push(parseFloat(item.mv));
      pvArray.push(parseFloat(item.pv));
      uvArray.push(parseFloat(item.uv));
     
    });
     dataArr[i].down.forEach(item => {
         cvArray.push(parseFloat(item.cv)); // Convert strings to numbers
         gvArray.push(parseFloat(item.gv));
         mvArray.push(parseFloat(item.mv));
         pvArray.push(parseFloat(item.pv));
         uvArray.push(parseFloat(item.uv));
        
       });

    // Add content for the tab
    const tabContent = `
      <div class="tab-pane fade ${activeClass ? 'show active' : ''}" id="content-${i}" role="tabpanel" aria-labelledby="tab-${i}">
      <div class="row">
        <div id="chart-${i}" style="width:100%; height:400px;"></div>
        </div>
         <div class="row">
         <div class="col-sm-11"></div>
           <div class="col-sm-1">
            <button type="button" class="btn btn-danger"  id="download-${i}" style="margin-top:10px;float: right;" >Download </button>
     
           </div>
         </div>
      </div>`;
    $('#dynamicTabContent1').append(tabContent);

    // Initialize the Highcharts graph for each tab
    Highcharts.chart(`chart-${i}`, {
      chart: {
        type: 'line',
        backgroundColor: '#f4f4f4'
      },
      exporting: { enabled: false },
      credits: { enabled: false },
      title: {
        text: `Level Sensor Data - Test Cycle ${i + 1}`
      },
      xAxis: {
        categories: uvArray,
        title: {
          text: 'Standard Readings'
        }
      },
      yAxis: {
        title: {
          text: 'Observation Readings'
        }
      },
      tooltip: {
        shared: true,
        crosshairs: true
      },

      series: [
          { name: 'Ultrasonic Sensor', data: uvArray, color: '#FF6384' },
          { name: 'Capacitive Sensor', data: cvArray, color: '#CC65FE' },
          { name: 'Magnetostrictive Sensor', data: mvArray, color: '#FFCE56' },
          { name: 'Pulse Radar Sensor', data: pvArray, color: '#4BC0C0' },
          { name: 'Guided Wave Radar Sensor', data: gvArray, color: '#000080' },
        ],
      
      
    });
    $(`download-${i}`).on('click', function() {
    	
//    	$('#saveAsJpg').prop("hidden",true);
        html2canvas(document.querySelector("#marketChart")).then(canvas => {
            // Append the screenshot canvas to the body
            document.body.appendChild(canvas);
            $("canvas").css("display","none");
            // Optionally save the screenshot as an image
            var link = document.createElement('a');
            link.download = 'LevelSensorGraph_testCycle_'+(i+1)+'.png';
            link.href = canvas.toDataURL();
            link.click();
        });
    });
  }

}
