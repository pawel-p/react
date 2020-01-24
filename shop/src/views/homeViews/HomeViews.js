import React from "react";
import HeaderSmall from "../../components/HeaderSmall/HeaderSmall";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";
import ProductList from "../../components/ProductList/ProductList";
import { products } from "../../assets/products";
import ProductItem from "../../components/ProductList/ProductItem/ProductItem";

const HomeViews = () => (
  <>
    <Navigation />
    <Container>
      <Header header="Welcome to our store" />
      <HeaderSmall headerSmall="Desktops" />
      <ProductList>
        {products
          .filter((i) => i.featured === true && i.category === "desktop")
          .map((item) => (
            <ProductItem key={item.id} {...item} />
          ))}
      </ProductList>

      <HeaderSmall headerSmall="Tablets" />
      <ProductList>
        {products
          .filter((i) => i.featured === true && i.category === "tablet")
          .map((item) => (
            <ProductItem key={item.id} {...item} />
          ))}
      </ProductList>
    </Container>
    <Footer />
  </>
);

export default HomeViews;
