import { AxiosResponse, CancelToken } from 'axios';

import api from './api';

export interface GetSpellingResponse {
  id: string;
  audioUrl: string;
  letterPool: string[];
}

const getSpelling = async (
  cancelToken: CancelToken
): Promise<AxiosResponse<GetSpellingResponse>> => {
  const response = await api.get('/spelling', {
    cancelToken,
  });

  return response;
};

export { getSpelling };