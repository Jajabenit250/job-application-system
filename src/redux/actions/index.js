import axios from "axios";

export const uploadCvAction = (data) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const res = await axios.post(
      `http://localhost:5000/api/applicant/apply`,
      data,
      config
    );
    console.log(res.data);

    dispatch({ type: "APPY_SUCCESS", payload: res.data });
  } catch (err) {
    if (err.response) {
      const errorMessage = await err.response.data.errors;
      dispatch({ type: "APPY_ERROR", payload: err.response.data.errors });
      console.log(errorMessage);
    } else {
      dispatch({ type: "APPY_ERROR", payload: "Network Error" });
    }
  }
};

export const getVacancies = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/job/all`);
    console.log(res.data);

    dispatch({ type: "VACANCIES", payload: res.data });
  } catch (err) {
    if (err.response) {
      const errorMessage = await err.response.data.errors;
      dispatch({ type: "VAC_ERROR", payload: err.response.data.errors });
      console.log(errorMessage);
    } else {
      dispatch({ type: "VAC_ERROR", payload: "Network Error" });
    }
  }
};

export const applyVacancy = (data) => async (dispatch) => {};

export const applicantsByJob = (data) => async (dispatch) => {};
