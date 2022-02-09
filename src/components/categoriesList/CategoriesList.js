import CategoryItem from "../categoryItem/CategoryItem";
import './CategoriesList.css'

function CategoriesList ({catalog = []}) {
    console.log(catalog)
    return (
        <div className="list">
            {
                catalog.map(el => (
                    <CategoryItem key={el.idCategory} {...el} />
                ))
            }
        </div>
    )
}

export default CategoriesList;