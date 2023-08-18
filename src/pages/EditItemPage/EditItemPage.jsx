import './EditItemPage.scss';
import { useParams } from 'react-router';

function EditItemPage() {

    const x = useParams();
    console.log(x);

  return (
    <div>EditItemPage</div>
  )
}

export default EditItemPage