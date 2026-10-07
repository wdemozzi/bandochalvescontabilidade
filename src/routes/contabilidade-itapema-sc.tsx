import { createFileRoute } from "@tanstack/react-router";
import { CityPage } from "@/components/sections/CityPage";
import { cityBySlug } from "@/lib/site";
import { meta } from "@/lib/seo";

const city = cityBySlug("contabilidade-itapema-sc");

export const Route = createFileRoute("/contabilidade-itapema-sc")({
  head: () =>
    meta({ title: city.metaTitle, description: city.metaDescription, path: city.path }),
  component: () => <CityPage city={city} />,
});
