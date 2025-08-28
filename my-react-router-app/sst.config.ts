export default $config({
  app(input) {
    return {
      name: "my-react-router-app",
      home: "aws",
      providers: {
        aws: {
          profile: input.stage === "production" ? "nazhonem-production" : "nazhonem-dev"
        }
      }
    };
  },
  async run() {
    // Your resources
  }
});