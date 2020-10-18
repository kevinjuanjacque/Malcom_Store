

export const FetchLogin = async(email,password) => {
    
    const resp =await fetch('http://localhost:4000/api/auth/inicioSesion',{
            method:'POST',
            body:JSON.stringify({Email:email,Password:password}),
            headers:{
                'Content-Type': 'application/json'
              }
        });
    const data = await resp.json();
        
    return data;
}
