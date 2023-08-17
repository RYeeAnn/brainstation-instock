import './TitleBar2.scss'
import arrowBack from '../../assets/Icons/arrow_back-24px.svg'
import { useNavigate } from 'react-router';

function TitleBar2() {

    const navigate = useNavigate();

  return (
    <div className="titleBar2">
        <img onClick={() => navigate('../warehouses')} className="titleBar2__back-arrow" src={arrowBack} alt="arrow back" />
        <h1>Add New Warehouse</h1>
    </div>
  )
}

export default TitleBar2