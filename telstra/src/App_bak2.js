import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Form from './components/Form';
import FragmentDemo from './components/FragmentDemo';
import LifeCycleA from './components/LifeCycleA';
import PortalWindow from './components/PortalWindow';
import PostList from './components/PostList';
import PostsForm from './components/PostsForm';
import User from './components/User';

function App() {
    return (
        <div className="App">
            {/* <h1>React</h1> */}
            {/* <Form /> */}
            {/* <LifeCycleA /> */}
            {/* <FragmentDemo /> */} 
            {/* <PortalWindow /> */}
            {/* <ErrorBoundary>
                <User userName="abhijeet" />
            </ErrorBoundary>
            <ErrorBoundary>
                <User userName="Sayali" />
            </ErrorBoundary>
            <ErrorBoundary>
                <User userName="React" />
            </ErrorBoundary>  */}
            {/* <PostList /> */}
            <PostsForm />
        </div>
    );
}

export default App;

