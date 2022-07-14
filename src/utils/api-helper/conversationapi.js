import { get, post } from "./apiCaller";

const conversationApi = {
  get: (userId) => {
    const endpoint = `/api/conversations/${userId}`;
    return get(endpoint);
  },
  post: (senderId, receiverId) => {
    const endpoint = "/api/conversations";
    return post(endpoint, {
      senderId,
      receiverId,
    });
  },
};

export default conversationApi;
