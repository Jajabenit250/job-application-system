import axios from "axios";

export const uploadCvAction = (data) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const res = await axios.post(
      `https://job-appl.herokuapp.com/api/applicant/apply`,
      data,
      config
    );

    dispatch({ type: "APPY_SUCCESS", payload: res.data });
  } catch (err) {
    if (err.response) {
      const errorMessage = err.response.data.errors;
      dispatch({ type: "APPY_ERROR", payload: errorMessage });
    } else {
      dispatch({ type: "APPY_ERROR", payload: "Network Error" });
    }
  }
};

export const getVacancies = () => async (dispatch) => {
  try {
    const res = await axios.get(`https://job-appl.herokuapp.com/api/job/all`);

    dispatch({ type: "VACANCIES", payload: res.data });
  } catch (err) {
    if (err.response) {
      const errorMessage = err.response.data.errors;
      dispatch({ type: "VAC_ERROR", payload: errorMessage });
    } else {
      dispatch({ type: "VAC_ERROR", payload: "Network Error" });
    }
  }
};

export const hrDecision = (data) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const res = await axios.put(
      `https://job-appl.herokuapp.com/api/applicant/status`,
      data,
      config
    );
    dispatch({ type: "OK", payload: res.data });
  } catch (err) {
    if (err.response) {
      const errorMessage = await err.response.data.errors;
      dispatch({ type: "ERROR", payload: errorMessage });
    } else {
      dispatch({ type: "ERROR", payload: "Network Error" });
    }
  }
};

export const applicantsByJob = (data) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://job-appl.herokuapp.com/api/applicant/all/${
        data ? data : "6231d9ad6087cc81bc6cc6d1"
      }`
    );

    dispatch({ type: "APPLICANTS", payload: res.data });
  } catch (err) {
    if (err.response) {
      const errorMessage = await err.response.data.errors;
      dispatch({ type: "APPLICANTS_ERROR", payload: errorMessage });
    } else {
      dispatch({ type: "APPLICANTS_ERROR", payload: "Network Error" });
    }
  }
};
