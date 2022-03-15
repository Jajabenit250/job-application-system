import React, { useEffect } from "react";
import { connect } from "react-redux";
import { uploadCvAction } from "../redux/actions";
import Vacancies from "../controllers/Vacancies";
import ApplicantTable from "../controllers/ApplicantTable";



function Dashboard(props) {
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    uploadCvAction: (data) => dispatch(uploadCvAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
