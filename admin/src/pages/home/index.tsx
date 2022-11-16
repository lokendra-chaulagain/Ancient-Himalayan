import React from "react";
import Header from "../../components/Header";
import { HomeContextProvider } from "../../../context/HomeContext";
import Section3iiTable from "../../components/home/Section3iiTable";
import Section3iTable from "../../components/home/Section3iTable";
import Section2iTable from "../../components/home/Section2iTable";
import Section2iiTable from "../../components/home/Section2iiTable";

function Home() {
  return (
    <HomeContextProvider>
      <Header pageTitle={"Home Page"} />
      <Section2iTable />
      <Section2iiTable />
      <Section3iTable />
      <Section3iiTable />
    </HomeContextProvider>
  );
}

export default Home;