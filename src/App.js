import { Route, Switch, BrowserRouter } from 'react-router-dom';
import CreatePokemon from './Components/CreatePokemon';
import DisplayPokemon from './Components/DisplayPokemon';
import AppContextProvider from './context/AppContextProvider';


const App = () => {

    return (
        <AppContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/display" component={DisplayPokemon}></Route>
                    <Route path="/" component={CreatePokemon}></Route>
                </Switch>
            </BrowserRouter>
        </AppContextProvider>

    )
}

export default App;