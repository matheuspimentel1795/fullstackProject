import axios from "axios";

export const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

export const getContacts = ()=>{
    let data
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

