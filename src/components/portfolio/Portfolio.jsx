import React from 'react';
import { Layout } from '../layout/Layout';
import { Projects } from './Projects';
import { Testimonials } from './Testimonials';

export const Portfolio = () => {
  return (
    <Layout>
        <Projects />
        <Testimonials />
    </Layout>
    )
}
