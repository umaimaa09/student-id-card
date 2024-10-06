import React from "react";
import StudentIDCard from "./studentIDcard";

 function Card() {
  return (
    <div className="flex flex-wrap justify-center" >
      <StudentIDCard name="Hania Shah" age={12} rollNumber="001" studentClass="6th Grade" ></StudentIDCard>
      <StudentIDCard name="Eman Shah" age={13} rollNumber="002" studentClass="7th Grade"></StudentIDCard>
      <StudentIDCard name="Hajra Shah" age={11} rollNumber="003" studentClass="5th Grade"></StudentIDCard>
    </div>
  );
};

export default Card;
