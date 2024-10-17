import { BellOutlined, LeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import LocationSVG from '../svg/Location-svg';

function Header() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // Điều hướng về trang trước
    };


    return (
        <nav className='flex-col w-full px-1 py-2 h-max bg-green-common'>
            <div className='flex items-center justify-around w-full'>
                <div className="flex">
                    <Button shape="circle" className='w-10' icon={<LeftOutlined />} onClick={goBack}></Button>
                </div>
                <div className="flex justify-center w-full">
                    <LocationSVG width="20px" height="20px" className="text-white" />
                    <h1 className='text-sm text-white'>Location</h1>
                </div>
                <div className="flex">
                    <Button shape="circle" className='w-10' icon={<BellOutlined />}></Button>
                </div>
            </div>
            <div className='flex items-center justify-center font-medium ps-1'>
                <p className='text-white'>
                    Ho Chi Minh City
                </p>
            </div>
        </nav>

    )
}

export default Header