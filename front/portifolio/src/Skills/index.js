import { Grid } from '@mui/material';
import {
    useMemo,
  } from 'react'
import profile from '../assets/profile.jpg'
import { ProfileImage } from './styles';
import MonitorIcon from '@mui/icons-material/Monitor';
function Skills () {
    const { innerWidth: screenWidth } = window
    const isMobile = useMemo(() => screenWidth < 768, [screenWidth])
    
    const arraySkills = [
        'HTML',
        'CSS',
        'Javascript',
        'C#',
        'React.JS',
        'Nest.Js',
        'Node.Js',
        'Adonis.Js',
        '.Net Core',
        'VUEJS',
        'MySQL']
    return (
        <Grid sx={{backgroundColor: 'white'}}  padding={"2%"} container collums={12}>
            <Grid sm={12}  item xs={12} >
                {isMobile ? <h2>Conhecimentos como Desenvolvedor</h2>: <h1>Conhecimentos como Desenvolvedor</h1> }
            </Grid>
                     
            {arraySkills.map((item)=>{
                return(
                    <Grid item sm={4} xs={4} display={'flex'} alignItems={'center'}>
                        <MonitorIcon/>
                        {item}
                    </Grid>
                )
            })}
           
        </Grid>

    )
}

export default Skills