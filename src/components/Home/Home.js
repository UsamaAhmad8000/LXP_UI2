import React from "react";
import Hero from './Hero/Hero';
import Footer from "./Footer/Footer";
import Section from "./Section/Section";
import Search from './Search/Search'
import Layout from "../Layout/Layout";
import SearchMenu from '../SearchMenu/SearchMenu'

const Home = () => {
  return (
    <Layout>
    <Hero/>
    <Search/>
    <Section/>
    <SearchMenu/>
    </Layout>
  );
};

export default Home;
