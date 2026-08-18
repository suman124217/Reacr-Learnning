function withLoading(WrappedComponent) {
  return function EnhancedComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <h3>Loading...</h3>;
    }
    return <WrappedComponent {...props} />;
  };
}
 export default withLoading;