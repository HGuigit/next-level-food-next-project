import Link from "next/link";

export default function MealsPage() {
    return (
      <>
        <h1>Meals!</h1>
        <Link href={"/meals/share"} className="text-underline">
          Share meals
        </Link>
        <div>
          <ul>
            <li>
              <Link href={"/meals/meal-1"} className="text-underline">
                Meal-1
              </Link>
            </li>
            <li>
              <Link href={"/meals/meal-2"} className="text-underline">
                Meal-2
              </Link>
            </li>
          </ul>
        </div>
      </>
    );
}