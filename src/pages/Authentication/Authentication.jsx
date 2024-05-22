import { Grid } from '@mui/material'
import React from 'react'
import Login from "./Login";
import Card from '@mui/material/Card';
import { Route, Routes } from 'react-router-dom';
import Register from './Register';
import './Authentication.css'

const Authentication = () => {
    return (
        <div>

            <Grid container>
                <Grid className='h-screen overflow-hidden' item xs={7.5}>
                    <img className='h-full w-full' src="https://res.cloudinary.com/datbut4zs/image/upload/v1715159573/zdl5pevsraqjeygcwij4.png" alt="" />
                </Grid>


                <Grid item xs={4.5} style={{ backgroundImage: 'url("")' }}>

                    <div className='px-20 flex flex-col justify-center h-full'>

                        <Card className='card p-8'>

                            <div className='flex flex-col items-center mb-5 space-y-1 ' >
                                <span className='text font-bold text-center '>KIDS SOCIAL</span>
                                <p className='text-center text-lg pb-3 w-[70&] text-purple-500'>Online social networking site - Create your new world.</p>
                            </div>
                            <Routes>
                                <Route path='/' element={<Login />}></Route>
                                <Route path='/login' element={<Login />}></Route>
                                <Route path='/register' element={<Register />}></Route>
                            </Routes>

                        </Card>

                    </div>

                </Grid>
            </Grid>

        </div>
    )
}

export default Authentication