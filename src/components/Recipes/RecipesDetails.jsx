import { useEffect, useState } from "react";
// import { toast } from "react-hot-toast";
// import { toast } from "react-toastify";
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
        if(!isExist){
            setTableDatas([...tableDatas, recipe]);
        }
        else{
            // toast.default('Already exist');
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

    // console.log(data)

    return (
        <div className="flex">
            <ToastContainer />
            <div className="flex flex-wrap gap-6 max-w-[60%]">
                {
                    recipes.map(recipe => (
                        <Recipe key={recipe.recipe_id} recipe={recipe} handleRecipe={handleRecipe}></Recipe>
                    ))
                }
            </div>
            <div>
                <Table tableDatas={tableDatas} setTableDatas={setTableDatas}></Table>
            </div>
        </div>
    );
};

export default RecipesDetails;