<script>
    import {LineChart} from "@carbon/charts-svelte";
    import { onMount, onDestroy } from 'svelte';

    let intervalHandle = null;
    let data = [
        // {
        //     "group": "Dataset 2",
        //     "date": "2019-01-19T05:00:00.000Z",
        //     "value": Math.random()*500,
        //     "surplus": 6328.683698621934
        // },
        // {
        //     "group": "Dataset 2",
        //     "date": "2019-01-02T05:00:00.000Z",
        //     "value": 0,
        //     "surplus": 6328.683698621934
        // },
        // {
        //     "group": "Dataset 2",
        //     "date": "2019-01-06T05:00:00.000Z",
        //     "value": 57312,
        //     "surplus": 664977486.2965866
        // },
        // {
        //     "group": "Dataset 2",
        //     "date": "2019-01-08T05:00:00.000Z",
        //     "value": 27432,
        //     "surplus": 626823665.9347148
        // },
        // {
        //     "group": "Dataset 2",
        //     "date": "2019-01-15T05:00:00.000Z",
        //     "value": 70323,
        //     "surplus": 1553822677.9945898
        // },
        // {
        //     "group": "Dataset 2",
        //     "date": "2019-01-19T05:00:00.000Z",
        //     "value": 21300,
        //     "surplus": 55963805.44782665
        // },
    ];
    let options = {
        "title": "Motor PID Tuning",
        "axes": {
            "bottom": {
                "title": "Time",
                "mapsTo": "date",
                "scaleType": "time",
        //         "thresholds": [
        //             {
        //                 "value": "2019-01-11T05:00:00.000Z",
        //                 "label": "Custom formatter"
        //             }
        //         ]
            },
            "left": {
                "mapsTo": "value",
                "title": "Conversion rate",
                "scaleType": "linear",
        //         "thresholds": [
        //             {
        //                 "value": 55000,
        //                 "label": "Custom label",
        //                 "fillColor": "orange"
        //             },
        //             {
        //                 "value": 10000,
        //                 "fillColor": "#03a9f4"
        //             }
        //         ]
            }
        },
        // "curve": "curveMonotoneX",
        // "height": "400px",
        // "toolbar": {
        //     "enabled": true,
        //     "controls": [
        //         {
        //             "type": "Reset zoom"
        //         },
        //         {
        //             "type": "Zoom in"
        //         },
        //         {
        //             "type": "Zoom out"
        //         }
        //     ],
        //     "numberOfIcons": 2
        // },
        // "zoomBar": {
        //     "top": {
        //         "enabled": true
        //     }
        // },
    };

    function addData() {
        data = [...data, {
            "group": "Dataset 2",
            "date": Date.now(),
            "value": Math.random()*500
        }];
    }

    onMount(() => {
        intervalHandle = setInterval(addData, 1000)
    })

    onDestroy(() => {
        clearInterval(intervalHandle)
        intervalHandle = null
    })


</script>

<LineChart {data} {options}/>