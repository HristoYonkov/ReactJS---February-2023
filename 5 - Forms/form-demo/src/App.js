import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
    const [hobbies, setHobbies] = useState({});
    const ref = useRef();
    const [formValues, setFormValues] = useState({
        username: 'Pesho',
        creditCard: '',
        occupation: 'medicine',
        gender: 'male',
        bio: '',
        age: ''
    });

    useEffect(() => {
        ref.current.value = formValues.username;
    }, [formValues.username]);

    const onChangeHandler = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }))
    };

    const onSubmit = (e) => {
        e.preventDefault();
    };

    const onHobbiesChange = (e) => {
        setHobbies(state => ({ ...state, [e.target.value]: e.target.checked }));
    };

    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={formValues.username}
                            onChange={onChangeHandler}
                        />
                    </div>

                    <div>
                        <label htmlFor="age">Age</label>
                        <input
                            type="number"
                            name="age"
                            id="age"
                            value={formValues.age}
                            onChange={onChangeHandler}
                        />
                    </div>

                    {Number(formValues.age) >= 18 && (
                        <div>
                            <label htmlFor="creditCard">Credit Card</label>
                            <input
                                type="text"
                                name="creditCard"
                                id="creditCard"
                                value={formValues.creditCard}
                                onChange={onChangeHandler}
                            />
                        </div>
                    )}

                    <div>
                        <label htmlFor="occupation">Occupation</label>
                        <select name="occupation" id="occupation" value={formValues.occupation} onChange={onChangeHandler}>
                            <option value="it">IT</option>
                            <option value="engineering">Engineering</option>
                            <option value="medicine">Medicine</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="male">Male</label>
                        <input type="radio" name='gender' id='male' value="male" onChange={onChangeHandler} checked={formValues.gender === 'male'} />
                        <label htmlFor="female">Female</label>
                        <input type="radio" name='gender' id='female' value="female" onChange={onChangeHandler} checked={formValues.gender === 'female'} />
                    </div>

                    <div>
                        <label htmlFor="bio">Bio</label>
                        <textarea name="bio" id="bio" cols="30" rows="10" value={formValues.bio} onChange={onChangeHandler}></textarea>
                    </div>

                    <div>
                        <label htmlFor="hiking">hiking</label>
                        <input type="checkbox" name='hobbies' value="hiking" id="hiking" onChange={onHobbiesChange} checked={hobbies['hiking'] || false} />
                        <label htmlFor="reading">reading</label>
                        <input type="checkbox" name='hobbies' value="reading" id="reading" onChange={onHobbiesChange} checked={hobbies['reading'] || false} />
                        <label htmlFor="sports">sports</label>
                        <input type="checkbox" name='hobbies' value="sports" id="sports" onChange={onHobbiesChange} checked={hobbies['sports'] || false} />
                        <label htmlFor="gaming">gaming</label>
                        <input type="checkbox" name='hobbies' value="gaming" id="gaming" onChange={onHobbiesChange} checked={hobbies['gaming'] || false} />
                        <label htmlFor="walking">walking in woods</label>
                        <input type="checkbox" name='hobbies' value="walking" id="walking" onChange={onHobbiesChange} checked={hobbies['walking'] || false} />
                    </div>

                    <div>
                        <label htmlFor="uncontrolled">Uncontrolled</label>
                        <input type="text" name='uncontrolled' id='uncontrolled' ref={ref} />
                    </div>
                    
                    <div>
                        <input type="submit" value="Send" />
                    </div>
                </form>
            </header>
        </div>
    );
}

export default App;
