export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export function pageview(url: URL) {
  if (!GA_ID) return;

  window.gtag("config", GA_ID, {
    page_path: url,
  });
}

type eventProps = {
  action: string;
  category: string;
  label: string;
  value: number;
};

export function event({ action, category, label, value }: eventProps) {
  if (!GA_ID) return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}
