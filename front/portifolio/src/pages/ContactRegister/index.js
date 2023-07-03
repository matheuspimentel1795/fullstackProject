import TextField from "@mui/material/TextField";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";

import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { api, postContact, putContact } from "../../service";
import { useNavigate, useParams } from "react-router-dom";
import { HeaderContactsRegister } from "./Header";
export const ContactRegister = () => {
  const [telNumber, setTelNumber] = useState();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const methods = useForm();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = methods;
  const { id } = useParams()
  useEffect(()=>{
    if(id){
      api.get(`/getById/${id}`)
      .then((response) => {
          setValue('nome', response.data.nome)
          setValue('telefone', response.data.telefone)
          setValue('email', response.data.email)
  
      })
        .catch((err) => {
          return err
        });
     
    }
  },[])
  const addContact = (datas) => {
    if(id){
      putContact(datas,id)
    }
    else{
      postContact(datas);
    }
    navigate("/");
    
  };
  
  return (
    <FormProvider {...methods}>
      <HeaderContactsRegister/>
      <form onSubmit={handleSubmit(addContact)}>
        <Grid
          container
          columns={12}
          gap={2}
          display={"grid"}
          justifyContent={"center"}
        >
          <Grid item xs={12} textAlign={"center"}>
            <AccountCircleIcon
              sx={{
                height: "50px",
                width: "50px",
                color: '#128C7E'
              }}
            />
          </Grid>
          <Grid item xs={12} display='grid'>
          <label>Nome:</label>
            <TextField
              {...register("nome")}
              name='nome'
              onChange={(e) => setName(e.target.value)}
              id="outlined-basic"
            />
          </Grid>
          <Grid item xs={12} display='grid'>
            <label>Telefone:</label>
            <TextField
              {...register("telefone")}
              name='telefone'
              onChange={(e) => setTelNumber(e.target.value)}
              id="outlined-basic"
            />
          </Grid>
          <Grid item xs={12}  display='grid'>
          <label>E-mail:</label>
            <TextField
              name='email'
              {...register("email")}
              onChange={(e) => setEmail(e.target.value)}
              id="outlined-basic"
            />
          </Grid>
          <Button variant="contained" type="submit" 
            sx={{
                background: '#128C7E'
              }}>
            Salvar
          </Button>
        </Grid>
      </form>
    </FormProvider>
  );
};
