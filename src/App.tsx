import React, {SyntheticEvent, useState} from 'react';
import './App.css';
import GitHub from './Github/GitHub';


function App() {
    const [formInput, setFormInput] = useState('ContentPI/ContentPI');
    const [repoName, setRepoName] = useState(formInput);


    const handleSubmitForm = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setRepoName(formInput);
    };

    return (
        <div className='container'>
            <h2>GitHub Issue Tracker</h2>
            <form onSubmit={handleSubmitForm}>
                <label htmlFor='repoName'>
                    <input type='text'
                           value={formInput}
                           onChange={e => setFormInput(e.target.value)}
                           name='repoName'/>
                </label>
            </form>
            <GitHub repoName={repoName}/>
        </div>
    );
}

export default App;
