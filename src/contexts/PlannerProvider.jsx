import { useState } from "react";

import { PlannerContext } from "./PlannerContexts"; 

import { emptyPlan } from "../utils/plan";

export default function PlannerProvider({ children }) {
    const [plan, setPlan] = useState(emptyPlan)
    function toggleRecipe(dayKey, recipeId) {
        setPlan((current) => {
            const ids = current[dayKey]

            return {
                ...current, 
                [dayKey]: ids.includes(recipeId) ? ids.filtes(() => {
                    return id != recipeId;
                }) 
                : [...ids, recipeId],
            }
        })
    }
}


return (
    <PlannerContext.Provider value={{ plan, toggleRecipe}}>
        {children}
    </PlannerContext.Provider>
)