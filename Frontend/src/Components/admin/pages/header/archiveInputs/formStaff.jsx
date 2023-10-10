import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from 'react-toastify'

const FormStaff = () => {
  const [identification, setIdentification] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [tipoRol, setTipoRol] = useState([]);
  const [selectRol, setSeletRol] = useState(0);

  const apiBaseBack = import.meta.env.VITE_URL_BACKEND;
  /* Funcion para crear empleados */
  const handleSumit = async () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const token = localStorage.getItem("user")
    const limpio = token.replace(/"/g,"")
  if (!emailPattern.test(correo)) {
    toast.warning("El correo electronico ingresado no es valido.");
    return; // Salir de la función si el correo es inválido
  }
  
    const emptyFields = [];
  
    if (identification === "") {
      emptyFields.push("Documento");
    }
  
    if (nombres === "") {
      emptyFields.push("Nombres");
    }
  
    if (apellidos === "") {
      emptyFields.push("Apellidos");
    }
  
    if (correo === "") {
      emptyFields.push("E-mail");
    }
  
    if (contraseña === "") {
      emptyFields.push("Contraseña");
    }
  
    if (selectRol === 0) {
      emptyFields.push("Tipo de rol");
    }
  
    if (emptyFields.length > 0) {
      const emptyFieldsMessage = `El campo (${emptyFields.join(", ")}), se encuentra vacio`;
      toast.warning(emptyFieldsMessage);
    } else {
      
      await axios
        .post(`${apiBaseBack}/postemployees`, {
          id_empleado: identification,
          nombre: nombres,
          apellido: apellidos,
          correo: correo,
          contraseña: contraseña,
          id_rol: selectRol
        }, {
          headers: {
            Authorization: `${limpio}`,
          },
        })
        .then((Response) => {
          console.log(Response.data);
        });
        handleAlertRegisterEmployee();
      setTimeout(() => {
        window.location.reload();        
      }, 1000);
    }
  };

  useEffect(() => {
    const fetchdata = async () => {
      const responseRol = await axios.get(`${apiBaseBack}/tiporol`);
      setTipoRol(responseRol.data)
    }
    fetchdata()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const handleAlertRegisterEmployee = () => {
    toast.success('Empleado registrado satisfactoriamente.');
  };
  return (
    <>
      <ContainForm>
        <Form>
          <ContentInput>
            <Select value={selectRol} 
            onChange={(e)=>setSeletRol(e.target.value)} 
            >
              <Option value="0">-Seleccione el rol-</Option>
              {tipoRol.map((item,i)=>(
                <Option key={i} value={item.id_rol}>{item.rol}</Option>
              ))
              }
            </Select>
          </ContentInput>


          <ContentInput className="display">
            <Input
            type="text" 
            placeholder="Nombres"
            value={nombres}
            onChange={(e)=> setNombres(e.target.value.replace(/[^a-zA-Z\s]/g, '').toLowerCase())}
            autoComplete="off" />
            
            <Input
            type="text"
            placeholder="Apellidos" 
            value={apellidos}
            onChange={(e)=> setApellidos(e.target.value.replace(/[^a-zA-Z\s]/g, '').toLowerCase())}
            autoComplete="off" />
          </ContentInput>

          <ContentInput className="display">
            <Input
            type="text" 
            placeholder="Documento" 
            value={identification}
            onChange={(e)=> setIdentification(e.target.value.replace(/[^0-9]/g, ''))}
            autoComplete="off" />
          </ContentInput>


          <ContentInput>
            <Input
              type="email"
              placeholder="E-mail"
              value={correo}
              onChange ={(e) => setCorreo(e.target.value.toLowerCase())}
              autoComplete="off"
              required
            />
          </ContentInput>

          <ContentInput>
            <Input
              type="password"
              placeholder="Contraseña"
              maxLength={15}
              value={contraseña}
              onChange = {(e)=> setContraseña(e.target.value)} 
              autoComplete="off"
              required
            />
          </ContentInput>

        </Form>
      </ContainForm>

      <ButtonRegister>
        <BtnRegister onClick={handleSumit}>Registrar</BtnRegister>
      </ButtonRegister>
    </>
  );
};

export default FormStaff;

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
  padding: 2px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  background-color: #fff;
  color: #000;
  font-size: 15px;
  font-family: "Outfit";
`;

export const Option = styled.option``;

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
  overflow-y: auto;
    &.soporte{
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
  }
`;

export const ButtonRegister = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  margin-bottom: 2%;
  padding-right: 5px;
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

  &:hover {
    background-color: #172b4c;
  }
  &:active {
    background-color: #041737;
  }
`;
