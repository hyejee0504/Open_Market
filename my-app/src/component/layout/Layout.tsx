import React from 'react';
import { Header } from '../common/header/Header';
import Footer from '../common/footer/Footer';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = styled.div`
  
  position: relative;
`


function MainLayout() {
    return (
      <Layout>
        <Header />
          <Outlet />
        <Footer />
      </Layout>
    );
}

export {MainLayout}
