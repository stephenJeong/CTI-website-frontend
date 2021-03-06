import InputAdornment from '@material-ui/core/InputAdornment';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

/**
 * Simple search.
 *
 * FIXME: Should the functions for search be defined here?
 *       const [query, setQuery] = useState('');
 *       const [results, setResults] = useState('');
 *
 *       const handleSubmit = (event) => {
 *          if (event.key === 'Enter') { console.log(query); } };
 *
 * <SearchBar value={query} onInput={e => setQuery(e.target.value)} placeholder="Search the Civic Tech Index" onKeyPress={handleSubmit} />
 *
 * @param {*} value Value of the input passed into the SearchBar. You'll want to pass a state variable here
 * @param {*} onInput Supply hook for value state changes
 * @param {String} placeholder Default placeholder value
 * @param {function} onKeyPress Listens for enter value.
 */

export default function SearchBar(props) {
  return (
    <div align='center'>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        value={props.query}
        onInput={props.onInput}
        variant='outlined'
        placeholder={props.placeholder}
        fullWidth
        margin="normal"
        onKeyPress={props.onKeyPress}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
}
