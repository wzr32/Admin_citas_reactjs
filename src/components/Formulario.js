import React, { useState } from 'react';
import uuid from 'uuid/v4';

const Formulario = ({showCita}) => {
    const [ cita, setCita ] = useState({
        mascota: "",
        dueño: "",
        fecha: "",
        hora: "",
        sintomas: ""
    });

    const [ error, setError ] = useState(false);


    const { mascota, dueño, fecha, hora, sintomas } = cita;

    const handleChange = (e) => {
        setCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    };

    const hanldeSubmit = (e) => {
        e.preventDefault();

        if( mascota.trim() === '' || dueño.trim() === '' || fecha.trim() === "" || hora.trim() === '' || sintomas.trim() === '') {
            setError(true);
            return;
        }
        
        // eliminar mensaje de error 
        setError(false);

        // crear id 
        cita.id = uuid();

        // crear cita
        showCita(cita);

        // reinicar formulario 
        setCita({
            mascota: "",
            dueño: "",
            fecha: "",
            hora: "",
            sintomas: ""
        });
    };

    return (
        <div>

            { error ? 
                <div className="alerta-error">
                    todos los campos son requeridos
                </div>
            : null}

            <form onSubmit={hanldeSubmit}>
                <label>Nombre de la mascota</label>
                <input type="text" name="mascota" className="u-full-width" onChange={handleChange} value={mascota}/>

                <label>Nombre del dueño</label>
                <input type="text" name="dueño" className="u-full-width" onChange={handleChange} value={dueño}/>

                <label>Fecha</label>
                <input type="date" name="fecha" className="u-full-width" onChange={handleChange} value={fecha}/>

                <label>Hora</label>
                <input type="time" name="hora" className="u-full-width" onChange={handleChange} value={hora}/>

                <label>Sintomas</label>
                <textarea name="sintomas" className="u-full-width" onChange={handleChange} value={sintomas}></textarea>

                <button type="submit" className="u-full-width button-primary">Agendar Cita</button>
            </form>
        </div>
    );
};

export default Formulario;