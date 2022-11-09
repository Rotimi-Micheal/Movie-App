import { TIME_OUT_SEC } from "./cofig.js";
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSOn = async function (url) {
  try {
    const fetchPromise = fetch(url)
    const res = await Promise.race([fetchPromise,timeout(TIME_OUT_SEC)]); ;
    const data = await res.json();

    if (!res.ok) throw `Invalid id (${res.status})`;
    return data;
  } catch (err) {
    throw err;
  }
};
