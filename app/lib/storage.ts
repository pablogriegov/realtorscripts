import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export type Script = {
  id: string;
  title: string;
  body: string;
  createdAt: number;
};

export type Project = {
  id: string;
  name: string;
  desc?: string;
  scripts: Script[];
  createdAt: number;
};

const KEY = "realtorscripts:projects";

export async function getProjects(): Promise<Project[]> {
  const data = await redis.get<Project[]>(KEY);
  return data || [];
}

export async function saveProjects(projects: Project[]): Promise<void> {
  await redis.set(KEY, projects);
}
