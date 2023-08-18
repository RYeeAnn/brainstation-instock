import './PageTitleBar.scss'
import arrowBack from '../../assets/Icons/arrow_back-24px.svg'
import { useNavigate, useParams } from 'react-router';
import editIcon from '../../assets/Icons/edit-24px.svg';

function PageTitleBar( {title, edit, editLink} ) {

    const navigate = useNavigate();
    const pageID = useParams();

  return (
    <div className="pageTitleBar">
      <div className="pageTitleBar__arrow-title-container">
        <img onClick={() => navigate(-1)} className="pageTitleBar__back-arrow" src={arrowBack} alt="arrow back" />
        <h1>{title}</h1>
        </div>
        {edit ? <button onClick={() => navigate(`./edit`)} className="button-edit">Edit</button> : ''}
        
    </div>
  )
}

export default PageTitleBar