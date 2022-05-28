function stuff() {
    axios({
        method: 'get',
        url: 'http://localhost:3000/get_snapshot',
        headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': '0',
        },
    })
        .then(function (response) {
            console.log(response)
            let response_data = response["data"]
            let nodes = response_data["nodes"]
            let edges = response_data["edges"]
            
            edges.forEach(element => {
                element["arrows"] = {to: {enabled: true}};
                element["label"] = element["id"];
                element["title"] = element["queue"].toString()
            });

            nodes.forEach(element => {
                element["label"] = element["id"]
                element["size"] = 0.0000000001
                element["x"] *= 1.5
                element["y"] *= 1.5
            });
            let vis_nodes = new vis.DataSet(
                nodes
            );
            var vis_edges = new vis.DataSet(
                edges
            );

            // create a network
            var container = document.getElementById('vis_container');

            // provide the data in the vis format
            var data = {
                nodes: vis_nodes,
                edges: vis_edges
            };
            var options = {
                nodes: {
                    shape: 'square'
                },
                edges: {
                    smooth: false
                },
                physics: false,
                interaction: {
                    dragNodes: false,// do not allow dragging nodes
                    zoomView: true, // do not allow zooming
                    dragView: false  // do not allow dragging
                }
            };// initialize your network!
            var network = new vis.Network(container, data, options);
        });
}
$( document ).ready(function() {
    setInterval(function () { stuff() }, 1000);
});