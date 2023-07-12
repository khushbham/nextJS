import axios from "axios";
import { API_URL,USER_LOADED } from "./types";
import setAuthToken from "../setAuthToken";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
export const InspirationRecords = (filter) => async (dispatch) => {
  try {
    var queryString = ``;
    if (filter && filter.slug) {
      queryString += `slug=${filter.slug}`;
    }
    if(filter && filter.featured){
      queryString += `featured=true`;
    }
    if(filter && filter.search_keyword){
      queryString += `search_keyword=${filter.search_keyword}`;
    }
    if(filter && filter.category_id){
      queryString += `category_id[]=${filter.category_id}`;
    }
    const res = await axios.get(
      `${API_URL}/v1/frontend/get_trends?${queryString}`
    );
    //console.log(res);
    return res.data;
    //   dispatch({
    //   type: USER_LOADED,
    //   payload: res.data
    // });
  } catch (err) {
    return err.response.data;
  }
};

export const categoryRecords = (filter) => async (dispatch) => {
  try {
    var queryString = ``;
    if (filter && filter.slug) {
      queryString += `slug=${filter.slug}`;
    }
    const res = await axios.get(
      `${API_URL}/v1/frontend/get_categories_subcategories?${queryString}`
    );
    return res.data;
  } catch (err) {
    return err.response.data;
  }
};

export const categoryRecordsBySlug = (slug) => async (dispatch) => {
  try {
    // var queryString = ``;
    // if (filter && filter.slug) {
    //   queryString += `slug=${filter.slug}`;
    // }
    const res = await axios.get(
      `${API_URL}/v1/frontend/categories_subcategories_detail/${slug}`
    );
    return res.data;
  } catch (err) {
    return err.response.data;
  }
};

export const trendInfo = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/v1/frontend/get_trends_ids_info`);
    return res.data;
  } catch (err) {
    return err.response.data;
  }
};

export const portalSettings = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/v1/admin/portal_settings_frontend`);
    return res.data;
  } catch (err) {
    return err.response.data;
  }
};
export const socialMediaSettings = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/v1/admin/settingsFrontend/social`);
    return res.data;
  } catch (err) {
    return err.response.data;
  }
};
export const signUp = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      `${API_URL}/v1/frontend/sign_up`,
      formData,
      config
    );
    toast.success(res.data.msg, { position: "top-center" });
    return res.data;
  } catch (err) {
    // return err.response.data;
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) =>
        toast.error(error.msg, { position: "top-center" })
      );
    }
    return errors;
  }
};

export const signIn = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      `${API_URL}/v1/frontend/sign_in`,
      formData,
      config
    );
    //setAuthToken(Cookies.get("loggedIn"));
    if (res && res.data.success) {
      Cookies.set("loggedIn", res.data.data);
      Cookies.set("userId", res.data.userId);

      dispatch(loadUser());
    }

    return res.data;
  } catch (err) {
    // return err.response.data;
    const errors = err.response.data.errors;
    return errors;
  }
};
// Load User
export const loadUser = () => async (dispatch) => {
  setAuthToken(Cookies.get("loggedIn"));
  try {
    const res = await axios.get(`${API_URL}/v1/frontend/sign_in`);
      dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    // dispatch({
    //   type: SUBADMIN_AUTH_ERROR
    // });
  }
};

export const addComment = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      `${API_URL}/v1/frontend/comment`,
      formData,
      config
    );
    toast.success(res.data.msg, { position: "top-center" });
    return res.data;
  } catch (err) {
    // return err.response.data;
    const errors = err.response.data.errors;

    return errors;
  }
};

export const viewComment = (formData) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${API_URL}/v1/frontend/all_comments/${formData.trend_id}/${formData.pageNo}`
    );
    return res.data;
  } catch (err) {
    // return err.response.data;
    const errors = err.response.data.errors;
    return errors;
  }
};

export const saveTrend = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      `${API_URL}/v1/frontend/save_to_collection/`,
      formData,
      config
    );
    toast.success(res.data.msg, { position: "top-center" });
    return res.data;
  } catch (err) {
    // return err.response.data;
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) =>
        toast.error(error.msg, { position: "top-center" })
      );
    }
    return errors;
  }
};

export const likeTrend = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      `${API_URL}/v1/frontend/like_trend/`,
      formData,
      config
    );
    toast.success(res.data.msg, { position: "top-center" });
    return res.data;
  } catch (err) {
    // return err.response.data;
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) =>
        toast.danger(error.msg, { position: "top-center" })
      );
    }
    return errors;
  }
};

export const dislikeTrend = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      `${API_URL}/v1/frontend/dislike_trend/`,
      formData,
      config
    );
    toast.success(res.data.msg, { position: "top-center" });
    return res.data;
  } catch (err) {
    // return err.response.data;
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) =>
        toast.danger(error.msg, { position: "top-center" })
      );
    }
    return errors;
  }
};

