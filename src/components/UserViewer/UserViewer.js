import React, { useState, useEffect } from 'react'
import axios from 'axios'
import endpoints from '../../constants/endpoints.json'
import './UserViewer.css'
import { FaTwitter, FaEnvelope, FaLink } from 'react-icons/fa'

function UserViewer() {
    const [user, setUser] = useState({})

    useEffect(() => {

        const getUser = axios.get(endpoints.users.get)

        getUser.then(response => {
            setUser(response.data)
        }
        )
    }, [])

    return (
        <div className="dec-user-grid">
            <div className="text-center">
                <img className="dec-avatar" src={user.avatar_url} alt="Avatar" width="150" height="150" />
            </div>
            <div>
                <h4 data-testid="user-header">
                    {user.name}'s Repositories
                </h4>
                <div className="dec-link-grid">
                    <div><FaTwitter size="14" /> <a className="link-primary text-decoration-none" href={"https://twitter.com/" + user.twitter_username}>{user.twitter_username}</a></div>
                    <div><FaEnvelope size="14" /> <a className="link-primary text-decoration-none" href={"mailto: " + user.email}>{user.email}</a></div>
                    <div><FaLink size="14" /> <a target="_blank" className="link-primary text-decoration-none" href={user.blog} rel="noreferrer">{user.blog}</a></div>
                </div>
            </div>
        </div>
    )
}

export default UserViewer
