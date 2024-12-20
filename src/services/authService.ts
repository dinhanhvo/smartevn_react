import sendRequest from './BaseService';

export const login = (
    username: string,
    password: string,
    onSuccess: (data: any) => void,
    onError: (error: string) => void
): void => {
    const config = {
        method: 'post',
        url: '/auth/signin', // Endpoint API
        data: { username, password },
    };

    sendRequest(config, onSuccess, onError); // Gọi hàm sendRequest với các callback
};
