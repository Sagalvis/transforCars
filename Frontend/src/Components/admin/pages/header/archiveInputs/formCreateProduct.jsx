import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Alert from '@mui/material/Alert'

const FormCreateProduct = () => {
  //Varibles de estado para crear un producto 
  const [nombre, setNombre] = useState("");
  const [costo, setCosto] = useState("");
  const [cantidadComprada, setCantidadComprada] = useState("");
  const [precioUnitario, setPrecioUnitario] = useState("");
  const [cantidadStock, setCantidadStock] = useState("");
  const [tipoItem, setTipoItem] = useState([]);
  const [tipoMedida, setTipoMedida] = useState([]);
  const [tipoProducto, setTipoProducto] = useState([]);
  const [selectItem, setSelectItem] = useState("");
  const [selectMedida, setSelectMedida] = useState("");
  const [selectProducto, setSelectProducto] = useState("");
  const [showAlert, setShowAlert] = useState(false);


  //Funcion para crear un producto

  const handletSumit = async (e) => {
    if (
      nombre === "" || costo === "" || cantidadComprada === "" ||
      precioUnitario === "" || cantidadStock === "" || tipoItem === "" ||
      tipoMedida === "" || tipoProducto === "" || selectItem === "" || selectMedida === "" || 
      selectProducto === ""
    ) {
      e.preventDefault();
      alert("llenar todos los campos");
    }else{
      await axios.post(
        "http://localhost:3005/postinventory",{
          nombre: nombre,
          costo: parseInt(costo),
          cantidad_comprada: parseInt(cantidadComprada),
          precio_unitario: parseInt(precioUnitario),
          cantidad_en_stock: parseInt(cantidadStock),
          id_item : selectItem,
          id_medida  : selectMedida ,
          id_producto: selectProducto
        })
        .then((Response) => {
          console.log(Response.data);
          setShowAlert(true);
        });
        window.location.reload();
    }
  }
    /* Funcion que limpa los inputs */


    useEffect(()=>{
      const fetchdata = async () => {
        const responseItem = await axios.get("http://localhost:3005/tipoitem");
        setTipoItem(responseItem.data);
        const responseMedida = await axios.get("http://localhost:3005/tipomedida");
        setTipoMedida(responseMedida.data);
        const responseProducto = await axios.get("http://localhost:3005/tipoproducto");
        setTipoProducto(responseProducto.data);
      };
      fetchdata();
    },[])
  return (
    <>
      {showAlert && (
        <ContainAlert>
        <Alert severity="success" color="success">
          ¡Cliente registrado!
          </Alert>
        </ContainAlert>

      )}


      <ContainForm>
        <Form>
          <ContentInput>
            <Select value={selectItem}
            onChange={(e) => setSelectItem(e.target.value)}
            >
              <Option value="0">-Seleccione tipo de item-</Option>
              {tipoItem.map((item, index)=>(
                <Option key= {index} value={item.id_item}>{item.tipo_item}</Option>
              ))}
            </Select>
          </ContentInput>

          <ContentInput>
            <Select value={selectProducto}
            onChange={(e) => setSelectProducto(e.target.value)}
            >
              <Option value="0">-Seleccione tipo de producto-</Option>
              {tipoProducto.map((item,index)=> (

                <Option key={index} value={item.id_producto}>{item.tipo_producto}</Option>
              ))}
            </Select>
          </ContentInput>

          <ContentInput>
            <Input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nombre del producto"
              autoComplete="off"
              required={true}
              maxLength={20}
            />
          </ContentInput>

          <ContentInput>
            <Select value={selectMedida}
            onChange={(e) => setSelectMedida(e.target.val)}
            >
              <Option value="0">-Seleccione tipo de medida-</Option>
              {tipoMedida.map((item,index) => (
                <Option key={index} value={item.id_medida}>{item.tipo_medida}</Option>
              ))}
            </Select>
          </ContentInput>

          <ContentInput className="display">
          <Input className="width"
              type="text"
              value={costo}
              onChange={(e) => setCosto(e.target.value)}
              placeholder="Costo"
              autoComplete="off"
              required={true}
              maxLength={20}
            />
            <Input
              className="input-display"
              type="text"
              value={precioUnitario}
              onChange={(e) => setPrecioUnitario(e.target.value)}
              placeholder="Precio unitario"
              maxLength={10}
              autoComplete="off"
              required={true}
            />
          </ContentInput>

          <ContentInput>
            <Input
              type="text"
              value={cantidadComprada}
              onChange={(e)=>setCantidadComprada(e.target.value)}
              placeholder="Cantidad en comprada"
              autoComplete="off"
              required={true}
            />
          </ContentInput>

          <ContentInput>
            <Input
              type="text"
              value={cantidadStock}
              onChange={(e)=> setCantidadStock(e.target.value)}
              placeholder="Cantidad en stock"
              autoComplete="off"
              required={true}
            />
          </ContentInput>
        </Form>
      </ContainForm>

      <ButtonRegister className="gap">
        <BtnRegister className="btn_red">Cancelar</BtnRegister>
        <BtnRegister onClick={handletSumit}>Crear</BtnRegister>
      </ButtonRegister>
    </>
  );
};

export default FormCreateProduct;

// Estilos de los inputs

export const ContainForm = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2%;
  border-bottom: solid 1px #e5e4e4;
`;

export const Form = styled.form`
  width: 100%;
`;

export const ContentInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;

  &.display {
    display: flex;
    flex-direction: row;
    gap: 3px;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  background-color: #fff;
  color: #000;
  font-size: 15px;
  font-family: "Outfit";

  &.select-display {
    width: 50%;
  }
`;


export const Option = styled.option`
  /* background-color: red; */
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #000;
  font-size: 16px;
  font-family: "Outfit";

  &.input-display {
    width: 50%;
  }
  &.width {
    width: 50%;
  }

  &::placeholder {
    font-size: 15px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: none;
  padding: 0;
  resize: none;
  box-sizing: border-box;
  padding: 10px;
  font-family: "Outfit";
  font-size: 15px;
`;

export const ButtonRegister = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  margin-bottom: 2%;
  padding-right: 5px;
  &.gap {
    display: flex;
    gap: 4px;
    margin-top: 2%;
  }
`;

export const BtnRegister = styled.button`
  display: inline-block;
  padding: 8px 30px;
  background-color: #041737;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 14px;

  &.btn_red {
    background-color: #dc3545;
    &:hover {
      background-color: #c74753;
    }
  }
  &:hover {
    background-color: #172b4c;
  }
  &:active {
    background-color: #041737;
  }
`;

export const ContainAlert = styled.div`
  position: absolute;
  bottom: 86%;
  left: 25%;

`