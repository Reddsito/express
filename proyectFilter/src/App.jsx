import { useSearchParams } from 'react-router-dom'
import './App.css'
import SearchBar from './components/SearchBar'
import useProducts from './hooks/useProducts'
import { useMemo } from 'react'
import Select from './components/Select'
import ColorFilters from './components/ColorFilters'
import PriceFilter from './components/PriceFilter'
import ItemsContainer from './components/ItemsContainer'

function App() {
    const [search, setSearch] = useSearchParams()
    const getProducts = useProducts();
    const items = getProducts.data || []
    const maxPrice = (getProducts.data?.maxPrice ?? 0) / 100

    return (
        <div className="container">
            <div className="navbar">
              <div>
              <p className='title'>New arrivals</p>
              </div>
                

                <div>
                    <SearchBar />
                </div>

                <Select
                    onChange={(e) => {
                        search.set('sort', e.target.value)
                        setSearch(search, {
                            replace: true,
                        })
                    }}
                    label="Sort by"
                    name="sort"
                    options={[
                        {
                            label: 'Name',
                            value: 'name',
                        },
                        {
                            label: 'Price High',
                            value: 'priceDesc',
                        },
                        {
                            label: 'Price Low',
                            value: 'priceAsc',
                        },
                    ]}
                />
            </div>

            <div className="bodyContainer">
                <div className="">
                    <div style={{ position: 'sticky', top: '20px' }}>
                        <ul className="List">
                            <li className="itemsList">
                                <div className="">
                                    Filters:
                                    <span> {items.length} Products</span>
                                </div>
                            </li>
                            <li className='itemsList'>
                                <button className="">
                                    Bags
                                    <span>{}</span>
                                </button>
                            </li>
                            <li className='itemsList'>
                                <button className="">
                                    Shoes
                                    <span>{}</span>
                                </button>
                            </li>
                            <li className='itemsList'>
                                <button className="">
                                    Jackets
                                    <span>{}</span>
                                </button>
                            </li>
                        </ul>

                    </div>
                </div>

                    
                <ItemsContainer />

            </div>
        </div>
    )
}

export default App
