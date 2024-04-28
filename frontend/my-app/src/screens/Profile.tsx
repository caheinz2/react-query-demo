import { useEffect, useState } from "react";
import { getProfileById } from "../data/api";
import { Container, Row } from "react-bootstrap";

export function ProfileScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [favoriteColor, setFavoriteColor] = useState("");

  useEffect(() => {
    getProfileById(1).then((profile) => {
      setFirstName(profile.firstName);
      setLastName(profile.lastName);
      setFavoriteColor(profile.favoriteColor);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Container>
          <Row>
            <h1>Profile Screen</h1>
          </Row>
          <Row>First Name: {firstName}</Row>
          <Row>Last Name: {lastName}</Row>
          <Row style={{ color: favoriteColor }}>
            Favorite Color: {favoriteColor}
          </Row>
        </Container>
      )}
    </>
  );
}
