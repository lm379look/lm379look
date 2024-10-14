fetch('https://webapi-pc.meitu.com/common/ip_location')
    .then(response => response.json())
    .then(data => {
        const ip = Object.keys(data.data)[0];
        const locationData = data.data[ip];
        const province = locationData.province;
        const city = locationData.city;
        const area_code = locationData.area_code;
        const nation = locationData.nation;
        let welcomeMessage;
        if (area_code === '86' ) {
            welcomeMessage = `欢迎${province}${city}（IP：${ip}）的小伙伴访问本站`;
        } else {
            welcomeMessage = `Welcome to visit our website from ${nation} (IP: ${ip})`;
        }
        document.getElementById('welcome').textContent = welcomeMessage;
    })
    .catch(error => console.error(error));