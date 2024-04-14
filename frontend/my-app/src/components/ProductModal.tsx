import { Container, Modal, ModalBody, ModalTitle, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getProductById } from "../data/api";
import { ProductDTO } from "../types/api";

type Props = {
  productId: number;
  onClose: () => void;
};

export function ProductModal(props: Props) {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    getProductById(props.productId).then((retVal) => {
      setProduct(retVal);
      setShow(true);
    });
  }, [props.productId]);

  function handleClose() {
    setShow(false);
    props.onClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <ModalTitle>{product?.title}</ModalTitle>
      <ModalBody>
        <Container>
          <Row>Barcode: {product?.barcode}</Row>
          <Row>Price: {product?.price}</Row>
        </Container>
      </ModalBody>
    </Modal>
  );
}
