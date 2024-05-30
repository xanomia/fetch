import axios from 'axios';

const url = 'https://developers.syscomcolombia.com/oauth/token';
const clientId = 'dtvDZTVjVtp9tr4pMC5jCmxve06X4DnW';
const clientSecret = 'rZTjZewiVTHriFCQeA2PiZzBcPK0SxMxfYRN1aUx';

const data = new URLSearchParams();
data.append('client_id', clientId);
data.append('client_secret', clientSecret);
data.append('grant_type', 'client_credentials');

axios.post(url, data, {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
    .then(response => {
        // Handle the response here
        console.log(response.data);
    })
    .catch(error => {
        // Handle the error here
        console.error(error);
    });