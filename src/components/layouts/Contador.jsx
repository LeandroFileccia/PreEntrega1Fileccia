import React,{useState} from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0);
    return (
        <>
        <div>
            <h1>{contador}</h1>
        </div>
        </>
    );
}

export default Contador;
