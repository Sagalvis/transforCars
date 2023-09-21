import { ButtonNarbar1 } from "./archive/arrayNavbar";
import {
  ContaiSidebar,
  ContainAll,
  ContainLogo,
  ContainPerfil,
  ContenPerfil,
  LogoSidebar,
  NavConten,
  NavIcon,
  NavLinks,
  NavTittle,
  Navbar,
  NavbarContain,
} from "./styled.sidebar";
import Logo from "../../../assets/svg/transforCars-01.svg";
import jwt_decode from "jwt-decode"
import { useLocation  } from "react-router-dom";
import { useEffect } from "react"


const Sidebar = () => {
  const { pathname } = useLocation();
  const useData = jwt_decode (localStorage.getItem("user"));
  console.log(useData)


  const logOut = () => {
    localStorage.removeItem("user"); 
    window.location.href ="http://localhost:5173/"
  }
  
  useEffect(() => {
    if (!useData){
      window.location.href ="http://localhost:5173/admin"
    }
  },[useData]);

  return (
    <ContaiSidebar>
      <ContainAll>
        <ContainLogo>
          <LogoSidebar src={Logo} alt="logo-sidebar" />
        </ContainLogo>

        <Navbar>
          <NavbarContain>
            {ButtonNarbar1.map((item) => (
              <NavConten key={item.id} $isactive={pathname === item.to}>
                <NavLinks to={item.to} $isactive={pathname === item.to}>
                  <NavIcon> {item.icon} </NavIcon>
                  <NavTittle>{item.title}</NavTittle>
                </NavLinks>
              </NavConten>
            ))}
          </NavbarContain>
          <ContainPerfil>
            <ContenPerfil>
              <NavIcon>
                <i className="fa-solid fa-user"></i>
              </NavIcon>
              <NavTittle>{useData.nombre} {useData.apellido}</NavTittle>
            </ContenPerfil>
            <ContenPerfil style={{ display: "flex", justifyContent: "center" }}>
              <NavLinks onClick={logOut} style={{ width: "25px" }}>
                <NavIcon>
                  <i className="fa-solid fa-power-off"></i>
                </NavIcon>
              </NavLinks>
              <NavTittle >{useData.rol}</NavTittle>
            </ContenPerfil>
          </ContainPerfil>
        </Navbar>
      </ContainAll>
    </ContaiSidebar>
  );
};

export default Sidebar;
