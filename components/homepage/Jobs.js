import styled from "styled-components";

const Jobs = ({ jobList }) => {
  return (
    <div>
      {jobList.map((item) => {
        return <p key={item.startDate}>{item.role}</p>;
      })}
    </div>
  );
};

export default Jobs;
