import axios from 'axios';

const url = 'https://developers.syscomcolombia.com/oauth/token';
const clientId = 'dtvDZTVjVtp9tr4pMC5jCmxve06X4DnW';
const clientSecret = 'rZTjZewiVTHriFCQeA2PiZzBcPK0SxMxfYRN1aUx';

const data = new URLSearchParams();
data.append('client_id', clientId);
data.append('client_secret', clientSecret);
data.append('grant_type', 'client_credentials');

const response = await axios.post(url, data, {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});

const token = response.data;
console.log(token)

export default token;