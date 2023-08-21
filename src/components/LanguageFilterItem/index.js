import './index.css'

const LanguageFilterItem = props => {
  const {details, active, selectNew} = props
  const {id, language} = details

  const newOption = () => {
    selectNew(id)
  }

  const classAdd = id === active ? 'high-light' : ''

  return (
    <li className={`list-item ${classAdd}`}>
      <button className={`but ${classAdd}`} type="button" onClick={newOption}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
