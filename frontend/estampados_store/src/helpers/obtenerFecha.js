

export const obtenerFecha = () => {

    const difference = new Date();
    return {
        hours  : difference.getHours(),
        minutes: difference.getMinutes(),
        seconds: difference.getSeconds()
    }
}
