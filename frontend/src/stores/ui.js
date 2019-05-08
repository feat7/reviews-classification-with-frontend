import { observable } from "mobx";
import { persist } from "mobx-persist";

class UIStore {
  @persist
  @observable
  sometingFetched = false;

  @persist
  @observable
  hello = "hello!";

  @observable
  fetchedFromPersist = false;

  @observable
  classification = "";

  @observable
  lastReview = "Hello World.";

  @observable
  isLoading = false;
}

export default UIStore;
