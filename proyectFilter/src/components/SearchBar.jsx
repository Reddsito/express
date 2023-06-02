import { useSearchParams } from "react-router-dom";
import { debounce } from 'lodash';

const SearchBar = () => {
  const [search, setSearch] = useSearchParams();
  const onSearchChange = debounce( e => {
    const text = e.target.value;

    if (text.trim().length === 0) {
      search.delete('query');
      setSearch(search, {
        replace: true,
      });
    } else {
      search.set('query', text);
      setSearch(search, {
        replace: true,
      });
    }
  }, 350);

  return ( 
    <div
  
  >
    <input
      onChange={onSearchChange}
      defaultValue={search.get('query') ?? ''}
      id="search"
      name="search"
      className="bn outline-0"
      type="search"
      placeholder="Find items by name..."
    />
  </div>
   );
}
 
export default SearchBar;