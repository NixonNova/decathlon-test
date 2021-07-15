import 'bootstrap/dist/css/bootstrap.css'
import Toolbar from '../Toolbar/Toolbar'
import React, { useState, useEffect } from 'react'
import RepoTypes from '../../constants/repo-types.json'
import SortFields from '../../constants/sort-fields.json'
import endpoints from '../../constants/endpoints.json'
import axios from 'axios'

function RepositoryList() {
    const [repos, setRepositories] = useState([])
    const [filterCriteria, setFilterCriteria] = useState(RepoTypes[0].value)
    const [sortCriteria, setSortCriteria] = useState(SortFields[0].value)

    const buildCriteriaQs = (key, value)=> {
        return '&'.concat(key).concat('=').concat(value)
    }

    useEffect(() => {
        const criteriaQs = '?q=&'
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
                    <ul className="list-group">
                        {repos.map(repo => (
                            <li className="list-group-item" key={repo.id}>
                                <div>
                                    <a className="text-decoration-none blockquote text-capitalize mr-2" href={repo.html_url}>{repo.name}</a>
                                    <div class="m-2 badge rounded-pill bg-secondary">{repo.language}</div>
                                </div>

                                <div>
                                    <small>{repo.description}</small>
                                </div>
                            </li>
                        ))}
                    </ul>
            </div>
        </div>
    )
}

export default RepositoryList
