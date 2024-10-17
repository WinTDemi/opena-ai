import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Header from '../components/sections/Header';
import FarvoritePage from '../pages/FarvoritePage';

const AppRoutes = () => {
    return (
        <Router>
            <div className='flex justify-center'>
                <div className="mockup-phone">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1 pt-[25px]">
                            <Header />
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/farvorite" element={<FarvoritePage />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default AppRoutes;
