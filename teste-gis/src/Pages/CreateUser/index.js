import {useForm, useUrl} from "../../Functions/CustomHooks";
import {useContext} from "react";
import ClientsContext from "../../Contexts/ClientsContext";
import {NewUserContainer} from "./styles";

function CreateUser(){
    
    const {form, onChange} = useForm({
        name: "",
        telephone: "",
        birthDate: "",
        adress: "",
        district: "",
        cep: "",
        referencePoint: "",
        email: ""
    })

    const {clientsList, setClientsList} = useContext(ClientsContext)

    const buttonCreateUser = (event)=>{
        event.preventDefault()
        clientsList.push(form)
        goToHome()
    }
    
    const handleInputChange = (event)=>{
        const {name, value} = event.target;

        onChange(name, value);
    }

    const [goToHome] = useUrl("/")

    return(
        <NewUserContainer>
            <form>
                <div>
                    <label>Nome:</label>
                    <input
                        name="name"
                        placeholder="João"
                        pattern={"[A-Za-z]{3,}"}
                        title="O nome deve ter no mínimo 3 letras"
                        value={form.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Telefone:</label>
                    <input
                        name="telephone"
                        placeholder="11 99888-2211"
                        pattern="\([0-9]{2}\)[\s][0-9]{4}-[0-9]{4}"
                        type="number"
                        value={form.phone}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Data de Nascimento:</label>
                    <input
                        name="birthDate"
                        placeholder="01/04/1989"
                        value={form.date}
                        onChange={handleInputChange}
                        required
                    />  
                </div>
                <div>
                    <label>Endereço:</label>
                    <input
                        name="adress"
                        placeholder="Rua Alencar filho número 20"
                        value={form.adress}
                        onChange={handleInputChange}
                        required
                    />   
                </div>
                <div>
                    <label>Bairro:</label>
                    <input
                        name="district"
                        placeholder="Bairro"
                        value={form.district}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>CEP:</label>
                    <input
                        name="cep"
                        placeholder="12345-221"
                        type="number"
                        pattern= "\d{5}-?\d{3}" 
                        value={form.cep}
                        onChange={handleInputChange}
                        required
                    />          
                </div>
                <div>
                    <label>Ponto de Referencia:</label>
                    <input
                        name="referencePoint"
                        placeholder="Frente ao Mercado"
                        value={form.referencePoint}
                        onChange={handleInputChange}
                        required
                    />   
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="joaosilva@email.com"
                        value={form.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button onClick={buttonCreateUser}>Cadastrar</button>
            </form>
        </NewUserContainer>
    )
}
export default CreateUser;