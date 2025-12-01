import React from "react";
import ViewSkills from "../ViewSkills/ViewSkills";
import BookSessionForm from "../BookSessionForm/BookSessionForm";

const skillPromiss=fetch('/skill.json').then(res=>res.json())

const ViewDetails = () => {

  return (

    <div className="my-5">
        <ViewSkills skillPromiss={skillPromiss}></ViewSkills>
        <BookSessionForm></BookSessionForm>
    </div>

  );
};

export default ViewDetails;
