import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Cases() {
    const history = useHistory();
    const dispatch = useDispatch();
    const cases = useSelector(store => store.cases);

    let [casesList, setCasesList] = useState([]);

    useEffect(() => {
        dispatch({ type: 'FETCH_CASES' });
    }, []);

    // const handleClick = (cases) => {
    //     history.push('/')
    // }

    return (
        <>
            <div className="card w-96 glass">
                <section className="cases">
                    {casesList.map((singleCase) => {
                        return (
                            <div id="card-body" key={singleCase.id}>
                                <img src={singleCase.image} alt={singleCase.name} />
                                <h3>{singleCase.name}</h3>
                                <p>{singleCase.size}</p>
                                <p>{singleCase.specifications}</p>
                                <p>{singleCase.price}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">
                                        Add
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </section>
            </div>
        </>
    )
}

export default Cases; 