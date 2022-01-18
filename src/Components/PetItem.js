import { useState } from "react";
import petsData from "../petsData";



export default function PetItem(props) {
  const pet = props.pet;
  const [petImage, setPetImage] = useState(pet.image);
  const petImageChange =()=>{
    setPetImage(pet.image2)
  };
  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={petImage} />
        <div className="content">
          <h3>{pet.name}</h3>
          {/* <button type="button" class="btn btn-info" onClick={petImageChange}>
            Pet
          </button> */}

          <button type="button" class="btn btn-info" onClick={petImageChange}>
            Pet
          </button>
          
        </div>
      </div>
    </div>
  );
}
