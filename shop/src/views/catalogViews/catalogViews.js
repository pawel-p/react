import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import CatalogContainer from "../../components/CatalogContainer/CatalogContainer";
import ColumnLeft from "../../components/ColumnLeft/ColumnLeft";
import ColumnRight from "../../components/ColumnRight/ColumnRight";
import ProductItem from "../../components/ProductList/ProductItem/ProductItem";
import Filter from "../../components/Filter/Filter";
import ProductList from "../../components/ProductList/ProductList";
import { products } from "../../assets/products";

class catalogViews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: products, search: "", value: "" };
  }

  searchProduct = (event) => {
    this.setState({ search: event.target.value, value: event.target.value });
  };
  clearSearch = (event) => {
    event.preventDefault();
    this.setState({ search: "", value: "" });
  };
  filter = (event) => {
    this.setState({ search: event.target.value });
  };

  clearFilter = (event) => {
    this.setState({ search: event.target.value });
  };
  render() {
    const { search } = this.state;
    const filteredProducts = products.filter(
      (i) =>
        i.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        i.manufacture.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );

    return (
      <>
        <Navigation />
        <Container>
          <Header header="Catalog" />
          <CatalogContainer>
            <ColumnLeft>
              <Filter
                search={this.searchProduct}
                clear={this.clearSearch}
                value={this.state.value}
                filter={this.filter}
              />
            </ColumnLeft>
            <ColumnRight>
              <ProductList>
                {filteredProducts.map((item) => (
                  <ProductItem key={item.id} {...item} />
                ))}
              </ProductList>
            </ColumnRight>
          </CatalogContainer>
        </Container>
        <Footer />
      </>
    );
  }
}

export default catalogViews;
