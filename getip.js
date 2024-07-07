fetch('https://token.ip.api.useragentinfo.com/json?token=ab28a017dc0b7536f452fd951aed51d2')
    .then(response => response.json())
    .then(data => {
        const ip = data.ip;
        const province = data.province;
        const city = data.city;
        const welcomeMessage = `欢迎${province}${city}（IP：${ip}）的小伙伴访问本站`;
        document.getElementById('welcome').textContent = welcomeMessage;
    })
    .catch(error => console.error(error));
