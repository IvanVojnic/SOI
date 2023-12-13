import axios from "axios";

export const SignUpRequest = async (userData) => {
    console.log(userData)
    try {
        const response = await axios.post('/api/register', {userData});
        return response.status === 200;
    } catch (error) {
        console.error(error);
        return false
    }
}


export default SignUpRequest;