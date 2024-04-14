import React, { useEffect, useState } from "react";
import { Routes } from "../types/routes";
import { getAllProductPreviews, getProfileById } from "../data/api";
import { ProductPreviewDTO } from "../types/api";
import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { ProductModal } from "../components/ProductModal";

type Props = {
  setActiveRoute: (newVal: Routes) => void;
};
export function HomeScreen(_props: Props) {
  const [firstName, setFirstName] = useState("");
  const [products, setProducts] = useState<ProductPreviewDTO[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [clickedProductId, setClickedProductId] = useState<number>();

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
      <Col xs={2}>
        <Card key={product.productId} bg="secondary">
          <Card.Header>{product.productId}</Card.Header>
          <Card.Body>
            <Card.Title>{product.productTitle}</Card.Title>
            <Card.Img src={product.thumbnailUri}></Card.Img>
            <Button
              size="sm"
              onClick={() => {
                setClickedProductId(product.productId);
              }}
            >
              Details
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }

  function renderProductModal(productId: number) {
    return (
      <ProductModal
        productId={productId}
        onClose={() => setClickedProductId(0)}
      ></ProductModal>
    );
  }

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Container>
            <Row className="App-section">
              <Row>
                <h1>Welcome back, {firstName}</h1>
              </Row>
              <Col>
                <Button
                  variant="dark"
                  onClick={() => {
                    _props.setActiveRoute(Routes.PROFILE);
                  }}
                >
                  View Profile
                </Button>
              </Col>
            </Row>
            <Row>
              <Row>
                <h2>Look at these products:</h2>
              </Row>
              <Row className="Card-list">
                {products?.map(renderProductCard)}
              </Row>
            </Row>
            {clickedProductId ? renderProductModal(clickedProductId) : null}
          </Container>
        </>
      )}
    </>
  );
}
