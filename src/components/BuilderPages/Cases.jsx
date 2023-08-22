import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';


function Cases({ name, selected, setSelected }) {
    const history = useHistory();

    let [casesList, setCasesList] = useState([]);

    useEffect(() => {
        fetch(`/api/cases/${name}`)
        .then((response) => response.json())
        .then(casesListFromServer => setCasesList(casesListFromServer))
        .catch(error => console.log(error)); // TODO: Add alert
    })
    return (
        <>
        {
            casesList.map(cases => (
                <div>
                    {
                        selected === cases.id && (
                            <div>Selected!</div>
                        )
                    }
                    <img 
                    className="images" 
                    style={{width: '200px', height: 'auto'}} 
                    src={`images/${cases.image}`} 
                    alt={cases.name}
                    
                    />
                    
                    <button onClick={() => setSelected(cases.id)}>
                        Add
                    </button>
                    <p>Stuff</p>
                </div>
            ))
        }
        
        </>
    )
}

export default Cases; 