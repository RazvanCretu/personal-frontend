import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`;

const Row = styled.div`
  display: flex;
  padding-top: 0.7rem;

  h3,
  h4 {
    margin: 0;
    color: ${({ theme }) => theme.Jobs.cardHeading};
    font-size: 1rem;
  }

  p {
    margin: 0;
    padding: 0 0.7rem;
  }
`;

const Card = styled.div`
  padding: 0 3rem 1rem 1.7rem;
  position: relative;
  border-radius: 10px;
  background: ${({ theme }) => theme.stackCircle};
  overflow: hidden;

  && p {
    color: ${({ theme }) => theme.Jobs.cardParagraph};
    font-size: 1.1rem;
  }

  :before {
    content: "";
    height: 100%;
    width: 7px;
    position: absolute;
    left: 0;
    background: ${({ theme }) => theme.Jobs.cardParagraph};
  }

  ${Row}:last-child {
    flex-direction: column;
    p {
      padding: 1rem 0;
    }
  }
`;

const Jobs = ({ jobList }) => {
  return (
    <Container>
      <h2>Jobs</h2>
      {/* {jobList.map((item) => {
        return (
          <Card key={item.startDate}>
            <Row>
              <h4>Role:</h4>
              <p>{item.role}</p>
            </Row>
            <Row>
              <h4>Employer:</h4>
              <p>{item.employer}</p>
            </Row>
            <Row>
              <h4>Start Date:</h4>
              <p>{item.startDate}</p>
              <h4>End Date:</h4>
              <p>{item.endDate ? item.endDate : "Now"}</p>
            </Row>
            <Row>
              <h4>Description:</h4>
              <p>{item.description}</p>
            </Row>
          </Card>
        );
      })} */}
    </Container>
  );
};

export default Jobs;
