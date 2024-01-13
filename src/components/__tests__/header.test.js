import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import {StaticRouter}from "react-router-dom/server";
import store from "../../utils/store";
test("Logo should load on rendering header", () => {

  const header = render(
    <StaticRouter>
    <Provider store={store}>
      <Header />
    </Provider>
    </StaticRouter>
  );
  console.log(header);
}); 
