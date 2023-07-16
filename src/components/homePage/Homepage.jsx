import React from 'react'
import { Layout } from '../layout/Layout'
import { Content } from './Content'
import { Info } from './Info'

export const Homepage = () => {
  return (
    <Layout>
        <Content />
        <Info />
    </Layout>
  )
}
