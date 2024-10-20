import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Header from '../components/sections/Header';
import DetailPage from '../pages/DetailPage';
import BottomNavigation from '../components/common/BottomNavigation';
import CartPage from '../pages/CartPage';
import ProfilePage from '../pages/ProfilePage';
import FavoritePage from '../pages/FavoritePage';

const AppRoutes = () => {

    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handleLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        const intervalId = setInterval(handleLocationChange, 0);

        return () => {
            clearInterval(intervalId);
        };
    }, []);


    return (
        <Router>
            <div className='flex justify-center'>
                <div className="mockup-phone">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="relative pt-24 artboard artboard-demo phone-1">
                            <div className='absolute w-full top-6'>
                                <Header />
                            </div>
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/favorite" element={<FavoritePage />} />
                                <Route path="/detail" element={<DetailPage />} />
                                <Route path="/cart" element={<CartPage />} />
                                <Route path="/profile" element={<ProfilePage />} />
                            </Routes>
                            {currentPath === '/' && <BottomNavigation />}
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default AppRoutes;
