import React from 'react'
import { Layout } from '../layout/Layout'
import { Content } from './Content'
import { Info } from './Info'
import { Branding } from './Branding';
import { Footer } from '../layout/Footer';
import { AboutUsInfo } from '../aboutus/AboutUsInfo';
import { ImgComponent } from '../aboutus/ImgComponent';
import { Projects } from '../aboutus/Projects';
import { ProjectsPorfolio } from '../portfolio/Projects';
import { Testimonials } from '../portfolio/Testimonials';
import { Photos } from '../portfolio/Photos';

export const Homepage = () => {
  return (
    <Layout>
        <Content />
        <Info />
        <Branding />
        <ProjectsPorfolio />
        <Testimonials />
        <Photos />
        <AboutUsInfo />
        <ImgComponent />
        <Projects />
        <Footer />
    </Layout>
  )
}
