import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { Button, Grid } from '@mui/material';

import { useForm, FormProvider, useFormContext } from "react-hook-form"
import { postContact } from '../../service';
import {  useNavigate } from 'react-router-dom';
export const ContactRegister = () =>{
    const [telNumber,setTelNumber] = useState()
    const [email,setEmail] = useState()
    const [name,setName] = useState()
    const methods = useForm()
    const navigate = useNavigate()
    const {
        handleSubmit,
        register,
        formState: { errors }
      } = methods

    const addContact = (datas)=>{
        //console.log(navigate)
       navigate('/')
        postContact(datas)
    }
    const onChangeFunction = (e) => {
        console.log(e.target.value)
       setTelNumber(e.target.value)
    }
    return (
        <FormProvider {...methods}>
        <form onSubmit={ handleSubmit(addContact) }>
        <Grid container columns={12} gap={2} display={'grid'} justifyContent={'center'}>
            <Grid item xs = {12} textAlign={'center'}>
            <AccountCircleIcon   sx={ {
                          height: '50px',
                          width: '50px'
                        } }/>
            </Grid>
            <Grid item xs={12}>
             <TextField { ...register('nome') } onChange={(e)=>setName(e.target.value)} id="outlined-basic" label="Telefone"  />
             </Grid>
             <Grid item xs={12}>
             <TextField { ...register('telefone') } onChange={(e)=>setTelNumber(e.target.value)} id="outlined-basic" label="Nome"  />
             </Grid>
             <Grid item xs={12}>
             <TextField { ...register('email') } onChange={(e)=>setEmail(e.target.value)} id="outlined-basic" label="E-mail"  />
             </Grid>
             <Button variant="contained" type='submit'>Salvar</Button>
        </Grid>
        </form>
        </FormProvider>
    )
}