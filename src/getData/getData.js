const getData = async () => {
    try{ 
        let [missions,launches] = await Promise.all([
            fetch('https://api.spacexdata.com/v3/missions').then(data => data.json()),
           fetch( 'https://api.spacexdata.com/v3/launches').then(data => data.json())
        ])
        return {
            missions,
            launches
        }
    }catch(error){
        console.log(error)
        return error
    }
}
export default getData