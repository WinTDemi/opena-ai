import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../slices/userSlice';
import { Button } from 'antd';

import reactLogo from '../../assets/react.svg'
import viteLogo from '../../assets/vite.svg'

function HomePage() {

    const dispatch = useDispatch();

    const user = useSelector((state: any) => state.user);

    // Function to handle setting the user
    const handleSetUser1 = () => {
        dispatch(setUser({ name: 'John Doe1', age: 30 }));
    };

    const handleSetUser2 = () => {
        dispatch(setUser({ name: 'John Doe2', age: 30 }));
    };

    const handleGetUser = () => {
        console.log(user)
    }

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <Button type="primary" onClick={handleSetUser1}>Set User1</Button>
            <button onClick={handleSetUser2}>Set User2</button>
            <button onClick={handleGetUser}>Get User</button>
        </>
    )
}

export default HomePage