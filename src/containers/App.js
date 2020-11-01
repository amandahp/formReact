import React from 'react'
import Header from "../components/header"
import Container from "../components/container"


const App = ({ children }) => (
    <>         
      <Header/>
      <Container> 
        {children}
      </Container>
    </>
)

export default App
