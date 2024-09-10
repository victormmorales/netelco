import { useState, useEffect } from "react";
import styled from "styled-components";
import { StyleProperties } from "../../../utils/style-properties";

export const CookiesContainer = styled.div`
  position: fixed;
  display: flex;
  bottom: 10px;
  padding: 10px;
  right: calc(5vw - 20px);
  color: white;
  width: 90vw;
  background-color: #000000cc;
  border: 1px solid white;
  border-radius: ${StyleProperties.borderRadius};
  border-bottom: 0px;
  z-index: 10000;
  @media (max-width: ${StyleProperties.breakpoints.tabletL}) {
    display: block;
    right: calc(5vw);
  }
  @media (max-width: ${StyleProperties.breakpoints.mobileL}) {
    display: block;
    right: calc(5vw);
  }
`;
export const CookiesText = styled.p`
  text-align: justify;
  display: inline-block;
  margin-left: 20px;
  width: calc(100% - 120px);
  padding: 10px;
  @media (max-width: ${StyleProperties.breakpoints.tabletL}) {
    width: 100%;
    margin-left: 0px;
    margin-bottom: 0px;
  }
`;
export const CookiesButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  @media (max-width: ${StyleProperties.breakpoints.tabletL}) {
    flex-direction: row;
    width: 100%;
    margin-top: 1vh;
  }
`;
export const CookiesButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  background-color: #000;
  padding: 5px;
  width: 10vw;
  min-height: 5vh;
  color: white;
  text-align: center;
  vertical-align: middle;
  border-radius: ${StyleProperties.borderRadius};
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #3b3b3bd1;
  }
  @media (max-width: ${StyleProperties.breakpoints.tabletL}) {
    width: 15vw;
    margin-left: 10px;
  }
  @media (max-width: ${StyleProperties.breakpoints.mobileL}) {
    width: 25vw;
    margin-left: 10px;
  }
`;

export const CookiesBanner = () => {
  const [cookiesCustomAccepted, setCookiesCustomAccepted] = useState(true);

  const [cookiesAllAccepted, setCookiesAllAccepted] = useState(true);

  useEffect(() => {
    // Si están aceptadas las cookies, almacenarlo en localStorage
    if (!(localStorage?.getItem("cookiesCustomAccepted") === "true"))
      setCookiesCustomAccepted(false);
    if (!(localStorage?.getItem("cookiesAllAccepted") === "true"))
      setCookiesAllAccepted(false);
  }, [cookiesCustomAccepted, cookiesAllAccepted]);

  return (
    <>
      {!cookiesCustomAccepted && !cookiesAllAccepted ? (
        <CookiesContainer>
          <CookiesText>
            © Netelco únicamente utiliza cookies de sesión, con la finalidad de
            mantener el idioma de navegación seleccionado. Puede consultar el
            detalle en la política de cookies. Si continúa navegando o clica el
            botón “Aceptar” entendemos que permite su uso.
          </CookiesText>
          <CookiesButtonContainer>
            <CookiesButton
              onClick={() => {
                localStorage.setItem("cookiesAllAccepted", "true");
                setCookiesAllAccepted(true);
              }}
            >
              Aceptar todas
            </CookiesButton>
            <CookiesButton
              onClick={() => {
                localStorage.setItem("cookiesCustomAccepted", "true");
                setCookiesCustomAccepted(true);
              }}
            >
              Aceptar sólo las necesarias
            </CookiesButton>
          </CookiesButtonContainer>
        </CookiesContainer>
      ) : null}
    </>
  );
};
