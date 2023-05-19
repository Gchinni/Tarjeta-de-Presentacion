import React from "react";

export default function Header() {
    return(
        <div className="card-header text-center">
            <img src="src\assets\foto-perfil.jpeg" className="card-img-top imagen rounded-top-3" alt="foto-perfil"></img>
            <h5 className="card-title card-texto">Guillermo Chinni</h5>
            <h6 className="card-subtitle mb-2 card-texto">Junior Front-end Developer</h6>
            <a href="#" className="card-link card-texto">guillermo.website</a>
            <nav className="navbar">
                <a href="mailto:guillechinni2001@gmail.com" className="btn btn-light ms-4"><img className="logo-btn" src="src/assets/logo-correo.png" />Email</a>
                <a href="https://www.linkedin.com/in/guillermo-chinni-aylwin/" target="_blank" className="btn btn-linkedin me-4"><img className="logo-btn" src="src\assets\linkedin.png" />LinkedIn</a>
            </nav>
        </div>
    )
}