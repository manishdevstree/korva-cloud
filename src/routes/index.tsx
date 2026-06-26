import { createFileRoute } from "@tanstack/react-router";
import { KorvaLanding } from "@/components/korva/KorvaLanding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KORVA Workforce Cloud — Discovery + Prototype MVP" },
      { name: "description", content: "Transforming Learning Into Workforce Opportunities. Discovery and prototype MVP of the KORVA Workforce Cloud platform." },
      { property: "og:title", content: "KORVA Workforce Cloud" },
      { property: "og:description", content: "Transforming Learning Into Workforce Opportunities." },
    ],
  }),
  component: Index,
});

function Index() {
  return <KorvaLanding />;
}
