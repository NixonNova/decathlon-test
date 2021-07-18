import repoTypes from '../../constants/repo-types.json'
import sortFields from '../../constants/sort-fields.json'
import './Toolbar.css'
import React, { useState } from 'react'

function Toolbar(props) {
    const [selectedRepoType, setSelectedRepoType] = useState(repoTypes[0].value)
    const [selectedSortField, setSelectedSortField] = useState(sortFields[0].value)

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
                Filter:
                <select role="button"
                    value={selectedRepoType}
                    onChange={onRepoTypeChanged}
                    class="form-select">
                    {repoTypes.map(repoType => (
                        <option value={repoType.value}>{repoType.text}</option>
                    ))}
                </select>
            </div>
            <div>
                Sort By:
                <select role="button"
                    value={selectedSortField}
                    onChange={onSortFieldChanged}
                    class="form-select">
                    {sortFields.map(sortField => (
                        <option value={sortField.value}>{sortField.text}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Toolbar
