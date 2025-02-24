function tempratureSensorGraphCold(sensorData1, i) {
    // Ensure we have a valid sensorData1 object
    let sensorData = JSON.parse(JSON.stringify(sensorData1));
    console.log(sensorData); // Check the data before proceeding

    // Ensure tt7 is not empty or undefined
    const categories = sensorData.map(data => data.uv);
    console.log(categories); // Check categories before using them

    // Extracting other tt values as separate arrays
    const tt1Data = sensorData.map(data => parseFloat(data.uv));
    const tt2Data = sensorData.map(data => parseFloat(data.cv));
    const tt3Data = sensorData.map(data => parseFloat(data.mv));
    const tt4Data = sensorData.map(data => parseFloat(data.pv));
    const tt5Data = sensorData.map(data => parseFloat(data.gv));

    // Check the extracted data arrays
    console.log(tt1Data); // tt1 values
    console.log(tt2Data); // tt2 values
    console.log(tt3Data); // tt3 values
    console.log(tt4Data); // tt4 values
    console.log(tt5Data); // tt5 values


    // Dynamically create the div ID for the graph
    const graphDiv = 'sensorGraphCold' + i;
    var TestCycleCount=parseInt(i+1);
    
    const chart = Highcharts.chart(graphDiv, {
    	credits: { enabled: false},
        chart: {
            type: 'line',
            backgroundColor: '#f4f4f4'
        },
        title: {
            text: 'UP READINGS TEST CYCLE - '+(i+1)
        },
        xAxis: {
            categories: categories,
            title: {
                text: 'UV'
            }
        },
        yAxis: {
            title: {
                text: 'Values'
            }
        },
        tooltip: {
            shared: true,
            crosshairs: true
        },
        series: [
            { name: 'uv', data: tt1Data, color: '#FF6384' },
            { name: 'cv', data: tt2Data, color: '#36A2EB' },
            { name: 'mv', data: tt3Data, color: '#CC65FE' },
            { name: 'pv', data: tt4Data, color: '#FFCE56' },
            { name: 'gv', data: tt5Data, color: '#4BC0C0' },
        ]
    });

    // Handle checkbox toggle for series visibility
    $('.toggle-series').on('change', function () {
        const seriesIndex = $(this).data('series');
        const isVisible = $(this).is(':checked');
        chart.series[seriesIndex].setVisible(isVisible, false); // Toggle visibility
        chart.redraw(); // Redraw chart for better performance
    });
}
function tempratureSensorGraphHot(sensorData1, i) {
    // Ensure we have a valid sensorData1 object
    let sensorData = JSON.parse(JSON.stringify(sensorData1));
    console.log(sensorData); // Check the data before proceeding

    // Ensure tt7 is not empty or undefined
    const categories = sensorData.map(data => data.uv);
    console.log(categories); // Check categories before using them

    // Extracting other tt values as separate arrays
    const tt1Data = sensorData.map(data => parseFloat(data.uv));
    const tt2Data = sensorData.map(data => parseFloat(data.cv));
    const tt3Data = sensorData.map(data => parseFloat(data.mv));
    const tt4Data = sensorData.map(data => parseFloat(data.pv));
    const tt5Data = sensorData.map(data => parseFloat(data.gv));

    // Check the extracted data arrays
    console.log(tt1Data); // tt1 values
    console.log(tt2Data); // tt2 values
    console.log(tt3Data); // tt3 values
    console.log(tt4Data); // tt4 values
    console.log(tt5Data); // tt5 values


    // Dynamically create the div ID for the graph
    const graphDiv = 'sensorGraphHot' + i;
    var TestCycleCount=parseInt(i+1);
    const chart = Highcharts.chart(graphDiv, {
    	credits: { enabled: false},
        chart: {
            type: 'line',
            backgroundColor: '#f4f4f4'
        },
        title: {
            text: 'DOWN READINGS TEST CYCLE - '+(i+1)
        },
        xAxis: {
            categories: categories,
            title: {
                text: 'UV'
            }
        },
        yAxis: {
            title: {
                text: 'Values'
            }
        },
        tooltip: {
            shared: true,
            crosshairs: true
        },
        series: [
            { name: 'uv', data: tt1Data, color: '#FF6384' },
            { name: 'cv', data: tt2Data, color: '#36A2EB' },
            { name: 'mv', data: tt3Data, color: '#CC65FE' },
            { name: 'pv', data: tt4Data, color: '#FFCE56' },
            { name: 'gv', data: tt5Data, color: '#4BC0C0' }
           
        ]
    });

    // Handle checkbox toggle for series visibility
    $('.toggle-series').on('change', function () {
        const seriesIndex = $(this).data('series');
        const isVisible = $(this).is(':checked');
        chart.series[seriesIndex].setVisible(isVisible, false); // Toggle visibility
        chart.redraw(); // Redraw chart for better performance
    });
}

