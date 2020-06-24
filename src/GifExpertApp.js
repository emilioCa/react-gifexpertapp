import React, {useState} from "react";
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

const GifExpertApp = () => {
    // Declaramos nuestro estado (hook)
    const [categories, setCategories] =
        useState(['Naruto']);

    return (
        <div>
            <h2>Gif Expert App</h2>
            <AddCategory setCategory={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map(category => {
                        return <GifGrid key={category} category={category} />
                    })
                }
            </ol>
        </div>
    );
};

export default GifExpertApp;

// El key no puede ser el indice del arreglo

// De esta forma podemos manipular arreglos que estan dentro de nuestro state
// const handleAdd = () => {
//     // setCategories([...categories, 'Detective Conan']);
//     setCategories(cat => ['Detective Conan', ...categories]);
// }

// TODO: Custom Hooks => no es más que una forma de extraer lógica para reutilizarla
