// components/GuestbookMessage.tsx
interface GuestbookMessageProps {
  name: string;
  message: string;
}

const GuestbookMessage: React.FC<GuestbookMessageProps> = ({ name, message }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-md mb-4">
      <p className="text-lg font-semibold">{name}</p>
      <p>{message}</p>
    </div>
  );
};

export default GuestbookMessage;
