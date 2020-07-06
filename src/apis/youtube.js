import axios from 'axios';
const KEY='AIzaSyCm6rXB49ZEZY1dwDwmfn2zuG7kB7xOtqo';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        maxResults:'5',
        Key:KEY
    }
})