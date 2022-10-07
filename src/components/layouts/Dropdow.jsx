import React from 'react';
import {Link} from "react-router-dom";
const Dropdow = ({lista}) => {

    return (
        <>
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"></a>
          <div className="dropdown-menu">

          {/* {
            lista.forEach((categoria, indice) => {
              <Link key={indice}className='dropdown-item' to={`/categoria/${indice + 1}`}>{categoria}</Link>
            })
          } */}
          <Link className='dropdown-item' to={`/categoria/1`}>{lista[0]}</Link>
          <Link className='dropdown-item' to={`/categoria/2`}>{lista[1]}</Link>
          <Link className='dropdown-item' to={`/categoria/3`}>{lista[2]}</Link>
          <Link className='dropdown-item' to={`/categoria/4`}>{lista[3]}</Link>
            </div>
        </li>
        </>
    );
}

export default Dropdow;
