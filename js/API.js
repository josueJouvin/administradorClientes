const url = 'http://localhost:4000/clientes';

export const nuevoCliente = async cliente =>{
    try{
        await fetch(url,{
            method: 'POST',//metodo a utilizar,"es como hacerle un push aun array" (por defecto es get)
            body: JSON.stringify(cliente),//contenido que se va a enviar, se lo puede enviar como string u objeto
            headers:{
                'Content-Type': 'application/json'//tipo de dato que se envia
            }
        });
        window.location.href = 'index.html';
    }catch(err){
        console.log(err)
    }
}

export const obtenerClientes = async () =>{
    try{
        const resultados =  await fetch(url)
        const clientes = await resultados.json() 
        return clientes
    }catch(err){
        console.log(err)
    }
}

export const obtenerCliente = async id =>{
    try{
        const resultado = await fetch(`${url}/${id}`)
        const cliente = await resultado.json()
        return cliente
    }catch(err){
        console.log(err)
    }
}

export const editarCliente = async cliente =>{
    try{
       await fetch(`${url}/${cliente.id}`,{
            method: 'PUT',//metodo a utilizar (por defecto es get)
            body: JSON.stringify(cliente),//contenido que se va a enviar, se lo puede enviar como string u objeto
            headers:{
                'Content-Type': 'application/json'//tipo de dato que se envia
            }
        })
        window.location.href = 'index.html';
    }catch(err){
        console.log(err)
    }
}


export const eliminarCliente = async id =>{
    try{
        await fetch(`${url}/${id}`,{
            method: 'DELETE'
        })
    }catch(err){
        console.log(err)
    }
}