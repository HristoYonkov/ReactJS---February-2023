import { CatalogItem } from "./CatalogItem/CatalogItem";


export const Catalog = ({
    games,
}) => {

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            
            <CatalogItem />

            {/* <!-- Display paragraph: If there is no games  --> */}
            <h3 className="no-articles">No articles yet</h3>
        </section>
    );
}