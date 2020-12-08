import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction: row
`;
export const Search = ({requestSearch}) => {
    const [query, setQuery] = useState('');

    const searchClick = () => {
        if(query) {
            requestSearch(query);
        }
    }

const updateQuery = (e) => {
    setQuery (e.target.value);
};

return (
    <Container>
        <input 
            type = 'text'
            name = 'search'
            placeholder = 'Search'
            value = {query}
            onChange = {updateQuery}
        />
        <button data-testid='search-button' onClick={searchClick} /> 
    </Container>
    );
};
export default Search;