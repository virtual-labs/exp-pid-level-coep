ComponentMasterJson = {};
timerMasterJson = {};
resultJson={};

//$( document ).ready(function() {
	levelSensorPiping();
//});

function levelSensorPiping()
{
//	console.log("fgidfugodifgdoug");
	var StdCompInstruCount=7;
var StdTankCount=2;
var StdValveCount=4;
var StdPumpCount=1;

var perTankCount;
var perValveCount;
var perPumpCount;
//var perWTCount=1;

var tank;
var valve;
var pump;
var pipingActualCount=0;
//var wt;
	$("#Header").html("	<center><span>LEVEL SENSOR - PIPING DIAGRAM</span></center>");
	htm=''
		+'<div class="row titlePart"  style="border-style: unset;padding:7px;">'
		+'<center><span >CONFIGURATION</span></center>'
		+'</div>'
	
     	+'<div class="row conf" >'
	
		+'<div class="col-sm-12">'
		+'<label><b>Select no of tanks</b></label>'
		+' <input class="form-select" id="tank" type="number" min="0" max="5" value="0" tabindex="1" ></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Select no of Pumps</b></label>'
		+' <input class="form-select" id="pump" type="number" min="0" max="5" value="0" tabindex="2" ></input>'
		+'</div>'
		
	
		+'<div class="col-sm-12">'
		+'<label><b>Select no of Valves</b></label>'
		+' <input class="form-select" id="valves"  type="number" min="0" max="5" value="0" tabindex="3" ></input>'
		+'</div>'
		
		
		+'<div class="col-sm-12">'
		+'<label><b>Utilities</b></label>'
		+'<select class="form-select" id="Utilities" multiple="multiple" tabindex="4">'
		+'  <option value="Water">Water</option>'
		+'  <option value="Air">Air</option>'
		+'  <option value="Steam">Steam </option>'
		+'  <option value="Electricity">Electricity</option>'
		+'  <option value="Sterile_Water">Sterile Water </option>'
		+'  <option value="Heating_Ventilation_Air_Conditioning(HVAC)"> Heating Ventilation Air Conditioning(HVAC)</option>'
		+'  <option value="CCTV_Surveillance">CCTV - Surveillance</option>'
		+'  <option value="Access_Control"> Access Control</option>'
		
	
		+'</select>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<button type="button" class="btn btn-danger"  id="verifyComponents" style="margin-top:10px;margin-bottom:10px;width:100%" data-toggle="modal" data-target="#myModal" tabindex="5">Verify Components </button>'
		
//		+'	  <!-- The Modal -->'
		+'  <div class="modal fade " id="myModal">'
		+'    <div class="modal-dialog " id="modelDialog">'
		+'	      <div class="modal-content">'
//		+'	        <!-- Modal Header -->'
		+'	        <div class="modal-header">'
		+'	          <h4 class="modal-title"><center id="modelTitle"></center></h4>'
		+'	          <button type="button" class="close" data-dismiss="modal">&times;</button>'
		+'	        </div>'
//		+'	        <!-- Modal body -->'
		+'	        <div class="modal-body" id="modelBody">'
		
		+'	        </div>'
//		+'	        <!-- Modal footer -->'
		+'	        <div class="modal-footer">'
		+'	          <button type="button" class="btn btn-danger" data-dismiss="modal" >Ok</button>'
		+'	        </div>'
		+'	      </div>'
		+'	    </div>'
		+'	  </div>'
//		+'	  <!-- End Modal -->'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<button type="button" class="btn btn-danger"  tabindex="6" id="nextLevel1" style="margin-top:10px;margin-bottom:10px;width:100%" hidden>Next Level</button>'
		+'</div>'
		
		+'</div>'
	$("#Selection").html(htm);
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
//		+'   <!-- Customer Requirements -->'
		+'<div class="tab-pane fade show active" id="customer" role="tabpanel" aria-labelledby="customer-tab">'
//		+'    <h2 class="tab-title">Customer Requirements</h2>'
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
//		+' <!-- Operational Requirements -->'
		+'  <div class="tab-pane fade" id="operation" role="tabpanel" aria-labelledby="operation-tab">'
//		+'   <h2 class="tab-title">Operational Requirements</h2>'
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
		$("#diagram").html(htm);
       var temp=0;
	  
	   var totalComp;
	   var flag=0;
	   var  selectedValues;
	   var selectedArray=[];
	$("#verifyComponents").click(function(){
		pipingActualCount++;
		 tank=parseInt($("#tank").val());
//		 wt=parseInt($("#wt").val());
		 pump=parseInt($("#pump").val());
		 valve=parseInt($("#valves").val());
		 const selectedValues = $("#Utilities").val();
		 
		 if (selectedValues) {
	          selectedValues.forEach(value => {
	            if (!selectedArray.includes(value)) {
	              selectedArray.push(value);
	            }
	          });

//	          $("#output").text("Values in Array: " + selectedArray.join(", "));
	        } 
		 
		 
		 
		 CountComp();
		 
		  console.log(" tank "+tank);
//		  console.log(" wt "+wt);
		  console.log(" pump "+	 pump);
		  console.log(" valves "+valve);
		  
		  if(totalComp==0 ||(tank === ""  || pump === "" || valve=="" )){
			  $("#modelDialog").removeClass("modal-xl");
				$("#modelDialog").addClass("modal-md");
				 $("#modelTitle").html("Error box ");
				  $("#modelBody").html("<b>Select components</b> ");
				  $("#modelBody").css("color","red");
		  }
		  else{
			  if(temp<3){
				  CountComp();
			  }else{
				  if(flag==0){
					  $("#modelDialog").removeClass("modal-md");
					  $("#modelDialog").addClass("modal-xl");
					  $("#modelTitle").html("Required configuration ");
					  htm=''
						  +'<div class="row">'
						  +'<div class="col-sm-6" >'
						+'<table class="table table-striped table-bordered">'
						+' <tbody>'
						+'    <tr class="table-dark text-dark">'
						+'     <td colspan="2"><center>REQUIRED COMPONENTS</center></td>'
						+'   </tr>'
						+'    <tr>'
						+'     <td><center>TANKS</center></td>'
						+'     <td><center>2</center></td>'
						+'   </tr>'
						+'   <tr>'
						+'     <td><center>PUMP</center></td>'
						+'     <td><center>1</center></td>'
						+'   </tr>'
						
						+'    <tr>'
						+'    <tr>'
						+'     <td><center>VALVES</center></td>'
						+'     <td><center>4</center></td>'
						 +' </tbody>'
						+'</table>'
						+'</div>'
						 +'<div class="col-sm-6" >'
							+'<table class="table table-striped table-bordered">'
							+' <tbody>'
							+'    <tr class="table-dark text-dark">'
							+'     <td colspan="2"><center> REQUIRED UTILITIES</center></td>'
							+'   </tr>'
							+'    <tr>'
							+'     <td><center>AIR</center></td>'
							+'     <td><center><i class="fa fa-check-square icon" style=""></i></center></td>'
							+'   </tr>'
							+'   <tr>'
							+'     <td><center>ELECTRICITY</center></td>'
							+'     <td><center><i class="fa fa-check-square icon" ></i></center></td>'
							+'   </tr>'
							+'   <tr>'
							+'     <td><center>COMMUNICATION NETWORK</center></td>'
							+'     <td><center><i class="fa fa-check-square icon"></i></center></td>'
							+'   </tr>'
							
							+'    <tr>'
							+'     <td><center>ACCESS CONTROL</center></td>'
							+'     <td><center><i class="fa fa-check-square icon"></i></center></td>'
							
							+'   </tr>'
							
							+'    <tr>'
							+'     <td><center>CCTV</center></td>'
							+'     <td><center><i class="fa fa-check-square icon" ></i></center></td>'
							
							+'   </tr>'
						    +' </tbody>'
							+'</table>'
							+'</div>'
							+'</div>'

						+"<img src='images/levelSensorpartA.png' class='img-fluid' style='border-style: double;border-color: black;'>"
					  
						 $("#modelBody").html(htm);
						  $("#modelBody").css("color","red");   
				  }
				  else
					  {
					  CountComp();
					  }
				  
			  }
			  temp++;
		  }
	
	});
		  
	function CountComp(){
	
		 if(totalComp==0 ||(tank === "" ||  pump === ""  || valve=="" )){
			  $("#modelDialog").removeClass("modal-xl");
				$("#modelDialog").addClass("modal-md");
				 $("#modelTitle").html("Error box");
				  $("#modelBody").html("<b>Select components</b> ");
				  $("#modelBody").css("color","red");
		  }
		
	else{
		
		
		if((tank==StdTankCount) && (pump==StdPumpCount)  &&( StdValveCount==valve)  ){
			
			if(selectedArray.length==0){
				
				 $("#modelDialog").removeClass("modal-xl");
					$("#modelDialog").addClass("modal-md");
					 $("#modelTitle").html("Error box");
					  $("#modelBody").html("<b>Select utilities.</b> ");
					  $("#modelBody").css("color","red");
			}
			else
				{
					 $("#modelDialog").removeClass("modal-xl");
					 $("#modelDialog").addClass("modal-md");
					 $("#modelTitle").html("Message box ");
					 $("#modelBody").html("<b>Click on 'Next level' button.</b>");
					$("#modelBody").css("color","green");
					$("#tank,#wt,#pump,#verifyComponents,#Utilities,#valves").prop("disabled",true);
				
					flag=1;
					addToMasterJson();
					htm=''
						+'<div class="col-sm-12" >'
						+"<img src='images/levelSensorpartA.png' class='img-fluid img-responsive' id='partA1' style=' width: 100px;height:100px;position: relative; margin: 20px;'  >"
						+'</div>'
						
					$("#diagram").html(htm);
					 $("#partA1").animate(
					          {
					            width: "80%",
					            height: "80%",
					           left: "+=100px",
		//			            background-color:"red"
					            
					          },
					          1000,
					          
					        );
						$("#nextLevel1").prop("hidden",false);
				}	
		}
		else{
			
			 perTankCount=parseFloat((tank*100)/StdTankCount);
			 perPumpCount=parseFloat((pump*100)/StdPumpCount);
			
			 perValveCount=parseFloat((valve*100)/StdValveCount);
			 
			  console.log(" perTankCount "+perTankCount);
			  console.log(" perPumpCount "+perPumpCount);
			
			  console.log(" perValveCount "+perValveCount);
			  
				totalComp=perTankCount+perPumpCount+perValveCount;
			  avg=parseInt(totalComp/3);
			  
			  console.log(" avg "+avg);
			  console.log(" totalComp "+totalComp);
				 $("#modelDialog").removeClass("modal-xl");
				$("#modelDialog").addClass("modal-md");
				if((tank>StdTankCount) || (pump>StdPumpCount) || (valve>StdValveCount)){
					
					$("#modelBody").css("color","red"); 
					 $("#modelTitle").html("Error box");
					$("#modelBody").html("<b>More components than expected. </b>");
				}else
					{
						if(avg<100){
							$("#modelBody").css("color","red");
							$("#modelTitle").html("Message box");
							 $("#modelBody").html("<b>"+avg+" % Correctness</b>");
								
						}else{
							$("#modelBody").css("color","red");
							 $("#modelTitle").html("Error box");
							 $("#modelBody").html("<b>More components than expected.</b>");
						}
					}
		}
	}
		
	}
	function addToMasterJson()
	{
		
		tempMasterJsonComp = {
		"totalComponent":"5",
		"tank":"2",
		"pump":"1",
		"Valves":"2",
//		"Utilities":selectedArray,
		};
		
		ComponentMasterJson.Component=tempMasterJsonComp;
		ComponentMasterJson.Component.Utilities=selectedArray;
		console.log(ComponentMasterJson);
		resultJson.piping=pipingActualCount;
		console.log(resultJson);
	}
	
	$("#nextLevel1").click(function(){
		levelSensorInstrument();
	});
	
	
	
}

