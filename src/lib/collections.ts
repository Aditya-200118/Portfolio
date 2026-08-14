import type { CollectionEntry } from 'astro:content';

export function sortProjects(entries: CollectionEntry<'projects'>[]) {
  return [...entries].sort((left, right) => left.data.order - right.data.order);
}

export function sortBlog(entries: CollectionEntry<'blog'>[]) {
  return [...entries].sort(
    (left, right) => right.data.pubDate.getTime() - left.data.pubDate.getTime()
  );
}

