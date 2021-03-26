import React from 'react'
import { Category } from '../Category'
import { categories } from '../../../api/db.json'
import { Item, List } from './styles'

export const ListOfCategories = () => {
  console.log(categories)
  return (
    <List>
      {
        categories.map((category) => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
}
