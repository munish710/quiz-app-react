import React from "react";
import ProgressCard from "../components/ProgressCard";
import { useGlobalContext } from "../context/context";

const Dashboard = () => {
  const { resultsRecord } = useGlobalContext();

  return (
    <section className="section page">
      <div className="section-center dashboard">
        <h2 className="title">Personal Progress</h2>
        {resultsRecord.map((record, index) => {
          return <ProgressCard {...record} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Dashboard;
