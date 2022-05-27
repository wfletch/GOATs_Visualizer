function stuff(){
    axios({
        method: 'get',
        url: 'http://localhost:3000/get_snapshot',
        responseType: 'stream'
      })
        .then(function (response) {
          alert(response)
        });
}