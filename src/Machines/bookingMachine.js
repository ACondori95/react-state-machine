import {createMachine} from "xstate";

const bookingMachine = createMachine(
  {
    context: {},
    id: "buy plane tickets",
    initial: "inicial",
    states: {
      inicial: {
        on: {
          START: {
            target: "search",
            actions: "imprimirInicio",
          },
        },
      },
      search: {
        entry: "imprimirEntrada",
        exit: "imprimirSalida",
        on: {
          CONTINUE: {
            target: "passengers",
          },
          CANCEL: {
            target: "inicial",
          },
        },
      },
      passengers: {
        on: {
          DONE: {
            target: "tickets",
          },
          CANCEL: {
            target: "inicial",
          },
        },
      },
      tickets: {
        on: {
          FINISH: {
            target: "inicial",
          },
        },
      },
    },
  },
  {
    actions: {
      imprimirInicio: () => console.log("Imprimir inicio"),
      imprimirEntrada: () => console.log("Imprimir entrada al search"),
      imprimirSalida: () => console.log("Imprimir salida del search"),
    },
  }
);

export default bookingMachine;
