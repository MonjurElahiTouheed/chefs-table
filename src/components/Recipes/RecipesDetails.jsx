import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Recipe from "./Recipe";
import Table from "../Table/Table";

const RecipesDetails = () => {
    const [recipes, setRecipes] = useState([]);
    const [tableDatas, setTableDatas] = useState([]);

    const notify = () => toast.error("Already exist");
    const handleRecipe = (recipe) => {
        const isExist = tableDatas.find(tableData => tableData.recipe_id === recipe.recipe_id);
        console.log(isExist);
        if (!isExist) {
            setTableDatas([...tableDatas, recipe]);
        }
        else {
            notify();
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('recipes.json');
                const data = await res.json();
                console.log(data)
                setRecipes(data);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])


    return (
        <>
            <ToastContainer />
            <div className="flex flex-col sm:gap-6 md:flex-row justify-between">
                <div className="grid grid-cols-2 gap-6 w-full md:w-[56%]">
                    {
                        recipes.map(recipe => (
                            <Recipe key={recipe.recipe_id} recipe={recipe} handleRecipe={handleRecipe}></Recipe>
                        ))
                    }
                </div>

                <Table tableDatas={tableDatas} setTableDatas={setTableDatas}></Table>
            </div>
        </>
    );
};

export default RecipesDetails;