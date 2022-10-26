import { useState } from "react";
import { AddCategory, GitGrid } from "./components";

export const GitExpertApp = () => {

  const [ categories, setCategories ] = useState(['one Punch']);
  
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) {
            alert('ya existe');
        }else{
            //categories.push(newCategory);
            //forma buena == setCategories([...categories, 'demon slayer']);
            //forma buena == setCategories(cat => [...categories, name] );
            setCategories([newCategory,...categories]);
            console.log(newCategory);
        }
    }

    return (
        <>
            <h1>GitExpertApp</h1>

            <AddCategory onNewCategory ={ (value) => onAddCategory(value)} />

            {   
                categories.map( category => (
                    <GitGrid key={category} category={category}/>
                ))
            }
    
        </>
  
    )
}
