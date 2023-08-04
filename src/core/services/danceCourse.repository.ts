import { ApiAnswer } from "../../features/types/api.response";
import { DanceCourse } from "../../features/models/danceCourse";

export class DanceCourseRepository {
  constructor(public url: string, public token: string) {
    this.url += "danceCourse";
  }

  async query(url = this.url, level?: string): Promise<ApiAnswer> {
    let urlToSend = "";
    !level ? (urlToSend = url) : (urlToSend = `${url}danceCourse?${level}`)

    const response = await fetch(urlToSend);

    if (!response.ok) {
      const message = `Error: ${response.status}; ${response.statusText}`;
      throw new Error(message);
    }

    const answer = (await response.json()) as ApiAnswer;
    return answer;
  }

  async create(item: FormData): Promise<DanceCourse> {
    const response = await fetch(this.url + "/", {
      method: "POST",
      body: item,
      headers: {
        Authorization: "Bearer " + this.token
    },
  });

    return response.json() as Promise<DanceCourse>;
  }

  async update(id: DanceCourse["id"], item: Partial<DanceCourse>): Promise<DanceCourse> {
    const response = await fetch(this.url + "/" + id, {
      method: "PATCH",
      body: JSON.stringify(item),
      headers: {
        Authorization: "Bearer " + this.token,
        "Content-Type": "application/json",
      },
    });

    const updateDanceCourse = await response.json();
    return updateDanceCourse as DanceCourse;
  }

  async delete(id: DanceCourse["id"]): Promise<boolean> {
    const response = await fetch(this.url + "/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    });

    return response.ok;
  }
}
