import { useNavigate, useLocation } from 'react-router-dom';

function BottomNavigation() {
    const navigate = useNavigate();
    const location = useLocation();

    // Function to determine if the current path matches the nav item's path
    const isActive = (path: string) => location.pathname === path;

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    const navItems = [
        {
            id: 1,
            label: 'Home',
            path: '/',
            icon: (
                <svg
                    className="w-5 h-5 feather feather-home"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path fill="none" d="M3 9l9-6 9 6v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"></path>
                    <polyline fill="none" points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
            ),
        },
        {
            id: 2,
            label: 'Favorite',
            path: '/favorite',
            icon: (
                <svg
                    className="w-5 h-5 feather feather-heart"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                </svg>
            ),
        },
        {
            id: 3,
            label: 'Cart',
            path: '/cart',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 feather feather-heart"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M2 3L2.26491 3.0883C3.58495 3.52832 4.24497 3.74832 4.62248 4.2721C5 4.79587 5 5.49159 5 6.88304V9.5C5 12.3284 5 13.7426 5.87868 14.6213C6.75736 15.5 8.17157 15.5 11 15.5H13M19 15.5H17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M5 6H8M5.5 13H16.0218C16.9812 13 17.4609 13 17.8366 12.7523C18.2123 12.5045 18.4013 12.0636 18.7792 11.1818L19.2078 10.1818C20.0173 8.29294 20.4221 7.34853 19.9775 6.67426C19.5328 6 18.5054 6 16.4504 6H12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

            ),
        },
        {
            id: 4,
            label: 'Profile',
            path: '/profile',
            icon: (
                <svg
                    className="w-5 h-5 feather feather-user"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5z" />
                    <path d="M12 14c-4.4 0-8 2.3-8 6v1h16v-1c0-3.7-3.6-6-8-6z" />
                </svg>
            ),
        },
    ];


    return (
        <div className="absolute bottom-0 w-full h-12 bg-white ">
            <div className="flex">
                {navItems.map(item => (
                    <div key={item.id} className="flex-1 group">
                        <button
                            onClick={() => handleNavigation(item.path)}
                            className={`flex-col items-center justify-center w-full mx-auto text-center text-gray-400 border-t-2 border-transparent ${isActive(item.path) ? 'text-green-common border-green-common' : 'group-hover:text-green-400 group-hover:border-green-400'
                                }`}
                        >
                            <span className="flex items-center justify-center pt-1">
                                {item.icon}
                            </span>
                            <span className="block pb-1 text-xs">{item.label}</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BottomNavigation;
