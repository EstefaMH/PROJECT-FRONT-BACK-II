import { axiosInstance } from '../../config/axiosConfig.js'

export const MailService = {
    async sendRecoveryEmail(email) {
        const res = await axiosInstance.post('/mail/recovery-password', email);
        console.log("res", res)
        return res.data;
    },
    async create(data) {
        const res = await axiosInstance.post('/tasks', data);
        return res.data;
    }
};
