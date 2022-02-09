import { useState, useEffect } from "react";
import { getAllCategories } from '../../api';
import CategoriesList from "../../components/categoriesList/CategoriesList";
import Preloader from "../../components/preloader/Preloader";

function Home() {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
        })
    }, []);

    return (
        <div className="wrap">
            {
                !catalog.length ? <Preloader /> : <CategoriesList catalog={catalog} />
            }
        </div>
    )
}

export default Home;