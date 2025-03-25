import React from "react";
import {useMachine} from "@xstate/react";
import bookingMachine from "../Machines/bookingMachine";

export const BaseLayout = () => {
  const [state, send] = useMachine(bookingMachine);

  console.log("nuestra maquina", state);
  console.log("matched true", state.matches("inicial"));
  console.log("matched false", state.matches("tickets"));
  console.log("can", state.can("FINISH"));

  return <div>BaseLayout</div>;
};
