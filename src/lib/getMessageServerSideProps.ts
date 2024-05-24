import { GetServerSideProps } from 'next';
import { getMessage } from '@/lib/utilsInbox';

export const getServerSideProps: GetServerSideProps = async (context) => {
    if (!context.params) {
        return {
            notFound: true,
        };
    }

    const { id } = context.params;
    const message = await getMessage(Number(id));

    return {
        props: {
            message,
        },
    };
};
