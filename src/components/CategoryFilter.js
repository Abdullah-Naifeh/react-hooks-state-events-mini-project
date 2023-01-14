import React,{useState} from "react";

function CategoryFilter({categories,setCategory}) {
const [activeButton , setActiveButton] = useState(null)

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category , index) =>
      { const isActive = activeButton === category;
        return (
      <button
      key={index}
      className= {isActive ? "selected" :''}
      onClick={(e) => {
        setCategory(e.target.innerHTML)
        setActiveButton(category);
      }}
      >
        {category}
      </button>
      );
    })}
    </div>
  );
}

export default CategoryFilter;
