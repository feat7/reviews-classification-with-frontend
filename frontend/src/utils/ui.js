import axios from "axios";
import { API_SERVER } from "../config";
import { get } from "./common";
import { runInAction } from "mobx";

export const getReviewClassification = (store, review) => {
  const { ui } = store;
  return axios
    .get(`${API_SERVER}/?review=${review}`)
    .then(response =>
      runInAction(() => {
        ui.isLoading = true;
        ui.lastReview = review;
        ui.classification = get(["result"])(response.data);
        return true;
      })
    )
    .catch(e => false)
    .finally(() => {
      ui.isLoading = false;
    });
};
