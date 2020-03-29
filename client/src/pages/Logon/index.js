import React, {useState} from 'react'
import './styles.css'
import api from '../../services/api'
import {Link, useHistory} from 'react-router-dom'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import { FiLogIn } from 'react-icons/fi'




export default function Logon() {
    const history = useHistory()
    const [id, setID] = useState('')

    async function handleLogin(e){
        e.preventDefault()

        try{
            const response = await api.post('sessions', {id})
            console.log(response.data.name)
            localStorage.setItem('ongID', id)
            localStorage.setItem('ongName', response.data.name)
            history.push('profile')
        }catch(err){
            alert('falha login')
        }


    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"></img>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID" 
                    value={id}
                    onChange={ e => setID(e.target.value)}
                    />
                    <button type="submit" className="button">Entrar</button>
                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#E02041"></FiLogIn>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"></img>
        </div>
    )
}