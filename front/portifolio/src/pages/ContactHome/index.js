import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState,useEffect } from 'react';
import { Button, Grid } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import { useForm, FormProvider, useFormContext } from "react-hook-form"
import getCon, { api, getContacts, postContact } from '../../service';
import {  useNavigate } from 'react-router-dom';
import { HeaderContacts } from './Header';

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
      const [userList,setUserList] = useState([])
      const [users, setUsers] = useState()
      useEffect(()=>{
        api.get('/getAll')
        .then((response) => {
            setUserList(response.data)
            setUsers(response.data)
        })
          .catch((err) => {
            return err
          });
       
      },[])
      const onChangeFunction = (e) => {
        if(e.target.value.length === 0){
            setUserList(users)
        }
        else{
            const filtro = userList?.filter((item) =>
              item.nome.includes(e.target.value)
            );
            setUserList(filtro)
        }
        
      };
    return (
        <Grid container collums={12}>
            <Grid item xs={12} height={'80px'}>
                {userList?.length > 0 && <HeaderContacts onChangeFunction={onChangeFunction}/>}
            </Grid>
            { userList?.length > 0 && userList?.map((item)=>{
                return(
                    <Grid sx={{border:'1px solid black'}} item xs={12} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                       <Grid item xs ={5} display={'flex'}  alignItems={'center'} >
                        <AccountCircleIcon sx={{width: '60px',height:'60px'}}/>
                    <h1>{item.nome}</h1>
                    </Grid>
                    <CreateIcon/>
                    </Grid>
                )
            })}
            {userList.length === 0 && 
            <p>Nenhum contato encontrado</p>}
        </Grid>
    )
}