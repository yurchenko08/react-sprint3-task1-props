import React from "react";
import "./App.css";
import First from "./First";

export default function App() {
  const list = [
    "Animals",
    "Anime",
    "Anti-Malware",
    "Art Design",
    "Books",
    "Business",
    "Calendar",
    "Cloud Storage",
    "File Sharing",
    "Animals",
    "Continuous Integration",
    "Cryptocurrency",
  ];
  const LowerCaseList = list.map((el) => el.toLowerCase());
  return (
    <div>
      Some data:
      <First list={LowerCaseList} />
    </div>
  );
}
