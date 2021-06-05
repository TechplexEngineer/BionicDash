<svelte:head>
    <script src="https://cdn.plot.ly/plotly-latest.min.js" type="text/javascript"></script>
</svelte:head>


<script>
    import {onMount, tick} from 'svelte';
    // component based on https://plotly.com/javascript/streaming/

    let durationSec = 60; // seconds

    onMount(async () => {

        function timeout(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        async function isPlotlyReady() {
            let count = 0;
            while (!window.Plotly) {
                await timeout(250);
                count++
                if (count > 100) {
                    console.log("Plotly hasn't loaded yet... seems like an error")
                }
            }
        }

        await isPlotlyReady()

        console.log("plotly loaded")


        function rand() {
            return Math.random() * 500;
        }

        const time = new Date();

        const data = [{
            x: [time],
            y: [rand()],
            mode: 'lines',
            line: {color: '#80CAF6'}
        }];


        var icon1 = {
            'width': 16,
            'height': 16,
            // Used inkscape to merge paths of boostrap download icon https://icons.getbootstrap.com/icons/download/
            'path': 'M 7.8886719 1.0117188 A 0.5 0.5 0 0 0 7.5 1.5 L 7.5 10.292969 L 5.3535156 8.1464844 A 0.5006316 0.5006316 0 0 0 4.6464844 8.8535156 L 7.6464844 11.853516 A 0.5 0.5 0 0 0 8.3535156 11.853516 L 11.353516 8.8535156 A 0.5006316 0.5006316 0 0 0 10.646484 8.1464844 L 8.5 10.292969 L 8.5 1.5 A 0.5 0.5 0 0 0 7.8886719 1.0117188 z M 0.5 9.9003906 A 0.5 0.5 0 0 0 0 10.400391 L 0 12.900391 A 2 2 0 0 0 2 14.900391 L 14 14.900391 A 2 2 0 0 0 16 12.900391 L 16 10.400391 A 0.5 0.5 0 0 0 15 10.400391 L 15 12.900391 A 1 1 0 0 1 14 13.900391 L 2 13.900391 A 1 1 0 0 1 1 12.900391 L 1 10.400391 A 0.5 0.5 0 0 0 0.5 9.9003906 z'
        }

        let layout = {
            title: 'Plot Title',
            xaxis: { //see https://plotly.com/javascript/tick-formatting/
                title: 'Time',
                showgrid: true,
                zeroline: true,
                // type: 'date'
                tickformat: "%I:%M:%S", // format string https://github.com/d3/d3-time-format#locale_format
            },
            yaxis: {
                title: 'Value',
                showline: false
            }
        };

        // see https://plotly.com/javascript/configuration-options
        let config = {
            modeBarButtonsToAdd: [
                {
                    name: 'Download Data',
                    icon: icon1,
                    direction: 'up',
                    click: function (gd) {
                        // console.log("data", data)
                        let exportData = Object.assign({}, data[0]); //@todo support more than one dataset

                        let rows = ['timestamp,value'];
                        for (let idx=0; idx < exportData.x.length; idx++) {
                            rows.push(`${exportData.x[idx].getTime() / 1000},${exportData.y[idx]}`)
                        }
                        const csv = rows.join('\r\n');
                        const csvData = `data:application/csv;charset=utf-8,${encodeURIComponent(csv)}`;
                        const filename = `DataExport.csv`;

                        const a = document.createElement('a');
                        a.href = csvData;
                        a.target = '_blank';
                        a.download = filename;
                        a.click();

                        // console.log(JSON.stringify(rows, null, 4))
                    }
                }
            ],
            editable: true,
            displaylogo: false,
            displayModeBar: true, //default hover
        }

        //see https://plotly.com/javascript/plotlyjs-function-reference/
        Plotly.newPlot('myDiv', data, layout, config);

        let cnt = 0;

        const interval = setInterval(function () {

            const time = new Date();

            const update = {
                x: [[time]],
                y: [[rand()]]
            };

            Plotly.extendTraces('myDiv', update, [0])

            if (++cnt === 100) clearInterval(interval);
        }, 1000);
    })

</script>

<h1>Graph!</h1>
<div id="myDiv"></div>

