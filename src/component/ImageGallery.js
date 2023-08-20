import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Search from "./Search";


let MY_API_KEY = "38769780-3cfd2a00278a18f8366d0e312";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [term, setTerm] = useState("india");


  useEffect(() => {
     async function getImages() {
        const api = await  fetch(
          `https://pixabay.com/api/?key=${MY_API_KEY}&q=${term}=photo&pretty=true`
        );
        const json =  await api.json();
        setImages(json.hits);
        setLoading(false);
      }
      getImages()
  }, [term]);

  

  return (
    <>
    <Search searchText={(text)=>setTerm(text)}/>
    {!isLoading&&images.length===0&&<h1 className="text-center">No search Result found</h1>}
{isLoading?<h1 className="text-center">Loading......</h1>:<div className="p-10 flex flex-wrap items-center justify-center">
      {images.map((data) => (
        <Cards key={data.id} props={data} />
      ))}
    </div>}
    </>
  );
};

export default ImageGallery;
