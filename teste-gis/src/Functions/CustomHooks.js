import {useState} from "react";
import { useHistory } from "react-router-dom";

export const useForm = initialValues => {
    const [form, setForm] = useState(initialValues);

    const onChange = (name, value) => {
        const newForm = { ...form, [name]: value };
        setForm(newForm);
    };
    return { form, onChange };
};

export const useUrl = a =>{
    const history = useHistory();
    const casa = ()=>{
        history.push(a)
    }
    return [casa]
}