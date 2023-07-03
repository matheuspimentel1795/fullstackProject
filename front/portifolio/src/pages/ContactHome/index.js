
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState,useEffect, useMemo } from 'react';
import {  Grid } from '@mui/material';
import { useForm} from "react-hook-form"
import  { api } from '../../service';
import {  useNavigate } from 'react-router-dom';
import { HeaderContacts } from './Header';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
export const ContactHome = () =>{
    const { innerWidth: screenWidth } = window
    const isMobile = useMemo(() => screenWidth < 768, [screenWidth])
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
      const goToRegister = () =>{
        navigate("/cadastro")
      }
      const goToEditPage = (id) =>{
        navigate(`/getById/${id}`)
      }
    return (
        <Grid container collums={12}>
            <Grid item xs={12} height={isMobile? '80px': ''}>
                 <HeaderContacts onChangeFunction={onChangeFunction}/>
            </Grid>
            <Grid onClick={goToRegister} sx={{border:'1px solid black'}} item xs={12} gap={1} display={'flex'} alignItems={'center'}>
                <PersonAddIcon sx={{width: '50px',height:'50px', color: '#128C7E'}} />
                <p>Novo Contato</p>
            </Grid>
            { userList?.length > 0 && userList?.map((item)=>{
                return(
                    <Grid onClick={()=>goToEditPage(item.id)} sx={{border:'1px solid black'}} item xs={12} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                       <Grid item xs ={5} display={'flex'}  alignItems={'center'} >
                        <AccountCircleIcon sx={{width: '60px',height:'60px', color: '#128C7E'}}/>
                    <p>{item.nome}</p>
                    </Grid>
                    </Grid>
                )
            })}
            {userList.length === 0 && 
            <Grid item textAlign={'center'} alignSelf='center'>
            <p>Nenhum contato encontrado</p>
            </Grid>
            }
        </Grid>
    )
}