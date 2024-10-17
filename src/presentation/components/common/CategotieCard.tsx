import { Categotie } from "../../../domain/Categotie";

const CategotieCard: React.FC<Categotie> = ({ name, img }) => {
    return (
        <div className="flex-col mb-2 text-center select-none">
            <div className="flex justify-center m-1 rounded-full bg-base-common-2">
                <img className="p-2 size-14" src={img} alt={name} />
            </div>
            <div className="">
                <p>{name}</p>
            </div>
        </div>
    );
}

export default CategotieCard;