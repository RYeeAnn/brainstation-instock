import './PageTitleBarSearch.scss'
import { useNavigate } from 'react-router';

function PageTitleBarSearch( { title, buttonText, pageName } ) {

  const navigate = useNavigate();

  return (
    <div className="pageTitleBarSearch">
        <h1 className="pageTitleBarSearch__title">{title}</h1>
        <div className="pageTitleBarSearch__search-add-container">
        <input className="pageTitleBarSearch__search" type="text" placeholder="Search..." />
        <button onClick={() => navigate(pageName)} className="pageTitleBarSearch__button">{buttonText}</button>
        </div>
    </div>
  )
}

export default PageTitleBarSearch