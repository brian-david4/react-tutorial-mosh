import apiClient from "./api-client";

interface Entity {
  id: number;
}

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  //<t> is a placeholder for a generic type argument
  getAll<T>() {
    const controller = new AbortController();
    //request is the data returned by the api.
    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });
    return {
      request,
      cancel: () => controller.abort(),
    };
  }

  delete(id: number) {
    return apiClient.delete(this.endpoint + "/" + id);
  }

  add<T>(entity: T) {
    return apiClient.post(this.endpoint + "/" + entity);
  }

  update<T extends Entity>(entity: T) {
    return apiClient.patch(this.endpoint + "/" + entity.id, entity);
  }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;
