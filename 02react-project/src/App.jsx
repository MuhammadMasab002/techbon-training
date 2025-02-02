// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout.jsx";
// import Home from "./pages/Home.jsx";
// import Blog from "./pages/Blog.jsx";
// import Contact from "./pages/Contact.jsx";
// import NoPage from "./pages/NoPage.jsx";
import "./App.css";
import ClassBasedComponent from "./components/class-based-component";
import FunctionalComponent from "./components/functional-component";
import ArrowFunctionComponent from "./components/arrow-function-component";
import ProductList from "./components/products/product-list";
import PasswordGenerator from "./components/passwordGenerator";
import Users from "./components/users/users";
import ContextButton from "./components/context-concepts/button";
import ContextText from "./components/context-concepts/text";

const productData = ["product 1", "product 2", "product 3"];

function App() {

  return (
    <>
      <ClassBasedComponent />
      <FunctionalComponent />
      <ArrowFunctionComponent />
      <br />

      <ProductList productData={productData} />

      <PasswordGenerator />

      <Users />

      <ContextText />
      <ContextButton />

      {/*  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter> */}

      {/* <div className='font-bold text-xl italic bgblue-300 text-red-500 hover:text-emerald-600 rounded-full py-40 hover:bg-amber-300 transition-all duration-500 cursor-pointer shadow-2xl shadow-red-300'>Vite + React</div> */}
      {/* <p className='bg-yellow-500 hover:text-red-500 text-regal-blue font-default'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> */}
    </>
  );
}

export default App;
