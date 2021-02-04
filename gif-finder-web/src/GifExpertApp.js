import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  //   const handleAdd = () => {
  //     categories.push("A");
  //     setCategories([...categories]);
  //   };

  //   const handleSubtract = () => {
  //     categories.splice(categories.indexOf("One Punch"), 1);
  //     setCategories([...categories]);
  //   };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}></AddCategory>
      <hr></hr>
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category}></GifGrid>
        ))}
      </ol>
    </>
  );
};
