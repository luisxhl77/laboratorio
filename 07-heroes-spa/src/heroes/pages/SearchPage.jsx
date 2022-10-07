import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hook/useform"
import { HeroCard } from "../components/HeroCard"
import queryString from 'query-string'
import { getHerosByName } from "../helpers/getHerosByName"

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {q = ''} = queryString.parse(location.search)

    const heroes = getHerosByName(q);

    const {searchText, onInputChange, onResetForm,} = useForm({
        searchText: q
    })

    const onSearchSubmit = (event) => {
        event.preventDefault();
        if (searchText.trim().length < 1) return;
        navigate(`?q=${searchText}`);
    }




    return (
        <>
            <h1>searchPage</h1>
            <hr /> 
            <div className="row">
                <div className="col-5">
                    <h4>Seaching</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input 
                            id="" 
                            type="text" 
                            name="searchText" 
                            value={searchText} 
                            onChange={onInputChange}
                            className="form-control"
                            placeholder="Search a heroe"
                            autoComplete="off"
                            />
                        <button className="btn btn-outline-primary mt-1">Search</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {   
                        (q === '')
                        ?
                        <div className="alert alert-primary">Search a hero</div> 
                        : 
                        ( heroes.length === 0 ) 
                        &&                     
                        <div className="alert alert-danger">No hero with <b>{q}</b></div>                     
                    }



                    {
                        heroes.map( hero => (
                            <HeroCard key={hero.id} {...hero}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
