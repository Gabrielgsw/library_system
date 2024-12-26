
import './styles.css'
import React, {useState} from 'react'; 


function App() {
  
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };


  return (
    
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor='email'>Email: </label>
            <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}required/>
          </div>
          <div>
            <label htmlFor='password'>Senha: </label>
            <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}required/>
          </div>
          <button type='submit'>Entrar</button>
          <button type='submit'>Registre-se</button>
        </form>
      </div>
     
  )
}

export default App
