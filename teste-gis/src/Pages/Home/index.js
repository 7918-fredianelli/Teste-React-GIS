import React, {useState, useContext, useEffect} from "react";
import Header from "../../Components/Header/index";
import Footer from "../../Components/Footer/index";
import {useUrl} from "../../Functions/CustomHooks";
import ClientsContext from "../../Contexts/ClientsContext";

function Home() {

  const [details, setDetails]= useState(false);
  const [userDetail, setUserDetail] = useState({});
  const {clientsList, setClientsList} = useContext(ClientsContext)
  const [getClients, setGetClients] = useState([])

  const renderDetails = (user)=>{
    setUserDetail(user)
    setDetails(!details)
  }

  useEffect(() => {
    localStorage.getItem("clients")
    setGetClients(localStorage.getItem("clients"))
  }, [])
  
  const [goToCreateUser] = useUrl("/CriarUsuario")
  
  return (
    <div>
      <Header/>
        <button onClick={goToCreateUser}>Add</button>
        {details === false ?
        getClients.map((user)=>{
        return( 
          <div>
              <div>
                <li> <span>{user.name}</span> <span>{user.email}</span></li> 
                <button onClick={()=>renderDetails(user)}>Ver mais</button>
              </div>
          </div>
        ) 
      })
      : 
      <div>
        <ul>
          <li>{userDetail.name}</li>
          <li>{userDetail.telephone}</li>
          <li>{userDetail.birthDate}</li>
          <li>{userDetail.adress}</li>
          <li>{userDetail.district}</li>
          <li>{userDetail.cep}</li>
          <li>{userDetail.referencePoint}</li>
          <li>{userDetail.email}</li>
        </ul>
        <button onClick={renderDetails}>Voltar</button>
      </div>}
      <Footer/>
    </div>
  );
}

export default Home;