export const activityOnTrend = (formData) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${API_URL}/v1/frontend/activity_on_trends/${formData.trend_id}?user_id=${formData.user_id}`
    );
    return res.data;
  } catch (err) {
    // return err.response.data;
    const errors = err.response.data.errors;
    // if (errors) {
    //   errors.forEach((error) =>
    //     toast.error(error.msg, { position: "top-center" })
    //   );
    // }
    return errors;
  }
};

export const applyAsCultureWarrior = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      `${API_URL}/v1/frontend/signUp_culture_warrior`,
      formData,
      config
    );
    toast.success(res.data.msg, { position: "top-center" });
    return res.data;
  } catch (err) {
    // return err.response.data;
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) =>
        toast.error(error.msg, { position: "top-center" })
      );
    }
    return errors;
  }
};

export const accountVerification = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.put(
      `${API_URL}/v1/frontend/verify_account`,
      formData,
      config
    );
    return res.data;
  } catch (err) {
    const errors = err.response.data.errors;
    return errors;
  }
};


export const forgotPassword = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(
      `${API_URL}/v1/frontend/forgotPassword`,
      formData,
      config
    );
    toast.success(res.data.msg, { position: "top-center" });

    return res.data;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors && errors.length > 0) {
      errors.forEach((error) =>
        toast.error(error.msg, { position: "top-center" })
      );
    }
    return errors;
  }
};

export const verifyOtp = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(
      `${API_URL}/v1/frontend/verify_otp`,
      formData,
      config
    );
    toast.success(res.data.msg, { position: "top-center" });

    return res.data;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors && errors.length > 0) {
      errors.forEach((error) =>
        toast.error(error.msg, { position: "top-center" })
      );
    }
    return errors;
  }
};

export const changePassword = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.put(
      `${API_URL}/v1/frontend/change_password`,
      formData,
      config
    );
    toast.success(res.data.msg, { position: "top-center" });

    return res.data;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors && errors.length > 0) {
      errors.forEach((error) =>
        toast.error(error.msg, { position: "top-center" })
      );
    }
    return errors;
  }
};
// // Login User
// export const adminLogin = (email, password) => async dispatch => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };

//   const body = JSON.stringify({ email, password });

//   try {
//     const res = await axios.post('/v1/adminLogin', body, config);

//     dispatch({
//       type: LOGIN_SUCCESS,
//       payload: res.data
//     });

//     dispatch(loadUser());
//     return res.data;
//   } catch (err) {
//     const errors = err.response.data.errors;

//     if (errors) {
//       errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
//     }
//     dispatch({
//       type: LOGIN_FAIL
//     });
//     return errors;
//   }
// };
// // Login User
// // Login User
// export const forgotPassword = (email) => async dispatch => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };

//   const body = JSON.stringify({ email });

//   try {
//     const res = await axios.post('/v1/adminLogin/forgotPassword', body, config);

//     // dispatch({
//     //   type: LOGIN_SUCCESS,
//     //   payload: res.data
//     // });

//     //dispatch(loadUser());
//     return res.data;
//   } catch (err) {
//     const errors = err.response.data.errors;

//     if (errors) {
//       errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
//     }
//     // dispatch({
//     //   type: LOGIN_FAIL
//     // });
//     return errors;
//   }
// };
// // Login User
// export const changePassword = (formData) => async dispatch => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };

//   try {
//     const res = await axios.put('/v1/adminLogin', formData, config);

//     dispatch({
//       type: PASSWORD_SUCCESS,
//       payload: res.data
//     });

//     return res.data;
//   } catch (err) {
//     const errors = err.response.data.errors;

//     if (errors) {
//       errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
//     }
//     dispatch({
//       type: PASSWORD_SUCCESS_ERROR
//     });
//     return errors;
//   }
// };
// export const resetPassword = (user_id,formData) => async dispatch => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };

//   try {

//     const res = await axios.put(`/v1/adminLogin/change_password/${user_id}`, formData, config);

//     dispatch({
//       type: PASSWORD_SUCCESS,
//       payload: res.data
//     });

//     return res.data;
//   } catch (err) {
//     const errors = err.response.data.errors;

//     if (errors) {
//       errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
//     }
//     dispatch({
//       type: PASSWORD_SUCCESS_ERROR
//     });
//     return errors;
//   }
// };
// // Logout / Clear Profile
export const logout = () => dispatch => {
  Cookies.remove('loggedIn');
  Cookies.remove('userId');
  return true;
};
// // Logout / Clear Profile
// export const subadminlogout = () => dispatch => {
//   dispatch({ type: SUBADMIN_LOGOUT });
// };

export const getPageHistory = (user_ip) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${API_URL}/v1/frontend/get_history_of_page_views/${user_ip}`
    );
    return res.data;
  } catch (err) {
    // return err.response.data;
    const errors = err.response.data.errors;
    return errors;
  }
};

export const one_sidebar_ads = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      `${API_URL}/v1/frontend/one_sidebar_ads`,
      formData,
      config
    );
    //toast.success(res.data.msg, { position: "top-center" });
    return res.data;
  } catch (err) {
    // return err.response.data;
    const errors = err.response.data.errors;

    return errors;
  }
};

export const bubbles = () => async () => {
  try {
    const res = await axios.get( `${API_URL}/v1/frontend/get_discover_page_data` );
    return res.data;
  } catch (err) {
    // return err.response.data;
    const errors = err.response.data.errors;
    return errors;
  }
};

export const contactUs = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      `${API_URL}/v1/frontend/contactUs`,
      formData,
      config
    );
    toast.success(res.data.msg, { position: "top-center" });
    return res.data;
  } catch (err) {
    // return err.response.data;
    const errors = err.response.data.errors;

    return errors;
  }
};

export const getMyLikedTrends = (page) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${API_URL}/v1/frontend/get_users_like_trends/${page}`
    );
    return res.data;
  } catch (err) {
    // return err.response.data;
    const errors = err.response.data.errors;
    return errors;
  }
};

export const getMySavedTrends = (page) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${API_URL}/v1/frontend/get_users_savecollection/${page}`
    );
    return res.data;
  } catch (err) {
    // return err.response.data;
    const errors = err.response.data.errors;
    return errors;
  }
};
