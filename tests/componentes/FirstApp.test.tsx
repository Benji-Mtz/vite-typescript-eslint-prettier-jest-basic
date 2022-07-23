/*eslint no-undef: "error"*/

import { render } from "@testing-library/react";
import { FirstApp } from '../../src/componentes/FirstApp';
import React from 'react';

describe('Pruebas en <FirstApp />', () => { 
    
    test("debe de hacer match con el snapshot", () => {
        
        // Funcion para renderizar en memoria componentes
        const title = 'Hola, Soy el titutlo react';

        render( <FirstApp title={ title } /> )
    });
 });