function MyComponent() {
  return (
    <div>
      <h2>
        Component with environment variable used{" "}
        {import.meta.env.VITE_VARIABLE_NAME}
      </h2>
    </div>
  );
}

export default MyComponent;
