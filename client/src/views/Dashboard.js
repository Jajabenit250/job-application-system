import React, { useEffect } from "react";
import { connect } from "react-redux";
import { applicantList } from "../redux/actions";
import Footer from "../controllers/Footer";



function Dashboard(props) {
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [0]);
  return (
    <div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    applicantList: (data) => dispatch(applicantList(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
