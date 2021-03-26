import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './style/GlobalStyles'
import { ListOfPhotoCard } from './components/ListOfPhotosCards'
import { Logo } from './components/logo'

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCard />
    </div>
  )
}

export default App
