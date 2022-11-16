import React from "react";
import FilterBtns from "./FilterBtns";
import CardContainer from "./CardContainer";
import Form from "./Form";

function HomePage({ setName, setImage, setAge, setDescription, setTypes, addPet, cardList, setFilterValue }) {
  return (
    <div>
      <FilterBtns setFilterValue={setFilterValue} />
      <CardContainer cardList={cardList} />
      <Form
        setName={setName}
        setImage={setImage}
        setAge={setAge}
        setDescription={setDescription}
        setTypes={setTypes}
        addPet={addPet}
      />
    </div>
  );
}

export default HomePage;
