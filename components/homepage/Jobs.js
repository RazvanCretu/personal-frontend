import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  height: 100px;
  position: relative;
  border-radius: 10px;
  background: burlywood;
  overflow: hidden;

  p {
    margin: 0.5rem 0 0 1rem;
  }

  :before {
    content: "";
    height: 100%;
    width: 10px;
    background: red;
    position: absolute;
  }
`;

const Jobs = ({ jobList }) => {
  return (
    <Container>
      {jobList.map((item) => {
        return <p key={item.startDate}>{item.role}</p>;
      })}
    </Container>
  );
};

export default Jobs;
