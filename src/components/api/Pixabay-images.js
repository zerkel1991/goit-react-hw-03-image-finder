import axios from './axios'

const instance = axios.create ({
  baseUrl : 'https://pixabay.com/api/',
  key : '?key=28680775-d5d2c94020fa583a98c0796ee',
  params : {
    per_page : 12,
  },

});

export const getImages = async (page = 1) =>{
const {data} = await instance.get("/",{
  params:{
    page : page,
  }
})

return data;
}
