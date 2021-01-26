import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { 
        Authorization: 'Client-ID s3kDMG-NTkXV9_UAh4xIk_8K3aUywGfbJV0RiecW-_o'
    }
});