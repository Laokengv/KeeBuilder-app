import { useEffect, useState } from 'react';

function Components({ name, selected, setSelected }) {
    let [componentsList, setComponentsList] = useState([]);

    useEffect(() => {
        fetch(`/api/components/${name}`)
        .then((response) => response.json())
        .then(componentsListFromServer => setComponentsList(componentsListFromServer))
        .catch(error => console.log(error)); // TODO: Add alert
    })
    return (
        <>
        {
            componentsList.map(components => (
                <div>
                    {
                        selected === components.id && (
                            <div>Selected!</div>
                        )
                    }
                    <img style={{width: '200px', height: 'auto'}} src={`images/${components.image}`} />
                    <button onClick={() => setSelected(components.id)}>
                        Add
                    </button>
                </div>
            ))
        }
        
        </>
    )
}

export default Components;