import './App.css';
import ClassClick from './components/ClassClick';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import FunctionClick from './components/FunctionClick';
import Greet from './components/Greet';
import Message from './components/Message';
import ParentComp from './components/ParentComp';
import StyleSheet from './components/StyleSheet';
import TollsList from './components/TollsList';
import UserGreeting from './components/UserGreeting';
import Welcome from './components/Welcome';
import './App.css';
import styles from './App.module.css'

function App() {
    
    return (
        <div className="App">
            <h1 className="error"> Error </h1>
            <h1 className={styles.success}> Success </h1>
            {/* <Greet name="Venkat" prof="Trainer">
                <p> This is a child passed from parent</p>
            </Greet>
            <Greet name="Neha" prof="Developer"></Greet>
            <Greet name="Abhijeet" prof="Developer"></Greet>
            */}

            {/* <Welcome  name="Neha" prof="Developer" /> 
            {/* <Message name="Neha" prof="Developer"/> */}
            {/* <Counter />  */}
            {/* <FunctionClick />
            <ClassClick /> */}

            {/* <EventBind /> */}

            {/* <ParentComp /> */}

            {/* <UserGreeting /> */}
            {/* <TollsList /> */}
            <StyleSheet primary = {true} />
        </div>
    );
}

export default App;

