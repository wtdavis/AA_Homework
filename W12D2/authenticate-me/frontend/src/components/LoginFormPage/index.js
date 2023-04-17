import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { login } from '../../store/session';
import {Redirect} from 'react-router-dom'

const LoginFormPage = (props) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector( state => state.session.user)
    const [credential, setCredential] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    if (sessionUser) {return <Redirect to="/" />}

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            credential: credential,
            password: password,
        }
        setCredential("")
        setPassword("")

        return dispatch(login(user))
        .catch(async (res) => {
            let data;
            try {
                data = await res.clone().json()
            } catch {
                data = await res.text();
            }

            if (data?.errors) {
                setErrors(data.errors)
            } else if (data) {
                setErrors([data])
            } else {
                setErrors([res.statusText])
            }
        })
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map(error => <li key={error}> {error} </li>)}
            </ul>
           <input onChange={e => setCredential(e.target.value)} name="credential"  value={credential}/>
           <br/>
           <input onChange={e => setPassword(e.target.value)} name="password" type="password" value={password}/>
           <input type="submit" value="Login/Signup"/>
        </form>
    )
}

export default LoginFormPage