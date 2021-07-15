import RepoTypes from '../../constants/repo-types.json'
import SortFields from '../../constants/sort-fields.json'
import './Toolbar.css'
import React, { useState } from 'react'

function Toolbar(props) {
    const [selectedRepoType, setSelectedRepoType] = useState(RepoTypes[0].value)
    const [selectedSortField, setSelectedSortField] = useState(SortFields[0].value)

    const onRepoTypeChanged = (e) => {
        const newSelectedRepoType = e.target.value
        setSelectedRepoType(newSelectedRepoType)
        props.onFilterCriteriaChanged(newSelectedRepoType)
    }

    const onSortFieldChanged = (e) => {
        const newSortField = e.target.value
        setSelectedSortField(newSortField)
        props.onSortCriteriaChanged(newSortField)
    }

    return (
        <div className="dec-toolbar-grid">
            <div>
                <select role="button"
                    value={selectedRepoType}
                    onChange={onRepoTypeChanged}
                    class="form-select">
                    {RepoTypes.map(repoType => (
                        <option value={repoType.value}>{repoType.text}</option>
                    ))}
                </select>
            </div>
            <div>
                <select role="button"
                    value={selectedSortField}
                    onChange={onSortFieldChanged}
                    class="form-select">
                    {SortFields.map(sortField => (
                        <option value={sortField.value}>{sortField.text}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Toolbar
