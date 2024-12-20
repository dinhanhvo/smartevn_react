import sendRequest from './BaseService';

// export const getAllUsers = (callback: (data: any, error: any) => void) => {
//     sendRequest({
//         url: '/users?page=1&size=10',
//         method: 'GET',
//     })
//         .then((data) => callback(data, null)) // Truyền dữ liệu vào callback nếu thành công
//         .catch((error) => callback(null, error)); // Truyền lỗi vào callback nếu thất bại
// };

export const getAllUsers = (
    onSuccess: (data: any) => void,
    onError: (error: string) => void
): void => {
    const config = {
        url: '/users?page=1&size=10',
        method: 'GET'
    };

    sendRequest(config, onSuccess, onError); // Gọi hàm sendRequest với các callback
};
