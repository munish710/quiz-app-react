import React from "react";
import EmptyDashboard from "../components/EmptyDashboard/EmptyDashboard";
import ProgressCard from "../components/ProgressCard/ProgressCard";
import { useGlobalContext } from "../context/context";

const Dashboard = () => {
  const { resultsRecord } = useGlobalContext();

  return resultsRecord.length > 0 ? (
    <section className="section page">
      <div className="section-center dashboard">
        <h2 className="title">Personal Progress</h2>
        {resultsRecord.map((record, index) => {
          return <ProgressCard {...record} key={index} />;
        })}
      </div>
    </section>
  ) : (
    <EmptyDashboard />
  );
};

export default Dashboard;
