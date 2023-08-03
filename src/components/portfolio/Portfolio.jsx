import React from 'react';
import { Layout } from '../layout/Layout';
import { ProjectsPorfolio } from './Projects';
import { Testimonials } from './Testimonials';
import { Photos } from './Photos';

export const Portfolio = () => {
  return (
    <Layout>
        <ProjectsPorfolio />
        <Testimonials />
        <Photos />
    </Layout>
    )
}
