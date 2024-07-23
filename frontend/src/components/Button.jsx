const Button = ({text, onClick}) => {
  return (
    <button className="bg-emerald-400 text-white py-2 px-4 
    rounded-3xl" onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
