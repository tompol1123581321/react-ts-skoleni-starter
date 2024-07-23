import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function JokeCategories() {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get<string[]>("https://api.chucknorris.io/jokes/categories")
      .then((response) => setCategories(response.data));
  }, []);

  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/categories/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
      <Suspense fallback={<>...FALLBACK</>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
