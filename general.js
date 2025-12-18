const axios = require('axios');

async function getAllBooks() {
  const res = await axios.get('http://localhost:5000/');
  console.log(res.data);
}
