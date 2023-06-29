import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState,useEffect } from 'react';
import { Button, Grid } from '@mui/material';

import { useForm, FormProvider, useFormContext } from "react-hook-form"
import getCon, { api, getContacts, postContact } from '../../service';
import {  useNavigate } from 'react-router-dom';

export const ContactHome = () =>{
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
      const [userList,setUserList] = useState()
      useEffect(()=>{
        api.get('/getAll')
        .then((response) => {
            setUserList(response.data)
        })
          .catch((err) => {
            return err
          });
       
      },[])
    
    return (
        <Grid>
            {userList.map((item)=>{
                return(
                    <h1>{item.nome}</h1>
                )
            })}
        </Grid>
    )
}