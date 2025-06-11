import { useEffect, useState } from "react";

export default function useInView({ id, threshold }: { id: string; threshold: number }) {
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const target = document.querySelector(id) as Element;

    if (target) {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;

          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        },
        {
          threshold: threshold,
        }
      );
      observer.observe(target);
    }
  }, [id, threshold]);

  return { inView };
}
