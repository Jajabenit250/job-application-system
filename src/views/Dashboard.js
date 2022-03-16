import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getVacancies } from "../redux/actions";
import Vacancies from "../controllers/Vacancies";
import ApplicantTable from "../controllers/ApplicantTable";



function Dashboard(props) {
  useEffect(() => {
    props.getVacancies();
  }, [0]);
  return (
    <div style={{ marginLeft: "50px", marginRight: "50px"}}>
      <Vacancies />
      <ApplicantTable />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getVacancies: () => dispatch(getVacancies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
