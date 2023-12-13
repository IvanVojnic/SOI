import axios from "axios";

export const SignUpRequest = async ({userData}) => {
    const handleRegistration = async () => {
        try {
            const response = await axios.post('/api/register', {userData});
            if(response.status === 200) {
                return true
            } else {
                return false
            }
        } catch (error) {
            console.error(error);
            return false
        }
    };
}


export default SignUpRequest;