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
            data = response["data"]
            var nodes = new vis.DataSet(
                data["nodes"]
            );

            // create an array with edges
            var edges = new vis.DataSet(
                data["edges"]
            );

            // create a network
            var container = document.getElementById('vis_container');

            // provide the data in the vis format
            var data = {
                nodes: nodes,
                edges: edges
            };
            var options = {
                nodes: {
                    shape: 'dot'
                },
                edges: {
                    smooth: false
                },
                physics: false,
                interaction: {
                    dragNodes: false,// do not allow dragging nodes
                    zoomView: false, // do not allow zooming
                    dragView: false  // do not allow dragging
                }
            };// initialize your network!
            var network = new vis.Network(container, data, options);
        });
}
$( document ).ready(function() {
    setInterval(function () { stuff() }, 1000);
});