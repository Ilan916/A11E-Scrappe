function Button({ onClick, text, disabled }) {
  
  const buttonClassNames = `h-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm 
  ${disabled ? 'bg-indigo-300 hover:bg-indigo-300 cursor-not-allowed' : 'hover:bg-indigo-500'}
  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`;
  
  return (
    <button
    type="button"
    disabled={disabled}
    onClick={onClick}
    className={buttonClassNames}
    >
    {text}
    </button>
  )
}

export default Button