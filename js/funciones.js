export const mostrarAlerta = (mensaje) =>{
    const alerta = document.querySelector('.bg-red-100');

    if(!alerta){
        const alerta = document.createElement('p');
        const sms = document.createElement('span');
        alerta.classList.add('bg-red-100','border-red-400','text-red-700','px-4','py-3','rounded','max-w-lg','mx-auto','mt-6','text-center')
        sms.classList.add('block', 'sm:inline', 'font-bold')

        sms.textContent = mensaje;
        alerta.appendChild(sms)

        const formulario = document.querySelector('#formulario');
        formulario.appendChild(alerta)

        setTimeout(()=>{
            alerta.remove()
        },2700)
    }
}

export const validar = (clienteObj) =>{
    return !Object.values(clienteObj).every(input => input !== '')
}