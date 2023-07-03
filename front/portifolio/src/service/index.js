import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-php-laravel-production.up.railway.app/api",
});

export const getContacts = ()=>{
    api.get("/getAll")
    .then((response) => {
        return response.data
    })
      .catch((err) => {
        return err
      });
   
}
export const postContact = (data)=>{
    api.post("/contatos/add",data)
    .then((response) => {
        return response
    })
      .catch((err) => {
        return err
      });
}

export const putContact = (data,id)=>{
  api.put(`/editar/${id}`,data)
  .then((response) => {
      return response
  })
    .catch((err) => {
      return err
    });
}