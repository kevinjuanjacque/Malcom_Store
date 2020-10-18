export const validarToken = async(token) => {
    
    const resp =await fetch('http://localhost:4000/api/auth/',{
            method:'POST',
            body:JSON.stringify({token:token}),
            headers:{
                'Content-Type': 'application/json'
              }
        });
    const data = await resp.json();
        
    return data;
}