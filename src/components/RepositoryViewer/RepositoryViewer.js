import 'bootstrap/dist/css/bootstrap.css'
import './RepositoryViewer.css'
import Toolbar from '../Toolbar/Toolbar'
import React, { useState, useEffect } from 'react'
import RepoTypes from '../../constants/repo-types.json'
import SortFields from '../../constants/sort-fields.json'
import endpoints from '../../constants/endpoints.json'
import axios from 'axios'
import ContributorsViewer from '../ContributorsViewer/ContributorsViewer'

function RepositoryViewer() {
    const [repos, setRepositories] = useState([])
    const [filterCriteria, setFilterCriteria] = useState(RepoTypes[0].value)
    const [sortCriteria, setSortCriteria] = useState(SortFields[0].value)

    const buildCriteriaQs = (key, value) => {
        return '&'.concat(key).concat('=').concat(value)
    }

    useEffect(() => {
        const criteriaQs = '?q='
            .concat(buildCriteriaQs('type', filterCriteria))
            .concat(buildCriteriaQs('sort', sortCriteria))
        const getRepos = axios.get(endpoints.repositories.list.concat(criteriaQs))

        getRepos
            .then(response => {
                setRepositories(response.data)
            })
        // bind to criteria
    }, [filterCriteria, sortCriteria])

    const onFilterCriteriaChanged = (criteria) => {
        setFilterCriteria(criteria)
    }

    const onSortCriteriaChanged = (field) => {
        setSortCriteria(field)
    }

    return (
        <div>
            <Toolbar onFilterCriteriaChanged={(e) => { onFilterCriteriaChanged(e) }}
                onSortCriteriaChanged={(e) => { onSortCriteriaChanged(e) }}
            ></Toolbar>
            <div>
                <div><span className={'fs-5 ' + (repos.length > 0 ? 'text-primary' : 'text-danger')}>{repos.length}</span> Records Found</div>

                <ul className="list-group">
                    {repos.map(repo => (
                        <li className="list-group-item" key={repo.id}>
                            <div className="dec-repo-item-grid">
                                <div>
                                    <div>
                                        <a className="text-decoration-none blockquote text-capitalize mr-2" href={repo.html_url}>{repo.name}</a>
                                        <div class="m-2 badge rounded-pill bg-secondary">{repo.language}</div>
                                    </div>

                                    <div>
                                        <small>{repo.description}</small>
                                    </div>
                                </div>
                                <div>
                                    <ContributorsViewer contributorsUrl={repo.contributors_url}></ContributorsViewer>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RepositoryViewer
