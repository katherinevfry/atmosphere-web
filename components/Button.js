export function Button({label, type = "button"}) {
return(
    <button type={type}className="bg-pink inline-flex items-center justify-center py-2 px-3 rounded-3xl text-green body-text m-1">{label}</button>
)
}