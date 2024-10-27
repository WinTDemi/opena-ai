import Search from '../components/common/Search';
import Banner from '../components/sections/Banner';
import Categoties from '../components/sections/Categoties';
import Popular from '../components/sections/Popular';

function HomePage() {

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