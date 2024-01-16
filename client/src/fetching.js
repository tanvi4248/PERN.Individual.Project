const BASE_URL = `http://localhost:8080/api`;

export const fetchTours = async () => {
    try{
        const response = await fetch(`${BASE_URL}/tours`)
        const result = response.json()
        console.log(result)
        return result
    } catch (err) {
        console.log(err)
    }
}