import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import ProductCard from "./Components/PropertyCard";
import AddProperty from "./Components/AddProperty";
import ContractCard from "./Components/ContractCard";
import AddContract from "./Components/AddContract";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="property" element={<ProductCard />} />
            <Route path="add-property" element={<AddProperty />} />
            <Route path="contract" element={<ContractCard />} />
            <Route path="add-contract" element={<AddContract />} />
            {/* <Route path="/addcontract" element={<AddContract />} /> */}
            {/* <Route path="/contract" element={<Contract />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
