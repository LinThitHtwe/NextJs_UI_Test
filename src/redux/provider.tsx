"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";

type Props = {
  children: React.ReactNode;
};

const ReduxProvider = (props: Props) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default ReduxProvider;
