// This component is styled using inline styles as strings.
export function StyledStringComponent() {
  const backgroundColor = "yellow";
  const fontWeight = "bold";
  return (
    <>
      <div style={`background-color: ${backgroundColor};`}>
        <h1 style={`color: red; font-weight: ${fontWeight};`}>
          Hello World in red
        </h1>
        <h1 style="color: rgb(0, 255, 0); padding: 20px;">
          Hello World in green
        </h1>
        <h1 style="color: blue;">Hello World in blue</h1>
      </div>
    </>
  );
}
// This component is styled using inline styles as objects.
export function StyledObjectComponent() {
  const backgroundColor = "yellow";
  const fontWeight = "bold";
  return (
    <>
      <div style={{ "background-color": backgroundColor }}>
        <h1 style={{ color: "red", "font-weight": fontWeight }}>
          Hello World in red
        </h1>
        <h1 style={{ color: "rgb(0, 255, 0)", padding: "20px" }}>
          Hello World in green
        </h1>
        <h1 style={{ color: "blue" }}>Hello World in blue</h1>
      </div>
    </>
  );
}
