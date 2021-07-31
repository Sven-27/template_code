import { useInterval } from "data/useInterval";

useInterval(async()=> {
  console.log("checking if call is done")
  const res = await ("some api call")
  // setWhatever(...)
}, 2000)