export const loadAbort = () =>{
    //Abort controller -> emite una señal y puede cancelar una peticion en curso 
    //ej : si un componente deja de exisitir se cancela la peticion
    const controller = new AbortController();
    return controller;
}