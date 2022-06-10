import DetailPjCard from "../../components/detailPjCard";
import Title from "../../components/title"
import { pjsMocked } from "../../moockedData"

const DetailPj = () => {
    const selectedPj = pjsMocked[0];
    return (
        <div className="flex w-full py-10">
            <div className="flex-1 flex flex-col gap-4">
                <Title title="LE PERSONNAGE" />
                <DetailPjCard pjData={selectedPj} />
            </div>
            <div className="flex flex-col flex-1">
                <Title title="SON HISTOIRE" />
                <p className="font-bubblegum mt-6 mb-8">
                    {selectedPj.story}
                </p>
                <Title title="SES QUÊTES" />
            </div>

        </div>
    )
}

export default DetailPj