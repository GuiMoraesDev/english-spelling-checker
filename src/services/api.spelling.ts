import { AxiosResponse, CancelToken } from "axios";

import api from "./api";

export interface GetSpellingResponse {
  id: string;
  "audio-url": string;
  "letter-pool": string[];
}

const getSpelling = async (
  cancelToken: CancelToken
): Promise<AxiosResponse<GetSpellingResponse>> => {
  const response = await api.get("/spelling", {
    cancelToken,
  });

  return response;
};

export interface PostSpellingParams {
  id: string;
  answer: string;
}

export interface PostSpellingResponse {
  correct: boolean;
  "correct-answer": string;
}

const postSpelling = async (
  { id, answer }: PostSpellingParams,
  cancelToken: CancelToken
): Promise<AxiosResponse<PostSpellingResponse>> => {
  const response = await api.post(
    "/spelling",
    {
      id,
      answer,
    },
    {
      cancelToken,
    }
  );

  return response;
};

export { getSpelling, postSpelling };
