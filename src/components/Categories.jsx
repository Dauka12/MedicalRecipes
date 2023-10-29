import React from 'react'

export default function Categories() {
    const [active, setActive] = React.useState(0);
    const onClickCategory = (index) => {
        setActive(index)
    }
    const categories = ['Все','Бронхит','Пневмония','Болезнь','Острые','Закрытые'];
    return (
      <div className="categories">
              <ul>
                {categories.map((value, index) => (
                    <li key={index} onClick = {()=>onClickCategory(index)} className={active === index ? 'active' : ''}>{value}</li>
                ))}
              </ul>
            </div>
    );
} 

