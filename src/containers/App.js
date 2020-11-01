import React from 'react'
import Header from "../components/header"
import Form from '../components/Form/TextInput'


const App = ({ children }) => (
    <>         
      <Header/>
      <Form> 
        {children}
      </Form>
    </>
)

export default App
