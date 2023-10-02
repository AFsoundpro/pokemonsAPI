// NavigationBar.js
import React from "react";
import { Link } from "react-router-dom"; // Asumiendo que estás utilizando React Router para la navegación

function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/AboutUS">AboutUS</Link>
        </li>
        
        {/* Agrega más enlaces según sea necesario */}
      </ul>
    </nav>
  );
}

export default NavigationBar;
