function Datasheet(){
console.log(dataArr);
	var htm=''
	 +' <div class="row">'

	 +' <!-- Tabs and Content Container -->'
	 +'  <ul class="nav nav-tabs" id="dynamicTabs" role="tablist"></ul>'
	 +'  <div class="tab-content" id="dynamicTabContent"></div>'
	 +'</div>'
	 +' <button id="generatePdf" class="btn btn-danger" style=" float: right; margin-top: 10px;">Download</button>'
	 
$("#datasheetBody").html(htm);


      // Clear existing tabs and content
      $('#dynamicTabs').empty();
      $('#dynamicTabContent').empty();

      for (let i = 0; i < dataArr.length; i++) {
    	  // Add tab
    	  const activeClass = i === 0 ? 'active' : ''; // Activate the first tab
    	  const tabItem = `
    	    <li class="nav-item" role="presentation">
    	      <button class="nav-link ${activeClass}" id="tab-${i}" data-bs-toggle="tab" data-bs-target="#content-${i}" type="button" role="tab">
    	        Test cycle - ${i + 1}
    	      </button>
    	    </li>`;
    	  $('#dynamicTabs').append(tabItem);
    	  let p=0;
    	  // Generate table rows dynamically
    	  let rows = ` `;
    	  for (let j = 0; j < dataArr[i].up.length; j++,p++) {
    	    rows += `
    	      <tr>
    	        <td>${p}</td>
    	        <td>${dataArr[i].up[j].uv}</td>
    	        <td>${dataArr[i].up[j].cv}</td>
    	        <td>${dataArr[i].up[j].mv}</td>
    	        <td>${dataArr[i].up[j].pv}</td>
    	        <td>${dataArr[i].up[j].gv}</td>
    	       
    	      </tr>`;
    	  }
    	  for (let j = 0; j < dataArr[i].down.length; j++,p++) {
      	    rows += `
      	      <tr>
      	        <td>${p}</td>
      	        <td>${dataArr[i].down[j].uv}</td>
      	        <td>${dataArr[i].down[j].cv}</td>
      	        <td>${dataArr[i].down[j].mv}</td>
      	        <td>${dataArr[i].down[j].pv}</td>
      	        <td>${dataArr[i].down[j].gv}</td>
      	       
      	      </tr>`;
      	  }

    	  // Add tab content
    	  const tabContent = `
    	    <div class="tab-pane fade ${activeClass ? 'show active' : ''}" id="content-${i}" role="tabpanel">
 
    	      <table class="table table-bordered mt-3"  style="overflow-y: auto; overflow-x: auto;">
    	        <thead>
    	          <tr>
    	            <th>Sr no</th>
    	             <th>Ultrasonic Sensor (LT-1)</th>
    	            <th>Capacitive Sensor (LT-2)</th>
    	            <th>Magnetostrictive Sensor (LT-3)</th>
    	            <th>Pulse Radar Sensor (LT-4)</th>
    	            <th>Guided Wave Radar Sensor (LT-5)</th>
    	        </tr>
    	        </thead>
    	        <tbody>
    	          ${rows}
    	        </tbody>
    	      </table>
    	    </div>`;
    	  $('#dynamicTabContent').append(tabContent);
    	}
      
      
      
      document.getElementById('generatePdf').addEventListener('click', function () {
    	    const { jsPDF } = window.jspdf; // Access jsPDF library
    	    const doc = new jsPDF();

    	    const tables = document.querySelectorAll('#dynamicTabContent .table'); // Select all tables
    	    tables.forEach((table, index) => {
    	      if (index > 0) {
    	        doc.addPage(); // Add a new page for each table after the first
    	      }
    	      doc.autoTable({
    	        html: table, // Generate PDF table from HTML table
    	        theme: 'grid', // Optional: Table styling (striped, grid, plain)
    	        startY: 10, // Starting Y position
    	        margin: { top: 10, bottom: 10 }, // Optional margins
    	      });
    	    });

    	    doc.save('Level_sensor_test_cycles.pdf'); // Download the generated PDF
    	  });
}
	
