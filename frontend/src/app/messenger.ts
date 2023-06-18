import axios from "axios";

axios.get('http://localhost:5000/api/products').then(data => console.log(data.data))