import React from "react";
import Layout from "@icedesign/layout";
import Header from "./components/Header";
import Test from "./components/Test";
import styles from "./index.module.scss";
import { createStore } from "redux";
import { Provider } from "react-redux";
function reducer(state = 0, action) {
  return {
    num: 42
  };
}
let store = createStore(reducer);
export default function BaseLayout(props) {
  return (
    <Provider store={store}>
      <Layout className={styles.container}>
        <Header />
        <Test/>
        <Layout.Section>
          <Layout.Main className={styles.main}>{props.children}</Layout.Main>
        </Layout.Section>
      </Layout>
    </Provider>
  );
}
