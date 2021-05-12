import { connect } from 'react-redux'
import { CHANGE_COUNTRY, CHANGE_NAME } from './redux/types'
import fetchname from './redux/actions'
import './App.css';

function App(props) {
  return (
    <div className="App">
      <button onClick={() => { props.changeName() }}>fetch users</button>
      <h3>well come{props.country}</h3>

      <button onClick={() => { props.changeCountry("  : Turkey") }}>change country</button>
      <div>
        {props.name.map(item => <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.email}</p>

        </div>)}
      </div>
    </div>
  );
}

const mapStateToprops = state => {
  return {
    country: state.country,
    name: state.name

  }

}
const mapDispatchToProps = Dispatch => {
  return {
    changeCountry: (country) => { Dispatch({ type: CHANGE_COUNTRY, payload: country }) },
    changeName: () => { Dispatch(fetchname()) }

  }
}

export default connect(mapStateToprops, mapDispatchToProps)(App);
