import { useRouter } from "next/router";

function Navigation() {
    const router = useRouter();
    return (
        <div className="h-[60px] bg-green flex flex-row justify-center">
            <button type="button" onClick={() => router.push("/")} className="text-pink cursor-pointer hover:scale-110 text-center body-text text-[36px]">Atmosphere</button>
        </div>
    )
}

export default Navigation;