import { get } from "./apiCaller";

const messageApi = {
  get: (conversationId) => {
    const endpoint = `/api/messages/${conversationId}`;
    return get(
      endpoint,
      {},
      {
        conversationId,
      }
    );
  },
};

export default messageApi;
