// import { useDispatch, useSelector } from 'react-redux';
import Search from '../components/common/Search';
import Banner from '../components/sections/Banner';
import Categoties from '../components/sections/Categoties';
import Popular from '../components/sections/Popular';

function HomePage() {

    // const dispatch = useDispatch();

    // const user = useSelector((state: any) => state.user);

    // Function to handle setting the user
    // const handleSetUser1 = () => {
    //     dispatch(setUser({ name: 'John Doe1', age: 30 }));
    // };

    // const handleSetUser2 = () => {
    //     dispatch(setUser({ name: 'John Doe2', age: 30 }));
    // };

    return (
        <div className='pb-12 overflow-scroll size-full no-scrollbar'>
            <Search />
            <Banner />
            <Categoties />
            <Popular />
        </div>
    )
}

export default HomePage