import { Link } from 'react-router-dom';
import './CategoryItem.css';

function CategoryItem (props) {
    const {strCategory, strCategoryThumb, strCategoryDescription} = props;
    return (
        <div className="card">
            <img src={strCategoryThumb} alt={strCategory} />
            <h2>{strCategory}</h2>
            <p>{strCategoryDescription.slice(0, 100)}...</p>
            <div className="card-action">
                <Link to={`/category/${strCategory}`}>Watch category</Link>
            </div>
        </div>
    )
}

export default CategoryItem;