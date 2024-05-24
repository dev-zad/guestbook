import { Message } from '@/lib/utilsInbox';
import { getServerSideProps } from '@/lib/getMessageServerSideProps';
import "tailwindcss/tailwind.css";
import { Button } from '@/components/ui/button';

type MessagePageProps = {
    message: Message;
};

export { getServerSideProps };

const MessagePage = ({ message }: MessagePageProps) => {
    if (!message) {
        return <div>Loading...</div>;
    }

    const handleBackToInbox = () => {
        window.location.href = `/inbox-page/`;
    }

    return (
        <div className="px-8 py-6 bg-white shadow-md rounded-lg">
            <div className='px-20 py-20 border rounded-md'>
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Message</h1>
                <p className="text-gray-600 mb-2">Email: {message.email}</p>
                <p className="text-gray-600 mb-2">Username: {message.username}</p>
                <p className="text-gray-600 mb-2">Message: {message.message}</p>
            </div>
            <Button onClick={() => handleBackToInbox()}>Back To Inbox</Button>
        </div>
    );
};

export default MessagePage;