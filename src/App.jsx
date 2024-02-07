import React from 'react'
import NavigationBar from './COMPONENTS/NavigationBar'
import ProductSection from './COMPONENTS/ProductSection'
import ContactSection from './COMPONENTS/ContactSection'
function App() {
  return (
    <>
      <NavigationBar  companyName='Arduino Store' ownerName='SundusSiddiqui'/>
      <ProductSection  sectionTitle='Boards'/>
      <ProductSection sectionTitle='Shields'/>
      <ContactSection/>
    </>
  )
}

export default App
