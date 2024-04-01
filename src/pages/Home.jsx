import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setFilters } from "../Redux/Slices/filterSlice";
import qs from "qs";
import Sort from '../components/Sort';
import axios from 'axios'
import Categories from '../components/Categories';
import CureBlock from '../components/CureBlock';
import Pagination from "../components/Pagination";
import Skeleton from '../components/CureBlock/Skeleton';
import { popUpList } from "../components/Sort";
import { SearchContext } from "../App";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { categoryId, sort, pagination } = useSelector(state => state.filter);

  
  const dispatch = useDispatch() 
  const onClickCategory = (id) => {
    dispatch(setCategoryId(id))
  }
 
  

  
  const { searchValue } = React.useContext(SearchContext)
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  
 
  const cures = items
    .map((obj) => <CureBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = popUpList.find(obj => obj.sortProperty === params.sortProperty)
      
      dispatch(
        setFilters({
          ...params,
          sort
        }),
      );
    }
  },[])
  
  React.useEffect(() => {
    setIsLoading(true);
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sort.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `search=${searchValue}` : '';
    axios.get(`https://653ec9b59e8bd3be29dfb7d7.mockapi.io/items?page=${pagination}&limit=3&${category}&sortBy=${sortBy}&order=${order}&${search}`)
      .then(
        (res) => {
          setItems(res.data)
          setIsLoading(false)
        }
      );
    window.scrollTo(0, 0)
  }, [categoryId, sort, searchValue, pagination]);
  React.useEffect(() => {
    const queryString = qs.stringify({
      sortProperty:sort.sortProperty,
      categoryId,
      pagination
    });
    console.log(queryString);
    navigate(`?${queryString}`);
    
  },[categoryId, sort, searchValue, pagination])


  
  
  
  
  
  
    return (
        <div className="container">
          <div className="content__top">
                <Categories value={categoryId} onClickCategory={onClickCategory} />
                <Sort/>
          </div>
          <h2 className="content__title">Все препараты</h2>
          <div className="content__items">
            {isLoading ?
            skeletons : cures}
          
        </div>
        <Pagination  />
        </div>
    )
    
}
 
export default Home;