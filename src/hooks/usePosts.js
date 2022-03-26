import {useState, useEffect, useContext} from 'react';
import useFetch from './useFetch';

export const usePosts = () => {
  const {data, error, isPending} = useFetch('/posts');
  useEffect(() => {

  }, [data])
}