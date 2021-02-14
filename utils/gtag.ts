export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export function pageview(url: URL) {
  window.gtag("config", GA_ID, {
    page_path: url,
  });
}

type gaEventProps = {
  action: string;
  category: string;
  label: string;
  value: number;
};

export function gaEvent({ action, category, label, value }: gaEventProps) {
  if (!GA_ID) {
    return;
  }

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}
