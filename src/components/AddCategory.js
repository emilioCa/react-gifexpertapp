import React, {useState} from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({setCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Evitamos que haga postback

        // Validamos
        if (inputValue.trim().length > 2) {
            // De esta forma accedemos al arreglo que posee al contenido del estado que posee el componente. Con el callback
            setCategory(categories => [inputValue, ...categories]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}

// todo: si no asignamos un valor inicial al useState, el componente tendrá 'undefined' como estado inicial y eso nos dará un error
