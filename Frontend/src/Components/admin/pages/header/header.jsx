/* eslint-disable react/prop-types */

import { useState } from "react";
import Modals from "../archive/modals";
import {
  BtnRegister,
  Button,
  ButtonRegister,
  ContainButtons,
  ContainHeader,
  ContainInfo,
  ContainInfoModal,
  H2,
} from "./styledHeader";
import FormClient from "./archiveInputs/formClient";
import FormStaff from "./archiveInputs/formStaff";

const Header = ({
  indexIcon,
  index,
  titleButton,
  titleModalPages,
  showContentClient,
  showContentStaff,
}) => {
  // Variable de estado para abrir y cerrar el modal de crear cliente
  const [handleClose, setHandleClose] = useState(false);

  return (
    <>
      {/* Contenedor principal HEADER*/}
      <ContainHeader>
        {/* Info de vista */}
        <ContainInfo>
          <i className={indexIcon}></i>
          <H2>{index}</H2>
        </ContainInfo>

        {/* Botones */}

        <ContainButtons>
          <Button
            title={titleButton}
            onClick={() => setHandleClose(!handleClose)}
          >
            <i className="fa-solid fa-plus"></i>
          </Button>
        </ContainButtons>
      </ContainHeader>

      {/* Modal reutilizable */}
      <Modals
        status={handleClose}
        changeStatus={setHandleClose}
        titleModal={titleModalPages}
        changePosition={"start"}
      >
        {/* Aqui el contenido */}
        <ContainInfoModal>
          {/* FORMULARIOS DE TODAS LAS VISTAS */}
          {showContentClient && (
            <>
              <FormClient />
              <ButtonRegister>
                <BtnRegister>Registrar</BtnRegister>
              </ButtonRegister>
            </>
          )}

          {showContentStaff && (
            <>
              <FormStaff />
              <ButtonRegister>
                <BtnRegister>Registrar</BtnRegister>
              </ButtonRegister>
            </>
          )}
        </ContainInfoModal>
      </Modals>
    </>
  );
};

export default Header;
