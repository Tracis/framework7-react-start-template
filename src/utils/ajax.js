import ajax from "ajax";

function checkSucces(result) {
  if (result && result.res_code !== 1) {
    const errMessage = Array.isArray(result.res_msg)
      ? result.res_msg.join("<br/>")
      : typeof result.res_msg === "string"
      ? result.res_msg
      : "";
    throw new Error(errMessage);
  }
}

export default function(params) {
  return ajax && ajax({
    ...params,
    checkSucces,
    alwaysShowErrorAlert: true,
    pathPrefix: "/api/v1/",
  });
}
