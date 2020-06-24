import React from "react";
import {GifGridItem} from "./GifGridItem";
import {useFetchGifs} from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {
    // llamamos a nuestro custom hook
    const {data: images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__fadeIn">Loading...</p>}
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    );
}

// TODO: useEffect() => nos permite controlar la cantidad de llamadas a una fn en especifico
// TODO: encodeURI() => transforma un string a formato válido para las strings enviados por URL
// para renombrar un valor recibido por desestructuración utilizamos ':' más el nuevo nombre. EJ: data:images
