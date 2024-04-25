export default function Example({ type, value, placeholder, onChange }) {

  const inputClassName = `block w-full pl-2.5 h-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm 
  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
  focus:ring-indigo-600 sm:text-sm sm:leading-6`

  return (
        <input
          type={type}
          className={inputClassName}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
  )
}