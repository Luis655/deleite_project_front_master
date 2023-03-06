import axios from 'axios'

export class Call {

    url = 'https://localhost:7058/';
    constructor() { }

    async cenisFetch(method: string, uri: string, token: string, body: {}) {
        var config = {}
        if (token == null || token == "") {
            config = {
                method: method,
                url: `${this.url}${uri}`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(body)
            };

        } else {
            config = {
                method: method,
                url: `${this.url}${uri}`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                data: JSON.stringify(body)
            };
        }


        const response = await axios(config)
            .then(function (res) {

                return { Data: res.data, status: res.status };
            })
            .catch(function (err) {
                return { Data: err.response.data, status: err.response.status };
            });
        return response;
    }
}