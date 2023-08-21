import Loader from 'react-loader-spinner'
import {Component} from 'react'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    activeTabId: languageFiltersData[0].id,
    isLoading: true,
    currentList: [],
    apiFailure: false,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {activeTabId} = this.state
    const githubReposApiUrl = `https://apis.ccbp.in/popular-repos?language=${activeTabId}`
    // const options = {
    //   method: 'GET',
    // }

    const response = await fetch(githubReposApiUrl)
    const data = await response.json()
    if (response.ok === true) {
      this.setState({isLoading: false, currentList: data.popular_repos})
    } else {
      this.setState({currentList: [], apiFailure: true, isLoading: false})
    }
    console.log(data.popular_repos)
  }

  selectNew = id => {
    console.log(id)
    this.setState(
      {activeTabId: id, isLoading: true, currentList: []},
      this.getData,
    )
  }

  render() {
    const {currentList, activeTabId, isLoading, apiFailure} = this.state
    return (
      <div className="main col  apart">
        <h1 className="heading">Popular</h1>
        <ul className="row center">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              details={each}
              key={each.id}
              active={activeTabId}
              selectNew={this.selectNew}
            />
          ))}
        </ul>

        {isLoading && (
          <div className="row center" data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={40} width={40} />
          </div>
        )}
        {apiFailure && (
          <div className="row center">
            <img
              className="apiFail-img"
              src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
              alt="failure view"
            />
          </div>
        )}
        <ul className="row center wrap">
          {currentList.map(each => (
            <RepositoryItem key={each.id} details={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default GithubPopularRepos
