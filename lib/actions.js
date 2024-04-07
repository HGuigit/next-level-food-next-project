'use server';


export async function shareMeal(formData) {

    const meal = {
      title: formData.get("title"),
      summary: formData.get("summary"),
      creator_email: formData.get("email"),
      creator: formData.get("name"),
      instructions: formData.get("instructions"),
      image: formData.get("image"),
    };

    console.log(meal);
  }