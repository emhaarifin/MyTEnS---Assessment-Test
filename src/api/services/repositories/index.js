import axiosInstance from 'api/axios';

const getRepositories = async () => {
  return axiosInstance.get('/emhaarifin/repos?page=1');
};

export default getRepositories;
