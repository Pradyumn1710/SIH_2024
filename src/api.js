import axios from "axios";

export async function makerequest(data) {
  console.log(data)
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://127.0.0.1:5000/api/get_route',
    headers: { 
      'Content-Type': 'application/json'
    },
    data: data
  };

  try {
    const response = await axios.request(config);
    console.log(response.data);
    return response.data.route;
  } catch (error) {
    console.log(error);
    return null;
  }
}



export async function sendData(data) {
  const points = {
    points : data,
  }
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/writedata',
    headers: { 
      'Content-Type': 'application/json'
    },
    data: points
  };
console.log(data)
  try {
    const response = await axios.request(config);
    console.log(JSON.stringify(response.data));
  } catch (error) {
    console.log(error);
  }
}