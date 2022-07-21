import { useContext } from "react";
import StoreContext from "./store";

// made alias to save constant importing of storecontext and usecontext
const usePostContext = () => useContext(StoreContext);

export default usePostContext;
