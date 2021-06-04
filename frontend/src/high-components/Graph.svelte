<script>
    import {BarChartSimple} from "@carbon/charts-svelte";

    let data = [
        {
            "group": "Qty",
            "value": 65000
        },
        {
            "group": "More",
            "value": 29123
        },
        {
            "group": "Sold",
            "value": 35213
        },
        {
            "group": "Restocking",
            "value": 51213
        },
        {
            "group": "Misc",
            "value": 16932
        }
    ];
    let options = {
        "title": "Simple bar (discrete)",
        "axes": {
            "left": {
                "mapsTo": "value"
            },
            "bottom": {
                "mapsTo": "group",
                "scaleType": "labels"
            }
        },
        "height": "400px"
    };
</script>

<BarChartSimple {data} {options} />