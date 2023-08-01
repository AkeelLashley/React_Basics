const users = [
  { name: "Akeel", school: { name: "My School", location: "Canada" } },
  { name: "Jake", school: { name: "Different School", location: "USA" } },
  // STEP 1: TYPE-SAFETY:
  // WILL HELP AVOID: TRYING TO ACCESS A FIELD INSIDE OF AN OBJECT THAT IS NULL
  { name: "Jessica", school: null },
];

function TypeSafety() {
  return (
    <>
      {users.map((user) => {
        return (
          <div>
            <h1>Name: {user.name}</h1>
            <h1>
              {/* STEP 2:JAVASCRIPT WILL ALLOW YOU TO ACCESS THE SCHOOL NAME */}
              {/* School: {user.school.name} */}
              {/* THIS IS HOW IT WOULD BE DONE IN TYPESCRIPT TO AVOID TRYING TO RENDER NULL THIS IS CALLED CONDITIONAL RENDERING  */}
              School: {user.school ? user.school.name : "No School Information"}
              
            </h1>
          </div>
        );
      })}
    </>
  );
}

export default TypeSafety;
