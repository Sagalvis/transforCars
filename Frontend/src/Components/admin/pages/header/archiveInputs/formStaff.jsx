import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const FormStaff = () => {
  const [identification, setIdentification] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [edad, setEdad] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");

  /* Funcion para crear empleados */
  const handleSumit = async (e) => {
    if (
      identification === "" ||
      nombres === "" ||
      apellidos === "" ||
      edad === "" ||
      correo === "" ||
      contraseña === "" ||
      direccion === "" ||
      telefono === ""
    ) {
      e.preventDefault();
      alert("Por favor llenar todos los campos");
    } else {
      await axios
        .post("http://localhost:3005/postemployees", {
          id_empleado: identification,
          nombre: nombres,
          apellido: apellidos,
          correo: correo,
          contraseña: contraseña
        })
        .then((Response) => {
          console.log(Response.data);
          alert("Empleado registrado");
        });
      window.location.reload();
    }
    /* Funcion que limpa los inputs */
    setIdentification("");
    setNombres("");
    setApellidos("") ;
    setEdad("");
    setCorreo("");
    setContraseña("");
    setDireccion("");
    setTelefono("");
  };
  return (
    <>
      <ContainForm>
        <Form>
          <ContentInput>
            <Select>
              <Option value="0">-Seleccione el rol-</Option>
              <Option value="admin">Administrador</Option>
              <Option value="manager">Gerente</Option>
              <Option value="workshop-leader">Lider de taller</Option>
              <Option value="parts-advisor">Asesor de repuestos</Option>
              <Option value="service-advisor">Asesor de servicio</Option>
              <Option value="mechanic">Mecanico</Option>
            </Select>
          </ContentInput>

          <ContentInput className="display">
            <Input type="text" 
            placeholder="Nombres"
            value={nombres}
            onChange={(e)=> setNombres(e.target.value)}
            autoComplete="off" />
            <Input type="text" placeholder="Apellidos" 
            value={apellidos}
            onChange={(e)=> setApellidos(e.target.value)}
            autoComplete="off" />
          </ContentInput>

          <ContentInput>
            <Input type="text" 
            placeholder="Documento" 
            value={identification}
            onChange={(e)=> setIdentification(e.target.value)}
            autoComplete="off" />
          </ContentInput>

          <ContentInput className="display">
            <Select>
              <Option value="0">-Seleccione el sexo-</Option>
              <Option value="man">Hombre</Option>
              <Option value="woman">Mujer</Option>
            </Select>
            <Input type="text" 
            placeholder="Edad" 
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            autoComplete="off" />
          </ContentInput>

          <ContentInput>
            <Input
              type="email"
              placeholder="Correo electrónico"
              value={correo}
              onChange ={(e) => setCorreo(e.target.value)}
              autoComplete="off"
              required
            />
          </ContentInput>

          <ContentInput>
            <Input
              type="password"
              placeholder="Contraseña"
              value={contraseña}
              onChange = {(e)=> setContraseña(e.target.value)} 
              autoComplete="off"
              required
            />
          </ContentInput>

          {/* <ContentInput>
            <Select className="select-display">
              <Option value="0">-Estado civil-</Option>
            </Select>

          </ContentInput> */}

          <ContentInput>
            <Input type="tel" 
            placeholder="Teléfono" 
            value={telefono}
            onChange={(e)=> setTelefono(e.target.value)} 
            autoComplete="off" />
          </ContentInput>

          {/* <ContentInput>
            <Input type="text" placeholder="Fecha de nacimiento" autoComplete="off" />
          </ContentInput> */}

          {/* <ContentInput>
            <Input type="text" placeholder="Nacionalidad" autoComplete="off" />
          </ContentInput>

          <ContentInput>
            <Input type="text" placeholder="Ciudad de nacimiento" autoComplete="off" />
          </ContentInput>

          <ContentInput>
            <Input type="text" placeholder="Dpt de nacimiento" autoComplete="off" />
          </ContentInput> */}

          <ContentInput>
            <Input type="text" 
            placeholder="Dirección" 
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            autoComplete="off" />
          </ContentInput>

          {/* <ContentInput className="input-display">
            <Select className="select-display">
              <Option value="0">-EPS-</Option>
            </Select>

          </ContentInput> */}

          {/* <ContentInput>
            <TextArea cols={30} rows={5} placeholder="Observaciones"></TextArea>
          </ContentInput> */}
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
