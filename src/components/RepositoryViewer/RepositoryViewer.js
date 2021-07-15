import RepositoryList from '../RepositoryList/RepositoryList'
import './RepositoryViewer.css'

function RepositoryViewer() {

    return (
        <div className="dec-repo-viewer-grid">
            <div>
            <RepositoryList></RepositoryList>
            </div>
            <div>
            Commits
            </div>
        </div>
    )
}

export default RepositoryViewer
