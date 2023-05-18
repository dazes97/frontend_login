import axios, { AxiosInstance } from "axios";

interface PostInterface {
  url: string;
  data: object;
  args?: any;
}
interface GetInterface {
  url: string;
  data: object;
  args?: any;
}

class Connection {
  private static instance: AxiosInstance;
  private constructor() {
    Connection.instance = axios.create({ baseURL: "http://localhost:3000" });
  }
  public static getInstance(): AxiosInstance {
    if (!Connection.instance) {
      new Connection();
    }
    return Connection.instance;
  }
  public static async postService({ url, data, args = null }: PostInterface) {
    return await this.getInstance().post(url, data);
  }
  public static async getService({ url, data, args }: GetInterface) {
    return await this.getInstance().get(url, data);
  }
}
export default Connection;
