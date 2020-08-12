import React from 'react';

const Cita = ({cita, deleteCita}) => {

    const { id, mascota, dueño, fecha, hora, sintomas } = cita;

    return(
        <div className="cita">
            <p> Mascota: <span>{mascota}</span> </p>
            <p> Dueño: <span>{dueño}</span> </p>
            <p> Fecha: <span>{fecha}</span> </p>
            <p> Hora: <span>{hora}</span> </p>
            <p> Sintomas: <span>{sintomas}</span> </p>

            <button className="button eliminar u-full-width" onClick={() => deleteCita(id)}> Eliminar Cita </button>
        </div>
    );
}

export default Cita;