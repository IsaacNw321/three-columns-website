import React from 'react';
import { Layout } from '../layout/Layout'
import { AboutUsInfo } from './AboutUsInfo';
import { ImgComponent } from './ImgComponent';
import { Projects } from './Projects';

export const AboutUs = () => {
  return (
    <Layout>
        <AboutUsInfo />
        <ImgComponent />
        <Projects />
    </Layout>
    )
}
