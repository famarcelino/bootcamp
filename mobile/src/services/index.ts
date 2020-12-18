import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://192.168.11.209:8080'
});

export const TOKEN = "Basic ZHNjYXRhbG9nOmRzY2F0YWxvZzEyMw==";