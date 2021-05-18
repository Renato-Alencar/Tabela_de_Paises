import axios from 'axios'

export async function getData() {
    try{
        const response = await axios.get('https://restcountries.eu/rest/v2/all')
        return response   
    }catch(error) {
        console.error(error.message)
    }
}