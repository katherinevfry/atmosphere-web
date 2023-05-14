import { useFlow } from "./FlowContext";

function Navigation() {
    const {setStep, setSelectedCategories} = useFlow();
    const resetPage = () => {
        setStep(0);
        setSelectedCategories([]);
    }
    return (
        <div className="h-[60px] bg-green flex flex-row justify-center">
            <button type="button" onClick={resetPage} className="text-pink cursor-pointer hover:scale-110 text-center body-text text-[36px]">Atmosphere</button>
        </div>
    )
}

export default Navigation;