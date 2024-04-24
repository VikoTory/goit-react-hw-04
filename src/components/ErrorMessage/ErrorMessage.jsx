const ErrorMessage = ({message = "Oops, something went wrong. Please reload the page!"}) => {
  return (
    <p>{message}</p>
  )
}

export default ErrorMessage

