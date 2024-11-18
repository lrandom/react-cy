import './App.css'
import ComponentA from "./components/ComponentA.jsx";
import ComponentB from "./components/ComponentB.jsx";
import {useState} from "react";


function App() {
    const [componentName, setComponentName] = useState('componentA');
    const languages = ["JS", "PHP", "Java"]

    function toggleComponent() {
        setComponentName(componentName === 'componentA' ? 'componentB' : 'componentA');
    }

    return (<>
        {componentName === 'componentA' ? <ComponentA/> : <ComponentB/>}
        {
            languages.map((language, index) => (
                <div key={index}>{language}</div>
            ))
        }
        <p>
            Test Application
        </p>
        <button onClick={() => toggleComponent()}>Toggle Component</button>
    </>);
}

export default App;