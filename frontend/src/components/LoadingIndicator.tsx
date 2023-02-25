type LoadingIndicatorProps = {
  message?: string;
};
export function LoadingIndicator({
  message = "Loading ...",
}: LoadingIndicatorProps) {
  return <p className="loading_indicator">{message}</p>;
}
