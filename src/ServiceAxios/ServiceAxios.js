import axios from 'axios';

class ServiceAxios {


     getCountryHistory (selectedCountry){


        axios.get(`https://disease.sh/v2/historical/${selectedCountry}?lastdays=30`).then(response =>{
            this.countryData = response.data;
        }).catch(err =>{
            console.log(err);
        })
         return this.countryData;
    }

}


export default ServiceAxios;