type ButtonProps = {
  label: string,
  type?: "button" | "submit" | "reset",
  onClick: () => void,
  activeCat?: boolean, 
  disabled?: boolean,
  style?: "outline" | null
};


export function Button({ label, type = "button", onClick, activeCat, disabled, style }: ButtonProps) {
  return (
    <>
    {style === "outline" ? (
      <button
      onClick={onClick}
      type={type}
      className={`border-2 border-green rounded-3xl py-1 px-3 body-text hover:underline hover:decoration-wavy hover:decoration-green hover:underline-offset-3 text-green ${disabled ? "hover:no-underline cursor-not-allowed" : null}`}
        disabled={disabled}
    >
      {label}
    </button>
    ) : (
      <button
      onClick={onClick}
      type={type}
      className={`bg-pink inline-flex items-center justify-center py-2 px-3 
        rounded-3xl text-green body-text m-1 border-2 ${activeCat ?  "border-green" : "border-pink"} ${disabled ? "cursor-not-allowed" : null}`}
        disabled={disabled}
    >
      {label}
    </button>
    )}
    </>
  );
}
