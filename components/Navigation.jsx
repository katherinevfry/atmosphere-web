import { useStep } from "./StepContext";

function Navigation() {
    const {setStep} = useStep();
    return (
        <div className="h-[60px] bg-green flex flex-row justify-center">
            <button type="button" onClick={() => setStep(0)} className="text-pink cursor-pointer hover:scale-110 text-center body-text text-[36px]">Atmosphere</button>
        </div>
    )
}

export default Navigation;