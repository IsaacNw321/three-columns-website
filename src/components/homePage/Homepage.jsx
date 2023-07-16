import React from 'react'
import { Layout } from '../layout/Layout'
import { Content } from './Content'
import { Info } from './Info'
import { Branding } from './Branding';

export const Homepage = () => {
  return (
    <Layout>
        <Content />
        <Info />
        <Branding />
    </Layout>
  )
}
