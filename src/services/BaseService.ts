import axios, { AxiosRequestConfig } from 'axios';

// Cấu hình axios instance
const axiosInstance = axios.create({
    // baseURL: 'http://localhost:8089', // Base URL
    baseURL: 'http://103.77.160.98:8088/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Hàm gửi yêu cầu API với callback
const sendRequest = <T>(
    config: AxiosRequestConfig,
    onSuccess: (data: T) => void,
    onError: (error: string) => void
): void => {
    axiosInstance
        .request(config)
        .then((response) => {
            onSuccess(response.data); // Gọi callback thành công
        })
        .catch((error) => {
            const message = error.response?.data?.message || 'Something went wrong';
            onError(message); // Gọi callback khi có lỗi
        });
};

export default sendRequest;
