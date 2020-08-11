import axios from "axios";

const getAnswer = ()=>{ 
  return axios.get('https://api.t3d.live/materials/lists')
}

export default getAnswer