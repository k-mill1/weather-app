import axios from 'axios'

export class ApiClient {
    responseStatusCheck(responseObject) {
        if (responseObject.status >= 200 && responseObject.status < 300) {
            return Promise.resolve(responseObject)
        } else {
            return Promise.reject(new Error(responseObject.statusText))
        }
    }

    getRequest(url) {
        return axios
        .get(url)
        .then(this.responseStatusCheck)
        .catch((error) => {
            console.log(error);
            alert(error)
        })
    }
    getWeather() {
        return this.getRequest('https://api.openweathermap.org/data/2.5/onecall?lat=53.3811&lon=-1.4701&exclude=hourly,minutely&units=metric&appid=818a298eaf2bb5d74eded9b609f03250')
    }

    
}