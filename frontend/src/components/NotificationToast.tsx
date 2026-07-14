type Props = {
  message: string;
};

const NotificationToast = ({ message }: Props) => {
  return (
    <div className="rounded-xl border border-blue-200 bg-blue-50 px-5 py-4 shadow-lg">
      <p className="font-medium text-blue-700">
        {message}
      </p>
    </div>
  );
};

export default NotificationToast;