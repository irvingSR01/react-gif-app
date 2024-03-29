import { useState } from "react"
import PropTypes from 'prop-types'

export const GifSearch = ({ onNewSearchValue }) => {

    const [search, setSearch] = useState('')

    const onInputChange = ({ target }) => {
        setSearch(target.value)
    }

    const onSubmitedForm = (e) => {
        e.preventDefault()

        if (search.trim().length <= 1) return;
        
        onNewSearchValue(search.trim())
        setSearch('')
    }
    
    return (
        <form onSubmit={onSubmitedForm} aria-label="form">
            <input type="text" value={search} onChange={onInputChange} />
        </form>
    )
}

GifSearch.propTypes = {
    onNewSearchValue: PropTypes.func.isRequired
}