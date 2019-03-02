const getData = async () => {
    try{ 
        let [rockets,launches] = await Promise.all([
            fetch('https://api.spacexdata.com/v3/rockets').then(data => data.json()),
           fetch( 'https://api.spacexdata.com/v3/launches').then(data => data.json())
        ])
        return {
            rockets,
            launches
        }
    }catch(error){
        console.log(error)
        return error
    }
}
export default getData