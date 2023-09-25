/* eslint-disable react/prop-types */

import { useState } from "react";
import Modals from "../archive/modals";
import {
  Button,
  ContainButtons,
  ContainHeader,
  ContainInfo,
  ContainInfoModal,
  ContainTitleHeader,
  ExptButton,
  TitleH2,
} from "./styledHeader";
import FormClient from "./archiveInputs/formClient";
import FormStaff from "./archiveInputs/formStaff";
import FormVehicle from "./archiveInputs/formVehicle";
import FormInventory from "./archiveInputs/formInventory";
import axios from "axios";
import { BtnCreate } from "../main/archiveTable/tableInventory/styledTableInventory";

const Header = ({
  indexIcon,
  index,
  titleButton,
  titleModalPages,
  showContentClient,
  showContentStaff,
  showContentVehicle,
  showPlusButton,
  exportButton,
  btnExport,
  btnCreateProduct,
  btnCreateInvoice,
  titleHome,
}) => {
  // Variable de estado para abrir y cerrar el modal de crear cliente
  const [handleClose, setHandleClose] = useState(false);
  // Variable de estado para abrir modal de crear item de inventario
  const [handleFormInventory, setHandleFormInventory] = useState(false);
  // Variable de estado para abrir modal crear nueva factura
  const [handleFormInvoice, setHandleFormInvoice] = useState(false);

  const handleDownloadCustomer = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3005/downdloadcustomer",
        { responseType: "arraybuffer" }
      );
      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "customer.xlsx";
      link.click();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Contenedor principal HEADER*/}
      <ContainHeader>
        {/* Info de vista */}
        <ContainInfo>
          <i className={indexIcon}></i>
          <TitleH2>{index}</TitleH2>
        </ContainInfo>
        {titleHome && (
          <ContainTitleHeader>
            <TitleH2>Bienvenido de nuevo [NOMBRES Y APELLIDOS] </TitleH2>
          </ContainTitleHeader>
        )}

        {/* Botones */}
        <ContainButtons>
          {showPlusButton && (
            <Button
              title={titleButton}
              onClick={() => setHandleClose(!handleClose)}
            >
              <i className="fa-solid fa-plus"></i>
            </Button>
          )}
          {btnCreateProduct && (
            <BtnCreate
              onClick={() => setHandleFormInventory(!handleFormInventory)}
            >
              Crear P/S
            </BtnCreate>
          )}
          {btnCreateInvoice && (
            <BtnCreate onClick={() => setHandleFormInvoice(!handleFormInvoice)}>
              Crear factura
            </BtnCreate>
          )}
          {btnExport && (
            <ExptButton title={exportButton} onClick={handleDownloadCustomer}>
              Exportar
            </ExptButton>
          )}
        </ContainButtons>
      </ContainHeader>

      {/* Modal reutilizable para el boton plus*/}
      <Modals
        status={handleClose}
        changeStatus={setHandleClose}
        titleModal={titleModalPages}
        changePosition={"start"}
        showHeader={true}
        showCloseButton={true}
      >
        {/* Aqui el contenido */}
        <ContainInfoModal>
          {/* FORMULARIOS DE TODAS LAS VISTAS */}
          {showContentClient && <FormClient />}

          {showContentStaff && <FormStaff />}

          {showContentVehicle && <FormVehicle />}
        </ContainInfoModal>
      </Modals>

      {/* Modal del boton crear producto */}
      <Modals
        status={handleFormInventory}
        changeStatus={setHandleFormInventory}
        titleModal={"Crear producto"}
        changePosition={"start"}
        showHeader={true}
        showCloseButton={true}
      >
        <ContainInfoModal>
          <FormInventory />
        </ContainInfoModal>
      </Modals>
    </>
  );
};

export default Header;
