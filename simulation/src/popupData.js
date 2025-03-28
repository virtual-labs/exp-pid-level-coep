	
	
		$("#simDemo").click(function () {

			 $("#modelDialog").removeClass("modal-md");
			 $("#modelDialog").addClass("modal-xl");
			 htm=''
					+'<div class="row" >'
					+'<div class="container main-container">'
					+' <h5 class="text-center" style="color: #f8f9fa;background-color: #244747;padding-bottom:10px;padding-top:10px">PROBLEM STATEMENT</h5>'
					+'<ul class="nav nav-tabs" id="tabMenu" role="tablist">'
					+'  <li class="nav-item">'
					+'    <button class="nav-link active" id="customer-tab" data-bs-toggle="tab" data-bs-target="#customer" type="button" role="tab" aria-controls="customer" aria-selected="true">Customer Requirements</button>'
					+'  </li>'
					+'  <li class="nav-item">'
					+'    <button class="nav-link" id="operation-tab" data-bs-toggle="tab" data-bs-target="#operation" type="button" role="tab" aria-controls="operation" aria-selected="false">Operational Requirements</button>'
					+'  </li>'
					+' </ul>'
					+' <div class="tab-content mt-3" id="tabContent">'
//					+'   <!-- Customer Requirements -->'
					+'<div class="tab-pane fade show active" id="customer" role="tabpanel" aria-labelledby="customer-tab">'
//					+'    <h2 class="tab-title">Customer Requirements</h2>'
					+'   <p style="    font-size: 18px;"><b>Customer Requirements: (Design and development of level sensor calibration facility) :</b></p>'
					+'<p style=" font-size: 18px;"> The customer intends to set-up a level calibration facility which will test level sensors of following'
					+'types as minimum requirement. For all the sensors the process connection will be either ½” NPT F) OR flange type. The level range will'
					+'be from 200 mmWC to 1300 mmWC.</p>'
					+'<br>'
					+'    <ul class="list-group">'
					+'     <li class="list-group-item">1. Capacitive type level sensor</li>'
					+'     <li class="list-group-item">2. Magnetostrictive Level sensor</li>'
					+'     <li class="list-group-item">3. Guided wave radar level sensor</li>'
					+'     <li class="list-group-item">4. Ultrasonic level sensor</li>'
					+'     <li class="list-group-item">5. Pulse wave radar sensor</li>'
					+'     <li class="list-group-item">6. And provision for any other type of level sensor which fits in this category</li>'
					+'   </ul>'
					+' </div>'
//					+' <!-- Operational Requirements -->'
					+'  <div class="tab-pane fade" id="operation" role="tabpanel" aria-labelledby="operation-tab">'
//					+'   <h2 class="tab-title">Operational Requirements</h2>'
					+'   <p style="    font-size: 18px;"><b>The customer also has following requirements from the operation point of view :</b></p>'
					
					+'   <ul class="list-group">'
					+'     <li class="list-group-item">1. Minimum fluid is to be used for testing of the sensors </li>'
					+'     <li class="list-group-item">2. The entire process of characterizing of sensor must be fully automated </li>'
					+'     <li class="list-group-item">3. In case of power failure, the set-up should continue from the last reading</li>'
					+'     <li class="list-group-item">4. A provision must be made to reduce the fluid turbulence '
					+'     <li class="list-group-item">5. Multi point characterizing (Calibration) must be provided, the points will be selected by the customer '
					+'     <li class="list-group-item">6. The testing must be based on two standards '
					+'     <li class="list-group-item">7. The set-up should test three sensors (minimum) at a time '
					+'     <li class="list-group-item">8. The duration of the test should not be more than one hour in view of all the characteristics' 
					+'     <li class="list-group-item">9. For dynamic characteristics a provision should be made as per demand '
					+'     <li class="list-group-item">10. The provision is to be made to acquire health of the plant before starting any test The entire analysis and report should be made automatically with validation of data, removing outliers, and having audit trail so as to secure the data.' 
					+'     <li class="list-group-item">11. The test reports need to be stored for minimum one year '
					+'     <li class="list-group-item">12. The visualization tool to be deployed for the operators '
					+'     <li class="list-group-item">13. Role based reporting structure and dash boards to be implemented using open source software '
					+'     <li class="list-group-item">14. The minimum level financial sustainability of the set up is to be ensured and reported as pointers of efficiency '
					+'     <li class="list-group-item">15. The alarms and events are to be generated for critical parameters and to be shared based on role.'

					+'   </ul>'
					+'   </div>'
				+' </div>'
				    +' </div>'
					+'</div>'
			$("#proStrBody").html(htm);
			
		});
			$("#procedure").click(function () {
				 $("#modelDialog").removeClass("modal-xl");
				 $("#modelDialog").addClass("modal-md");
				htm=''
					+'<div class="row" >'
				+'<div class="container main-container">'
				+' <h5 class="text-center" style="color: #f8f9fa;background-color: #343a40;padding-bottom:10px;padding-top:10px">PROCEDURE</h5>'
				+'<div class="section">'
        +'<h4 class="tab-title">1. Piping Diagram Configuration</h4>'
        +'<ul>'
            +'<li>- Configure all parameters for the piping diagram. In which you need to identify vessels and equipment to run the plant.</li>'
            +'<li>- Click on the  <button class="button">Verify Components</button> button.</li>'
            +'<li>- If all configuration parameters are correct, the "Next Level" button will be visible.</li>'
            +'<li>- The button is placed below the “Verify Components” button.</li>'
            +'<li>- Click on the <button class="button">Next Level</button> button to proceed.</li>'
        +'</ul>'
    +'</div>'
    
    +'<div class="section">'
        +'<h4 class="tab-title">2. Instrument Diagram Configuration</h4>'
        +'<ul>'
            +'<li>- Follow the same steps as above to configure the instrument diagram, In this you will have identify the instruments required to run the plant.</li>'
            +'<li>- Click on the <button class="button">Verify Instruments</button> button.</li>'
            +'<li>- If all configuration parameters are correct, the "Next Level" button will be visible.</li>'
            +'<li>- The button is placed below the “Verify Components” button.</li>'
            +'<li>- Click on the <button class="button">Next Level</button> button to continue.</li>'
        +'</ul>'
    +'</div>'
    
    +'<div class="section">'
        +'<h4 class="tab-title">3. Sequence of Activities</h4>'
        +'<ul>'
            +'<li>- Read the “Prior Knowledge Assessment” statements carefully.</li>'
            +'<li>- Enter the appropriate sequence number in the provided text box. The system will not allow you to write the duplicate numbers. Hence be careful</li>'
            +'<li>- Click on the <button class="button">Submit</button> button.</li>'
            +'<li>- You have three attempts to verify whether the sequence is correct or otherwise.</li>'
            +'<li>- Try for three times and then proceed to the Simulation section.</li>'
        +'</ul>'
    +'</div>'
    
    +'<div class="section">'
        +'<h4 class="tab-title">4. Simulation Execution</h4>'
        +'<ul>'
            +'<li>- Select "Run Mode" and then click on <button class="button">Fill Tank</button> to start filling the tank.</li>'
            +'<li>- Wait for the tank to fill, then click on the <button class="button">Start</button> button to observe the readings and simulation outputs. This step is important from understanding process point of view.</li>'
            +'<li>- The simulation will display the status and phases during execution.</li>'
            +'<li>- You can start the next test cycle or view the datasheet and trends according to the test cycles.</li>'
            +'<li>- The datasheet for each test cycle can be downloaded in PDF format by clicking on the <button class="button">Download</button> button.</li>'
            +'<li>- Multiple readings are available in line format.</li>'
            +'<li>- Use the checkbox to view different series or hide specific series as needed.</li>'
        +'</ul>'
    +'</div>'
    
//    +'<div class="section">'
//        +'<h4 class="tab-title">4.1. Download Graph</h4>'
//        +'<ul>'
//            +'<li>- Click on the <button class="button">Download Graph (Test Cycle – 1)</button> button to save the graph.</li>'
//        +'</ul>'
//    +'</div>'
    
    +'<div class="section">'
        +'<h4 class="tab-title">4.1. Data Monitoring & Graphs</h4>'
        +'<ul>'
            +'<li>- View the Datasheet and Trends according to the test cycles.</li>'
            +'<li>- The trend functionality allows you to see multiple readings in a line or trend format.</li>'
            +'<li>- Use the checkbox to switch between different series or hide/show specific data.</li>'
            +'<li>- Download the graph using the <button class="button">Download Graph</button> button.</li>'
        +'</ul>'
    +'</div>'
    
    +'<div class="section">'
        +'<h4 class="tab-title">4.2. Result Assessment</h4>'
        +'<ul>'
            +'<li>- Click on the <button class="button">Result</button> button to view your performance assessment.</li>'
        +'</ul>'
    +'</div>'
    +'</div>'
	+'</div>';
	$("#proBody").html(htm);
			});
			
			$("#tagDetails").click(function () {
				 $("#modelDialog").removeClass("modal-xl");
				 $("#modelDialog").addClass("modal-md");
				htm=''
					+'<table class="table table-bordered table-hover" style="font-size:larger;">'
					+' <thead>'
					+'<tr class="table-info">'
					+'<th>Tag</th>'
					+'<th>Tag Details</th>'
					+'</tr>'
					+'</thead>'
					+' <tbody>'
					+'<tr>'
					+'<td>LT1</td>'
					+'<td>Ultrasonic Sensor </td>'
					+'</tr>'
					+'<tr>'
					+'<td>LT2</td>'
					+'<td>Capacitive Sensor </td>'
					+'</tr>'
					+'<tr>'
					+'<td>LT3</td>'
					+'<td>Magnetostrictive Sensor </td>'
					+'</tr>'
					+'<tr>'
					+'<td>LT4</td>'
					+'<td>Pulse Radar Sensor  </td>'
					+'</tr>'
					+'<tr>'
					+'<td>LT5</td>'
					+'<td>Guided Wave Radar Sensor </td>'
					+'</tr>'
				
					+'</tbody>'
					+'</table>'
				$("#tagBody").html(htm);
			});
				
	