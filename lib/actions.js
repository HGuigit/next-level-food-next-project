'use server';

import { redirect } from "next/navigation";
import { revalidatePath } from 'next/cache'
import { saveMeal } from "./meals";

function isInvalidText(text) {
  return !text || text.trim() === ''
}

export async function shareMeal(prevState, formData) {

    const meal = {
      title: formData.get("title"),
      summary: formData.get("summary"),
      creator_email: formData.get("email"),
      creator: formData.get("name"),
      instructions: formData.get("instructions"),
      image: formData.get("image"),
  };

  if (isInvalidText(meal.title) || isInvalidText(meal.summary) || isInvalidText(meal.creator) ||
    isInvalidText(meal.instructions) || isInvalidText(meal.creator_email) ||
    !meal.image || meal.image.size === 0) {
    return {
        message: "Input inválido."
      }
    }

    await saveMeal(meal);
  
    revalidatePath('/meals')

    redirect("/meals");
}