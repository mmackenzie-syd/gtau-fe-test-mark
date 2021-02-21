import React, { useEffect, useReducer } from "react";

const ACTIONS = ["View", "Reply"];

const formatAsCurrency = (int) => {
    // TODO
    if (typeof int === 'number') {
        let priceInThousands = Math.round(int/1000)*1000;
        return '$' + priceInThousands.toLocaleString();
    }
    return int;
};

const Listing = ({ title, description, imgUrl, location, price }) => {
    // TODO
    // This should be the component which renders an individual listing to the page

    return (
        <div className="listing">
            <header>
                <h3 className="listing__title">{title}</h3>
                <div className="listing__subtitle">
                    <div className="listing__price">{formatAsCurrency(price)}</div>
                    <div className="listing__location">{location}</div>
                </div>
            </header>
            {
                imgUrl &&
                <div className="listing__img-wrap">
                    <img alt={title} src={imgUrl} className="listing__img"/>
                </div>
            }
            <article>
                { description && <p className="listing__description">{ description }</p> }
            </article>
            <footer>
                {
                    ACTIONS.map(action =>
                        <button key={action} onClick={() => console.log(`${action} : ${title}`)}>
                            {action}
                        </button>)
                }
            </footer>
        </div>
    );
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case 'ERROR':
            return {
                loading: false,
                data: [],
                error: action.payload || 'failed to fetch data'
            }
        default:
            return state;
    }
}

const BlueSpan = ({ txt }) => <span className="text-primary">{txt}</span>;

const Listings = ({ dataEndpoint, keyword, location }) => {
    // TODO
    // This component should make a request to the api endpoint (props.dataEndpoint)
    // then render the result as set of listings as per the design mocks
    // check props passed in from parent for other values that you may need to use
    const [state, dispatch] = useReducer(reducer, {
            loading: true, error: '', data: []
        });
    useEffect(() => {
        fetch(dataEndpoint)
            .then(function(response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            }).then(function(response) {
                response.json().then((data) => {
                    dispatch({ type: 'SUCCESS', payload: data});
                });
            }).catch(function(error) {
                dispatch({ type: 'ERROR', payload: error.toString() })
            });
    }, []);
    const { loading, data, error } = state;
    return (
        <div className="listings">
            { loading &&
                <div>
                    ...Loading
                </div>
            }
            { !error && !loading &&
                <>
                    <div className="listings__header">
                        <h2>Search Results</h2>
                        <p>
                            <span>{data.length} results</span> for <span>{keyword}</span> in <span>{location}</span>
                        </p>
                    </div>
                    <div className="listings__grid">
                        { (data.length > 0) &&
                            data.map((item, index) =><Listing key={index }{ ...item } />)
                        }
                    </div>
                </>
            }
            { error &&
                <div className="error">
                    <div className="error__msg">{error}</div>
                </div>
            }
        </div>
    );
};

export default Listings;
