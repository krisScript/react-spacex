const getData = async () => {
  try {
    let [rockets, launches, history, missions] = await Promise.all([
      fetch('https://api.spacexdata.com/v3/rockets').then(data => data.json()),
      fetch('https://api.spacexdata.com/v3/launches').then(data => data.json()),
      fetch('https://api.spacexdata.com/v3/history').then(data => data.json())
    ]);
    return {
      rockets,
      launches,
      history
    };
  } catch (error) {
    console.log(error);
    return error;
  }
};
export default getData;
