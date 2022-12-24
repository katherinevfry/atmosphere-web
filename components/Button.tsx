type ButtonProps = {
  label: string,
  type?: "button" | "submit" | "reset",
  onClick: () => void,
  activeCat?: boolean, 
};


export function Button({ label, type = "button", onClick, activeCat }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-pink hover:scale-110 inline-flex items-center justify-center py-2 px-3 
        rounded-3xl text-green body-text m-1 ${activeCat ? "border-2 border-green" : null}`}
        disabled={activeCat}
    >
      {label}
    </button>
  );
}
