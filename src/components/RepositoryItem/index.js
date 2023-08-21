// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {details} = props
  const newOb = {
    name: details.name,
    starsCount: details.stars_count,
    issuesCount: details.issues_count,
    id: details.id,
    forksCount: details.forks_count,
    avatarUrl: details.avatar_url,
  }

  const {name, starsCount, issuesCount, id, forksCount, avatarUrl} = newOb

  return (
    <li className="card col center non-stretch">
      <div>
        <img className="item-img" src={avatarUrl} alt={name} />
      </div>

      <h1 className="small-h">{name}</h1>
      <div className="row ">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p className="para">{starsCount} stars</p>
      </div>
      <div className="row ">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p className="para">{forksCount} forks</p>
      </div>
      <div className="row ">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p className="para">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
