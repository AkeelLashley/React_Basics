import "./App.css";
// import MyFunctionalComponent from "./components/2_ Components/MyFunctionalComponent";
import GreetUser from "./components/4_ Props/GreetUser";
import NameInput from "./components/5_ State/NameInput";
// import NameInput from "./components/5: State/NameInput";
// import StateProps from "./components/5_ State/StateProps";
import MyStyledComponent from "./components/styledComponents/MyStyledComponents";
// import MyArrowFunctionalComponent from "./components/FuncsVSClass/ArrowFunctionComponent";
// import TypeSafety from "./components/typesafety";
import Component from "./components/1_ WhyTypescript/Component";

function App() {
  function getName() {
    return "Akeel";
  }

  return (
    <>
      {/* <TypeSafety /> */}

      {/* <Component
        title={"Welcome"}
        description={"Hello and welcome to my app"}
        getName={getName}
      /> */}
      {/* <MyArrowFunctionalComponent name="Akeel"/> */}
      {/* <GreetUser name={"Akeel"} age={24} isMale={false} /> */}
      <NameInput />
      {/* <StateProps/> */}
      <MyStyledComponent/>
      {/* <MyFunctionalComponent name={"Akeel"} /> */}
      {/* <NameInput /> */}
    </>
  );
}

export default App;
