import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './ContributorsViewer.css'

function ContributorsViewer(props) {
    const [contributors, setContributors] = useState([])

    useEffect(() => {
        const getContributors = axios.get(props.contributorsUrl)

        getContributors.then(response => {
            setContributors(response.data)
        }
        )
    }, [])

    return (
        <div title={contributors.length + ' Contributor(s)'}>
            {contributors.map(contributor => (
                <a title={contributor.login} href={contributor.html_url}>
                <img className="dec-contributor-avatar" src={contributor.avatar_url} alt="Avatar" width="35" height="35" />
                </a>
            ))}
        </div>
    )
}

export default ContributorsViewer
