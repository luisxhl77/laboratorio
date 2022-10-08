import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JornaulRoutes } from '../journal/routes/JornaulRoutes'

export const AppRouter = () => {
  return (
        <Routes> 
            
            {/* login y registro*/}
            <Route path='/auth/*' element={ <AuthRoutes/> }/>

            {/* JournalApp */}
            <Route path='/*' element={ <JornaulRoutes/> }/>

        </Routes>
    )
}
