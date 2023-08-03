import React from 'react'
import { Layout } from '../layout/Layout'
import { Content } from './Content'
import { Info } from './Info'
import { Branding } from './Branding';
import { Footer } from '../layout/Footer';

export const Homepage = () => {
  return (
    <Layout>
        <Content />
        <Info />
        <Branding />
        <Footer />
    </Layout>
  )
}
