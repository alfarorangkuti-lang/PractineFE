'use server'

import axiosClient from "./axios";

export const fetcher = async (url:any) =>
  await axiosClient.get(url).then((res) => res.data);
