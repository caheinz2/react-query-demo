import React, { useEffect, useState } from "react";
import { Routes } from "../types/routes";
import { getAllProductPreviews, getProfileById } from "../data/api";
import { ProductPreviewDTO } from "../types/api";
import { Card } from "../components/Card";

type Props = {
  setActiveRoute: (newVal: Routes) => void;
};
export function HomeScreen(_props: Props) {
  const [firstName, setFirstName] = useState("");
  const [products, setProducts] = useState<ProductPreviewDTO[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let profileLoading = true;
    let productLoading = true;

    getProfileById(1).then((profile) => {
      setFirstName(profile.firstName);
      profileLoading = false;
      setIsLoading(profileLoading && productLoading);
    });

    getAllProductPreviews().then((products) => {
      setProducts(products);
      productLoading = false;
      setIsLoading(profileLoading && productLoading);
    });
  }, []);

  function renderProductCard(product: ProductPreviewDTO) {
    return (
      <Card
        title={product.productTitle}
        thumbnailUri={product.thumbnailUri}
        key={product.productId}
      ></Card>
    );
  }

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="App-section">
            <h1>Welcome back, {firstName}</h1>
            <button
              className="App-button"
              onClick={() => {
                _props.setActiveRoute(Routes.PROFILE);
              }}
            >
              View Profile
            </button>
          </div>
          <div className="App-section">
            <h2>Look at these products:</h2>
            <ul className="Card-list">
              {products?.map(renderProductCard)}
            </ul>
            <button
              className="App-button"
              onClick={() => _props.setActiveRoute(Routes.PRODUCT)}
            >
              View Products
            </button>
          </div>
        </>
      )}
    </>
  );
}
