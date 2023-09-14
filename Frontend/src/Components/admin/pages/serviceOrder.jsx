import Header from "./header/header";
import Main from "./main/main";
import Footer from "./footer/footer";
const ServiceOrder = () => {
  return (
    <>
      {/* Componente HEADER */}
      <Header 
      index={"Órden de servicio [PENDIENTE LIMPIAR LO QUE NO SIRVA EN EL CODIGO.]"} 
      indexIcon={"fa-solid fa-clipboard-check"} 
      titleButton={'Crear orden'}
      exportButton={'Exportar tabla cliente'}
      titleModalPages={'Crear orden nueva'}
      showContentClient={true}
      showPlusButton={true}
      btnExport={true}
      btnCreateProduct={false}
      />


      <Main 
      showTableServiceOrder={true}
      />

      <Footer
      copyright='Copyright &copy; 2023 transforCAR. All Rights'
      welcome='Te damos la bienvenida en transforCar 💚'
      />
    </>
  );
};

export default ServiceOrder;
