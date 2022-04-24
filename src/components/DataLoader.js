export default class DataLoader {
  static fetchData = async (type) => {
    const res = await fetch(
      `https://ptsdoomle20220422194729.azurewebsites.net/api/${type}`
    );
    const fetchedData = await res.json();
    // console.log(fetchedData);
    return fetchedData;
  };
}
