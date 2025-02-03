interface ErrorMessageProps {
    message: string;
  }
  
  const ErrorMessage = ({ message }: ErrorMessageProps) => (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        <strong>Error:</strong> {message}
      </div>
    </div>
  );
  
  export default ErrorMessage;