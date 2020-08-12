import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

const App = () => {

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales){ // revisa si retorna null el getItem
    citasIniciales = []
  }

  const [ citas, setCitas ] = useState(citasIniciales);

  useEffect( () => {
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas, citasIniciales])

  const showCita = cita => {
    setCitas([
      ...citas,
      cita
    ]);
  };

  const deleteCita = (id) => {
    const newCitas = citas.filter(cita => cita.id !== id);
    setCitas(newCitas);
  }

  const titulo = citas.length === 0 ? 'No Hay Citas' : 'Administre sus Citas';


  const contadorCitas = citas.length


  return (
    <>
        <h1>administrador de pacientes</h1>
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <h2>Solicitud de Cita</h2>
              <Formulario 
                showCita={showCita}
              />
            </div>
            <div className="one-half column">
              <h2>{titulo}</h2>
              {contadorCitas === 0 ? "": <p>Citas apuntadas <span> {contadorCitas} </span> </p> }
              
              {citas.map(cita => (
                <Cita
                  key={cita.id}
                  cita={cita}
                  deleteCita={deleteCita}
                />
              ))}
              
            </div>
          </div>
        </div>
    </>
  );
};

export default App;