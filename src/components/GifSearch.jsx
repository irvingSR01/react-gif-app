import { useState } from "react"

export const GifSearch = ({ onNewSearchValue }) => {

    const [search, setSearch] = useState('')

    const onSubmitedForm = (e) => {
        e.preventDefault()
        onNewSearchValue(search)
        setSearch('')
    }
    
    return (
        <form onSubmit={onSubmitedForm}>
            <input value={search} onChange={e => setSearch(e.target.value)} />
        </form>
    )
}