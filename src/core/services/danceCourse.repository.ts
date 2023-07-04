import { ApiAnswer } from "../../features/types/api.response";
import { DanceCourse } from "../../features/models/danceCourse";

export class DanceCourseRepository {
  constructor(public url: string) {}

  async query(): Promise<DanceCourse[]> {
    const response = await fetch(this.url);

    if (!response.ok) {
      const message = `Error: ${response.status}; ${response.statusText}`;
      throw new Error(message);
    }

    const answer = (await response.json()) as ApiAnswer;
    return answer.items;
  }
}
