import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer ceeCUZdS3LrL19mu_q8SPSJKczEDR95xV2RCrBeUoqMMnSZP8F1ufVWe24hfHB5DlluhkrY52_XzXCEnno5ffNSxHMYm66uZp9CVfaj5lyvEiootQ3pFhPThvtJ9YHYx',
  },
});
