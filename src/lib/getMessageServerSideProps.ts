import { GetServerSideProps } from 'next';
import { getMessage } from '@/lib/utilsInbox';

export const getServerSideProps: GetServerSideProps = async (context) => {
    if (!context.params) {
        return {
            notFound: true,
        };
    }

    const { id } = context.params;

    try {
        const message = await getMessage(Number(id));

        return {
            props: {
                message,
            },
        };
    } catch (error) {
        console.error(`Error fetching message with id ${id}:`, error);

        return {
            notFound: true,
        };
    }
};