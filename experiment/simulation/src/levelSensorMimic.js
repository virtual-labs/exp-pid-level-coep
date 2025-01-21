function levelSensorMimic(){
	
	
	$("#Header").html("	<center><span >SIMULATION</span></center>");
	$("#diagram").html("");

	htm=''
		+'<div class="row titlePart"  style="border-style: unset;padding:7px;">'
		+'<center><span >PROCESS MONITORING PANEL</span></center>'
		+'</div>'
//	+'<div class="row">'
//	 +' <div class="panel">'
//	 +' <h5>Run Mode</h5>'
//	 +' <div class="form-check form-check-inline">'
//	 +'   <input class="form-check-input" type="radio" name="Mode" id="runModeCV" value="cv">'
//	 +'   <label class="form-check-label radio-label" for="twoMinutes">Control Valve</label>'
//	 +'  </div>'
//  +'  <div class="form-check form-check-inline">'
//  +'    <input class="form-check-input" type="radio" name="Mode" id="runModeM1" value="m1">'
//  +'    <label class="form-check-label radio-label" for="threeMinutes">Motor</label>'
//  +'  </div>'

//  +'	  <div id="selectedTime">Selected Time: None</div>'
  +'	</div>'
	+'</div>'
		+'<div class="row">'
		+'<div class="col-sm-6">'
		+'<button id="fillTankBtn" class="btn btn-danger" style="width:100%;margin-bottom:10px" data-toggle="modal" data-target="#myModal1" >Fill Tank</button>'
		+'</div>'
		+'<div class="col-sm-6">'
		+'<button id="startBtn" class="btn btn-danger" style="width:100%;margin-bottom:10px" disabled>Start</button>'
		+'</div>'
		+'</div>'
		+'<div class="row">'
		+'<div class="col-sm-6">'
		+'<button id="datasheetBtn" class="btn btn-danger" style="width:100%;margin-bottom:10px" data-toggle="modal" data-target="#datasheetModel" disabled>View Datasheet</button>'
		+'</div>'
		+'<div class="col-sm-6">'
		+'<button type="button" class="btn btn-danger"  id="graph" style="width:100%;margin-bottom:10px" data-toggle="modal" data-target="#modalTrends" disabled>Trends </button>'
		+'</div>'
		+'</div>'
		+'<div class="row titlePart"  style="border-style: unset;padding:7px;">'
		+'<center><span >READINGS</span></center>'
		+'</div>'
		+'<div class="row conf" >'
		+'<table class="table table-bordered">'
		+' <thead>'
//		+'  <tr>'
//		+'    <th>Firstname</th>'
//		+'   <th>Lastname</th>'
//		+'    <th>Email</th>'
//		+' </tr>'
		+'</thead>'
		+'<tbody>'
		+' <tr>'
		+'   <td><label><b>LT1</b></label></td>'
		+'   <td><label class="PMCValue" id="lt1Val">0</label>mm</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>LT2</b></label></td>'
		+' <td><label class="PMCValue" id="lt2Val">0</label>mm</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>LT3</b></label></td>'
		+' <td><label class="PMCValue" id="lt3Val">0</label>mm</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>LT4 </b></label></td>'
		+' <td><label class="PMCValue" id="lt4Val">0</label>mm</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>LT5</b></label></td>'
		+' <td><label class="PMCValue" id="lt5Val">0</label>mm</td>'
		+'  </tr>'
		
		
		+'</tbody>'
		+'</table>'

		+'</div>'
		+'<div class="col-sm-12">'
		+'<button type="button" class="btn btn-danger"  id="btnResult" style="margin-top:10px;width:100%" disabled>Result</button>'
		+'</div>'
		+'<div class="modal fade " id="datasheetModel">'
		+'<div class="modal-dialog modal-xl" >'
		+'<div class="modal-content">'
		+'<div class="modal-header">'
		+'<h4 class="modal-title"><center>Datasheet</center></h4>'
		+'<button type="button" class="close" data-dismiss="modal">&times;</button>'
		+'</div>'
		+'<div class="modal-body" id="datasheetBody">'
		+'</div>'
		+'<div class="modal-footer">'
//		+'<button type="button" class="btn btn-danger" data-dismiss="modal" >OK</button>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'</div>'
		
		+'<div class="modal fade " id="modalTrends">'
		+'<div class="modal-dialog modal-xl" >'
		+'<div class="modal-content">'
		+'<div class="modal-header">'
		+'<h4 class="modal-title"><center></center></h4>'
		+'<button type="button" class="close" data-dismiss="modal">&times;</button>'
		+'</div>'
		+'<div class="modal-body" id="Trends1">'
		+'</div>'
		+'<div class="modal-footer">'
//		+'       <button type="button" class="btn btn-danger"  id="download" style="margin-top:10px;float: right;" >Download </button>'
	
//		+'<button type="button" class="btn btn-danger" data-dismiss="modal" >Ok</button>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'</div>'
	$("#Selection").html(htm);
	animateLevelSensor();
	
//	$("#levelSensorPost").click(function(){
//		
//		levelSensorPostQuestion();
//		
//	});
	
	$("#datasheetBtn").on("click", function(){
		Datasheet();
	})
	$("#graph").on("click", function(){
		graphTabs();
	})
	
}

	/* TODO: Animation started*/
	var dataArr = [];
	
	function animateLevelSensor() {
		var data = {};
		var dataArrUp = [];
		var dataArrDown = [];
		
		var w = 1250;
		var h = 700;
//		var paper = Raphael("diagram", w, h);
		var x = 50, y = 50;

		if ($(window).width() < 500) {
			width = $(this).width();
			paper = new Raphael(document.getElementById('diagram'), '100%', '100%');
			paper.setViewBox(0, 0, w, h, true);
			paper.setSize('100%', '100%');
		} else {
			paper = new Raphael(document.getElementById('diagram'), '100%', '100%');
			paper.setViewBox(0, 0, w, h, true);
			paper.setSize('100%', '100%');
		}
		

		paper.clear();
		var time = 1000;
		var ht = -160;
		var ht2 = -152;
		var ht1 = 160;
		var ptf = 0;
		var pts = 0;
		var flg = false;
		var color = '#a8f2f7';
		var emptyColor = "#fff";
	    var txtColor = "#00cc88";

		// Draw the tank outline
		paper.rect((x + 100), (y + 50), 150, 180);   //sensor tank	
		paper.rect((x + 600), (y + 100), 150, 180);    //feed tank


		paper.path("M" + (x + 192) + " " + (y + 230) + " l  0 200 l 210 0 l 0 30 l 480 0 l 0 -400 l -160 0 l 0 60").attr({ "stroke-width": 10, "stroke": "#818080", "stroke-linejoin": "round" });  //sensor tank drain to feed fill up
		
		paper.path("M" + (x + 192) + " " + (y + 230) + " l  0 200 l 210 0 l 0 30 l 480 0 l 0 -400 l -160 0 l 0 60").attr({ "stroke-width": 8, "stroke": "#fff", "stroke-linejoin": "round" });

		paper.path("M" + (x + 630) + " " + (y + 280) + " l  0 50 l -280 0 l 0 100").attr({ "stroke-width": 10, "stroke": "#818080", "stroke-linejoin": "round" }); //feed drain to motor pipe connector 
		
		paper.path("M" + (x + 630) + " " + (y + 280) + " l  0 50 l -280 0 l 0 100").attr({ "stroke-width": 8, "stroke": "#fff", "stroke-linejoin": "round" });

		paper.path("M" + (x + 555) + " " + (y + 460) + " l  0 130 l -590 0 l 0 -580 l 160 0 l 0 60").attr({ "stroke-width": 10, "stroke": "#818080", "stroke-linejoin": "round" });  //motor pipe connector to sensor tank fill 

		paper.path("M" + (x + 555) + " " + (y + 460) + " l  0 130 l -590 0 l 0 -580 l 160 0 l 0 60").attr({ "stroke-width": 8, "stroke": "#fff", "stroke-linejoin": "round" });

		var llsIndicator = paper.image("images/llindicator.png", (x + 70), (y + 170), 65, 30);
		paper.text((x + 85), (y + 163), "LL1").attr({ 'font-size': 10, 'font-weight': 'bold' });
		var llsrStrip = paper.image("images/lblred.png", (x + 30), (y + 173), 35, 22);
		var llsgStrip = paper.image("images/lblgreen.png", (x + 30), (y + 173), 35, 22);

		var lhsIndicator = paper.image("images/lhindicator.png", (x + 75), (y + 80), 65, 30);
		paper.text((x + 85), (y + 73), "LH1").attr({ 'font-size': 10, 'font-weight': 'bold' });
		var lhsgStrip = paper.image("images/lblgreen.png", (x + 35), (y + 83), 35, 22);
		var lhsrStrip = paper.image("images/lblred.png", (x + 35), (y + 83), 35, 22);

		var lhfIndicator = paper.image("images/lhindicator.png", (x + 575), (y + 130), 65, 30);
		paper.text((x + 585), (y + 123), "LH2").attr({ 'font-size': 10, 'font-weight': 'bold' });
		var lhfgStrip = paper.image("images/lblgreen.png", (x + 535), (y + 133), 35, 22);
		var lhfrStrip = paper.image("images/lblred.png", (x + 535), (y + 133), 35, 22);

		var llfIndicator = paper.image("images/llindicator.png", (x + 570), (y + 220), 65, 30);
		paper.text((x + 585), (y + 215), "LL2").attr({ 'font-size': 10, 'font-weight': 'bold' });
		var llfrStrip = paper.image("images/lblred.png", (x + 530), (y + 223), 35, 22);
		var llfgStrip = paper.image("images/lblgreen.png", (x + 530), (y + 223), 35, 22);

		//	On Off Buttons
		var onBtn = paper.image("images/on.png", (x + 390), (y + 485), 55, 35);
		var offBtn = paper.image("images/off.png", (x + 390), (y + 485), 55, 35);

		//	Electricity and air flow indicators
		paper.rect((x+280),(y+80),200,210,5);
		paper.text((x + 290), (y + 105), "Electricity Status : ").attr({ 'font-size': 14, 'font-weight': 'bold','text-anchor': 'start' });
		var eleOn = paper.image("images/green.png", (x + 430), (y + 90),  40, 40).hide();
		var eleOff = paper.image("images/red.png", (x + 430), (y + 90), 40, 40);

		paper.text((x + 290), (y + 147), "Air Flow Status : ").attr({ 'font-size': 14, 'font-weight': 'bold','text-anchor': 'start' });
		var airOn = paper.image("images/green.png", (x + 430), (y + 130),  40, 40).hide();
		var airOff = paper.image("images/red.png", (x + 430), (y + 130), 40, 40);

		paper.text((x + 290), (y +185), "Start up phase : ").attr({ 'font-size': 14, 'font-weight': 'bold','text-anchor': 'start' });
		var stOn = paper.image("images/green.png", (x + 430), (y + 167), 40, 40);
		var stOff = paper.image("images/red.png", (x +430), (y + 167), 40, 40);
		
		paper.text((x + 290), (y +225), "Running phase : ").attr({ 'font-size': 14, 'font-weight': 'bold','text-anchor': 'start' });
		var rnOn = paper.image("images/green.png", (x + 430), (y + 207), 40, 40);
		var rnOff = paper.image("images/red.png", (x +430), (y + 207), 40, 40);
		
		paper.text((x + 290), (y +265), "Shutdown phase : ").attr({ 'font-size': 14, 'font-weight': 'bold','text-anchor': 'start' });
		var shOn = paper.image("images/green.png", (x + 430), (y + 247), 40, 40);
		var shOff = paper.image("images/red.png", (x +430), (y + 247), 40, 40);
		
		//	Sensors
		var ultrasonic = paper.image("images/ultrasonic.png", (x + 105), (y + 10), 70, 50);
		var capacitive = paper.image("images/capSensor.png", (x + 145), (y + 2), 30, 220);
		var magnetostrictive = paper.image("images/magnetos.png", (x + 165), (y - 7), 40, 228);
		var pulseRadar = paper.image("images/pulseRadar.png", (x + 190), (y + 14), 30, 80);
		var guidedWave = paper.image("images/guidedWaveRadar.png", (x + 210), (y + -6), 40, 225);

		//	Motor
		var motor_imgR = paper.image("images/motorR.png", (x + 375), (y + 400), 85, 85);  //motor	
		var motor_imgG = paper.image("images/motorG.png", (x + 375), (y + 400), 85, 85);  //motor

		//	Valves
		paper.text((x + 215), (y + 305), "SV1").attr({ 'font-size': 10, 'font-weight': 'bold' });
		var rvalve_Sv1 = paper.image("images/svValveV1R.png", (x + 178), (y + 300), 61, 50);
		var gvalve_Sv1 = paper.image("images/svValveV2G.png", (x + 178), (y + 300), 61, 50);

		paper.text((x + 545), (y + 345), "SV2").attr({ 'font-size': 10, 'font-weight': 'bold' });
		var rvalve_Sv2 = paper.image("images/svValveH1R.png", (x + 520), (y + 283), 50, 61);
		var gvalve_Sv2 = paper.image("images/svValveH2G.png", (x + 520), (y + 283), 50, 61);

		paper.text((x + 725), (y + 475), "SV3").attr({ 'font-size': 10, 'font-weight': 'bold' });
		var rvalve_Sv3 = paper.image("images/svValveH1R.png", (x + 700), (y + 413), 50, 61);
		var gvalve_Sv3 = paper.image("images/svValveH2G.png", (x + 700), (y + 413), 50, 61);


		paper.text((x + 535), (y + 525), "SV4").attr({ 'font-size': 10, 'font-weight': 'bold' });
		var rvalve_Sv4 = paper.image("images/svValveV1R.png", (x + 541), (y + 500), 61, 50);
		var gvalve_Sv4 = paper.image("images/svValveV2G.png", (x + 541), (y + 500), 61, 50);

		paper.text((x + 745), (y + 325), "Drain Valve").attr({ 'font-size': 10, 'font-weight': 'bold' });
		paper.image("images/drainValve.png", (x + 690), (y + 279), 50, 50);
		
		function rectTextBoxes(x,y){
			paper.rect((x),(y),90,28,7).attr({"fill":"#000","stroke":"#9d9d9e","stroke-width":5});
		 } 
		 
		 function platform(x, y){
			paper.rect((x),(y), 170, 1).attr({"stroke":"#000","stroke-width":5}).toFront() ;
			paper.path('M' + (x+20) + ' ' + (y+2) + 'l -10 10 l 20 0 z').attr({"fill": "#000", "stroke":"#000","stroke-width":5});
			paper.path('M' + (x+150) + ' ' + (y+2) + 'l -10 10 l 20 0 z').attr({"fill": "#000", "stroke":"#000","stroke-width":5});
		}
		
		platform((x+90),(y+232));
		platform((x+590),(y+281));
		
		var inletG = paper.image("images/svDefaultG.png", (x + 593), (y + 23), 50, 61);
		var inletR = paper.image("images/svDefaultR.png", (x + 593), (y + 23), 50, 61);
		
		function tankDefaultFitting(x,y){
			paper.path('M' + (x) + ' ' + (y) + 'l 155 0 l 0 50').attr({"stroke-width": 10, "stroke": "#818080", "stroke-linejoin": "round"  });
			paper.image("images/tankInit.png", (x), (y -30), 50, 60);
			inletR.toFront();
		} 
		
		tankDefaultFitting((x+530),(y+70));
		
		paper.rect((x+127), (y-28), 20, 15, 3).attr({"fill":"yellow"});
		paper.text((x+137), (y-20), "LT1").attr({ 'font-size': 10, 'font-weight': 'bold' });
		
		paper.rect((x+150), (y-28), 20, 15, 3).attr({"fill":"#e4e6e1"});
		paper.text((x+160), (y-20), "LT2").attr({ 'font-size': 10, 'font-weight': 'bold' });
		
		paper.rect((x+173), (y-28), 20, 15, 3).attr({"fill":"#f4b486"});
		paper.text((x+183), (y-20), "LT3").attr({ 'font-size': 10, 'font-weight': 'bold' });
		
		paper.rect((x+196), (y-28), 20, 15, 3).attr({"fill":"#ffdd9d"});
		paper.text((x+206), (y-20), "LT4").attr({ 'font-size': 10, 'font-weight': 'bold' });
		
		paper.rect((x+220), (y-28), 20, 15, 3).attr({"fill":"#ffcccc"});
		paper.text((x+230), (y-20), "LT5").attr({ 'font-size': 10, 'font-weight': 'bold' });
		
		paper.rect((x-25), (y+250), 200, 120, 3);
		paper.text((x-20), (y+270), "LT1 - Ultrasonic Sensor").attr({ 'font-size': 12, 'font-weight': 'bold','text-anchor': 'start'});
		paper.text((x-20), (y+290), "LT2 - Capacitive Sensor").attr({ 'font-size': 12, 'font-weight': 'bold','text-anchor': 'start' });
		paper.text((x-20), (y+310), "LT3 - Magnetostrictive Sensor").attr({ 'font-size': 12, 'font-weight': 'bold','text-anchor': 'start' });
		paper.text((x-20), (y+330), "LT4 - Pulse Radar Sensor").attr({ 'font-size': 12, 'font-weight': 'bold' ,'text-anchor': 'start'});
		paper.text((x-20), (y+350), "LT5 - Guided Wave Radar Sensor").attr({ 'font-size': 12, 'font-weight': 'bold','text-anchor': 'start' });
		
		paper.rect((x+325), (y-20), 40, 20, 3).attr({"fill":"yellow"});
		paper.text((x + 345), (y-10), "LT-1").attr({ 'font-size': 13, 'font-weight': 'bold' });
		rectTextBoxes((x+300),(y+5)); 	
		var ultrasonicVal = paper.text((x+345), (y+18), "0").attr({"font-size":18,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
		
		paper.rect((x+435), (y-20), 40, 20, 3).attr({"fill":"#e4e6e1"});
		paper.text((x + 455), (y-10), "LT-2").attr({ 'font-size': 13, 'font-weight': 'bold' });	
		rectTextBoxes((x+410),(y+5)); 	
		var capacitiveVal = paper.text((x+455), (y+18), "0").attr({"font-size":18,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
		
		paper.rect((x+545), (y-20), 40, 20, 3).attr({"fill":"#f4b486"});
		paper.text((x + 565), (y-10), "LT-3").attr({ 'font-size': 13, 'font-weight': 'bold' });	
		rectTextBoxes((x+520),(y+5)); 	
		var magnetostrictiveVal = paper.text((x+565), (y+18), "0").attr({"font-size":18,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
		
		paper.rect((x+655), (y-20), 40, 20, 3).attr({"fill":"#ffdd9d"});
		paper.text((x + 675), (y-10), "LT-4").attr({ 'font-size': 13, 'font-weight': 'bold' });	
		rectTextBoxes((x+630),(y+5)); 	
		var pulseVal = paper.text((x+675), (y+18), "0").attr({"font-size":18,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
		
		paper.rect((x+765), (y-20), 40, 20, 3).attr({"fill":"#ffcccc"});
		paper.text((x + 785), (y-10), "LT-5").attr({ 'font-size': 13, 'font-weight': 'bold' });	
		rectTextBoxes((x+740),(y+5)); 	
		var guidedwaveVal = paper.text((x+785), (y+18), "0").attr({"font-size":18,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
		
		gvalve_Sv1.toBack();
		gvalve_Sv2.toBack();
		gvalve_Sv3.toBack();
		gvalve_Sv4.toBack();

		llfgStrip.toBack();
		lhfrStrip.toBack();
		llsgStrip.toBack();
		lhsrStrip.toBack();

		motor_imgG.toBack();
		onBtn.hide();

		var cntfLbl = paper.text((x + 705), (y + 235), 0).attr({ 'font-size': 15, 'font-weight': 'bold' });

		var cntsLbl = paper.text((x + 205), (y + 205), 0).attr({ 'font-size': 15, 'font-weight': 'bold' });

		//    Initial feed Tank fill
		function tank_fillf(x, y) {
			var b = paper.path('M' + (x) + ' ' + (y) + 'l 0 0').attr({ 'stroke': color, 'stroke-width': '148' });
			level = b.animate({
				path: "M" + (x) + " " + (y) + "  l 0  " + (ht) + "", 'stroke-width': '148', 'stroke': color,
				opacity: 1
			}, time * 20);

			intFact = 1;
			var pinterval = setInterval(function() {
				if (ptf < 100) {
					if (ptf == 25) {
						llfgStrip.toFront();
					}
					if (ptf == 80) {
						lhfrStrip.toFront();
					}
					ptf = ptf + intFact;
					cntfLbl.attr('text', Math.round(ptf));
					cntfLbl.toFront();
				} else {
					stOff.toFront();
					inletR.toFront();
					$("#startBtn").prop("disabled", false);
					clearInterval(pinterval);
				}
			}, time / 5);
		};

		async function tank_fills(x, y) {
			dataArrUp = [];
			const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

			let currentHeight = 0;
			const unitHeight = ht / 100;

			while (pts < 100) {
				pts += 1;

				currentHeight = pts * unitHeight;

				let b = paper.path('M' + x + ' ' + y + 'l 0 0').attr({
					'stroke': color,
					'stroke-width': '148'
				});
				b.animate({
					path: "M" + x + " " + y + " l 0 " + currentHeight,
					'stroke-width': '148',
					'stroke': color,
					opacity: 1
				}, time);

				cntsLbl.attr('text', Math.round(pts));
				cntsLbl.toFront();
				llsIndicator.toFront();
				lhsIndicator.toFront();
				capacitive.toFront();
				magnetostrictive.toFront();
				pulseRadar.toFront();
				guidedWave.toFront();
				motor_imgG.toFront();
				offBtn.hide();
				onBtn.show();

				if (pts === 25) {
					llsgStrip.toFront();
				}
				if (pts === 80) {
					lhsrStrip.toFront();
				}
				
				if(pts === 100){ 
					setTimeout(function() {
						motor_imgR.toFront();
						rvalve_Sv2.toFront();
						rvalve_Sv4.toFront();
			
						onBtn.hide();
						offBtn.show();
						
						toastr.info("Wait for the reverse operation");
						reverseIterationInitiate((x-175), (y-229));
					}, time * 5);
				}

				if (pts % 5 === 0) {
					
					dataShowInc();
					motor_imgR.toFront();
					onBtn.hide();
					offBtn.show();
					await sleep(time*1.8);
				} else {
					await sleep(time);
				}
			}
		}

		async function tank_fillf1(x, y) {
			const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

			let currentHeight1 = 0;
			const unitHeight1 = ht2 / 100;

			while (ptf < 100) {
				ptf += 1;

				currentHeight1 = ptf * unitHeight1;
				currentHeight1 = currentHeight1 + 15;

				let b = paper.path('M' + x + ' ' + y + 'l 0 0').attr({
					'stroke': color,
					'stroke-width': '148'
				});
				b.animate({
					path: "M" + x + " " + y + " l 0 " + currentHeight1,
					'stroke-width': '148',
					'stroke': color,
					opacity: 1
				}, time);

				cntfLbl.attr('text', Math.round(ptf));
				cntfLbl.toFront();
				llfIndicator.toFront();
				lhfIndicator.toFront();
				offBtn.hide();
				onBtn.show();
				motor_imgG.toFront();
				if (ptf === 25) {
					llfgStrip.toFront();
				}
				if (ptf === 80) {
					lhfrStrip.toFront();
				}
				
				if(ptf == 100){ 
					setTimeout(function() {
						offBtn.show();
						onBtn.hide();
						motor_imgR.toFront();
						rvalve_Sv1.toFront();
						rvalve_Sv3.toFront();
						rnOff.toFront();
						shOn.toFront();
						dataArr.push(data);
//						console.log(dataArr);
						
						setTimeout(function(){
							shOff.toFront();
							ultrasonicVal.attr('text', "0");
							pulseVal.attr('text', "0");
							magnetostrictiveVal.attr('text', "0");
							capacitiveVal.attr('text', "0");
							guidedwaveVal.attr('text', "0");
							
							$("#lt1Val").text("0");
							$("#lt2Val").text("0");
							$("#lt3Val").text("0");
							$("#lt4Val").text("0");
							$("#lt5Val").text("0");
							
							$("#startBtn").prop("disabled", false);
							$("#datasheetBtn,#graph").prop("disabled", false);
							
						}, time * 2);
					}, time * 4);
			
					setTimeout(function() {
						for (i = 0; i <= 7; i++) {
							s[i].hide();
						}
						s[21].hide();
						s[22].hide();
						s[41].hide();
					}, time * 5);
				}

				if (ptf % 5 === 0) {
					motor_imgR.toFront();
					onBtn.hide();
					offBtn.show();
					await sleep(time*3.4);
				} else {
					await sleep(time);
				}
			}
		}

		async function tank_fills1(x, y) {
			dataArrUp = [];
			const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

			let currentHeight2 = 0;
			const unitHeight2 = ht2 / 100;

			while (pts < 100) {
				pts += 1;

				currentHeight2 = pts * unitHeight2;
				currentHeight2 = currentHeight2 + 15;

				let b = paper.path('M' + x + ' ' + y + 'l 0 0').attr({
					'stroke': color,
					'stroke-width': '148'
				});
				b.animate({
					path: "M" + x + " " + y + " l 0 " + currentHeight2,
					'stroke-width': '148',
					'stroke': color,
					opacity: 1
				}, time);

				cntsLbl.attr('text', Math.round(pts));
				cntsLbl.toFront();
				llsIndicator.toFront();
				lhsIndicator.toFront();
				capacitive.toFront();
				magnetostrictive.toFront();
				pulseRadar.toFront();
				guidedWave.toFront();
				offBtn.hide();
				onBtn.show();
				motor_imgG.toFront();

				if (pts === 25) {
					llsgStrip.toFront();
				}
				if (pts === 80) {
					lhsrStrip.toFront();
				}

				if(pts === 100){ 
					setTimeout(function() {
						motor_imgR.toFront();
						rvalve_Sv2.toFront();
						rvalve_Sv4.toFront();
			
						onBtn.hide();
						offBtn.show();
						toastr.info("Wait for the reverse operation");
						reverseIterationInitiate((x-175), (y-210));
					}, time * 5);
				}
				
				if (pts % 5 === 0) {
					dataShowInc();
					motor_imgR.toFront();
					onBtn.hide();
					offBtn.show();
					await sleep(time*3.4);
				} else {
					await sleep(time);
				}
			}
		}

		async function tank_emptyf(x, y) {
			const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

			let currentHeight = 0;
			const unitHeight = ht1 / 100;

			while (ptf > 20) {
				ptf -= 1;

				currentHeight = currentHeight + unitHeight;

				let b = paper.path('M' + x + ' ' + y + 'l 0 0').attr({
					'stroke': emptyColor,
					'stroke-width': '148'
				});
				b.animate({
					path: "M" + x + " " + y + " l 0 " + currentHeight,
					'stroke-width': '148',
					'stroke': emptyColor,
					opacity: 1
				}, time);

				cntfLbl.attr('text', Math.round(ptf));
				cntfLbl.toFront();
				llfIndicator.toFront();
				lhfIndicator.toFront();
				if (ptf === 25) {
					llfrStrip.toFront();
				}
				if (ptf === 80) {
					lhfgStrip.toFront();
				}

				if(ptf == 100){ 
//					console.log("shutdown initiated f");
					setTimeout(function() {
						offBtn.show();
						onBtn.hide();
						motor_imgR.toFront();
						rvalve_Sv1.toFront();
						rvalve_Sv3.toFront();
						rnOff.toFront();
						shOn.toFront();
						
						setTimeout(function(){
							shOff.toFront(); 
							ultrasonicVal.attr('text', "0");
							pulseVal.attr('text', "0");
							magnetostrictiveVal.attr('text', "0");
							capacitiveVal.attr('text', "0");
							guidedwaveVal.attr('text', "0");
							
							$("#lt1Val").text("0");
							$("#lt2Val").text("0");
							$("#lt3Val").text("0");
							$("#lt4Val").text("0");
							$("#lt5Val").text("0");
							
						}, time * 2);
					}, time * 4);
			
					setTimeout(function() {
						for (i = 0; i <= 7; i++) {
							s[i].hide();
						}
						s[21].hide();
						s[22].hide();
						s[41].hide();
					}, time * 5);
				}
				if (ptf % 5 === 0) {
					await sleep(time*4);
				} else {
					await sleep(time);
				}
			}
		}

		async function tank_emptys(x, y) {
			dataArrDown = [];
			const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

			let currentHeight = 0;
			const unitHeight = ht1 / 100;

			while (pts > 20) {
				pts -= 1;

				currentHeight = currentHeight + unitHeight;

				let b = paper.path('M' + x + ' ' + y + 'l 0 0').attr({
					'stroke': emptyColor,
					'stroke-width': '148'
				});
				b.animate({
					path: "M" + x + " " + y + " l 0 " + currentHeight,
					'stroke-width': '148',
					'stroke': emptyColor,
					opacity: 1
				}, time); 

				cntsLbl.attr('text', Math.round(pts));
				cntsLbl.toFront();
				llsIndicator.toFront();
				lhsIndicator.toFront();
				capacitive.toFront();
				pulseRadar.toFront();
				guidedWave.toFront();
				magnetostrictive.toFront();
				if (pts === 25) {
					llsrStrip.toFront();
				}
				if (pts === 80) {
					lhsgStrip.toFront();
				}

				if (pts % 5 === 0) {
					dataShowDec();
					await sleep(time*4);
				} else {
					await sleep(time);
				}
			}
		}

//TODO : fill tank function
		//    click event listener for fill tank button
		document.getElementById("fillTankBtn").addEventListener("click", function() {
			stOn.toFront();
			a = [];
			inletG.toFront();
			a[0] = paper.path('M' + (x + 685) + ' ' + (y + 120) + 'l 0 0 ').attr({ 'stroke': color, 'stroke-width': '7' })
			a[0].animate({ path: 'M' + (x + 685) + ' ' + (y + 120) + 'l 0 158' }, (time), function() {
				tank_fillf(x + 675, y + 279);
				llfIndicator.toFront();
				lhfIndicator.toFront();
				a[1] = paper.path('M' + (x + 630) + ' ' + (y + 280) + 'l 0 0 ').attr({ 'stroke': color, 'stroke-width': '7' })
				a[1].animate({ path: 'M' + (x + 630) + ' ' + (y + 280) + 'l 0 53 ' }, (time), function() {
					a[2] = paper.path('M' + (x + 630) + ' ' + (y + 330) + 'l 0 0 ').attr({ 'stroke': color, 'stroke-width': '7' })
					a[2].animate({ path: 'M' + (x + 630) + ' ' + (y + 330) + 'l -60 0' }, (time), function() { })
				})
			});
		
			$("#fillTankBtn").prop("disabled", true);
			
		});

		setTimeout(function() {
			eleOff.hide();
			airOff.hide();
			eleOn.show();
			airOn.show();
		}, 3000);


//TODO: start btn
		//	Click event listener for start button 
		document.getElementById("startBtn").addEventListener("click", function() {
			data = {};
			rnOn.toFront();
			$("#startBtn").prop("disabled", true);
			$("#datasheetBtn,#graph").prop("disabled", true);
			
			gvalve_Sv2.toFront();
			gvalve_Sv4.toFront();

			setTimeout(function() {
				animateFeedToSensorTankPath(x, y);
				offBtn.hide();
				motor_imgG.toFront();
				onBtn.show();
				tank_emptyf(x + 675, y + 118);
				llfIndicator.toFront();
				lhfIndicator.toFront();
			}, time * 2);

		});

		//	Animate filling path from feed tank to sensor tank
		function animateFeedToSensorTankPath(x, y) {
			r = [];
			r[0] = paper.path('M' + (x + 630) + ' ' + (y + 280) + 'l 0 0 ').attr({ 'stroke': color, 'stroke-width': '7' })
			r[0].animate({ path: 'M' + (x + 630) + ' ' + (y + 280) + 'l 0 53 ' }, (time), function() {
				r[1] = paper.path('M' + (x + 630) + ' ' + (y + 330) + 'l 0 0 ').attr({ 'stroke': color, 'stroke-width': '7' })
				gvalve_Sv2.toFront();
				r[1].animate({ path: 'M' + (x + 630) + ' ' + (y + 330) + 'l -283 0' }, (time), function() {
					r[2] = paper.path('M' + (x + 350) + ' ' + (y + 330) + 'l 0 0 ').attr({ 'stroke': color, 'stroke-width': '7' })
					r[2].animate({ path: 'M' + (x + 350) + ' ' + (y + 330) + 'l 0 102' }, (time), function() {
						r[3] = paper.path('M' + (x + 350) + ' ' + (y + 430) + 'l 0 0 ').attr({ 'stroke': color, 'stroke-width': '7' })
						motor_imgG.toFront();
						r[3].animate({ path: 'M' + (x + 350) + ' ' + (y + 430) + 'l 45 0' }, (time), function() {
							r[41] = paper.path('M' + (x + 440) + ' ' + (y + 460) + 'l 0 0 ').attr({ 'stroke': color, 'stroke-width': '7' })
							motor_imgG.toFront();
							r[41].animate({ path: 'M' + (x + 440) + ' ' + (y + 460) + 'l 120 0' }, (time), function() {
								r[4] = paper.path('M' + (x + 560) + ' ' + (y + 460) + 'l 0 0 ').attr({ 'stroke': color, 'stroke-width': '7' })
								motor_imgG.toFront();
								r[4].animate({ path: 'M' + (x + 560) + ' ' + (y + 460) + 'l 140 0' }, (time), function() { })
								r[5] = paper.path('M' + (x + 555) + ' ' + (y + 460) + 'l 0 0 ').attr({ 'stroke': color, 'stroke-width': '7' })
								gvalve_Sv4.toFront();
								r[5].animate({ path: 'M' + (x + 555) + ' ' + (y + 460) + 'l 0 133	' }, (time), function() {
									r[6] = paper.path('M' + (x + 555) + ' ' + (y + 590) + 'l 0 0 ').attr({ 'stroke': color, 'stroke-width': '7' })
									r[6].animate({ path: 'M' + (x + 555) + ' ' + (y + 590) + 'l -593 0' }, (time), function() {
										r[7] = paper.path('M' + (x - 35) + ' ' + (y + 590) + 'l 0 0 ').attr({ 'stroke': color, 'stroke-width': '7' })
										r[7].animate({ path: 'M' + (x - 35) + ' ' + (y + 590) + 'l 0 -583' }, (time), function() {
											r[8] = paper.path('M' + (x - 35) + ' ' + (y + 10) + 'l 0 0 ').attr({ 'stroke': color, 'stroke-width': '7' })
											r[8].animate({ path: 'M' + (x - 35) + ' ' + (y + 10) + 'l 163 0' }, (time), function() {
												r[9] = paper.path('M' + (x + 125) + ' ' + (y + 10) + 'l 0 0 ').attr({ 'stroke': color, 'stroke-width': '7' })
												r[9].animate({ path: 'M' + (x + 125) + ' ' + (y + 10) + 'l 0 217' }, (time), function() {
													if (flg == false) {
														tank_fills(x + 175, y + 229);
														flg = true;
													} else {
														tank_fills1(x + 175, y + 210);
													}
													llsIndicator.toFront();
													lhsIndicator.toFront();
													ultrasonic.toFront();
													capacitive.toFront();
													magnetostrictive.toFront();
													pulseRadar.toFront();
													guidedWave.toFront();
													r[10] = paper.path('M' + (x + 192) + ' ' + (y + 230) + 'l 0 0 ').attr({ 'stroke': color, 'stroke-width': '7' })
													r[10].animate({ path: 'M' + (x + 192) + ' ' + (y + 230) + 'l 0 70' }, (time), function() { });
												})
											})
										})
									})
								})
							})
						})
						r[31] = paper.path('M' + (x + 350) + ' ' + (y + 430) + 'l 0 0 ').attr({ 'stroke': color, 'stroke-width': '7' });
						r[31].animate({ path: 'M' + (x + 350) + ' ' + (y + 430) + 'l -162 0' }, (time), function() {
							r[312] = paper.path('M' + (x + 192) + ' ' + (y + 430) + 'l 0 0 ').attr({ 'stroke': color, 'stroke-width': '7' })
							r[312].animate({ path: 'M' + (x + 192) + ' ' + (y + 430) + 'l 0 -81' }, (time), function() { })
						})
					})
				})
			})
		}

		//	reverse filling initialization and a delay of motor start
		function reverseIterationInitiate(x, y) {
			gvalve_Sv1.toFront();
			gvalve_Sv3.toFront();

			for (i = 0; i < 10; i++) {
				r[i].hide();
			}
			r[31].hide();
			r[312].hide();
			r[41].hide();
			setTimeout(function() { animateSensorToFeedTankPath(x, y) }, 5000);
		}

		//	Animate filling path from sensor tank to feed tank
		function animateSensorToFeedTankPath(x, y) {
			s = [];

			offBtn.hide();
			onBtn.show();
			motor_imgG.toFront();
			tank_emptys(x + 175, y + 68);
			llsIndicator.toFront();
			lhsIndicator.toFront();
			ultrasonic.toFront();
			capacitive.toFront();
			magnetostrictive.toFront();
			pulseRadar.toFront();
			guidedWave.toFront();


			s[0] = paper.path('M' + (x + 192) + ' ' + (y + 231) + 'l 0 0 ').attr({ 'stroke': color, 'stroke-width': '7' })
			gvalve_Sv1.toFront();
			s[0].animate({ path: 'M' + (x + 192) + ' ' + (y + 231) + 'l 0 202' }, (time), function() {
				s[1] = paper.path('M' + (x + 190) + ' ' + (y + 430) + 'l 0 0 ').attr({ 'stroke': color, 'stroke-width': '7' })
				motor_imgG.toFront();
				s[1].animate({ path: 'M' + (x + 190) + ' ' + (y + 430) + 'l 160 0' }, (time), function() {
					s[21] = paper.path('M' + (x + 350) + ' ' + (y + 433) + 'l 0 0 ').attr({ 'stroke': color, 'stroke-width': '7' })
					s[21].animate({ path: 'M' + (x + 350) + ' ' + (y + 433) + 'l 0 -107' }, (time), function() {
						s[22] = paper.path('M' + (x + 350) + ' ' + (y + 330) + 'l 0 0 ').attr({ 'stroke': color, 'stroke-width': '7' })
						s[22].animate({ path: 'M' + (x + 350) + ' ' + (y + 330) + 'l 170 0' }, (time), function() { })
					})

					s[2] = paper.path('M' + (x + 350) + ' ' + (y + 430) + 'l 0 0 ').attr({ 'stroke': color, 'stroke-width': '7' })
					motor_imgG.toFront();
					s[2].animate({ path: 'M' + (x + 350) + ' ' + (y + 430) + 'l 50 0' }, (time), function() {
						s[3] = paper.path('M' + (x + 440) + ' ' + (y + 460) + 'l 0 0 ').attr({ 'stroke': color, 'stroke-width': '7' })
						motor_imgG.toFront();
						s[3].animate({ path: 'M' + (x + 440) + ' ' + (y + 460) + 'l 120 0' }, (time), function() {
							s[41] = paper.path('M' + (x + 555) + ' ' + (y + 460) + 'l 0 0 ').attr({ 'stroke': color, 'stroke-width': '7' })
							s[41].animate({ path: 'M' + (x + 555) + ' ' + (y + 460) + 'l 0 40' }, (time), function() { })

							s[4] = paper.path('M' + (x + 555) + ' ' + (y + 460) + 'l 0 0 ').attr({ 'stroke': color, 'stroke-width': '7' })
							gvalve_Sv3.toFront();
							s[4].animate({ path: 'M' + (x + 555) + ' ' + (y + 460) + 'l 330 0' }, (time), function() {

								s[5] = paper.path('M' + (x + 882) + ' ' + (y + 463) + 'l 0 0 ').attr({ 'stroke': color, 'stroke-width': '7' })
								s[5].animate({ path: 'M' + (x + 882) + ' ' + (y + 463) + 'l 0 -406' }, (time), function() {

									s[6] = paper.path('M' + (x + 882) + ' ' + (y + 60) + 'l 0 0 ').attr({ 'stroke': color, 'stroke-width': '7' })
									s[6].animate({ path: 'M' + (x + 882) + ' ' + (y + 60) + 'l -163 0' }, (time), function() {
										s[7] = paper.path('M' + (x + 722) + ' ' + (y + 60) + 'l 0 0 ').attr({ 'stroke': color, 'stroke-width': '7' })
										s[7].animate({ path: 'M' + (x + 722) + ' ' + (y + 60) + 'l 0 218' }, (time), function() {
											tank_fillf1(x + 675, y + 260);
											llfIndicator.toFront(); lhfIndicator.toFront();
										})
									})
								})
							})
						})
					})
				})
			})
		}
		
		function evaluateInc(v, ve, max, min){ 
			v = v + 65; 
			ve = diff = Math.random() * (max - min) + min;
			randomSign = Math.random() < 0.5 ? -1 : 1;
			perv = randomSign * ve; 
			
			
			return v + perv;
		}
		
		function evaluateDec(v, ve, max, min){ 
			v = v - 65; 
			ve = diff = Math.random() * (max - min) + min;
			randomSign = Math.random() < 0.5 ? -1 : 1;
			perv = randomSign * ve; 
			
			
			return v + perv;
		}
		
		var pv = 0, mv = 0, cv = 0, gv = 0, uv = 0;
		var pve = 0, mve = 0, cve = 0, gve = 0;
		
		let pmin = 0.1;
		let pmax = 0.7;

		let cmin = 0.4;
		let cmax = 0.9;

		let gmin = 0.3;
		let gmax = 0.8;

		let mmin = 0.1;
		let mmax = 0.6;
		
		
		
		function dataShowInc() {
			round = {};

			uv = uv + 65;

			pv = evaluateInc(pv, pve, pmax, pmin);
			mv = evaluateInc(mv, mve, mmax, mmin);
			cv = evaluateInc(cv, cve, cmax, cmin);
			gv = evaluateInc(gv, gve, gmax, gmin);
			
			$("#lt1Val").text(uv.toFixed(2));
			$("#lt2Val").text(cv.toFixed(2));
			$("#lt3Val").text(mv.toFixed(2));
			$("#lt4Val").text(pv.toFixed(2));
			$("#lt5Val").text(gv.toFixed(2));

			ultrasonicVal.attr('text', uv.toFixed(2));
			pulseVal.attr('text', pv.toFixed(2));
			magnetostrictiveVal.attr('text', mv.toFixed(2));
			capacitiveVal.attr('text', cv.toFixed(2));
			guidedwaveVal.attr('text', gv.toFixed(2));
			
			round.uv = uv.toFixed(2);
			round.pv = pv.toFixed(2);
			round.mv = mv.toFixed(2);
			round.cv = cv.toFixed(2);
			round.gv = gv.toFixed(2);
			dataArrUp.push(round);
			data.up = dataArrUp;
			
		}
		
		function dataShowDec() {
			round = {};

			uv = uv - 65;

			pv = evaluateDec(pv, pve, pmax, pmin);
			mv = evaluateDec(mv, mve, mmax, mmin);
			cv = evaluateDec(cv, cve, cmax, cmin);
			gv = evaluateDec(gv, gve, gmax, gmin);
			
			$("#lt1Val").text(uv.toFixed(2));
			$("#lt2Val").text(cv.toFixed(2));
			$("#lt3Val").text(mv.toFixed(2));
			$("#lt4Val").text(pv.toFixed(2));
			$("#lt5Val").text(gv.toFixed(2));

			ultrasonicVal.attr('text', uv.toFixed(2));
			pulseVal.attr('text', pv.toFixed(2));
			magnetostrictiveVal.attr('text', mv.toFixed(2));
			capacitiveVal.attr('text', cv.toFixed(2));
			guidedwaveVal.attr('text', gv.toFixed(2));
			
			round.uv = uv.toFixed(2);
			round.pv = pv.toFixed(2);
			round.mv = mv.toFixed(2);
			round.cv = cv.toFixed(2);
			round.gv = gv.toFixed(2);
			dataArrDown.push(round);
			data.down = dataArrDown;
		}	
		
}