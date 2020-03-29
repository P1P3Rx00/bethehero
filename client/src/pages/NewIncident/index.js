import React, {useState} from "react"
import './styles.css'
import api from '../../services/api'

import logoImg from '../../assets/logo.svg'
import {Link, useHistory} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

export default function NewIncident(){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const history = useHistory()

    const ongId = localStorage.getItem('ongID')

    async function handleNewIncident(e){
        e.preventDefault()
        const data = {
            title,
            description,
            value
        }
        try{
            await api.post('incidents', data, {
                headers:{
                    Authorization: ongId
                }
            })
            history.push('/profile')

            

        }catch(err){
            alert('erro ao cadastrar incidente')
        }

    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                  <img src={logoImg} alt="Be The Hero" />

                  <h1>Cadastrar novo caso</h1>
                  <p>Descreva o caso detalhadamente para econtrar um héroi para resolver isso.</p>

                  <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#E02041"></FiArrowLeft>
                       Voltar para Home
                </Link>

                </section>
                <form onSubmit={handleNewIncident}>
                    <input placeholder="Título do caso" 
                    value={title}
                    onChange={ e=> setTitle(e.target.value)}
                    />
                    <textarea placeholder="Descrição"
                    value={description}
                    onChange={ e=> setDescription(e.target.value)}
                    ></textarea>
                    <input placeholder="Valor em reais" 
                    value={value}
                    onChange={ e=> setValue(e.target.value)}
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}