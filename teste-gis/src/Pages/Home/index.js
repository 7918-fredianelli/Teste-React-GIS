import React, {useState, useContext, useEffect} from "react";
import {useUrl} from "../../Functions/CustomHooks";
import ClientsContext from "../../Contexts/ClientsContext";
import {HomeContainer, Button} from "./styles";

function Home() {

  const [details, setDetails]= useState(false);
  const [userDetail, setUserDetail] = useState({});
  const {clientsList, setClientsList} = useContext(ClientsContext)
  const [getUsers, setGetUsers] = useState([])

  const renderDetails = (user)=>{
    setUserDetail(user)
    setDetails(!details)
  }
  
  const [goToCreateUser] = useUrl("/CriarUsuario")
  
  useEffect(() => {
    setGetUsers(clientsList)
  },[])
  
  useEffect(() => {
    setGetUsers(clientsList)
  },[clientsList])


  const deleteUser = (user)=>{
    setClientsList(
      clientsList.filter((client)=>{
        if(user.email !== client.email){
          return <li>{client}</li>
        }
      })
    )
  }
  
  return (
    <HomeContainer>
            {details === false ?
          <>
            <Button cor={"#e619e5"} onClick={goToCreateUser}>Novo Cliente</Button>
            <table>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Ações</th>
                </tr>
                {getUsers.map((user)=>{
                return( 
                  <tr>
                        <td>
                          {user.name}
                        </td>
                        <td>
                          {user.email}
                        </td>
                        {/* <li> <span>{user.name}</span> <span>{user.email}</span></li>  */}
                        <td>
                          <Button cor={"#00006f"} onClick={()=>renderDetails(user)}>Detalhes</Button>
                          <Button cor={"#9b111e"} onClick={()=>deleteUser(user)}>Excluir</Button>
                        </td>
                  </tr>
                )
              })}
            </table>
          </>
          : 
          <>
          <table>
            <tr>
                <th>Nome</th>
                <th>Telefone</th>
                <th>Data de Nascimento</th>
                <th>Endereço</th>
                <th>Bairro</th>
                <th>CEP</th>
                <th>Ponto de referência</th>
                <th>Email</th>
              </tr>
            <tr>
                <td>{userDetail.name}</td>
                <td>{userDetail.telephone}</td>
                <td>{userDetail.birthDate}</td>
                <td>{userDetail.adress}</td>
                <td>{userDetail.district}</td>
                <td>{userDetail.cep}</td>
                <td>{userDetail.referencePoint}</td>
                <td>{userDetail.email}</td>
              </tr>
          </table>
            <Button cor={"#e619e5"} onClick={renderDetails}>Voltar</Button>
          </>
          }
    </HomeContainer>
  );
}

export default Home;
