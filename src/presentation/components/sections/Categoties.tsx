import CategotieCard from "../common/CategotieCard";
import dataCategories from "../../../interface_adapters/api/categotiesApi"
import { Categotie } from "../../../domain/Categotie";

function Categoties() {
    return (
        <section className="h-max">
            <p className="p-2 font-bold">Categoties</p>
            <div className="carousel">
                {
                    dataCategories.map((categotie: Categotie) => {
                        return (
                            <div className="mx-2 rounded-t-full carousel-item bg-base-common-1">
                                <CategotieCard id={categotie.id} img={categotie.img} name={categotie.name} />
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default Categoties;
